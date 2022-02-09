import React from 'react';
import ReactDOM from 'react-dom';
import {Routes} from "./infra/http/Routes";
import './presentation/styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
