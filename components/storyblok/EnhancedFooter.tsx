"use client";
import { Truck, Phone, Mail, MapPin } from "lucide-react";

interface EnhancedFooterProps {
  blok: {
    phone: string;
    email: string;
    address?: string;
    logo_text_line1?: string;
    logo_text_line2?: string;
  };
}

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const navLinks = [
  { label: "Home", href: "hero" },
  { label: "Services", href: "services" },
  { label: "Why Us", href: "why-us" },
  { label: "Pricing", href: "pricing" },
  { label: "FAQ", href: "faq" },
  { label: "Contact", href: "contact" },
];

export default function EnhancedFooter({ blok }: EnhancedFooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-[hsl(174,65%,28%)] rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-black text-base leading-none text-[hsl(174,65%,28%)]">
                  {blok.logo_text_line1 || "AUSSIE"}
                </div>
                <div className="font-bold text-[10px] tracking-widest text-[hsl(37,91%,55%)] leading-none">
                  {blok.logo_text_line2 || "MOVE MASTERS"}
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Perth's trusted removalists — making every move stress-free, affordable, and professional.
            </p>
            <a
              href={`tel:${blok.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 bg-[hsl(174,65%,28%)] text-white font-bold px-4 py-2.5 rounded-full hover:bg-[hsl(174,70%,18%)] transition-all text-sm shadow-md"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          <div>
            <h4 className="font-black text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-gray-400 hover:text-[hsl(37,91%,55%)] transition-colors text-sm"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href={`tel:${blok.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-gray-400 hover:text-[hsl(37,91%,55%)] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                {blok.phone}
              </a>
              <a
                href={`mailto:${blok.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-[hsl(37,91%,55%)] transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                {blok.email}
              </a>
              {blok.address && (
                <div className="flex items-start gap-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{blok.address}</span>
                </div>
              )}
              <p className="text-gray-500 text-sm">Mon–Sun: 7am – 7pm</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Aussie Move Masters · ABN Registered · Fully Insured · Perth, Western Australia · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
