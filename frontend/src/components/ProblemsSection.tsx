import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { CheckCircle2, MessageCircle } from 'lucide-react';

export function ProblemsSection() {
  const [ref, isInView] = useInView();

  const items = [
    'Dolor',
    'Sueno',
    'Bajar de peso',
    'Estres / ansiedad',
    'Cansancio / poca energia',
    'Inflamacion / articulaciones',
    'Digestion pesada / defensas bajas',
  ];

  const openWhatsAppInfo = () => {
    const message = encodeURIComponent('INFO');
    window.open(`https://wa.me/593990026711?text=${message}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#071238] via-[#102766] to-[#0a0f24]" />
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/25 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl rounded-3xl border border-cyan-300/20 bg-white/5 p-8 text-center shadow-2xl shadow-cyan-900/30 backdrop-blur-sm md:p-10"
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-amber-300/40 bg-amber-400/15 px-5 py-2 text-sm font-semibold tracking-wide text-amber-200">
            ATENCION PERSONALIZADA
          </div>

          <h2 className="mb-3 text-3xl font-semibold text-white md:text-5xl">
            Te identificas con alguno de estos problemas?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/80">
            Si hoy estas lidiando con alguno de estos sintomas, podemos orientarte con una guia clara y un plan
            practico para empezar.
          </p>

          <div className="mx-auto grid max-w-3xl gap-3 text-left sm:grid-cols-2">
            {items.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0f1836]/70 px-4 py-3"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span className="text-white/90">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-emerald-300/40 bg-gradient-to-r from-emerald-500/20 to-lime-500/20 p-5">
            <p className="text-2xl font-extrabold tracking-wide text-emerald-200 md:text-3xl">CONSULTAS GRATIS</p>
            <p className="mt-2 text-base text-white/90 md:text-lg">
              Escribeme <span className="rounded-md bg-white/15 px-2 py-1 font-bold text-cyan-200">INFO</span> y te
              guio segun tu caso.
            </p>
          </div>

          <button
            onClick={openWhatsAppInfo}
            className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-10 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/45"
          >
            <MessageCircle className="h-5 w-5" />
            QUIERO MI CONSULTA GRATIS
          </button>
        </motion.div>
      </div>
    </section>
  );
}
