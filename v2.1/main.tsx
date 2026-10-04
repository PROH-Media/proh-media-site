import React from 'react';
import ReactDOM from 'react-dom/client';
import AppV21 from './AppV21';
import '../src/index.css';
import '../v2/v2.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppV21 />
  </React.StrictMode>,
);
