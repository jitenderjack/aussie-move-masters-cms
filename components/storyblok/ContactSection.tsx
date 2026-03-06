"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { storyblokEditable } from "@storyblok/react/rsc";

interface ContactSectionProps {
  blok: {
    heading?: string;
    subheading?: string;
    phone: string;
    email: string;
    address: string;
    hours?: string;
  };
}

export default function ContactSection({ blok }: ContactSectionProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    movingFrom: "",
    movingTo: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({
      name: "",
      email: "",
      phone: "",
      movingFrom: "",
      movingTo: "",
      date: "",
      message: "",
    });
  };

  const inputCls =
    "w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all";

  const suburbs = blok.suburbs || [
    "Fremantle",
    "Joondalup",
    "Subiaco",
    "Scarborough",
    "Cottesloe",
    "Claremont",
    "Rockingham",
    "South Perth",
    "Morley",
    "Wanneroo",
    "Midland",
    "Baldivis",
  ];

  return (
    <section
      {...storyblokEditable(blok)}
      id="contact"
      className="py-16 lg:py-24 bg-[hsl(174,70%,28%)] text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-[hsl(38,92%,64%)]/20 text-[hsl(38,92%,64%)] text-xs font-bold px-3 py-1 rounded-full mb-3 font-['Montserrat']">
            GET IN TOUCH
          </span>
          <h2 className="font-black text-3xl lg:text-4xl font-['Montserrat'] mb-3">
            {blok.heading || 'Get Your Free Quote Today'}
          </h2>
          <div className="w-16 h-1 bg-[hsl(38,92%,64%)] mx-auto rounded-full mb-4" />
          <p className="opacity-80 max-w-xl mx-auto">{blok.subheading}</p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: contact info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[hsl(38,92%,64%)]" />
              </div>
              <div>
                <p className="font-bold font-['Montserrat'] text-sm mb-0.5">
                  Call Us Now
                </p>
                <a
                  href={`tel:${blok.phone.replace(/\s/g, "")}`}
                  className="text-2xl font-black font-['Montserrat'] text-[hsl(38,92%,64%)] hover:opacity-80 transition-opacity"
                >
                  {blok.phone}
                </a>
                <p className="text-xs opacity-60 mt-0.5">{blok.hours || '7 days · 7am – 7pm'}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[hsl(38,92%,64%)]" />
              </div>
              <div>
                <p className="font-bold font-['Montserrat'] text-sm mb-0.5">Email Us</p>
                <a
                  href={`mailto:${blok.email}`}
                  className="text-sm hover:opacity-80 transition-opacity opacity-90 break-all"
                >
                  {blok.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[hsl(38,92%,64%)]" />
              </div>
              <div>
                <p className="font-bold font-['Montserrat'] text-sm mb-0.5">Location</p>
                <p className="text-sm opacity-90">{blok.address}</p>
                <p className="text-xs opacity-60">Serving all Perth metro suburbs</p>
              </div>
            </div>
            <div className="bg-white/8 rounded-2xl p-5 border border-white/15">
              <p className="font-bold font-['Montserrat'] text-sm mb-3">
                Suburbs we serve:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {suburbs.map((suburb) => (
                  <span
                    key={suburb}
                    className="text-[10px] bg-white/10 px-2 py-1 rounded-full opacity-80"
                  >
                    {suburb}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Right: Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
            <h3 className="font-black text-gray-900 text-xl font-['Montserrat'] mb-5">
              Request Your Free Quote
            </h3>
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
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Additional details (stairs, fragile items, timing…)"
                  rows={3}
                  className={`${inputCls} resize-none`}
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
      </div>
    </section>
  );
}
