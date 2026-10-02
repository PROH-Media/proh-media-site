import React from 'react';
import ReactDOM from 'react-dom/client';
import AppV2 from './AppV2';
import '../src/index.css';
import './v2.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppV2 />
  </React.StrictMode>,
);
