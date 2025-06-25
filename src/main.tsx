import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assumes App.tsx is moved to src/App.tsx

// If you later set up Tailwind CSS via Vite's build process,
// you would create an src/index.css file with Tailwind directives
// and import it here, like: import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to. Make sure there's a <div id='root'></div> in your index.html.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
