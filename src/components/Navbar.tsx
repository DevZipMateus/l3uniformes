
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Close menu when resizing from mobile to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' }
  ];

  return (
    <header 
      className={cn(
        'fixed w-full z-50 transition-all duration-300 ease-in-out',
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-l3 flex justify-between items-center">
        <a href="#home" className="flex items-center z-10 relative">
          <img 
            src="/lovable-uploads/b1b44bef-43e3-4a20-a16b-569ccb9960a4.png" 
            alt="L3 Uniformes" 
            className="h-12 md:h-16 w-auto transition-transform hover:scale-105"
          />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium relative inline-flex items-center transition-colors duration-200',
                'hover:text-bordo focus:text-bordo',
                scrolled ? 'text-gray-800' : 'text-gray-800',
                'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0',
                'after:bg-bordo after:transition-all after:duration-300',
                'hover:after:w-full focus:after:w-full'
              )}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-bordo text-white px-4 py-2 rounded-md text-sm font-medium 
                     hover:bg-bordo-light transition-colors duration-200"
          >
            Fale Conosco
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className={cn(
            "md:hidden flex items-center justify-center rounded-full p-2 z-50",
            "focus:outline-none transition-all duration-200",
            scrolled 
              ? "bg-bordo/10 text-bordo hover:bg-bordo/20"
              : "bg-white/20 backdrop-blur-sm text-bordo hover:bg-white/30"
          )}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          'fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={toggleMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div 
        className={cn(
          'fixed top-0 right-0 bottom-0 z-40 w-full max-w-sm bg-white shadow-xl',
          'transform transition-transform duration-300 ease-in-out md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <img 
            src="/lovable-uploads/b1b44bef-43e3-4a20-a16b-569ccb9960a4.png" 
            alt="L3 Uniformes" 
            className="h-10 w-auto"
          />
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="px-6 pt-6 pb-8 overflow-y-auto h-[calc(100%-82px)]">
          <ul className="space-y-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-lg font-medium text-gray-800 hover:text-bordo transition-all duration-200 block py-2 
                             hover:translate-x-1 focus:outline-none focus:text-bordo"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t">
            <a 
              href="#contact" 
              className="bg-bordo text-white py-3 px-4 rounded-md w-full text-center block font-medium
                        hover:bg-bordo-light transition-colors duration-200"
              onClick={toggleMenu}
            >
              Fale Conosco
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
