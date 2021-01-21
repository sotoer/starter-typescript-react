import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';

const Root = () => {
  return (
    <React.Fragment>
      <App />
    </React.Fragment>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
