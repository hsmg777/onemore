import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { MessageCircle, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.35V2h-3.37v13.2a2.8 2.8 0 1 1-2.8-2.8c.3 0 .6.05.87.14V9.1a6.23 6.23 0 1 0 5.36 6.16V8.69a8.3 8.3 0 0 0 4.84 1.55V6.9a4.84 4.84 0 0 1-1.13-.21Z" />
    </svg>
  );
}

export function ContactSection() {
  const [ref, isInView] = useInView();

  const openWhatsApp = () => {
    window.open('https://wa.me/593990026711', '_blank');
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '0990026711',
      action: openWhatsApp,
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'onemoresaludybienestar@gmail.com',
      action: () => (window.location.href = 'mailto:onemoresaludybienestar@gmail.com'),
    },
    {
      icon: MapPin,
      label: 'Direccion',
      value: 'Av. America y Colon, Edif. Amazonas Parc Piso 13 Oficina 132, Quito',
      action: null,
    },
    {
      icon: Clock,
      label: 'Horario',
      value: '09:00 - 12:30 | 13:30 - 18:00',
      action: null,
    },
  ];

  const socialMedia = [
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://www.instagram.com/vivenaturalonemore',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      url: 'https://www.facebook.com/share/1KWjqeEnSv/',
    },
    {
      icon: TikTokIcon,
      label: 'TikTok',
      url: 'https://www.tiktok.com/@mauriciolosabe',
    },
  ];

  return (
    <section id="contacto" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a] to-[#0a0f24]" />

      <div className="container relative z-10 mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 text-4xl text-white md:text-5xl">
            Hablemos sobre tu{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              bienestar
            </span>
          </h2>
          <p className="text-xl text-white/70">
            Estamos aqui para ayudarte a dar el siguiente paso
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-cyan-500/10"
          >
            <img
              src="/images/mauricio.jpeg"
              alt="Mauricio - asesor de bienestar"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020a35]/95 via-[#020a35]/85 to-transparent p-5 md:p-6">
              <h3 className="text-xl font-semibold text-white">Mauricio Narváez</h3>
              <p className="mt-1 text-sm text-cyan-300">
                Abogado, Mentor en desarrollo personal y liderazgo.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Acompaño a personas que desean mejorar su bienestar, desarrollar una mentalidad de crecimiento y construir una fuente de ingresos mediante un modelo escalable basado en educación, comunidad y tecnología.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              onClick={openWhatsApp}
              className="group mb-6 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 text-white transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/40"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar cita por WhatsApp
            </motion.button>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`rounded-2xl border border-white/10 bg-[#0f1836]/70 p-4 transition-all ${
                    info.action
                      ? 'cursor-pointer hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20'
                      : ''
                  }`}
                  onClick={info.action || undefined}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="mb-1 text-cyan-400">{info.label}</p>
                      <p className="text-sm text-white/90 break-words [overflow-wrap:anywhere]">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6">
              <p className="mb-3 text-white/70">Siguenos en redes sociales</p>
              <div className="flex gap-3">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-cyan-500/40 hover:bg-white/10"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
