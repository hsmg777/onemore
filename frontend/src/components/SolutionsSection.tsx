import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { useExclusiveVideoAudio } from './useExclusiveVideoAudio';
import { Battery, Moon, TrendingDown, Shield, Heart, Users, Volume2, VolumeX } from 'lucide-react';

export function SolutionsSection() {
  const [ref, isInView] = useInView();
  const productVideoRef = useRef<HTMLVideoElement>(null);
  const { isMuted, toggleMute } = useExclusiveVideoAudio('solutions-product', productVideoRef);
  const openWhatsAppBuy = (productName: string) => {
    const message = encodeURIComponent(
      `Hola, quiero adquirir el producto ${productName}.`
    );
    window.open(`https://wa.me/593990026711?text=${message}`, '_blank');
  };

  const solutions = [
    {
      icon: Battery,
      category: 'Longevidad celular',
      products: 'GlutaNAD+ Boost',
      image: '/images/glutanad.webp',
      headline: 'Fórmula avanzada de longevidad celular',
      benefit: 'Energía celular, reparación del ADN y soporte antiedad',
      details:
        'GlutaNAD+ Boost combina compuestos científicos orientados a la función celular para apoyar energía, reparación del ADN y procesos biológicos de longevidad. Usa tecnología SnapRelease en tiras orales para una alta biodisponibilidad frente a tabletas o cápsulas tradicionales. Incluye NMN, precursor directo del NAD+, coenzima clave en energía celular, activación de sirtuinas y regulación del envejecimiento.',
      chips: [
        'Aumenta la energía celular',
        'Mejora la función mitocondrial',
        'Apoya la reparación del ADN',
        'Combate el estrés oxidativo',
        'Refuerza el sistema inmunológico',
        'Apoya la longevidad celular',
      ],
      presentation: 'Presentación: 30 tiras orales | Alta biodisponibilidad | Tecnología SnapRelease',
      color: 'from-emerald-500 to-green-500',
    },
    {
      icon: Shield,
      category: 'Dolor y movilidad',
      products: 'Painless Night',
      image: '/images/pngenergy.webp',
      benefit: 'Alivio muscular y articular de forma natural',
      details:
        'Parche transdérmico diseñado para aliviar dolor muscular y articular con glucosamina, ginseng rojo coreano, saponinas y germanio orgánico. Ayuda a reducir inflamación, mejorar circulación y acelerar la recuperación de tejidos, favoreciendo la regeneración de cartílagos y la movilidad. Su liberación continua permite absorción directa para alivio prolongado sin necesidad de pastillas.',
      chips: [
        'Alivia el dolor muscular y articular',
        'Reduce la inflamación',
        'Recupera la movilidad',
        'Aumenta energía y vitalidad',
        'Reduce el estrés',
      ],
      presentation: 'Presentación: 25 parches',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: TrendingDown,
      category: 'Control de peso',
      products: 'SlimStyle',
      image: '/images/slimstyle.webp',
      headline: 'DILE ADIÓS A TODAS LAS PASTILLAS Y TRATAMIENTOS INVASIVOS',
      benefit: 'Metabolismo activo y quema de grasa con soporte natural',
      details:
        'Parche transdérmico con espirulina, L-carnitina, té verde, jengibre, guaraná y garcinia camboya. Favorece quema de grasa, ayuda a controlar apetito y mejora digestión, con absorción continua durante el día para resultados más efectivos.',
      chips: [
        'Ayuda a quemar grasas',
        'Regula el metabolismo',
        'Reduce la formación de celulitis',
        'Promueve producción de colágeno',
        'Contribuye a la saciedad del apetito',
        'Poder antioxidante',
      ],
      presentation: 'Presentación: 30 parches',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Heart,
      category: 'Salud cardiovascular',
      products: 'Omevia',
      image: '/images/omevia.webp',
      benefit: 'Protección cardiovascular y energía celular',
      details:
        'Parche transdérmico con omega-3, coenzima Q10, DHEA y pregnenolona. Ayuda a mejorar circulación, apoyar niveles saludables de triglicéridos y reforzar energía celular. También contribuye al equilibrio hormonal y al bienestar mental y físico.',
      chips: [
        'Fortalece el sistema inmunológico',
        'Regula colesterol y presión arterial',
        'Fortalece el cerebro',
        'Mejora salud física y mental',
        'Retrasa el envejecimiento',
        'Poder antioxidante',
      ],
      presentation: 'Presentación: 26 parches',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Battery,
      category: 'Enfoque y energía',
      products: 'B12 Plus',
      image: '/images/b12.webp',
      headline: 'MAXIMIZA TU ENFOQUE Y CLARIDAD MENTAL',
      benefit: 'Soporte cerebral, nervioso y cardiovascular',
      details:
        'Parche vitamínico con B1, B3, B12, ácido fólico, vitamina C y vitamina E. Ayuda a mejorar función cognitiva, producción de energía, circulación y formación de glóbulos rojos, reduciendo fatiga mental y apoyando la salud cardiovascular.',
      chips: [
        'Fortalece el sistema nervioso',
        'Potencia la renovación celular',
        'Facilita producción de energía',
        'Fortalece el cerebro',
        'Previene afecciones cardiovasculares',
        'Con poder antioxidante',
      ],
      presentation: 'Presentación: 24 parches',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Users,
      category: 'Bienestar femenino',
      products: 'One More Night - Ladies',
      image: '/images/ladiesnights.webp',
      benefit: 'Apoyo hormonal y vitalidad femenina',
      details:
        'Parche transdérmico para salud femenina con omega-3, L-arginina, zinc, ginseng y extractos naturales. Ayuda a mejorar circulación, elevar energía, aliviar molestias del ciclo o menopausia y favorecer equilibrio hormonal y bienestar íntimo.',
      chips: [
        'Reduce molestias de menopausia',
        'Reduce dolores menstruales',
        'Aumenta la lubricación natural',
        'Equilibra hormonas',
        'Aumenta la libido',
      ],
      presentation: 'Presentación: 27 parches',
      color: 'from-fuchsia-500 to-pink-500',
    },
    {
      icon: Users,
      category: 'Bienestar masculino',
      products: 'One More Night - Gentlemen',
      image: '/images/gentlemen.webp',
      benefit: 'Rendimiento físico y sexual masculino',
      details:
        'Parche con maca, L-arginina, zinc y ginseng que ayuda a mejorar flujo sanguíneo, apoyar testosterona y elevar energía física. Contribuye a la libido, resistencia y función eréctil para mayor vitalidad general.',
      chips: [
        'Aumenta la testosterona',
        'Mejora la libido',
        'Aumenta energía y potencia sexual',
        'Mejora el flujo sanguíneo',
        'Fortalece las erecciones',
      ],
      presentation: 'Presentación: 27 parches',
      color: 'from-indigo-500 to-violet-500',
    },
    {
      icon: Heart,
      category: 'Inmunidad y huesos',
      products: 'Dekamin',
      image: '/images/daekamin.webp',
      benefit: 'Soporte inmune, muscular y óseo',
      details:
        'Parche nutricional con vitamina D3, K2, C y magnesio. Apoya absorción de calcio, fortalece huesos y músculos, favorece salud cardiovascular y ayuda a reducir fatiga física para mayor bienestar diario.',
      chips: [
        'Fortalece el sistema inmunológico',
        'Fortalece músculos y huesos',
        'Reduce estrés y fatiga',
        'Reduce riesgo de enfermedades virales',
        'Ayuda a suprimir el apetito',
      ],
      presentation: 'Presentación: 24 parches',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Moon,
      category: 'Descanso',
      products: 'Melatonin Plus',
      image: '/images/melatonin.webp',
      benefit: 'Sueño reparador y equilibrio emocional',
      details:
        'Parche transdérmico con melatonina y aceites esenciales para relajar mente y cuerpo, facilitar conciliación del sueño y mejorar calidad del descanso. Dormir mejor también apoya estado de ánimo, defensas y control del apetito.',
      chips: [
        'Regula el sueño',
        'Reduce el estrés',
        'Calma y relaja la mente',
        'Mejora el bienestar emocional',
      ],
      presentation: 'Presentación: 24 parches',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Heart,
      category: 'Belleza y piel',
      products: 'Sornie Collagen',
      image: '/images/sornie.webp',
      benefit: 'Piel más firme, hidratada y luminosa',
      details:
        'Parche con colágeno, queratina hidrolizada, extractos de algas y coenzima Q10. Ayuda a mejorar elasticidad, firmeza e hidratación, estimulando regeneración celular y protección antioxidante para una piel de aspecto más joven.',
      chips: [
        'Mejora la textura de la piel',
        'Reduce arrugas',
        'Hidrata y suaviza la piel',
        'Retrasa el envejecimiento',
        'Poder antioxidante',
      ],
      presentation: 'Presentación: 27 parches',
      color: 'from-rose-500 to-pink-500',
    },
    
  ];

  return (
    <section id="soluciones" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a] to-[#0a0f24]" />

      <div className="container relative z-10 mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl text-white md:text-5xl">
            Soluciones para tu{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              bienestar
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-white/70">
            Productos diseñados para cada aspecto de tu salud
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto mb-10 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-cyan-500/20"
        >
          <video
            ref={productVideoRef}
            src="/video/producto.mp4"
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
        </motion.div>

        <div className="mx-auto grid w-full max-w-[1500px] gap-8 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-7 backdrop-blur-sm transition-all hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="mb-4 mx-auto w-full max-w-[320px] overflow-hidden rounded-xl border border-white/10">
                  <img
                    src={solution.image ?? '/images/placeholder-product.svg'}
                    alt={`Imagen de ${solution.products}`}
                    className="aspect-[4/3] w-full object-cover"
                    loading={index < 2 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                    decoding="async"
                    sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 320px"
                    onError={(e) => {
                      if (e.currentTarget.src.includes('.webp')) {
                        e.currentTarget.src = e.currentTarget.src.replace('.webp', '.png');
                        return;
                      }
                      if (!e.currentTarget.src.includes('/images/placeholder-product.svg')) {
                        e.currentTarget.src = '/images/placeholder-product.svg';
                      }
                    }}
                  />
                </div>
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${solution.color} transition-transform group-hover:scale-110`}
                >
                  <solution.icon className="h-7 w-7 text-white" />
                </div>

                <p className="mb-1 text-sm uppercase tracking-wide text-cyan-300">{solution.category}</p>
                <h3 className="mb-3 text-3xl font-bold text-white md:text-4xl">{solution.products}</h3>
                {solution.headline && (
                  <p className="mb-3 text-base font-extrabold uppercase tracking-wide text-yellow-300 md:text-lg">
                    {solution.headline}
                  </p>
                )}
                <p className="mb-3 text-lg font-semibold text-yellow-300">{solution.benefit}</p>
                <p className="text-sm leading-relaxed text-white/55">
                  {solution.details}
                </p>
                {solution.chips && (
                  <div className="mt-5">
                    <p className="mb-3 text-sm font-bold uppercase tracking-wide text-cyan-200">
                      Beneficios
                    </p>
                    <div className="flex flex-wrap gap-2">
                    {solution.chips.map((chip: string) => (
                      <span
                        key={chip}
                        className="rounded-full border border-cyan-300/50 bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-100"
                      >
                        {chip}
                      </span>
                    ))}
                    </div>
                  </div>
                )}
                {solution.presentation && (
                  <p className="mt-4 text-sm font-semibold text-white/90">
                    {solution.presentation}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => openWhatsAppBuy(solution.products)}
                  className="mx-auto mt-6 flex w-full max-w-sm items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-8 py-4 text-base font-extrabold uppercase tracking-wide text-white transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/40"
                >
                  Comprar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
