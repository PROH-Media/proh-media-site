import React from 'react';
import ReactDOM from 'react-dom/client';
import BrandKit from './BrandKit';
import '../src/index.css';
import '../v2/v2.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrandKit />
  </React.StrictMode>,
);
