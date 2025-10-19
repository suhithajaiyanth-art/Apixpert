import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  MessageCircle,
  Star,
  CheckCircle,
} from "lucide-react";
import LogoImg from "@/assets/Blank Studios_black.png";
import PaymentGatewayImg from "@/assets/payment-gateway-image_-1024x103.webp";

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", bg: "bg-[#1877F2]", icon: Facebook },
  { name: "YouTube", href: "https://youtube.com", bg: "bg-[#FF0000]", icon: Youtube },
  { name: "Instagram", href: "https://instagram.com", bg: "bg-[#1F1F1F]", icon: Instagram },
  { name: "WhatsApp", href: "https://wa.me/918667311125", bg: "bg-[#25D366]", icon: MessageCircle },
  { name: "LinkedIn", href: "https://linkedin.com", bg: "bg-[#0A66C2]", icon: Linkedin },
];

const leftLinks = [
  { label: "Privacy Policy", href: "/privacy", external: false },
  { label: "Terms of Services", href: "/terms", external: false },
  { label: "Cancellation and Refund Policy", href: "/refund", external: false },
  { label: "Shipping and Exchange", href: "/shipping", external: false },
  { label: "Contact Us", href: "/contact", external: false },
];

const rightLinks = [
  { label: "Automate with AI", href: "/cadgptinfo", external: false },
  { label: "Review Us On Google", href: "https://www.google.com/maps", external: true },
];

const paymentVendors = [
  "Secure Payment",
  "Razorpay",
  "GPay",
  "UPI",
  "Visa",
  "Mastercard",
  "Paytm",
  "PayPal",
];

const Footer = () => {
  return (
    <footer className="relative bg-[#050608] text-white">
      <div className="absolute inset-0 opacity-60" style={{ background: "radial-gradient(circle at 30% 20%, rgba(59,130,246,0.35), transparent 55%), radial-gradient(circle at 70% 80%, rgba(239,68,68,0.25), transparent 60%)" }} />
      <div className="container relative mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div className="space-y-6">
            <img src={LogoImg} alt="Blank Studios" className="h-10 w-auto brightness-0 invert" />
            <p className="max-w-xl text-sm text-white/70">
              We provide Service and Training related to Mechanical Engineering Design, R&amp;D and Production.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:sales@apixpert.com" className="hover:text-white">sales@apixpert.com</a>
              </span>
              <span className="hidden text-white/30 md:inline">|</span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+918667311125" className="hover:text-white">+91 86673 11125</a>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map(({ name, href, bg, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${bg} transition hover:scale-105`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-semibold uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {leftLinks.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noreferrer" className="hover:text-white">{link.label}</a>
                  ) : (
                    <Link to={link.href} className="hover:text-white">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-semibold uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {rightLinks.map((link) => (
                <li key={link.label} className="space-y-2">
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 hover:text-white"
                    >
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <Link to={link.href} className="flex items-center gap-2 hover:text-white">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{link.label}</span>
                    </Link>
                  )}
                  {link.label === "Review Us On Google" && (
                    <div className="flex items-center gap-1 text-[#FFB400]">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 text-[#FFB400]" fill="currentColor" />
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="space-y-3 text-sm text-white/70">
              <h4 className="text-lg font-semibold uppercase tracking-wide text-white">Work Hours</h4>
              <p>
                Customer Support Available 24/7 for All Countries, based on availability. Contact your trainer directly or leave us a message.
              </p>
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80 shadow-lg">
                <MessageCircle className="h-4 w-4" />
                Contact us
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-white/10" />

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center">
            <img
              src={PaymentGatewayImg}
              alt="Payment Gateways"
              className="h-8 w-auto object-contain"
              style={{ maxWidth: '320px' }}
            />
          </div>
          <p className="text-center text-xs text-white/60 lg:text-right">
            © 2024 ApiXpert. All rights reserved | Designed By CubicDesignz
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
