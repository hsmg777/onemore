import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { CheckCircle, ArrowRight } from 'lucide-react';

export function DemoSection() {
  const [ref, isInView] = useInView();

  const openDemoWhatsApp = () => {
    const message = encodeURIComponent('Hola, quisiera la demo gratuita!');
    window.open(`https://wa.me/593990026711?text=${message}`, '_blank');
  };

  const benefits = [
    'Diagnóstico rápido',
    'Recomendación personalizada',
    'Guía de uso',
  ];

  return (
    <section id="demo" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
      <div className="absolute inset-0 bg-[#0a0f24]" style={{ opacity: 0.8 }} />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 mb-6">
              Oferta Especial
            </div>

            <h2 className="text-4xl md:text-6xl text-white mb-6">
              Prueba el sistema{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                sin costo
              </span>
            </h2>

            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Recibe una demo gratuita y descubre cómo el sistema transdérmico puede 
              ayudarte a mejorar tu bienestar.
            </p>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl text-white mb-6">La demo incluye:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              onClick={openDemoWhatsApp}
              className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-xl flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              Quiero mi demo gratis
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
