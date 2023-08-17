import React from 'react';
import { useTheme } from '@mui/material/styles';

const BottomRight = () => {
  const theme = useTheme();
  const bottom = {
    border: `2px solid ${theme.palette.primary.main}`,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin:'10px',
    boxShadow: `
      0 0 3px 2px ${theme.palette.secondary.main},
      0 0 3px 4px ${theme.palette.accent1.main},
      0 0 3px 6px  ${theme.palette.secondary.main},
      0 0 3px 8px ${theme.palette.accent3.main}
    `,
  };

  return <div style={bottom}> I DO WHAT I LOVE AND LOVE WHAT I DO! </div>;
};

export default BottomRight;
