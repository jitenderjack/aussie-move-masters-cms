import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import HowItWorksSection from './HowItWorksSection';
import PricingSection from './PricingSection';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import ContactSection from './ContactSection';

export const Components = {
  hero: HeroSection,
  services: ServicesSection,
  why_choose_us: WhyChooseUsSection,
  how_it_works: HowItWorksSection,
  pricing: PricingSection,
  testimonials: TestimonialsSection,
  faq: FAQSection,
  contact: ContactSection,
};

export type ComponentType = keyof typeof Components;
