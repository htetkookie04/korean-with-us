import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Korean With Us - Learn Korean Language & Culture</title>
        <meta name="description" content="Join Korean With Us language center in Myanmar. Learn Korean from beginner to advanced levels with experienced teachers. TOPIK preparation, speaking practice, and cultural immersion." />
        <meta name="keywords" content="Korean language, Korean classes, TOPIK preparation, Myanmar, Korean culture, language learning" />
      </Helmet>
      <div className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </>
  );
}


