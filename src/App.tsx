import { useState } from 'react';
import PluginManager from './components/PluginManager';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Vencord MVP</h1>
        <p className="subtitle">Plugin Manager Demo</p>
      </header>
      <main className="main">
        <PluginManager />
      </main>
      <footer className="footer">
        <p>
          Inspired by{' '}
          <a href="https://github.com/Vendicated/Vencord" target="_blank" rel="noopener noreferrer">
            Vencord
          </a>
          {' '}• MVP Demo
        </p>
      </footer>
    </div>
  );
}

export default App;