import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Battery, Moon, TrendingDown, Shield, Heart, Users } from 'lucide-react';

export function SolutionsSection() {
  const [ref, isInView] = useInView();

  const solutions = [
    {
      icon: Battery,
      category: 'Energía',
      products: 'B12plus / GlutaNAD',
      benefit: 'Mejora tu vitalidad y rendimiento diario',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Moon,
      category: 'Sueño',
      products: 'Melatonin Plus',
      benefit: 'Descanso profundo y reparador',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: TrendingDown,
      category: 'Metabolismo',
      products: 'Slim Style',
      benefit: 'Control de peso saludable',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      category: 'Bienestar muscular',
      products: 'Painless',
      benefit: 'Alivio natural para músculos y articulaciones',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Heart,
      category: 'Sistema inmune',
      products: 'Dekamin',
      benefit: 'Fortalece tus defensas naturales',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Heart,
      category: 'Salud cardiovascular',
      products: 'Omevia',
      benefit: 'Cuida tu corazón y circulación',
      color: 'from-rose-500 to-red-500',
    },
    {
      icon: Users,
      category: 'Apoyo hormonal',
      products: 'Ladies Night / Gentlemen Night',
      benefit: 'Balance hormonal natural',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="soluciones" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a] to-[#0a0f24]" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Soluciones para tu{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              bienestar
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Productos diseñados para cada aspecto de tu salud
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-all hover:shadow-xl hover:shadow-cyan-500/20 h-full">
                <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${solution.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                  <solution.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl text-white mb-2">{solution.category}</h3>
                <p className="text-cyan-400 mb-3">{solution.products}</p>
                <p className="text-white/70">{solution.benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
