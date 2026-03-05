"use client";
import { Phone, Mail, MapPin } from "lucide-react";

interface TopBarProps {
  blok: {
    phone: string;
    email: string;
    address: string;
  };
}

export default function TopBar({ blok }: TopBarProps) {
  return (
    <div className="bg-[hsl(174,70%,8%)] text-white py-2 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-5">
          <a 
            href={`tel:${blok.phone.replace(/\s/g, '')}`}
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
  );
}
