"use client";

import React from 'react'
import { TestimonialsSection } from '../components/testimonials'
import { FAQSection } from '../components/faq'
import { CTASection } from '../components/cta'
import { PricingSection } from '../components/pricing'
import { Project } from '@/types/project'
import { HeroSection } from '../components/hero-section';
import { AboutSection } from '../components/about';
import { FeaturedSection } from '../components/featured';
import { PlaceShader } from '../components/place-shader';

interface HomeViewProps {
  projects: Project[];
}

export default function HomeView({ projects }: HomeViewProps) {
  return (
    <>
    <PlaceShader/>
    
<div className="flex flex-col min-h-screen bg-black overflow-x-hidden">    
      {/* ABOUT SECTION (What We Offer) */}
      <AboutSection />

      {/* FEATURED PROJECTS SECTION */}
      <div className="border-t border-white/10">
        <FeaturedSection projects={projects} />
      </div>

      {/* PRICING SECTION */}
      <PricingSection />

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* FAQ SECTION */}
      <FAQSection />

      {/* CTA SECTION */}
      <CTASection />

    </div>
    </>
  )
}
