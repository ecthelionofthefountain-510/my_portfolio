import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ⬅️ Lägg till detta!
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ⬅️ Lägg till detta! */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);