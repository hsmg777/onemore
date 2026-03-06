import logoImage from '/images/logo.png';
import logoNivu from '/images/logo_nube.png';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Sistema', id: 'sistema' },
    { label: 'Productos', id: 'soluciones' },
    { label: 'Demo', id: 'demo' },
    { label: 'Negocio', id: 'negocio' },
    { label: 'Contacto', id: 'contacto' },
  ];

  return (
    <footer className="relative border-t border-white/10">
      <div className="absolute inset-0 bg-[#0a0f24]" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <img src={logoImage} alt="One More" className="h-16 mx-auto md:mx-0 mb-4" />
            <p className="text-white/80">
              Vive Natural One More
            </p>
            <p className="text-white/60 text-sm">
              Bienestar, comunidad y crecimiento.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-white mb-4">Enlaces rápidos</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white/60 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/60 text-sm">
              © 2026 Vive Natural One More
            </p>
            <p className="text-white/40 text-sm mt-1">
              Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-cyan-500/20 bg-[#031f24]">
        <div className="container mx-auto px-6 py-3 flex items-center justify-center gap-2 text-white/80 text-sm">
          <img src={logoNivu} alt="Nivu Software" className="h-4 w-auto" />
          <span>Desarrollado por</span>
          <a
            href="https://www.nivusoftware.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:text-cyan-300 transition-colors"
          >
            Nivusoftware
          </a>
        </div>
      </div>
    </footer>
  );
}
