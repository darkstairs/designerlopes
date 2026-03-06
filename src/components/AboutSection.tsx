import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="px-6 py-24 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-body mb-4">
            Sobre mim
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Cada peça conta uma <span className="italic">história</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            Sou um artista apaixonado por transformar ideias em visuais
            impactantes. Trabalho com diversas técnicas — desde arte digital até
            ilustração tradicional — sempre buscando inovação e expressão
            autêntica.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed">
            Cada projeto é uma oportunidade de explorar novas perspectivas e
            criar algo único que ressoa com as pessoas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {[
            { label: "Ilustração Digital", value: "95%" },
            { label: "Design Gráfico", value: "90%" },
            { label: "Arte Conceitual", value: "85%" },
            { label: "Pintura Tradicional", value: "80%" },
          ].map((skill) => (
            <div key={skill.label}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-body text-foreground">{skill.label}</span>
                <span className="text-sm font-body text-primary">{skill.value}</span>
              </div>
              <div className="h-1 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.value }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
