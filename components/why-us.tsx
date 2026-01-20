"use client";

import { motion } from "framer-motion";
import { Zap, Wallet, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant-Load Tech",
    description: "Sites that load 3x faster than the competition.",
  },
  {
    icon: Wallet,
    title: "Zero Commission",
    description: "You keep 100% of your profits. No marketplace cuts.",
  },
  {
    icon: ShieldCheck,
    title: "Full Compliance",
    description: "We handle GST, FSSAI, and Payment Gateway KYC.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Why Choose <span className="text-gold">GrowthSuite?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We deliver results that matter to your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
