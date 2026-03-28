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

const faqs = [
  {
    question: "What types of projects do you take on?",
    answer: "We specialize in modern web applications, mobile apps, custom software solutions, and comprehensive UI/UX design. Our team handles everything from startup MVPs to enterprise-scale systems."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary greatly depending on scope and complexity. A landing page might take a few weeks, while a full-scale web application could take 3-6 months. We provide clear, realistic timelines during our initial discovery phase."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Absolutely. We offer competitive retainer packages and robust warranties to ensure your application remains secure, updated, and performing optimally long after the initial launch."
  },
  {
    question: "What technology stack do you use?",
    answer: "While we are technology agnostic, our preferred modern stack includes React, Next.js, Tailwind CSS, TypeScript, Node.js, and headless CMS platforms like Sanity. We choose the right tools for your specific requirements."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/40">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="px-3 py-1 text-sm font-medium border-border/50 bg-muted/50">
            FAQ
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Got questions?<br/>
            <span className="text-muted-foreground">We have answers.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about partnering with Viocodes for your next big digital initiative. If you have anything else in mind, don't hesitate to reach out!
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/40 px-6 bg-card rounded-xl mb-4 shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-left text-lg font-bold hover:text-cyan-500 py-6 transition-colors group">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pr-12">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
