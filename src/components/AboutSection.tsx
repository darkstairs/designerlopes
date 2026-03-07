import { motion } from "framer-motion";
import { Palette, LayoutGrid, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="px-6 py-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-body mb-4">
          Sobre Mim
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
          Eduardo <span className="text-gradient">Lopes</span>
        </h2>
        <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
          Crio artes para <span className="text-foreground font-semibold">produtos físicos e digitais</span>, 
          transformando a essência da sua marca no seu produto. Cada projeto é uma oportunidade 
          de traduzir identidade em algo tangível e memorável.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            icon: Palette,
            title: "Arte com Propósito",
            desc: "Cada peça é pensada para comunicar, conectar e agregar valor à sua marca — seja em embalagens, redes sociais ou materiais impressos.",
          },
          {
            icon: LayoutGrid,
            title: "Organização Visual",
            desc: "Design não é só estética. É sobre estruturar informações, criar hierarquia e garantir que cada elemento tenha um propósito claro.",
          },
          {
            icon: Lightbulb,
            title: "Inovação Empresarial",
            desc: "Utilizo o design como ferramenta estratégica para inovar processos, posicionar marcas e criar experiências que geram resultados reais.",
          },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors duration-300 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <card.icon size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold mb-3 text-foreground">{card.title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Frase destaque */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center border-t border-b border-border py-12 mb-16"
      >
        <p className="text-2xl md:text-3xl font-display italic text-foreground max-w-3xl mx-auto leading-relaxed">
          "Designer não é somente sobre arte — é sobre{" "}
          <span className="text-gradient">organização</span> e{" "}
          <span className="text-gradient">inovação empresarial</span>."
        </p>
      </motion.div>

      {/* Vídeo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl mx-auto"
      >
        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Vídeo do artista"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
