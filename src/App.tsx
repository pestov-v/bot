import React, { useEffect } from 'react';
import './App.css';
// @ts-ignore
const tg = window.Telegram.WebApp;

const App = () => {
  const onClick = () => {
    tg.close();
  };

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className='App'>
      <h2>Hello</h2>
      <button onClick={onClick}>Close</button>
    </div>
  );
};

export default App;
