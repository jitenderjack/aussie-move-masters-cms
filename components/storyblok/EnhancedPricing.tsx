"use client";
import { Check } from "lucide-react";

interface PricingTier {
  _uid: string;
  title: string;
  subtitle: string;
  price: string;
  features: string;
  is_popular?: boolean;
  badge?: string;
}

interface EnhancedPricingProps {
  blok: {
    heading: string;
    subheading?: string;
    tiers: PricingTier[];
  };
}

export default function EnhancedPricing({ blok }: EnhancedPricingProps) {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[hsl(38,92%,64%)]/10 text-[hsl(38,92%,64%)] text-xs font-bold px-3 py-1 rounded-full mb-3">
            PRICING
          </span>
          <h2 className="font-black text-3xl lg:text-4xl text-gray-900 mb-3">{blok.heading}</h2>
          <div className="w-16 h-1 bg-[hsl(38,92%,64%)] mx-auto rounded-full mb-4" />
          {blok.subheading && (
            <p className="text-gray-600 max-w-2xl mx-auto">{blok.subheading}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blok.tiers?.map((tier) => {
            const features = tier.features?.split('\n').filter(f => f.trim()) || [];
            
            return (
              <div
                key={tier._uid}
                className={`relative bg-white rounded-xl p-6 ${
                  tier.is_popular
                    ? 'border-2 border-[hsl(174,70%,28%)] shadow-xl scale-105'
                    : 'border border-gray-200 shadow-md'
                } transition-all hover:shadow-xl`}
              >
                {tier.is_popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[hsl(38,92%,64%)] text-gray-900 text-xs font-black px-4 py-1 rounded-full shadow-md">
                    BEST VALUE
                  </div>
                )}
                {tier.badge && !tier.is_popular && (
                  <div className="absolute -top-3 left-6 bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {tier.badge}
                  </div>
                )}
                
                <div className="text-center mb-6 mt-2">
                  <div className="text-sm text-gray-500 mb-1">{tier.badge || tier.subtitle}</div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{tier.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tier.subtitle}</p>
                  <div className="text-4xl font-black text-[hsl(174,70%,28%)]">
                    {tier.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[hsl(174,70%,28%)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-bold text-sm transition-all ${
                    tier.is_popular
                      ? 'bg-[hsl(174,70%,28%)] text-white hover:bg-[hsl(174,70%,22%)]'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Quote
                </button>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-600 mt-8">
          All prices are hourly rates. Minimum 2 hours applies.{' '}
          <strong>No call-out fee</strong> for metro Perth.{' '}
          <button className="text-[hsl(174,70%,28%)] font-semibold hover:underline">
            Contact us
          </button>{' '}
          for a tailored quote.
        </p>
      </div>
    </section>
  );
}
