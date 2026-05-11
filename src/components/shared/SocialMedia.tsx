import { FadeIn } from "../animations/FadeIn";
import { FaInstagram, FaXTwitter, FaEnvelope } from "react-icons/fa6";

const SocialMedia = () => {
  const socials = [
    {
      name: "X",
      icon: FaXTwitter,
      href: "https://x.com/simonleviev1",
      label: "Follow on X",
    },

    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/simonleviev8?igsh=dHJnMjhnOW5jOTIy",
      label: "Follow on Instagram",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      href: "mailto:Info@simonleviev.com",
      label: "Email us",
    },
  ];


  return (
    <FadeIn delay={0.3} className="flex items-center gap-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-luxury-beige/60 hover:text-deep-gold hover:border-deep-gold/40 hover:bg-gold/5 gold-glow-hover transition-all duration-500 group"
        >
          <social.icon className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
        </a>
      ))}
    </FadeIn>
  );
};

export default SocialMedia;

