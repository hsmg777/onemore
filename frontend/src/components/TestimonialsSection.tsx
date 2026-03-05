import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { useRef, useState } from 'react';
import { Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';

export function TestimonialsSection() {
  const [ref, isInView] = useInView();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const testimonialVideos = [
    { src: '/video/testimonio1.mp4', label: 'Testimonio 1' },
    { src: '/video/testimonio2.mp4', label: 'Testimonio 2' },
    { src: '/video/testimonio3.mp4', label: 'Testimonio 3' },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialVideos.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length);
  };

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a] to-[#0a0f24]" />

      <div className="container relative z-10 mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl text-white md:text-5xl">
            Historias de{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              bienestar
            </span>
          </h2>
          <p className="text-xl text-white/70">Resultados reales de personas reales</p>
        </motion.div>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <p className="mb-3 text-sm uppercase tracking-wide text-cyan-300">
              Testimonios reales
            </p>
            <h3 className="mb-4 text-3xl text-white md:text-4xl">
              Historias que confirman resultados
            </h3>
            <p className="text-lg leading-relaxed text-white/75">
              Mira testimonios en video de personas que ya iniciaron su proceso de bienestar.
              Usa las flechas para cambiar de video y conocer mas experiencias reales.
            </p>

            <div className="mt-8">
              <a
                href="https://t.me/+oNI_Q3iixrc5Zjcx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40"
              >
                Ver mas testimonios
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm md:p-4">
            <video
              ref={videoRef}
              src={testimonialVideos[currentIndex].src}
              className="aspect-[9/16] w-full rounded-2xl bg-black object-contain"
              autoPlay
              loop
              playsInline
              muted={isMuted}
            />

            <button
              type="button"
              onClick={prevTestimonial}
              className="absolute left-5 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#0a0f24]/70 text-white backdrop-blur-sm transition hover:bg-[#0a0f24]/90"
              aria-label="Video anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={nextTestimonial}
              className="absolute right-5 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#0a0f24]/70 text-white backdrop-blur-sm transition hover:bg-[#0a0f24]/90"
              aria-label="Video siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => {
                const nextMuted = !isMuted;
                setIsMuted(nextMuted);
                if (videoRef.current) {
                  videoRef.current.muted = nextMuted;
                }
              }}
              className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#0a0f24]/70 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-[#0a0f24]/90"
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
    </section>
  );
}
