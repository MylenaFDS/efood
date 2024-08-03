import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalCss } from './styles';
import Rotas from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalCss />
      <Rotas />
    </Router>
  );
};

export default App;
