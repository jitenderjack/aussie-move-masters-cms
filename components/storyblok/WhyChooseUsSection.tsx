import * as Icons from 'lucide-react';

interface FeatureItem {
  component: string;
  icon: string;
  title: string;
  description: string;
  _uid: string;
}

interface WhyChooseUsProps {
  blok: {
    heading: string;
    features: FeatureItem[];
  };
}

export default function WhyChooseUsSection({ blok }: WhyChooseUsProps) {
  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className="w-10 h-10" /> : null;
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          {blok.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blok.features.map((feature) => (
            <div key={feature._uid} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-full mb-4">
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
