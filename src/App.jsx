import './App.css';
import NavMenu from './components/NavMenu/NavMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Gallery from './pages/Gallery';

function App() {
  const routes = [
    { path: '/', label: 'home', component: <Home /> },
    { path: '/gallery', label: 'gallery', component: <Gallery /> },

  ];

  return (
    <Router>
      <div className="appContainer">
        {/* Passa a lista de rotas para o NavMenu */}
        <NavMenu routes={routes} />
        <div className="mainContent">
          <Routes>
            {/* Mapeia as rotas dinamicamente */}
            {routes.map(({ path, component }) => (
              <Route key={path} path={path} element={component} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
