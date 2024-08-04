import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalCss } from './styles';
import Rotas from './routes';
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <Router>
      <GlobalCss />
      <Rotas />
      <Footer />
    </Router>
  );
};

export default App;
