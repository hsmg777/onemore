import { motion } from 'framer-motion';
import { useInView } from './useInView';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQGroup = {
  title: string;
  items: FAQItem[];
};

export function FAQSection() {
  const [ref, isInView] = useInView();

  const faqGroups: FAQGroup[] = [
    {
      title: 'Productos',
      items: [
        {
          question: '¿Qué es el sistema terapéutico transdérmico y cómo funciona?',
          answer:
            'Es una forma de apoyo al bienestar donde los ingredientes se absorben a través de la piel de manera gradual. La idea es una liberación continua y práctica, sin pasar por el sistema digestivo.',
        },
        {
          question: '¿Cuánto tiempo tarda en notarse un cambio?',
          answer:
            'Depende de cada persona. Algunos notan sensaciones en horas o días y otros en 2 a 4 semanas. Lo recomendado es evaluar con constancia y hábitos básicos como agua y descanso.',
        },
        {
          question: '¿Cómo se usan correctamente los productos?',
          answer:
            'Se aplican siguiendo el instructivo del producto, con zona sugerida y tiempo de uso. Lo clave es ser constante, respetar horarios y no improvisar dosis.',
        },
        {
          question: '¿Puedo usar varios productos a la vez?',
          answer:
            'Sí. Muchas personas combinan según su objetivo, por ejemplo descanso y energía, o dolor y movilidad. Lo ideal es iniciar con 1 o 2, observar respuesta y luego ajustar.',
        },
        {
          question: '¿Hay contraindicaciones?',
          answer:
            'Si estás embarazada, lactando, tienes una condición delicada o tomas medicación constante, lo correcto es consultar con tu médico antes de usar cualquier suplemento o sistema de apoyo.',
        },
        {
          question: '¿Qué pasa si tengo piel sensible o irritación?',
          answer:
            'Puede ocurrir en personas sensibles. Se recomienda cambiar la zona de aplicación, mantener la piel limpia y suspender si hay reacción fuerte. Si continúa, consultar a un profesional.',
        },
        {
          question: '¿Esto reemplaza medicamentos o tratamientos?',
          answer:
            'No. Es un apoyo al bienestar. No sustituye diagnósticos, tratamientos médicos ni medicamentos recetados.',
        },
        {
          question: '¿Cómo elijo el producto correcto para mí?',
          answer:
            'Se elige según el objetivo principal: descanso, energía, control de peso, bienestar diario o dolor y movilidad. Lo más práctico es una mini evaluación y una recomendación personalizada.',
        },
      ],
    },
    {
      title: 'Plan de compensación',
      items: [
        {
          question: '¿Cómo se puede generar ingresos aquí?',
          answer:
            'De dos maneras: por recomendar productos y por desarrollar un equipo que también recomienda y consume, según reglas del plan.',
        },
        {
          question: '¿Debo comprar todos los meses para ganar?',
          answer:
            'Generalmente necesitas estar activo para cobrar comisiones, con una compra mínima o volumen. El requisito exacto puede variar por plan y país.',
        },
        {
          question: '¿Qué son los puntos QV/BV o volumen?',
          answer:
            'Son unidades que equivalen al volumen de compra o consumo. Se acumulan para calificar, subir de rango y participar en comisiones.',
        },
        {
          question: '¿Cuándo se pagan las comisiones?',
          answer:
            'Normalmente en cortes semanales o mensuales según el plan. Se pagan por el método habilitado en tu país, como billetera, transferencia u otros.',
        },
        {
          question: '¿Qué significa subir de rango?',
          answer:
            'Es avanzar en niveles del plan cumpliendo requisitos de volumen y estructura. Al subir de rango, normalmente aumentan beneficios y bonos.',
        },
        {
          question: '¿Cómo se recomienda iniciar en los primeros 7 a 30 días?',
          answer:
            'Con 3 cosas: usar el producto para tener un testimonio real, invitar personas a una demo o evento y hacer seguimiento. El enfoque es constancia y duplicación simple.',
        },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f24] to-[#1e3a8a]" />

      <div className="container relative z-10 mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl text-white md:text-5xl">
            Preguntas{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              frecuentes
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-white/70 md:text-lg">
            Encuentra respuestas por bloques para revisar producto, compañía y plan de compensación de forma rápida.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2"
        >
          {faqGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
            >
              <h3 className="mb-4 border-b border-white/10 px-2 pb-3 text-xl text-cyan-300">
                {group.title}
              </h3>

              <Accordion.Root type="single" collapsible className="space-y-3">
                {group.items.map((faq, itemIndex) => {
                  const value = `group-${groupIndex}-item-${itemIndex}`;

                  return (
                    <Accordion.Item
                      key={value}
                      value={value}
                      className="overflow-hidden rounded-xl border border-white/10 bg-[#0f1836]/70 transition-colors hover:border-cyan-500/40"
                    >
                      <Accordion.Trigger className="group flex w-full items-center justify-between px-4 py-3 text-left">
                        <span className="pr-3 text-base text-white transition-colors group-hover:text-cyan-300">
                          {faq.question}
                        </span>
                        <ChevronDown className="h-4 w-4 flex-shrink-0 text-cyan-400 transition-transform group-data-[state=open]:rotate-180" />
                      </Accordion.Trigger>
                      <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                        <div className="px-4 pb-4 text-sm leading-relaxed text-white/75">
                          {faq.answer}
                        </div>
                      </Accordion.Content>
                    </Accordion.Item>
                  );
                })}
              </Accordion.Root>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
