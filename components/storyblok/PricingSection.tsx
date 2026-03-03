import { Check } from 'lucide-react';

interface PricingCard {
  component: string;
  truck_size: string;
  capacity: string;
  price: string;
  features: string;
  is_popular: boolean;
  _uid: string;
}

interface PricingProps {
  blok: {
    heading: string;
    subheading?: string;
    packages: PricingCard[];
  };
}

export default function PricingSection({ blok }: PricingProps) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {blok.heading}
          </h2>
          {blok.subheading && (
            <p className="text-xl text-gray-600">
              {blok.subheading}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blok.packages.map((pkg) => {
            const features = pkg.features.split('\n').filter(f => f.trim());
            return (
              <div
                key={pkg._uid}
                className={`relative bg-white border-2 rounded-lg p-8 ${
                  pkg.is_popular
                    ? 'border-teal-600 shadow-xl scale-105'
                    : 'border-gray-200 shadow-md'
                }`}
              >
                {pkg.is_popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.truck_size}
                  </h3>
                  <p className="text-gray-600 mb-4">{pkg.capacity}</p>
                  <div className="text-4xl font-bold text-teal-600">
                    {pkg.price}
                  </div>
                </div>
                <ul className="space-y-3">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full mt-8 py-3 rounded-lg font-semibold transition-colors ${
                  pkg.is_popular
                    ? 'bg-teal-600 hover:bg-teal-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  Get Quote
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
