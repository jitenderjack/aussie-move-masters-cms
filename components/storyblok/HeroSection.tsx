interface HeroProps {
  blok: {
    heading: string;
    subheading: string;
    background_image?: {
      filename: string;
      alt?: string;
    };
    show_quote_form: boolean;
  };
}

export default function HeroSection({ blok }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-teal-600 to-teal-800 text-white py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            {blok.heading}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            {blok.subheading}
          </p>
          {blok.show_quote_form && (
            <div className="mt-8">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors">
                Get Your Free Quote
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
