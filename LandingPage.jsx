import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes, Link, useHistory } from 'react-router-dom';
import './LandingPage.css';
import stlImage from '../assets/stl.png';

const themes = {
  neosoul: [
    'rgb(117, 161, 191)',
    'rgb(137, 201, 184)',
    'rgb(189, 222, 169)',
    'rgb(237, 236, 182)',
    'rgb(237, 180, 180)'
  ],
  forest: [
    'rgb(142, 168, 149)',
    'rgb(207, 198, 176)',
    'rgb(232, 218, 186)',
    'rgb(240, 236, 216)',
    'rgb(211, 220, 230)'
  ],
  retro: [
    'rgb(95, 169, 180)',
    'rgb(180, 214, 197)',
    'rgb(252, 236, 202)',
    'rgb(168, 81, 93)',
    'rgb(243, 184, 95)'
  ]
};

const LandingPage = () => {
  const [selectedTheme, setSelectedTheme] = useState('forest');
  const [colors, setColors] = useState(themes['forest']);
  const history = useHistory();
  

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
    setColors(themes[theme]);
  };

  const handleEnterClick = () => {
    // Pass the colors array and selected theme to the next page for use
    history.push('/home', { colors: colors, selectedTheme: selectedTheme});
    console.log(colors)
  };

  const backgroundStyle = {
    background: `repeating-linear-gradient(to right, ${colors.join(', ')})`,
    height: '100vh',
    width: '100%',
    backgroundAttachment: 'fixed',
    zIndex: 1,
  };

  const enterButtonStyle = {
    backgroundColor: colors[4],
    boxShadow: `4px 4px 0 ${colors[0]}`,
    color: 'black',
  };

  return (
    <div className="landing-page" style={backgroundStyle}>
      <div className="overlay">
      
        <h1>Rohan Keenoy</h1>
        <h2>Computer Science and Data Science student</h2>
        <p>Select a color theme:</p>
        <div className="button-container">
          <button
            className={selectedTheme === 'retro' ? 'active' : ''}
            onClick={() => handleThemeSelect('retro')}
          >
            <div className="color-container">
              {themes['retro']
                .slice()
                .reverse()
                .map((color, index) => (
                  <div
                    key={index}
                    className={`color-square ${
                      index === 2 ? 'third-element' : ''
                    }`}
                    style={{
                      backgroundColor: color,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.backgroundColor = color;
                    }}
                  ></div>
                ))}
            </div>
            Retro
          </button>
          <button
            className={selectedTheme === 'forest' ? 'active' : ''}
            onClick={() => handleThemeSelect('forest')}
          >
            <div className="color-container">
              {themes['forest']
                .slice()
                .reverse()
                .map((color, index) => (
                  <div
                    key={index}
                    className={`color-square ${
                      index === themes['forest'].length - 1 ? 'third-element' : ''
                    }`}
                    style={{
                      backgroundColor: color,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.backgroundColor = color;
                    }}
                  ></div>
                ))}
            </div>
            Forest
          </button>
          <button
            className={selectedTheme === 'neosoul' ? 'active' : ''}
            onClick={() => handleThemeSelect('neosoul')}
          >
            <div className="color-container">
              {themes['neosoul']
                .slice()
                .reverse()
                .map((color, index) => (
                  <div
                    key={index}
                    className={`color-square ${
                      index === 0 ? 'third-element' : ''
                    }`}
                    style={{
                      backgroundColor: color,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.backgroundColor = color;
                    }}
                  ></div>
                ))}
            </div>
            Neosoul
          </button>
        </div>
        <div className="enter-container">
          <button
            className="button-74"
            style={enterButtonStyle}
            onClick={handleEnterClick}
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
