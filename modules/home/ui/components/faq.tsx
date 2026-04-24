"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import { brandGradient } from '@/lib/brand';

const faqs = [
  {
    question: "What types of projects do you take on?",
    answer: "We specialize in modern web applications, mobile apps, custom software, and UI/UX design. Our team handles everything from startup MVPs to enterprise-scale systems.",
  },
  {
    question: "How long does a typical project take?",
    answer: "It depends on scope. A landing page can take a few weeks; a full-scale web app typically takes 3–6 months. We provide clear, realistic timelines after an initial discovery call.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes. We offer retainer packages and post-launch warranties to keep your product secure, up-to-date, and performing optimally long after launch.",
  },
  {
    question: "What technology stack do you use?",
    answer: "Our preferred stack is Next.js, TypeScript, Tailwind CSS, NestJS, and Drizzle ORM — with integrations for AI (Groq, OpenAI, Gemini), voice (Vapi), and auth (Clerk). We choose the right tools for your specific needs.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 w-full relative overflow-hidden bg-black">
      <div className="absolute bottom-1/4 left-1/4 w-100 h-100 bg-fuchsia-600 opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-20 items-start">
          {/* Left */}
          <motion.div
            className="space-y-5 lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border-violet-500/30 bg-violet-500/10 text-violet-300">
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Got questions?
              <br />
              <span className={brandGradient}>We have answers.</span>
            </h2>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Everything you need to know about working with Viocodes. Still have questions? Reach out anytime.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-white/8 px-6 bg-white/3 backdrop-blur-md rounded-2xl hover:border-white/15 hover:bg-white/5 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold hover:text-violet-300 py-5 transition-colors text-white/90 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-white/50 leading-relaxed pb-5 pr-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};