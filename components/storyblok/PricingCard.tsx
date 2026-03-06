"use client";

import { storyblokEditable } from "@storyblok/react/rsc";

interface PricingCardProps {
  blok: {
    size: string;
    truck: string;
    price: string;
    price_period: string;
    capacity: string;
    dimensions: string;
    popular: boolean;
    label: string;
    features: Array<string>;
  };
}

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function PricingCard({ blok }: PricingCardProps) {
  return (
    <div
      {...storyblokEditable(blok)}
      className={`relative rounded-2xl p-6 border-2 flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl ${
        blok.popular
          ? "border-[hsl(37,91%,55%)] bg-[hsl(37,91%,55%)]/5 shadow-lg"
          : "border-gray-200 bg-white shadow-sm"
      }`}
    >
      {blok.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[hsl(37,91%,55%)] text-gray-900 text-xs font-black px-4 py-1 rounded-full font-['Montserrat'] shadow">
          BEST VALUE
        </div>
      )}
      <div className="mb-4">
        <span className="text-xs text-gray-600 font-['Montserrat'] font-semibold">
          {blok.label}
        </span>
        <h3 className="font-black text-lg font-['Montserrat'] mt-0.5">{blok.size}</h3>
        <p className="text-sm text-gray-600">{blok.truck}</p>
      </div>
      <div className="flex items-end gap-1 mb-5">
        <span
          className={`font-black text-4xl font-['Montserrat'] ${
            blok.popular ? "text-[hsl(37,91%,55%)]" : "text-[hsl(174,65%,28%)]"
          }`}
        >
          {blok.price}
        </span>
        <span className="text-gray-600 text-sm mb-1">{blok.price_period}</span>
      </div>
      <ul className="space-y-2 text-sm mb-6 flex-1">
        <li className="flex items-start gap-2 text-gray-600">🚛 {blok.capacity} capacity</li>
        <li className="flex items-start gap-2 text-gray-600">👥 2 professional movers</li>
        <li className="flex items-start gap-2 text-gray-600">🧰 Trolleys, blankets & straps</li>
        <li className="flex items-start gap-2 text-gray-600">📏 {blok.dimensions}</li>
        <li className="flex items-start gap-2 text-gray-600">✅ Fully insured</li>
      </ul>
      <button
        onClick={() => scrollTo("contact")}
        className={`w-full py-3 rounded-xl font-black text-sm font-['Montserrat'] transition-all hover:scale-[1.02] ${
          blok.popular
            ? "bg-[hsl(37,91%,55%)] text-gray-900 hover:bg-[hsl(37,91%,48%)] shadow-md"
            : "bg-[hsl(174,65%,28%)] text-white hover:bg-[hsl(174,70%,18%)]"
        }`}
      >
        Get a Quote
      </button>
    </div>
  );
}
