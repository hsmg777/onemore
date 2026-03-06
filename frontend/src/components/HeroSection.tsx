import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Volume2, VolumeX } from 'lucide-react';
import { useExclusiveVideoAudio } from './useExclusiveVideoAudio';

export function HeroSection() {
  const productVideoRef = useRef<HTMLVideoElement>(null);
  const { isMuted, toggleMute } = useExclusiveVideoAudio('hero-vsl', productVideoRef);

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
              <video
                ref={productVideoRef}
                src="/video/vsl.mp4"
                className="w-full aspect-[16/10] object-cover"
                autoPlay
                loop
                muted={isMuted}
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f24] via-transparent to-transparent" />
              <button
                type="button"
                onClick={toggleMute}

                className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#0a0f24]/70 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-[#0a0f24]/90"
                aria-label={isMuted ? 'Activar audio' : 'Silenciar audio'}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="h-4 w-4" />
                    Activar audio
                  </>
                ) : (
                  <>
                    <Volume2 className="h-4 w-4" />
                    Silenciar
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
