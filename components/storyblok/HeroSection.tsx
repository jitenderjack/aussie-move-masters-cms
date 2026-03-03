"use client";

import { useState } from "react";
import { Phone, Mail, Send, CheckCircle, Shield, Star, Clock } from "lucide-react";
import { storyblokEditable } from "@storyblok/react/rsc";

interface HeroSectionProps {
  blok: {
    headline: string;
    subheadline: string;
    description: string;
    background_image?: {
      filename: string;
      alt?: string;
    };
    phone: string;
    email: string;
    trust_badges?: Array<{
      icon: string;
      label: string;
      _uid: string;
    }>;
  };
}

const iconMap: Record<string, any> = {
  shield: Shield,
  star: Star,
  clock: Clock,
  check: CheckCircle,
};

export default function HeroSection({ blok }: HeroSectionProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    movingFrom: "",
    movingTo: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: "", email: "", phone: "", movingFrom: "", movingTo: "", date: "" });
  };

  const inputCls =
    "w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[hsl(174,70%,28%)] focus:border-transparent transition-all";

  return (
    <div
      {...storyblokEditable(blok)}
      id="hero"
      className="relative min-h-[calc(100vh-88px)] flex items-center overflow-hidden"
    >
      {/* Background */}
      {blok.background_image?.filename && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${blok.background_image.filename})` }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to left, hsla(174,70%,8%,0.82) 0%, hsla(174,70%,8%,0.55) 55%, hsla(174,70%,8%,0.15) 100%)",
            }}
          />
        </>
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* LEFT — Form card */}
        <div className="w-full lg:w-[420px] xl:w-[450px] shrink-0">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 lg:p-7">
            <div className="text-center mb-5">
              <div className="inline-block bg-[hsl(38,92%,64%)]/10 text-[hsl(38,92%,64%)] text-xs font-black px-3 py-1 rounded-full mb-2 font-['Montserrat']">
                FREE — NO OBLIGATION
              </div>
              <h2 className="font-black text-gray-900 text-xl font-['Montserrat']">
                Request a Free Quote
              </h2>
              <p className="text-gray-600 text-xs mt-1">We'll get back to you within 30 minutes</p>
            </div>

            {/* Quick-call strip */}
            <div className="flex gap-2 mb-4">
              <a
                href={`tel:${blok.phone.replace(/\s/g, "")}`}
                className="flex-1 flex items-center justify-center gap-1.5 bg-[hsl(174,70%,28%)] text-white font-bold py-2.5 rounded-lg text-xs hover:bg-[hsl(174,70%,22%)] transition-colors font-['Montserrat']"
              >
                <Phone className="w-3.5 h-3.5" /> {blok.phone}
              </a>
              <a
                href={`mailto:${blok.email}`}
                className="flex-1 flex items-center justify-center gap-1.5 bg-gray-100 text-gray-900 font-semibold py-2.5 rounded-lg text-xs hover:bg-gray-200 transition-colors font-['Montserrat']"
              >
                <Mail className="w-3.5 h-3.5" /> Email Us
              </a>
            </div>

            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 text-xs text-gray-600 font-['Montserrat']">
                  or fill the form
                </span>
              </div>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 gap-3">
                <CheckCircle className="w-14 h-14 text-[hsl(174,70%,28%)]" />
                <p className="font-black text-gray-900 text-center font-['Montserrat'] text-lg">
                  Quote request received!
                </p>
                <p className="text-gray-600 text-sm text-center">
                  We'll call you back within 30 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className={inputCls}
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    type="tel"
                    className={inputCls}
                  />
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    type="email"
                    className={inputCls}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="movingFrom"
                    value={form.movingFrom}
                    onChange={handleChange}
                    placeholder="Moving From"
                    className={inputCls}
                  />
                  <input
                    name="movingTo"
                    value={form.movingTo}
                    onChange={handleChange}
                    placeholder="Moving To"
                    className={inputCls}
                  />
                </div>
                <input
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  type="date"
                  className={inputCls}
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[hsl(38,92%,64%)] text-gray-900 font-black py-3.5 rounded-xl hover:bg-[hsl(38,92%,58%)] transition-all text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] font-['Montserrat']"
                >
                  <Send className="w-4 h-4" />
                  GET MY FREE QUOTE
                </button>
                <p className="text-center text-xs text-gray-500">
                  🔒 Your details are safe with us. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* RIGHT — Headline */}
        <div className="flex-1 text-white order-first lg:order-last text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[hsl(38,92%,64%)]/20 border border-[hsl(38,92%,64%)]/40 text-[hsl(38,92%,64%)] text-xs font-bold px-3 py-1 rounded-full mb-5 font-['Montserrat']">
            <Star className="w-3 h-3 fill-current" /> {blok.subheadline}
          </div>
          <h1
            className="font-black leading-tight mb-4 drop-shadow-md font-['Montserrat']"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}
            dangerouslySetInnerHTML={{ __html: blok.headline }}
          />
          <p className="opacity-85 mb-7 max-w-lg mx-auto lg:mx-0 leading-relaxed text-base">
            {blok.description}
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
            {blok.trust_badges?.map((badge) => {
              const IconComponent = iconMap[badge.icon] || Shield;
              return (
                <div
                  key={badge._uid}
                  className="flex items-center gap-1.5 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full font-['Montserrat']"
                >
                  <IconComponent className="w-3.5 h-3.5 text-[hsl(38,92%,64%)]" /> {badge.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
