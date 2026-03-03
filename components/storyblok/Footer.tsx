"use client";
import { storyblokEditable } from "@storyblok/react/rsc";
import { Truck, Phone } from "lucide-react";

export default function Footer({ blok }: any) {
  return (
    <footer {...storyblokEditable(blok)} className="bg-[hsl(174,70%,8%)] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Truck className="w-6 h-6" />
              <div className="font-bold">
                <div className="text-base">{blok.logo_text_top}</div>
                <div className="text-[10px] tracking-widest text-[hsl(38,92%,64%)]">{blok.logo_text_bottom}</div>
              </div>
            </div>
            <p className="text-sm opacity-70 mb-4">{blok.tagline}</p>
          </div>
          <div>
            <h4 className="font-black text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {blok.links?.map((link: any) => <li key={link._uid}>{link.label}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-black text-sm mb-4">Contact</h4>
            <div className="space-y-3 text-sm opacity-75">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> {blok.phone}</div>
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
