import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
        >
          Eduardo Lopes
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl uppercase tracking-[0.3em] text-muted-foreground mb-6 font-body"
        >
          Artista &amp; Designer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight"
        >
          Criando <span className="text-gradient">arte</span> que{" "}
          <span className="italic">inspira</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-lg text-muted-foreground font-body max-w-xl mx-auto"
        >
          Bem-vindo ao meu espaço criativo. Explore minhas obras e descubra o
          universo por trás de cada peça.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/galeria"
            className="inline-block mt-10 px-8 py-3 border border-primary text-primary font-body text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Ver Galeria
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
