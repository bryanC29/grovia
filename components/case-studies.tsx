"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, ShoppingCart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    client: "Spice Heritage",
    industry: "Food & Beverages",
    location: "Jaipur, Rajasthan",
    challenge:
      "Traditional spice brand struggling to reach customers beyond local markets with zero online presence.",
    solution:
      "Built a complete e-commerce store with nationwide shipping integration, FSSAI compliance, and marketplace onboarding.",
    results: [
      { metric: "340%", label: "Revenue Growth" },
      { metric: "15K+", label: "Monthly Orders" },
      { metric: "28", label: "States Reached" },
    ],
    testimonial:
      "GrowthSuite transformed our family business. We went from a local shop to a national brand in just 6 months.",
    author: "Rajesh Sharma",
    role: "Founder",
    icon: ShoppingCart,
    color: "bg-amber-500",
  },
  {
    client: "FitGear India",
    industry: "Sports & Fitness",
    location: "Mumbai, Maharashtra",
    challenge:
      "New fitness equipment brand losing 30% margins to marketplace commissions and facing fulfillment delays.",
    solution:
      "Launched zero-commission D2C store with integrated logistics network and automated inventory management.",
    results: [
      { metric: "₹2.5Cr", label: "Annual Sales" },
      { metric: "0%", label: "Commission Paid" },
      { metric: "2 Days", label: "Avg Delivery" },
    ],
    testimonial:
      "The instant-load website and seamless checkout doubled our conversion rate. No more marketplace dependency!",
    author: "Priya Mehta",
    role: "Co-Founder",
    icon: TrendingUp,
    color: "bg-emerald-500",
  },
  {
    client: "Artisan Weaves",
    industry: "Handloom & Textiles",
    location: "Varanasi, UP",
    challenge:
      "Cooperative of 200+ weavers with no digital footprint, missing out on the growing online handloom market.",
    solution:
      "Created brand identity, GST registration, e-commerce platform, and direct B2B marketplace connections.",
    results: [
      { metric: "200+", label: "Artisans Employed" },
      { metric: "5X", label: "Income Increase" },
      { metric: "12", label: "Countries Exported" },
    ],
    testimonial:
      "They didn't just build a website. They gave our artisans a future and our heritage a global stage.",
    author: "Meera Devi",
    role: "Cooperative Head",
    icon: Users,
    color: "bg-rose-500",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-off-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="bg-gold/10 text-gold hover:bg-gold/20 mb-4">
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-balance">
            Real Results for Real Businesses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            See how we've helped Indian businesses build their digital
            infrastructure and achieve remarkable growth.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-10">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Left Column - Client Info */}
                    <div className="bg-navy p-6 md:p-8 text-white">
                      <div
                        className={`w-12 h-12 ${study.color} rounded-lg flex items-center justify-center mb-4`}
                      >
                        <study.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-1">{study.client}</h3>
                      <p className="text-white/70 text-sm mb-4">
                        {study.industry}
                      </p>
                      <p className="text-white/50 text-xs flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                        {study.location}
                      </p>

                      <div className="mt-6 pt-6 border-t border-white/10">
                        <p className="text-sm text-white/60 mb-2">Challenge:</p>
                        <p className="text-sm text-white/90 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                    </div>

                    {/* Middle Column - Solution & Results */}
                    <div className="p-6 md:p-8 bg-white">
                      <p className="text-sm text-muted-foreground mb-2">
                        Our Solution:
                      </p>
                      <p className="text-navy leading-relaxed mb-8">
                        {study.solution}
                      </p>

                      <div className="grid grid-cols-3 gap-4">
                        {study.results.map((result) => (
                          <div key={result.label} className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-gold mb-1">
                              {result.metric}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Testimonial */}
                    <div className="bg-off-white p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <svg
                          className="w-8 h-8 text-gold/30 mb-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-navy italic leading-relaxed">
                          "{study.testimonial}"
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-navy">
                            {study.author}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {study.role}, {study.client}
                          </p>
                        </div>
                        <a
                          href="#packages"
                          className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-gold-hover transition-colors"
                        >
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Ready to become our next success story?
          </p>
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%20saw%20your%20case%20studies.%20I%20want%20to%20discuss%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-light transition-colors"
          >
            Schedule a Free Strategy Call
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
