import React from 'react';
import Menu from './Menu';
import Canvas from './Canvas';
import Grid from './Grid';
import Buttons from './Buttons';

const Home = () => {
  return (
    <div className='home-container'>
      <div>
        <Menu />
        <Grid />
        <div className='canvas-container'>
          <Canvas />
        </div>
      </div>
      <div>
        <Buttons />
      </div>
    </div>
  );
};

export default Home;
