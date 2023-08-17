import React from 'react';
import { useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Theme = ({ selectedTheme, children }) => {
  const location = useLocation();
  const { colors } = location.state;

  let themeColors;
  let backgroundStyle;

  if (selectedTheme === 'forest') {
    themeColors = [
      'rgb(142, 168, 149)',
      'rgb(207, 198, 176)',
      'rgb(232, 218, 186)',
      'rgb(240, 236, 216)',
      'rgb(211, 220, 230)',
    ];

    const forestTheme = createTheme({
      palette: {
        primary: {
          main: themeColors[0],
        },
        secondary: {
          main: themeColors[2],
        },
        accent1: {
          main: themeColors[1],
        },
        accent2: {
          main: themeColors[3],
        },
        accent3: {
          main: themeColors[4],
        },
      },
    });
     backgroundStyle = {
      background: themeColors[2], // Default background color for unknown themes
      color: forestTheme.palette.primary.main,
      backgroundAttachment: 'fixed',
      zIndex: 1,
  
    };

    return (
      <ThemeProvider theme={forestTheme}>
        <div className="home-page"style ={backgroundStyle}>
          <div className="theme-container">
            {children}
          </div>
        </div>
      </ThemeProvider>
    );
  } else if (selectedTheme === 'retro') {
    themeColors = [
      'rgb(95, 169, 180)',
      'rgb(180, 214, 197)',
      'rgb(252, 236, 202)',
      'rgb(168, 81, 93)',
      'rgb(243, 184, 95)',
    ];

    const retroTheme = createTheme({
      palette: {
        primary: {
          main: themeColors[3],
        },
        secondary: {
          main: themeColors[2],
        },
        accent1: {
          main: themeColors[0],
        },
        accent2: {
          main: themeColors[1],
        },
        accent3: {
          main: themeColors[4],
        },
      },
    });
    const backgroundStyle = {
      background: themeColors[2], // Default background color for unknown themes
      color:retroTheme.palette.primary.main,
    
      backgroundAttachment: 'fixed',
      zIndex: 1,
  
    };

    return (
      <ThemeProvider theme={retroTheme}>
        <div className="home-page"style = {backgroundStyle}>
          <div className="theme-container">
            {children}
          </div>
        </div>
      </ThemeProvider>
    );
  } else if (selectedTheme === 'neosoul') {
    themeColors = [
      'rgb(117, 161, 191)',
      'rgb(137, 201, 184)',
      'rgb(189, 222, 169)',
      'rgb(237, 236, 182)',
      'rgb(237, 180, 180)',
    ];

    const neosoulTheme = createTheme({
      palette: {
        primary: {
          main: themeColors[0],
        },
        secondary: {
          main: themeColors[3],
        },
        accent1: {
          main: themeColors[1],
        },
        accent2: {
          main: themeColors[2],
        },
        accent3: {
          main: themeColors[4],
        },
      },
    });
    const backgroundStyle = {
      background: themeColors[3], // Default background color for unknown themes
      color:neosoulTheme.palette.primary.main,
      
      backgroundAttachment: 'fixed',
      zIndex: 1,
  
    };

    return (
      <ThemeProvider theme={neosoulTheme}>
        <div className="home-page"style={backgroundStyle}>
          <div className="theme-container">
            {children}
          </div>
        </div>
      </ThemeProvider>
    );
  }

  // Default theme if none of the specified themes match
  const defaultTheme = createTheme({
    // Define your default theme here
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="home-page">
        <div className="theme-container">
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Theme;
