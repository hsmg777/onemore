import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { FileSearch, UserCheck, Zap } from 'lucide-react';

export function HowItWorksSection() {
  const [ref, isInView] = useInView();

  const steps = [
    {
      icon: FileSearch,
      title: 'Diagnóstico rápido y demo gratuita',
      description: 'Evaluamos tus necesidades y te ofrecemos una demostración sin compromiso.',
    },
    {
      icon: UserCheck,
      title: 'Plan personalizado según tu objetivo',
      description: 'Diseñamos un programa adaptado a tu estilo de vida y metas de bienestar.',
    },
    {
      icon: Zap,
      title: 'Uso simple del sistema transdérmico + acompañamiento',
      description: 'Aplicación fácil y práctica con seguimiento constante de tu progreso.',
    },
  ];

  return (
    <section id="sistema" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f24] to-[#1e3a8a]" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            ¿Cómo funciona el sistema{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              One More
            </span>
            ?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all hover:shadow-xl hover:shadow-cyan-500/20 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl text-cyan-400/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-xl text-white mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl shadow-2xl shadow-blue-500/20"
        >
          <img
            src="/images/howitworks.png"
            alt="Sistema transdérmico"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f24] via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

