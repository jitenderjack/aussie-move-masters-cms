"use client";
import { Home, Building2, Package, Truck, Clock, MapPin } from "lucide-react";

const iconMap: Record<string, any> = {
  Home, Building2, Package, Truck, Clock, MapPin
};

interface Service {
  _uid: string;
  icon: string;
  title: string;
  description: string;
  badge?: string;
  badge_type?: string;
}

interface EnhancedServicesProps {
  blok: {
    heading: string;
    subheading?: string;
    services: Service[];
  };
}

export default function EnhancedServices({ blok }: EnhancedServicesProps) {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[hsl(38,92%,64%)]/10 text-[hsl(38,92%,64%)] text-xs font-bold px-3 py-1 rounded-full mb-3">
            OUR SERVICES
          </span>
          <h2 className="font-black text-3xl lg:text-4xl text-gray-900 mb-3">{blok.heading}</h2>
          <div className="w-16 h-1 bg-[hsl(38,92%,64%)] mx-auto rounded-full mb-4" />
          {blok.subheading && (
            <p className="text-gray-600 max-w-2xl mx-auto text-base">{blok.subheading}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blok.services?.map((service) => {
            const Icon = iconMap[service.icon] || Package;
            const badgeColors: Record<string, string> = {
              popular: "bg-[hsl(38,92%,64%)] text-gray-900",
              business: "bg-blue-500 text-white",
              urgent: "bg-red-500 text-white",
              budget: "bg-green-500 text-white"
            };
            const badgeColor = badgeColors[service.badge_type || "popular"] || badgeColors.popular;

            return (
              <div key={service._uid} className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 group">
                {service.badge && (
                  <div className={`absolute -top-3 left-6 ${badgeColor} text-xs font-black px-3 py-1 rounded-full shadow-md`}>
                    {service.badge}
                  </div>
                )}
                <div className="text-[hsl(174,70%,28%)] mb-4 mt-2">
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <button className="inline-flex items-center gap-2 text-[hsl(174,70%,28%)] font-semibold text-sm hover:gap-3 transition-all group-hover:text-[hsl(38,92%,64%)]">
                  Get a Quote
                  <span>→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
