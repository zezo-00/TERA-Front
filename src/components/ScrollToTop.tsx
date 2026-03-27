import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation(); 
  useEffect(() => {
    // Toda vez que a URL (pathname) mudar, ele joga a tela pro topo (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; 
};