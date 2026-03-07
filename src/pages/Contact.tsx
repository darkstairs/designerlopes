import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Instagram, MessageCircle, Mail } from "lucide-react";

const contactItems = [
  {
    icon: Instagram,
    label: "Instagram",
    value: "@dudumafooo",
    href: "https://www.instagram.com/dudumafooo/",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(35) 99844-3067",
    href: "https://wa.me/qr/2JSPMBQIMFFWI1",
  },
  {
    icon: Mail,
    label: "Email",
    value: "umbramlopes@gmail.com",
    href: "mailto:umbramlopes@gmail.com",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="px-6 pt-32 pb-24 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-body mb-4">
            Contato
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Vamos <span className="text-gradient">criar</span> juntos?
          </h1>
          <p className="text-muted-foreground font-body mb-12 max-w-lg mx-auto">
            Entre em contato por qualquer um dos canais abaixo. Será um prazer conversar sobre seu projeto.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 max-w-2xl mx-auto">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="group flex flex-col items-center gap-4 p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon size={28} className="text-primary" />
              </div>
              <div className="text-center">
                <p className="text-lg font-display font-bold text-foreground mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-muted-foreground font-body">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
