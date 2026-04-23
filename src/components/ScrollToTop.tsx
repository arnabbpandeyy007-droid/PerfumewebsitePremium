import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // We use 'instant' behavior to avoid the smooth scroll animation 
    // when moving between different pages/routes.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname, search]);

  return null;
}
