"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Digital Dukaan",
    subtitle: "The Essentials",
    price: "₹9,999",
    featured: false,
    features: [
      "Professional Brand Identity (Logo + Visiting Card)",
      "Google Business Verification (Maps)",
      '"Digital Visiting Card" Website',
      "Domain Setup Assistance",
    ],
  },
  {
    name: "E-Commerce Launchpad",
    subtitle: "Best Seller",
    price: "₹29,999",
    featured: true,
    features: [
      '"Instant-Load" Online Store (Next.js)',
      "Direct-to-Bank Payments (UPI/Cards)",
      "Automated Logistics Integration (Shiprocket)",
      "Owner's Admin Dashboard",
      "3 Social Media Launch Posts",
    ],
  },
  {
    name: "Brand Authority",
    subtitle: "Corporate",
    price: "₹59,999",
    featured: false,
    features: [
      "Multi-Page Corporate Website (SEO Optimized)",
      "Professional Email Suite (sales@company.com)",
      "Monthly Social Media Management (7 Posts)",
      "Annual Technical Maintenance (AMC)",
    ],
  },
];

export function Packages() {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Choose Your <span className="text-gold">Package</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparent pricing with no hidden costs. Start your digital journey
            today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative rounded-2xl p-8 transition-all",
                pkg.featured
                  ? "bg-navy text-white shadow-2xl scale-105 border-2 border-gold"
                  : "bg-white border border-border shadow-sm hover:shadow-md"
              )}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-gold text-navy px-4 py-1 rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4 fill-current" />
                    {pkg.subtitle}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className={cn(
                    "text-xl font-bold mb-1",
                    pkg.featured ? "text-white" : "text-navy"
                  )}
                >
                  {pkg.name}
                </h3>
                {!pkg.featured && (
                  <p className="text-muted-foreground text-sm">{pkg.subtitle}</p>
                )}
                <div className="mt-4">
                  <span
                    className={cn(
                      "text-4xl font-bold",
                      pkg.featured ? "text-gold" : "text-navy"
                    )}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={cn(
                      "text-sm ml-1",
                      pkg.featured ? "text-white/70" : "text-muted-foreground"
                    )}
                  >
                    one-time
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={cn(
                        "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                        pkg.featured ? "bg-gold/20" : "bg-gold/10"
                      )}
                    >
                      <Check
                        className={cn(
                          "w-3 h-3",
                          pkg.featured ? "text-gold" : "text-gold"
                        )}
                      />
                    </div>
                    <span
                      className={cn(
                        "text-sm",
                        pkg.featured ? "text-white/90" : "text-muted-foreground"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={cn(
                  "w-full font-semibold",
                  pkg.featured
                    ? "bg-gold hover:bg-gold-hover text-navy"
                    : "bg-navy hover:bg-navy-light text-white"
                )}
              >
                <a href="#contact">Get Started</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
