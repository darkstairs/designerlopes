import { Instagram, MessageCircle, Mail } from "lucide-react";

const contactInfo = [
  { id: "instagram", icon: Instagram, label: "@dudumafooo", href: "https://www.instagram.com/dudumafooo/" },
  { id: "whatsapp", icon: MessageCircle, label: "(35) 99844-3067", href: "https://wa.me/qr/2JSPMBQIMFFWI1" },
  { id: "email", icon: Mail, label: "umbramlopes@gmail.com", href: "mailto:umbramlopes@gmail.com" },
];

const Footer = () => (
  <footer className="border-t border-border px-6 py-10">
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
      <div className="flex flex-wrap justify-center gap-6">
        {contactInfo.map(({ id, icon: Icon, label, href }) => (
          <a
            key={id}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
          >
            <Icon size={16} />
            {label}
          </a>
        ))}
      </div>
      <p className="text-sm text-muted-foreground font-body">
        © {new Date().getFullYear()} — Eduardo Lopes. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
