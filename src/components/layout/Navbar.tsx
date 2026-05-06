import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, MapPin } from 'lucide-react';

export default function Navbar({ onNavigate, currentPath }: { onNavigate: (path: string) => void; currentPath: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'} ${isMobileMenuOpen ? 'bg-white' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavClick('/')}
          >
            <div className={`p-2 rounded-xl bg-orange-600 text-white transition-transform group-hover:scale-105 ${isScrolled ? 'shadow-md' : ''}`}>
              <ShoppingBag size={24} strokeWidth={2.5} />
            </div>
            <div>
              <span className={`block font-heading font-bold text-xl leading-none tracking-tight ${isScrolled ? 'text-stone-900' : 'text-stone-900 md:text-stone-900'}`}>Nava's Pot</span>
              <span className={`block text-xs font-semibold tracking-wider uppercase ${isScrolled ? 'text-orange-600' : 'text-orange-600 md:text-orange-600'}`}>Lomnava, Accra</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <button 
                    onClick={() => handleNavClick(link.path)}
                    className={`font-semibold hover:text-orange-600 transition-colors ${currentPath === link.path ? 'text-orange-600' : 'text-stone-700'}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handleNavClick('/order')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-orange-600/30 transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-800 p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-stone-100 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`text-left p-3 rounded-lg font-bold text-lg ${currentPath === link.path ? 'bg-orange-50 text-orange-600' : 'text-stone-800'}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('/order')}
            className="mt-2 text-center bg-orange-600 text-white p-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-600/30 flex justify-center items-center gap-2"
          >
            <ShoppingBag size={20} />
            Start Your Order
          </button>
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-center gap-2 text-stone-500 font-medium text-sm">
             <MapPin size={16} /> Located in Lomnava, Accra
          </div>
        </div>
      )}
    </nav>
  );
}
