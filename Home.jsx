import React from 'react';
import { useLocation } from 'react-router-dom';
import RotateText from '../components/RotateText';
import Theme from '../components/Theme';
import Navbar from '../components/Navbar';
import Grid from '@material-ui/core/Grid';
import BottomRight from '../components/bottomRight.jsx';
import Portrait from '../components/Portrait';

const Home = () => {
  const location = useLocation();
  const { selectedTheme } = location.state;

  return (
    <Theme selectedTheme={selectedTheme}>
      <div className="home-page">
        <div style={{ height: '100vh' }}>
          <Navbar />
          {/* First Section */}
          <Grid container spacing={0.1} alignItems="center">
            <Grid item xs={1}>
              {/* First icon holder */}
              <div className="icon-holder" style={{ marginLeft: '20px' }}>
                blah
              </div>
              {/* Second icon holder */}
              <div className="icon-holder" style={{ marginLeft: '20px' }}>
                blah
              </div>
              {/* Third icon holder */}
              <div className="icon-holder" style={{ marginLeft: '20px' }}>
                blah
              </div>
            </Grid>
            <Grid item xs={11}>
              {/* Add the Three.js canvas */}
              <RotateText />
              <BottomRight />
            </Grid>
          </Grid>
        </div>

        <div style={{ height: '100vh' }}>
          <Grid container spacing={0.1} alignItems="center">
            <Grid item xs={6} style={{ position: 'relative' }}>
              {/* Content for the second section */}
              <div className="section-content" style={{ textAlign: 'center', paddingLeft: '20px' }}>
                <div>
                
                  <Portrait/>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              {/* More content for the second section */}
              <div className="section-content">
                More Second Section Content 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui aperiam esse officia. Quam placeat voluptatibus quibusdam dolorum quisquam vel illum nemo optio, hic fuga molestias, vero ullam obcaecati nulla!
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Theme>
  );
};

export default Home;
