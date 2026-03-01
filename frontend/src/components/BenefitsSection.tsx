import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { UserCheck, Clock, TrendingUp } from 'lucide-react';

export function BenefitsSection() {
  const [ref, isInView] = useInView();

  const benefits = [
    {
      icon: UserCheck,
      title: 'Acompañamiento 1 a 1',
      description: 'Te guiamos paso a paso según tu objetivo, con seguimiento personalizado.',
    },
    {
      icon: Clock,
      title: 'Sistema práctico',
      description: 'Ideal para personas con poco tiempo. Aplicación simple y efectiva.',
    },
    {
      icon: TrendingUp,
      title: 'Resultados + comunidad',
      description: 'Educación continua, seguimiento constante y crecimiento personal.',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f24] to-[#1e3a8a]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            ¿Por qué elegir{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Vive Natural One More
            </span>
            ?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl text-white mb-4">{benefit.title}</h3>
              <p className="text-lg text-white/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
