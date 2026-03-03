"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import { Home, Building2, Package, Truck, Zap, Users, ArrowRight } from "lucide-react";

const iconMap: Record<string, any> = {
  home: Home,
  building: Building2,
  package: Package,
  truck: Truck,
  zap: Zap,
  users: Users,
};

interface ServiceCardProps {
  blok: {
    _uid: string;
    component: string;
    icon: string;
    title: string;
    description: string;
    tag?: string;
    [key: string]: any;
  };
}

export default function ServiceCard({ blok }: ServiceCardProps) {
  const Icon = iconMap[blok.icon] || Home;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      {...storyblokEditable(blok)}
      className="group bg-white border rounded-2xl p-6 hover:shadow-xl hover:border-[hsl(174,70%,28%)] hover:-translate-y-1 transition-all"
    >
      {blok.tag && (
        <span className="inline-block bg-[hsl(38,92%,64%)]/10 text-[hsl(38,92%,50%)] text-[10px] font-black px-2 py-0.5 rounded-full mb-3">
          {blok.tag}
        </span>
      )}
      <div className="w-12 h-12 bg-[hsl(174,70%,28%)]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[hsl(174,70%,28%)]/20 transition-colors">
        <Icon className="w-6 h-6 text-[hsl(174,70%,28%)]" />
      </div>
      <h3 className="font-black text-base mb-2">{blok.title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{blok.description}</p>
      <button
        onClick={scrollToContact}
        className="flex items-center gap-1 text-[hsl(174,70%,28%)] font-bold text-xs hover:gap-2 transition-all"
      >
        Get a Quote <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
