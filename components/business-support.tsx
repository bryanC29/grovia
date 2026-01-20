"use client";

import { motion } from "framer-motion";
import { FileText, Truck, Store, Monitor } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Government Licenses",
    description: "GST, MSME, FSSAI, Shop Act",
  },
  {
    icon: Truck,
    title: "Logistics Network",
    description: "Delivery to 29,000+ pincodes",
  },
  {
    icon: Store,
    title: "Marketplace Onboarding",
    description: "Amazon/Flipkart Setup",
  },
  {
    icon: Monitor,
    title: "Digital Consult",
    description: "Billing/ERP Software Setup",
  },
];

export function BusinessSupport() {
  return (
    <section id="services" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We Handle The{" "}
            <span className="text-gold">Regulatory Headache</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Focus on your business while we take care of the paperwork
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-light rounded-xl p-6 border border-navy-lighter hover:border-gold/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
