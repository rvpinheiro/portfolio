import './App.css';
import NavMenu from './components/NavMenu/NavMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Skills from './pages/Skills';
import Contact from './pages/Contact'

function App() {
  const routes = [
    { path: '/', label: 'home', component: <Home /> },
    { path: '/gallery', label: 'gallery', component: <Gallery /> },
    { path: '/skills', label: 'skills', component: <Skills /> },
    { path: '/contact', label: 'contact', component: <Contact /> },

  ];

  return (
    <Router>
      <div className="appContainer">
        <NavMenu routes={routes} />
        <div className="mainContent">
          <Routes>
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
