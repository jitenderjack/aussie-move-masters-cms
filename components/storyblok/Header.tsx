"use client";

import { useState } from "react";
import { Truck, Phone, Menu, X } from "lucide-react";
import { storyblokEditable } from "@storyblok/react/rsc";

interface HeaderProps {
  blok: {
    logo_text?: string;
    phone: string;
    nav_links?: Array<{
      label: string;
      href: string;
      _uid: string;
    }>;
  };
}

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Header({ blok }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      {...storyblokEditable(blok)}
      className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-[hsl(174,65%,28%)] rounded-lg flex items-center justify-center">
            <Truck className="w-5 h-5 text-white" />
          </div>
          <div className="font-['Montserrat']">
            <div className="font-black text-base leading-none text-[hsl(174,65%,28%)]">
              {blok.logo_text?.split(' ')[0] || 'AUSSIE'}
            </div>
            <div className="font-bold text-[10px] tracking-widest text-[hsl(37,91%,55%)] leading-none">
              {blok.logo_text?.split(' ').slice(1).join(' ') || 'MOVE MASTERS'}
            </div>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {blok.nav_links?.map((item) => (
            <button
              key={item._uid}
              onClick={() => scrollTo(item.href)}
              className="px-3 py-2 text-sm font-semibold text-gray-600 hover:text-[hsl(174,65%,28%)] transition-colors font-['Montserrat'] rounded-lg hover:bg-gray-100"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Phone CTA */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${blok.phone.replace(/\s/g, "")}`}
            className="hidden sm:flex items-center gap-2 bg-[hsl(174,65%,28%)] text-white font-bold px-4 py-2.5 rounded-full hover:bg-[hsl(174,70%,18%)] transition-all text-sm font-['Montserrat'] shadow-md hover:shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span>{blok.phone}</span>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-3 space-y-1">
          {blok.nav_links?.map((item) => (
            <button
              key={item._uid}
              onClick={() => {
                scrollTo(item.href);
                setMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2.5 text-sm font-semibold text-gray-600 hover:text-[hsl(174,65%,28%)] hover:bg-gray-100 rounded-lg transition-colors font-['Montserrat']"
            >
              {item.label}
            </button>
          ))}
          <a
            href={`tel:${blok.phone.replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-2 bg-[hsl(37,91%,55%)] text-gray-900 font-bold px-4 py-3 rounded-xl mt-2 text-sm font-['Montserrat']"
          >
            <Phone className="w-4 h-4" /> Call {blok.phone}
          </a>
        </div>
      )}
    </header>
  );
}
