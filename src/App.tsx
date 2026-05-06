/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppCTA from './components/WhatsAppCTA';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  // Simple custom router for maximum speed and smooth transitions in preview.
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  // Render current view
  let CurrentView = Home;
  switch (currentPath) {
    case '/':
      CurrentView = Home;
      break;
    case '/menu':
      CurrentView = Menu;
      break;
    case '/order':
      CurrentView = Order;
      break;
    case '/about':
      CurrentView = About;
      break;
    case '/contact':
      CurrentView = Contact;
      break;
    default:
      CurrentView = Home;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNavigate={navigate} currentPath={currentPath} />
      
      <main className="flex-grow">
        <CurrentView onNavigate={navigate} />
      </main>
      
      <Footer />
      
      {/* Global floating WhatsApp button */}
      <WhatsAppCTA />
    </div>
  );
}
