"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import { brandGradient } from '@/lib/brand';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: "Startup MVP",
    price: "$4,500+",
    description: "Establish your digital footprint and validate your product idea fast.",
    features: [
      "Custom landing page or simple app",
      "Tailwind CSS & Shadcn Design System",
      "Fully responsive across all devices",
      "Basic SEO integration",
      "1 month post-launch support",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Full-Scale Launch",
    price: "$12,000+",
    description: "End-to-end engineering for businesses ready to scale and grow.",
    features: [
      "Custom full-stack web application",
      "Authentication & scalable database",
      "Complex interactive workflows",
      "Headless CMS integration",
      "Performance & SEO optimization",
      "3 months priority support",
    ],
    popular: true,
    cta: "Start Your Project",
  },
  {
    name: "Enterprise Retainer",
    price: "Custom",
    description: "Ongoing elite-tier development and strategic technical support.",
    features: [
      "Dedicated senior engineering team",
      "Architecture & strategy consulting",
      "Continuous integration & deployment",
      "24/7 priority SLA support",
      "Unlimited bug fixes and updates",
    ],
    popular: false,
    cta: "Contact Us",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

export const PricingSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 w-full relative overflow-hidden bg-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-violet-600 opacity-[0.04] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Badge variant="outline" className="px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border-violet-500/30 bg-violet-500/10 text-violet-300">
              Pricing
            </Badge>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transparent,{" "}
            <span className={brandGradient}>flexible</span> pricing.
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-white/50 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Suited for seed-stage startups to large enterprises. No hidden fees, ever.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn("w-full h-full", plan.popular && "lg:scale-105 z-10")}
            >
              <div className={cn(
                "relative p-8 rounded-2xl border flex flex-col h-full backdrop-blur-xl transition-all duration-500 group",
                plan.popular
                  ? "bg-white/6 border-violet-500/40 shadow-[0_0_40px_rgba(139,92,246,0.12)]"
                  : "bg-white/3 border-white/8 hover:border-white/15 hover:bg-white/5"
              )}>
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge className="bg-linear-to-r from-fuchsia-600 via-violet-600 to-sky-400 text-white border-0 px-4 py-1 text-xs font-bold tracking-wider uppercase shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="mb-7">
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">{plan.name}</p>
                  <div className="text-5xl font-black tracking-tight text-white mb-3">{plan.price}</div>
                  <p className="text-sm text-white/50 leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-3.5 mb-8 grow">
                  {plan.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className={cn("w-4 h-4 shrink-0 mt-0.5", plan.popular ? "text-violet-400" : "text-white/40")} />
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className={cn(
                    "w-full rounded-xl font-semibold transition-all",
                    plan.popular
                      ? "bg-linear-to-r from-fuchsia-600 via-violet-600 to-sky-400 hover:opacity-90 text-white border-0 shadow-lg shadow-violet-500/25"
                      : "bg-white/5 border border-white/15 text-white/80 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};