interface StepItem {
  component: string;
  number: string;
  title: string;
  description: string;
  _uid: string;
}

interface HowItWorksProps {
  blok: {
    heading: string;
    subheading?: string;
    steps: StepItem[];
  };
}

export default function HowItWorksSection({ blok }: HowItWorksProps) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blok.steps.map((step, index) => (
            <div key={step._uid} className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="text-6xl font-bold text-teal-100 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < blok.steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-teal-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
