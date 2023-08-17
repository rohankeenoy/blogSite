import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import './Theme';

const Navbar = () => {
  const theme = useTheme();

  const containerStyle = {
    border: `2px solid ${theme.palette.primary.main}`,
    borderTop: 'none',
    top: 0,
    zIndex: 99,
    width: '800px',
    boxShadow: `
      2px 2px 0 0 ${theme.palette.secondary.main},
      -4px 4px 0 0 ${theme.palette.accent1.main},
      -6px 6px 0 0 ${theme.palette.secondary.main},
      -8px 8px 0 0 ${theme.palette.accent3.main}
    `,
  };

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    zIndex: 99,
  };

  const nameStyle = {
    fontSize: '50px',
    fontFamily: 'sans-serif',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    marginRight: '150px', // Add margin to align "RK" to the left
  };

  const linkItemStyle = {
    textDecoration: 'none',
    fontSize: '20px',
    transition: 'color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    fontFamily: 'sans-serif',
    padding: '5px 10px',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    background: 'none',
    backgroundImage: 'none',
    backgroundSize: '200% 100%',
    backgroundPosition: '0 0',
    border: `2px solid ${theme.palette.primary.main}`,
  };

  const themeButtonStyle = {
    marginLeft: '10px',
    fontSize: '18px',
    fontFamily: 'sans-serif',
  };

  const linksStyle = {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  };

  const buttonStyles = {
    color: theme.palette.primary.main,
    margin: "30px 10px 10px 10px",
    boxShadow: `
    2px -2px 0 0 ${theme.palette.secondary.main},
    4px -4px 0 0 ${theme.palette.accent1.main},
    6px -6px 0 0 ${theme.palette.secondary.main},
    8px -8px 0 0 ${theme.palette.accent3.main}
  `,
    background: 'none',
    backgroundSize: '200% 100%',
    backgroundPosition: '0 0',
    transition: 'color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background 0.3s ease-in-out',
  };

  const hoverStyles = {
    boxShadow: `0 0 10px ${theme.palette.secondary.main}`,
    background: `linear-gradient(45deg, ${theme.palette.accent1.main}, ${theme.palette.accent2.main},${theme.palette.accent3.main})`,
    backgroundPosition: '200% 0',
  };

  const resetStyles = {
    color: buttonStyles.color,
    boxShadow: buttonStyles.boxShadow,
    background: buttonStyles.background,
    backgroundPosition: buttonStyles.backgroundPosition,
  };

  const handleMouseEnter = (e) => {
    e.target.style.cssText += Object.keys(hoverStyles).map((k) => `${k}:${hoverStyles[k]};`).join('');
  };

  const handleMouseLeave = (e) => {
    e.target.style.cssText += Object.keys(resetStyles).map((k) => `${k}:${resetStyles[k]};`).join('');
  };

  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        <div style={linksStyle}>
          {/* Apply inline styles using the buttonStyles, hoverStyles, and resetStyles objects */}
          <Link
           to="/"
           style={nameStyle}>
            RK
          </Link>
          <Link
            to="/about"
            style={{ ...linkItemStyle, ...buttonStyles }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            About
          </Link>
          <Link
            to="/skills"
            style={{ ...linkItemStyle, ...buttonStyles }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            style={{ ...linkItemStyle, ...buttonStyles }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Projects
          </Link>
          <Link
            to="/blog"
            style={{ ...linkItemStyle, ...buttonStyles }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            style={{ ...linkItemStyle, ...buttonStyles }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
