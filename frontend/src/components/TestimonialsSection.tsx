import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Star } from 'lucide-react';
import { useState } from 'react';

export function TestimonialsSection() {
  const [ref, isInView] = useInView();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'María González',
      role: 'Profesional ejecutiva',
      image: 'https://images.unsplash.com/photo-1635367216109-aa3353c0c22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGxpZmVzdHlsZSUyMGhlYWx0aHxlbnwxfHx8fDE3NzIzMzQ2MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      testimonial: 'Después de usar el sistema One More, mi energía durante el día mejoró notablemente. Ya no necesito tantos cafés para mantenerme activa.',
      result: 'Más energía y mejor rendimiento',
    },
    {
      name: 'Carlos Mendoza',
      role: 'Deportista',
      image: 'https://images.unsplash.com/photo-1758274525958-4a7e209a1e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwd29tYW4lMjB3ZWxsbmVzcyUyMGVuZXJneXxlbnwxfHx8fDE3NzIzMzQ2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      testimonial: 'El acompañamiento personalizado fue clave. El sistema es fácil de usar y los resultados son reales. Mi descanso mejoró un 100%.',
      result: 'Mejor descanso y recuperación',
    },
    {
      name: 'Ana Rodríguez',
      role: 'Emprendedora',
      image: 'https://images.unsplash.com/photo-1626105985478-82a838e3d104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjBlbnRyZXByZW5ldXJ8ZW58MXx8fHwxNzcyMzM0NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      testimonial: 'No solo mejoró mi calidad de vida, sino que también encontré una oportunidad de negocio que me apasiona. La comunidad es increíble.',
      result: 'Mejor calidad de vida y nuevos ingresos',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a] to-[#0a0f24]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Historias de{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              bienestar
            </span>
          </h2>
          <p className="text-xl text-white/70">Resultados reales de personas reales</p>
        </motion.div>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-cyan-500/30"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex gap-1 mb-4 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-xl text-white/90 mb-6 italic">
                  "{currentTestimonial.testimonial}"
                </p>

                <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 mb-4">
                  {currentTestimonial.result}
                </div>

                <div>
                  <p className="text-white text-xl">{currentTestimonial.name}</p>
                  <p className="text-white/60">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all"
            >
              ←
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-cyan-400 w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
