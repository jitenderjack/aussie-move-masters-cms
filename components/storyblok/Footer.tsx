"use client";

import { Truck, Phone, Mail, MapPin } from "lucide-react";
import { storyblokEditable } from "@storyblok/react/rsc";

interface FooterProps {
  blok: {
    logo_text_top: string;
    logo_text_bottom: string;
    tagline: string;
    phone: string;
    email: string;
    address: string;
    copyright: string;
    nav_items: Array<{
      label: string;
      href: string;
      _uid: string;
    }>;
  };
}

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer({ blok }: FooterProps) {
  return (
    <footer {...storyblokEditable(blok)} className="bg-[hsl(174,70%,8%)] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-[hsl(174,70%,28%)] rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="font-['Montserrat']">
                <div className="font-black text-base leading-none">{blok.logo_text_top}</div>
                <div className="font-bold text-[10px] tracking-widest text-[hsl(38,92%,64%)] leading-none">
                  {blok.logo_text_bottom}
                </div>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed mb-4">{blok.tagline}</p>
            <div className="flex gap-3">
              <a
                href={`tel:${blok.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-1.5 bg-[hsl(38,92%,64%)] text-gray-900 font-bold px-4 py-2 rounded-full text-xs hover:bg-[hsl(38,92%,58%)] transition-colors font-['Montserrat']"
              >
                <Phone className="w-3.5 h-3.5" /> Call Now
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-sm font-['Montserrat'] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {blok.nav_items?.map((item) => (
                <li key={item._uid}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-[hsl(38,92%,64%)] transition-all font-['Montserrat']"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-sm font-['Montserrat'] mb-4">Contact</h4>
            <div className="space-y-3 text-sm opacity-75">
              <a
                href={`tel:${blok.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:opacity-100 hover:text-[hsl(38,92%,64%)] transition-all"
              >
                <Phone className="w-4 h-4" /> {blok.phone}
              </a>
              <a
                href={`mailto:${blok.email}`}
                className="flex items-center gap-2 hover:opacity-100 hover:text-[hsl(38,92%,64%)] transition-all"
              >
                <Mail className="w-4 h-4" /> {blok.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{blok.address}</span>
              </div>
              <p className="text-xs opacity-60">Mon–Sun: 7am – 7pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 px-4">
        <p className="text-center text-xs opacity-50">{blok.copyright}</p>
      </div>
    </footer>
  );
}
