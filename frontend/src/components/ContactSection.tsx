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
      action: () => window.location.href = 'mailto:onemoresaludybienestar@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Dirección',
      value: 'Av. América y Colón, Edif. Amazonas Parc Piso 13 Oficina 132, Quito',
      action: null,
    },
    {
      icon: Clock,
      label: 'Horario',
      value: '09:00 – 12:30 | 13:30 – 18:00',
      action: null,
    },
  ];

  const socialMedia = [
    { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/vivenaturalonemore' },
    { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/share/1KWjqeEnSv/' },
    { icon: TikTokIcon, label: 'TikTok', url: 'https://www.tiktok.com/@mauriciolosabe' },
  ];

  return (
    <section id="contacto" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a] to-[#0a0f24]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Hablemos sobre tu{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              bienestar
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Estamos aquí para ayudarte a dar el siguiente paso
          </p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={openWhatsApp}
            className="group px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white text-xl flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Agendar cita por WhatsApp
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 ${
                info.action ? 'cursor-pointer hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20' : ''
              } transition-all`}
              onClick={info.action || undefined}
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex-shrink-0">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-cyan-400 mb-1">{info.label}</p>
                  <p className="text-white">{info.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <p className="text-white/70 mb-4">Síguenos en redes sociales</p>
          <div className="flex justify-center gap-4">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-cyan-500/40 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
