import React, { useEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import '../assets/circleStyle.css';

const RotateText = () => {
  const textRef = useRef(null);
  const location = useLocation();
  const { colors, selectedTheme } = location.state;

  // Define a variable to hold the color based on the selected theme
  let charColor;
  let accent1;
  let accent2;

  if (selectedTheme === 'forest') {
    charColor = colors[0];
    accent1 = colors[4]
    accent2 = colors[3]
  } else if (selectedTheme === 'retro') {
    charColor = colors[3];
    accent1 = colors[0]
    accent2 = colors[4]
  } else if (selectedTheme === 'neosoul') {
    charColor = colors[0];
    accent1 = colors[1]
    accent2 = colors[2]
  }

  useEffect(() => {
    const textElement = textRef.current;
    const text = textElement.innerText;
    textElement.innerText = '';

    for (let i = 0; i < text.length; i++) {
      const charContainer = document.createElement('span');
      charContainer.className = `char char-${i}`;
      charContainer.textContent = text[i];
      charContainer.style.setProperty('--char', i);
      charContainer.style.color = charColor; // Apply the color dynamically
      charContainer.style.borderColor = accent1;
      charContainer.style.backgroundColor = accent2;
      textElement.appendChild(charContainer);
    }
  }, [charColor]);

  return (
    <div className="container">
      <div className="circle" ref={textRef}>
        Rohan-Keenoy-
      </div>
    </div>
  );
};

export default RotateText;
