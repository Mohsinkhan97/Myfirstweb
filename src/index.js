import React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import
'mdbreact/dist/css/mdb.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);