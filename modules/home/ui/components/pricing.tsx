"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { motion, type Variants } from 'motion/react';

const plans = [
  {
    name: "Startup MVP",
    price: "$4,500+",
    description: "Perfect for establishing your digital footprint and validating a product.",
    features: [
      "Custom landing page or simple app",
      "Tailwind CSS & Shadcn Design System",
      "Responsive on all devices",
      "Basic SEO integration",
      "1 month post-launch support"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Full-Scale Launch",
    price: "$12,000+",
    description: "Comprehensive end-to-end engineering for serious businesses.",
    features: [
      "Custom Full-Stack Web App",
      "Authentication & Scalable Database",
      "Complex interactive workflows",
      "Headless CMS Integration",
      "Performance optimization",
      "3 months priority support"
    ],
    popular: true,
    cta: "Start Your Project"
  },
  {
    name: "Enterprise Retainer",
    price: "Custom",
    description: "Ongoing elite-tier development and maintenance support.",
    features: [
      "Dedicated senior engineering team",
      "Architecture & strategy consulting",
      "Continuous integration & deployment",
      "24/7 priority SLA support",
      "Unlimited bug fixes and updates"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export const PricingSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/40 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vio-gradient opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="text-center mb-20 space-y-4 relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="px-3 py-1 text-sm font-medium border-cyan-500/20 bg-cyan-500/5 text-cyan-400">
            Pricing
          </Badge>
        </motion.div>
        <motion.h2 
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Transparent, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b51e0] to-[#2bbdd7]">scalable</span> pricing.
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We offer flexible pricing models suited for seed-stage startups and massive enterprises alike. No hidden fees.
        </motion.p>
      </div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {plans.map((plan, index) => (
          <motion.div key={index} variants={itemVariants} className="w-full h-full">
            <div className={`relative p-8 rounded-3xl border flex flex-col h-full bg-card/60 backdrop-blur-sm transition-all duration-300 ${
                plan.popular 
                ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20 scale-100 lg:scale-105 z-10' 
                : 'border-white/10 hover:border-white/30 z-0'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                   <Badge className="bg-gradient-to-r from-[#9b51e0] to-[#2bbdd7] text-white hover:opacity-90 border-0 px-4 py-1 text-sm font-bold shadow-lg shadow-cyan-500/20">
                     Most Popular
                   </Badge>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold tracking-tight mb-2 text-muted-foreground uppercase">{plan.name}</h3>
                <div className="text-5xl font-black tracking-tight mb-4 text-foreground">{plan.price}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-start text-sm font-medium gap-3">
                    <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? 'default' : 'outline'} 
                size="lg" 
                className={`w-full h-14 rounded-xl text-base font-bold transition-all ${plan.popular ? 'bg-gradient-to-r from-[#9b51e0] via-[#5b86e5] to-[#2bbdd7] hover:opacity-90 border-0 text-white hover:scale-[1.02]' : 'border-white/20 hover:bg-white/5'}`}
              >
                {plan.cta}
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
