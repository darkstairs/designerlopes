import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Instagram, MessageCircle, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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
    icon: Phone,
    label: "Telefone",
    value: "(35) 99844-3067",
    href: "tel:+5535998443067",
  },
  {
    icon: Mail,
    label: "Email",
    value: "umbramlopes@gmail.com",
    href: null,
  },
];

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    whatsapp: "",
    produto: "",
    mensagem: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Novo pedido de orçamento");
    const body = encodeURIComponent(
      `Email do cliente: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nProduto desejado: ${formData.produto}\n\nMensagem:\n${formData.mensagem}`
    );

    window.open(`mailto:umbramlopes@gmail.com?subject=${subject}&body=${body}`, "_blank");

    toast({
      title: "Redirecionando para seu email!",
      description: "Complete o envio no seu aplicativo de email.",
    });

    setFormData({ email: "", whatsapp: "", produto: "", mensagem: "" });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="px-6 pt-32 pb-24 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-body mb-4">
            Contato
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Vamos <span className="text-gradient">criar</span> juntos?
          </h1>
          <p className="text-muted-foreground font-body mb-16 max-w-lg mx-auto">
            Entre em contato por qualquer um dos canais abaixo. Será um prazer conversar sobre seu projeto.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item, i) => {
            const isEmail = item.label === "Email";

            const content = (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group flex flex-col items-center gap-4 p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer"
                onClick={isEmail ? () => setShowForm(true) : undefined}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon size={28} className="text-primary" />
                </div>
                <div>
                  <p className="text-lg font-display font-bold text-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-muted-foreground font-body">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            );

            if (isEmail) return content;

            return (
              <a
                key={item.label}
                href={item.href!}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            );
          })}
        </div>

        {/* Formulário de contato */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-12 max-w-lg mx-auto text-left"
          >
            <div className="p-8 rounded-xl border border-border bg-card">
              <h3 className="text-2xl font-display font-bold text-foreground mb-2 text-center">
                Solicite um orçamento
              </h3>
              <p className="text-sm text-muted-foreground font-body mb-6 text-center">
                Preencha os dados abaixo e envie sua solicitação.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-body text-foreground mb-1 block">
                    Seu Email
                  </label>
                  <Input
                    type="email"
                    required
                    placeholder="seuemail@exemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-sm font-body text-foreground mb-1 block">
                    Seu WhatsApp
                  </label>
                  <Input
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-sm font-body text-foreground mb-1 block">
                    Tipo de Produto Desejado
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="Ex: Logo, ilustração, banner..."
                    value={formData.produto}
                    onChange={(e) => setFormData({ ...formData, produto: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-sm font-body text-foreground mb-1 block">
                    Descreva o que você precisa
                  </label>
                  <Textarea
                    required
                    placeholder="Conte mais detalhes sobre o seu projeto..."
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button type="submit" className="flex-1">
                    Enviar
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
