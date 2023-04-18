import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Box from './Box';
import Text from './Text';
import Button from './Button';

const MyAwesomeComponent = () => {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <Box size="large">
      <Text size="large" color="blue">
        Hello World
      </Text>
      <Button color="green" onClick={handleButtonClick}>
        Click Me
      </Button>
    </Box>
  );
};

const App = () => {
  return (
    <div>
      <Text size="large" color="red">
        My Component Library
      </Text>
      {}
      <MyAwesomeComponent />
    </div>
  );
};

export default App;
//test