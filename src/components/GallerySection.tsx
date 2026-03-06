import { motion } from "framer-motion";
import { useState } from "react";
import art1 from "@/assets/art1.jpg";
import art2 from "@/assets/art2.jpg";
import art3 from "@/assets/art3.jpg";
import art4 from "@/assets/art4.jpg";
import art5 from "@/assets/art5.jpg";
import art6 from "@/assets/art6.jpg";

const artworks = [
  { src: art1, title: "Fluxo Digital", category: "Digital Art" },
  { src: art2, title: "Ilhas Suspensas", category: "Paisagem" },
  { src: art3, title: "Retrato Moderno", category: "Retrato" },
  { src: art4, title: "Botânica Sombria", category: "Ilustração" },
  { src: art5, title: "Geometria Quente", category: "Abstrato" },
  { src: art6, title: "Vozes Urbanas", category: "Street Art" },
];

const categories = ["Todos", ...new Set(artworks.map((a) => a.category))];

const GallerySection = () => {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<typeof artworks[0] | null>(null);

  const filtered =
    filter === "Todos" ? artworks : artworks.filter((a) => a.category === filter);

  return (
    <section id="gallery" className="px-6 py-24 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-display font-bold text-center mb-4"
      >
        Galeria
      </motion.h2>
      <p className="text-center text-muted-foreground font-body mb-12">
        Selecione uma categoria para filtrar
      </p>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 text-sm font-body rounded-full border transition-all duration-300 ${
              filter === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="gallery-grid">
        {filtered.map((art, i) => (
          <motion.div
            key={art.title}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="gallery-item group cursor-pointer"
            onClick={() => setSelected(art)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={art.src}
                alt={art.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary font-body">
                    {art.category}
                  </p>
                  <h3 className="text-xl font-display font-bold text-foreground mt-1">
                    {art.title}
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-4xl max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={selected.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <p className="text-xs uppercase tracking-widest text-primary font-body">
                {selected.category}
              </p>
              <h3 className="text-2xl font-display font-bold text-foreground mt-1">
                {selected.title}
              </h3>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
