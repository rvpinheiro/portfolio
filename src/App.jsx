import './App.css';
import NavMenu from './components/NavMenu/NavMenu';
import { useState, useEffect } from 'react';
import { useTransition, animated, config } from '@react-spring/web';
import { HashLoader } from 'react-spinners';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [loading, setLoading] = useState(true);

  const routes = [
    { key: 'home', label: 'home', component: <Home /> },
    { key: 'about', label: 'about', component: <About /> },
    { key: 'gallery', label: 'gallery', component: <Gallery /> },
    { key: 'contact', label: 'contact', component: <Contact /> },
  ];

  const transitions = useTransition(activePage, {
    key: activePage,
    from: { opacity: 0, transform: 'scale(0.5)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.5)' },
    config: { ...config.easeInOut, duration: 350 },
    exitBeforeEnter: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="appContainer">
      <NavMenu routes={routes} activePage={activePage} setActivePage={setActivePage} />
      {loading ? (
        <div className="spinnerContainer">
          <HashLoader color="#fff" size={60} />
        </div>
      ) : (
        <div className="mainContent">
          {transitions((style, item) => {
            const page = routes.find(route => route.key === item);
            return page ? (
              <animated.div style={style}>
                {page.component}
              </animated.div>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
