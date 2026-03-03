import { Phone, Mail } from 'lucide-react';

interface ContactProps {
  blok: {
    heading: string;
    subheading?: string;
    phone?: string;
    email?: string;
  };
}

export default function ContactSection({ blok }: ContactProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">
            {blok.heading}
          </h2>
          {blok.subheading && (
            <p className="text-xl opacity-90">
              {blok.subheading}
            </p>
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
          {blok.phone && (
            <a
              href={`tel:${blok.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>{blok.phone}</span>
            </a>
          )}
          {blok.email && (
            <a
              href={`mailto:${blok.email}`}
              className="flex items-center gap-3 bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>{blok.email}</span>
            </a>
          )}
        </div>
        <div className="bg-white text-gray-900 rounded-lg p-8 max-w-2xl mx-auto">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                required
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              required
            />
            <textarea
              placeholder="Tell us about your move..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Get My Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
