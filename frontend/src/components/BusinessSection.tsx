import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { useExclusiveVideoAudio } from './useExclusiveVideoAudio';
import { GraduationCap, Users, TrendingUp, ArrowRight, Volume2, VolumeX } from 'lucide-react';

export function BusinessSection() {
  const [ref, isInView] = useInView();
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isMuted, toggleMute } = useExclusiveVideoAudio('business-income', videoRef);

  const openWhatsApp = () => {
    window.open('https://wa.me/593990026711?text=Hola,%20quiero%20información%20sobre%20la%20oportunidad%20de%20negocio', '_blank');
  };

  const features = [
    {
      icon: GraduationCap,
      title: 'Capacitaciones',
      description: 'Formación continua para tu crecimiento profesional',
    },
    {
      icon: Users,
      title: 'Comunidad',
      description: 'Red de apoyo de emprendedores exitosos',
    },
    {
      icon: TrendingUp,
      title: 'Acompañamiento',
      description: 'Seguimiento personalizado en tu camino',
    },
  ];

  return (
    <section id="negocio" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f24] via-[#1e3a8a] to-[#0891b2]" />
      
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/30 rounded-full text-amber-400 mb-6">
              Oportunidad de Negocio
            </div>

            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Convierte el bienestar en{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                ingresos
              </span>
            </h2>

            <p className="text-xl text-white/80 mb-8">
              Únete a una comunidad de emprendedores que promueven bienestar mientras generan ingresos.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-1">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              onClick={openWhatsApp}
              className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full text-white flex items-center gap-2 hover:shadow-xl hover:shadow-amber-500/50 transition-all hover:scale-105"
            >
              Quiero información del negocio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-2 md:px-4 lg:px-6"
          >
            <div className="relative mx-auto w-full max-w-[760px] overflow-hidden rounded-3xl shadow-2xl shadow-amber-500/20 md:ml-auto">
              <video
                ref={videoRef}
                src="/video/ingresos.MP4"
                className="aspect-video w-full object-cover"
                autoPlay
                loop
                playsInline
                muted={isMuted}
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
