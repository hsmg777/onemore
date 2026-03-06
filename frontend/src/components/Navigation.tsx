import { useState, useEffect } from 'react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import logoImage from '/images/logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const phoneNumbers = [
    { label: '+593 99 002 6711', value: '+593990026711', primary: true },
    { label: '+593 98 786 8058', value: '+593987868058' },
    { label: '+593 98 450 7074', value: '+593984507074' },
   
  ];

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

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-5 py-2 text-white shadow-sm shadow-emerald-950/40 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80 data-[state=open]:shadow-lg data-[state=open]:shadow-emerald-500/45"
              >
                Llamar ahora
                <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={10}
              className="w-72 rounded-2xl border border-white/15 bg-[#0a0f24]/95 p-2 text-white shadow-2xl shadow-black/40 backdrop-blur-xl"
            >
              <DropdownMenuLabel className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                Teléfonos de contacto
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />
              {phoneNumbers.map((phone) => (
                <DropdownMenuItem
                  key={phone.value}
                  asChild
                  className="mt-1 cursor-pointer rounded-xl p-0 focus:bg-white/10 focus:text-white"
                >
                  <a
                    href={`tel:${phone.value}`}
                    className="grid w-full grid-cols-[16px_1fr] gap-x-3 gap-y-1 px-3 py-3"
                  >
                    <Phone className={`h-4 w-4 text-emerald-300 ${phone.primary ? 'row-span-2 mt-0.5' : ''}`} />
                    <span className="text-sm font-medium text-white/95 whitespace-nowrap">{phone.label}</span>
                    {phone.primary && (
                      <span className="w-fit whitespace-nowrap rounded-full border border-emerald-300/30 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-200">
                        Número primario
                      </span>
                    )}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
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
            <div className="mt-2 rounded-lg border border-white/10 bg-white/5 p-2">
              <p className="px-2 pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/60">Llamar ahora</p>
              {phoneNumbers.map((phone) => (
                <a
                  key={phone.value}
                  href={`tel:${phone.value}`}
                  className={`flex gap-2 rounded-lg px-2 py-2 text-white/90 transition-colors hover:bg-white/10 ${
                    phone.primary ? 'flex-col items-start' : 'items-center justify-between'
                  }`}
                >
                  <span className="flex items-center gap-2 text-sm font-medium whitespace-nowrap">
                    <Phone className="h-4 w-4 text-emerald-300" />
                    {phone.label}
                  </span>
                  {phone.primary && (
                    <span className="rounded-full border border-emerald-300/30 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-200">
                      Número primario
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
