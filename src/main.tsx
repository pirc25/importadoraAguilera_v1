import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * PUNTO DE ENTRADA DE LA APLICACIÓN
 * 
 * Renderiza el componente principal
 */

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
