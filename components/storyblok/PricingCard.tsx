"use client";
import { storyblokEditable } from "@storyblok/react/rsc";

export default function PricingCard({ blok }: any) {
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  
  return (
    <div {...storyblokEditable(blok)} className={`rounded-2xl p-6 border-2 ${blok.popular ? 'border-[hsl(38,92%,64%)] bg-[hsl(38,92%,64%)]/5' : 'border-gray-200 bg-white'}`}>
      {blok.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[hsl(38,92%,64%)] text-gray-900 text-xs font-black px-4 py-1 rounded-full">BEST VALUE</div>}
      <h3 className="font-black text-lg">{blok.title}</h3>
      <p className="text-sm text-gray-600">{blok.truck}</p>
      <div className="flex items-end gap-1 my-5">
        <span className="font-black text-4xl text-[hsl(174,70%,28%)]">{blok.price}</span>
        <span className="text-gray-600 text-sm mb-1">/ hr</span>
      </div>
      <button onClick={scrollToContact} className="w-full py-3 rounded-xl font-black text-sm bg-[hsl(174,70%,28%)] text-white hover:bg-[hsl(174,70%,22%)]">Get a Quote</button>
    </div>
  );
}
