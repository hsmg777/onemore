import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSistema = () => {
    const element = document.getElementById('sistema');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/593990026711', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-[#0a0f24]/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f24]/40 via-[#0a0f24]/20 to-[#0a0f24]/65" />

      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.h1
              className="text-5xl md:text-7xl text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Vive Natural. <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Vive One More.
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/80 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Bienestar real, sin complicaciones.
            </motion.p>

            <motion.p
              className="text-lg text-white/70 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Sistema terapéutico transdérmico + guía personalizada para mejorar tu energía, 
              descanso y estilo de vida.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <button
                onClick={scrollToDemo}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white flex items-center gap-2 justify-center hover:shadow-xl hover:shadow-cyan-500/50 transition-all hover:scale-105"
              >
                Quiero una demo gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={openWhatsApp}
                className="px-8 py-4 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border-2 border-amber-400/50 rounded-full text-white flex items-center gap-2 justify-center hover:bg-amber-500/30 transition-all hover:scale-105"
              >
                Agendar asesoría personalizada
              </button>
            </motion.div>

            <motion.button
              onClick={scrollToSistema}
              className="mt-6 text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Play className="w-5 h-5" />
              Conocer el sistema
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20">
              <img
                src="https://images.unsplash.com/photo-1758274525958-4a7e209a1e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwd29tYW4lMjB3ZWxsbmVzcyUyMGVuZXJneXxlbnwxfHx8fDE3NzIzMzQ2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wellness"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f24] via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
