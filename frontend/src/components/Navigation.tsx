import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '/images/logo.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const phoneNumber = '0990026711';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0f24]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img src={logoImage} alt="One More" className="h-20 md:h-24" />
          </div>

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
            <button
              onClick={() => scrollToSection('sistema')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Sistema
            </button>
            <button
              onClick={() => scrollToSection('soluciones')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection('negocio')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Negocio
            </button>
            <button
              onClick={() => scrollToSection('empresa')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Empresa
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Contacto
            </button>
          </div>

          <a
            href={`tel:${phoneNumber}`}
            className="hidden md:inline-flex items-center px-5 py-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full text-white hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
          >
            Llamar ahora
          </a>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/20 text-white"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 bg-[#0a0f24]/95 backdrop-blur-md border border-white/10 rounded-xl p-3 space-y-2">
            <button
              onClick={() => scrollToSection('sistema')}
              className="w-full text-left text-white/90 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Sistema
            </button>
            <button
              onClick={() => scrollToSection('soluciones')}
              className="w-full text-left text-white/90 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="w-full text-left text-white/90 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection('negocio')}
              className="w-full text-left text-white/90 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Negocio
            </button>
            <button
              onClick={() => scrollToSection('empresa')}
              className="w-full text-left text-white/90 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Empresa
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="w-full text-left text-white/90 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contacto
            </button>
            <a
              href={`tel:${phoneNumber}`}
              className="block w-full text-center mt-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg text-white"
            >
              Llamar ahora
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
