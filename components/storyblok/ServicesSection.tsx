import * as Icons from 'lucide-react';

interface ServiceItem {
  component: string;
  icon: string;
  title: string;
  description: string;
  _uid: string;
}

interface ServicesProps {
  blok: {
    heading: string;
    subheading?: string;
    services: ServiceItem[];
  };
}

export default function ServicesSection({ blok }: ServicesProps) {
  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className="w-12 h-12" /> : null;
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blok.services.map((service) => (
            <div
              key={service._uid}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-teal-600 mb-4">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
