"use client";

import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { Phone, Mail, MapPin, Truck, Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  _uid: string;
}

interface HeaderProps {
  blok: {
    _uid: string;
    component: string;
    phone: string;
    email: string;
    address: string;
    logo_text_top: string;
    logo_text_bottom: string;
    navigation: NavLink[];
    [key: string]: any;
  };
}

export default function Header({ blok }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div {...storyblokEditable(blok)}>
      {/* Top bar */}
      <div className="bg-[hsl(174,70%,8%)] text-white py-2 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${blok.phone}`}
              className="flex items-center gap-1.5 hover:text-[hsl(38,92%,64%)] transition-colors font-semibold"
            >
              <Phone className="w-3 h-3" /> {blok.phone}
            </a>
            <a
              href={`mailto:${blok.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-[hsl(38,92%,64%)] transition-colors"
            >
              <Mail className="w-3 h-3" /> {blok.email}
            </a>
          </div>
          <div className="flex items-center gap-1.5 opacity-75">
            <MapPin className="w-3 h-3" /> {blok.address}
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-[hsl(174,70%,28%)] rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <div className="font-bold">
              <div className="font-black text-base leading-none text-[hsl(174,70%,28%)]">
                {blok.logo_text_top}
              </div>
              <div className="font-bold text-[10px] tracking-widest text-[hsl(38,92%,64%)] leading-none">
                {blok.logo_text_bottom}
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {blok.navigation?.map((link: NavLink) => (
              <button
                key={link._uid}
                onClick={() => scrollTo(link.href)}
                className="px-3 py-2 text-sm font-semibold text-gray-600 hover:text-[hsl(174,70%,28%)] transition-colors rounded-lg hover:bg-gray-100"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Phone CTA */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${blok.phone}`}
              className="hidden sm:flex items-center gap-2 bg-[hsl(174,70%,28%)] text-white font-bold px-4 py-2.5 rounded-full hover:bg-[hsl(174,70%,22%)] transition-all text-sm shadow-md hover:shadow-lg"
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
          <div className="lg:hidden border-t bg-white px-4 py-3 space-y-1">
            {blok.navigation?.map((link: NavLink) => (
              <button
                key={link._uid}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left px-3 py-2.5 text-sm font-semibold text-gray-600 hover:text-[hsl(174,70%,28%)] hover:bg-gray-100 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`tel:${blok.phone}`}
              className="flex items-center justify-center gap-2 bg-[hsl(38,92%,64%)] text-gray-900 font-bold px-4 py-3 rounded-xl mt-2 text-sm"
            >
              <Phone className="w-4 h-4" /> Call {blok.phone}
            </a>
          </div>
        )}
      </header>
    </div>
  );
}
