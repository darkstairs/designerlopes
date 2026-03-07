import { motion } from "framer-motion";
import { Mail, Instagram, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 py-24 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-body mb-4">
          Contato
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Vamos <span className="text-gradient">criar</span> juntos?
        </h2>
        <p className="text-muted-foreground font-body mb-10 max-w-lg mx-auto">
          Tem um projeto em mente? Entre em contato e vamos transformar sua ideia
          em arte.
        </p>

        <a
          href="mailto:umbramlopes@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest hover:opacity-90 transition-opacity rounded-lg"
        >
          <Mail size={18} />
          Enviar Email
        </a>

        <div className="flex justify-center gap-6 mt-12">
          {[
            { icon: Instagram, href: "https://www.instagram.com/dudumafooo/", label: "Instagram" },
            { icon: MessageCircle, href: "https://wa.me/qr/2JSPMBQIMFFWI1", label: "WhatsApp" },
            { icon: Mail, href: "mailto:seu@email.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={label === "WhatsApp" ? "_blank" : undefined}
              rel={label === "WhatsApp" ? "noopener noreferrer" : undefined}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
