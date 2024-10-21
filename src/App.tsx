import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'; // Importando o Provider
import { GlobalCss } from './styles';
import Rotas from './routes';
import Footer from './components/Footer';
import store from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}> {/* Envolvendo a aplicação com o Provider */}
      <Router>
        <GlobalCss />
        <Rotas />
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;

