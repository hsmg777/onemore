import { motion } from 'framer-motion';
import { useInView } from './useInView';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const [ref, isInView] = useInView();

  const faqs = [
    {
      question: '¿Es seguro el sistema?',
      answer: 'Sí, totalmente. Nuestro sistema transdérmico está respaldado por investigación científica y utiliza componentes naturales de alta calidad. Todos nuestros productos cumplen con los estándares de seguridad internacionales.',
    },
    {
      question: '¿Cuánto tarda en hacer efecto?',
      answer: 'Los resultados varían según la persona y el objetivo. Algunos clientes notan mejoras en su energía y bienestar en las primeras semanas, mientras que resultados más profundos pueden tomar de 1 a 3 meses de uso constante.',
    },
    {
      question: '¿Puedo usarlo todos los días?',
      answer: 'Sí, el sistema está diseñado para uso diario. De hecho, la consistencia es clave para obtener los mejores resultados. Te proporcionamos una guía personalizada con las indicaciones específicas para tu caso.',
    },
    {
      question: '¿Hacen envíos?',
      answer: 'Sí, realizamos envíos a nivel nacional. El tiempo de entrega depende de tu ubicación. También ofrecemos la opción de retiro en nuestra oficina en Quito.',
    },
    {
      question: '¿Necesito asesoría?',
      answer: 'Recomendamos una asesoría inicial para personalizar tu plan según tus objetivos. Esto asegura que uses el sistema de manera óptima. La asesoría incluye diagnóstico, recomendación personalizada y seguimiento.',
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
            Preguntas{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              frecuentes
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-colors"
              >
                <Accordion.Trigger className="w-full px-6 py-5 flex items-center justify-between text-left group">
                  <span className="text-xl text-white group-hover:text-cyan-400 transition-colors pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-cyan-400 transition-transform group-data-[state=open]:rotate-180 flex-shrink-0" />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-6 pb-5 text-white/70 text-lg">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
