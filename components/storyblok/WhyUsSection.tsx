"use client";
import WhyUsFeature from './WhyUsFeature';

export default function WhyUsSection({ blok }: any) {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-[hsl(174,65%,28%)] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-black text-3xl lg:text-4xl mb-3">{blok.title}</h2>
          <p className="opacity-80 max-w-2xl mx-auto">{blok.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blok.features?.map((feature: any) => (
            <WhyUsFeature blok={feature} key={feature._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
