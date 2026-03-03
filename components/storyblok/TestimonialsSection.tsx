import { Star } from 'lucide-react';

interface TestimonialItem {
  component: string;
  name: string;
  rating: number;
  text: string;
  location?: string;
  _uid: string;
}

interface TestimonialsProps {
  blok: {
    heading: string;
    items: TestimonialItem[];
  };
}

export default function TestimonialsSection({ blok }: TestimonialsProps) {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          {blok.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blok.items.map((testimonial) => (
            <div key={testimonial._uid} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                {testimonial.location && (
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
