"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Building2,
  FileText,
  Truck,
  Store,
  Monitor,
  Megaphone,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import Link from "next/link";

const mainServices = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom-built, lightning-fast websites using Next.js technology. Mobile-responsive, SEO-optimized, and designed to convert visitors into customers.",
    features: [
      "Instant-load technology (under 2 seconds)",
      "Mobile-first responsive design",
      "SEO optimization included",
      "SSL security certificate",
      "1-year free hosting",
      "Admin dashboard for easy updates",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Complete online store setup with direct payment integration. No marketplace commissions, no middlemen - your sales, your profits.",
    features: [
      "Zero commission on sales",
      "UPI, Cards, Net Banking integration",
      "Automated inventory management",
      "Order tracking system",
      "Customer management dashboard",
      "Shiprocket logistics integration",
    ],
  },
  {
    icon: Building2,
    title: "Corporate Branding",
    description:
      "Establish your brand authority with professional identity design, corporate websites, and ongoing digital presence management.",
    features: [
      "Logo & brand identity design",
      "Professional email setup",
      "Multi-page corporate website",
      "Brand guidelines document",
      "Visiting card & letterhead design",
      "Social media branding kit",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Strategic social media management and content creation to build your online presence and engage your target audience.",
    features: [
      "Monthly content calendar",
      "7-15 posts per month",
      "Graphic design included",
      "Hashtag research & optimization",
      "Engagement monitoring",
      "Monthly performance reports",
    ],
  },
];

const supportServices = [
  {
    icon: FileText,
    title: "Government Licenses",
    description:
      "Complete assistance with all business registrations and licenses required for legal operation.",
    items: [
      { name: "GST Registration", price: "₹1,499" },
      { name: "MSME/Udyam Registration", price: "₹999" },
      { name: "FSSAI License (Food Business)", price: "₹2,999" },
      { name: "Shop & Establishment Act", price: "₹1,999" },
      { name: "Trade License", price: "₹2,499" },
      { name: "Import Export Code (IEC)", price: "₹3,999" },
    ],
  },
  {
    icon: Truck,
    title: "Logistics Network",
    description:
      "Integrated shipping solutions to deliver your products across India efficiently and affordably.",
    items: [
      { name: "Shiprocket Integration", price: "Included" },
      { name: "29,000+ Pincode Coverage", price: "-" },
      { name: "COD & Prepaid Options", price: "-" },
      { name: "Real-time Tracking", price: "-" },
      { name: "Return Management", price: "-" },
      { name: "Multiple Courier Partners", price: "-" },
    ],
  },
  {
    icon: Store,
    title: "Marketplace Onboarding",
    description:
      "Get your products listed on major e-commerce platforms with optimized listings for maximum visibility.",
    items: [
      { name: "Amazon Seller Registration", price: "₹4,999" },
      { name: "Flipkart Seller Setup", price: "₹4,999" },
      { name: "Meesho Onboarding", price: "₹2,999" },
      { name: "Product Listing (10 products)", price: "₹2,499" },
      { name: "Catalog Management", price: "₹1,999/month" },
      { name: "Marketplace Advertising", price: "Custom" },
    ],
  },
  {
    icon: Monitor,
    title: "Digital Consultation",
    description:
      "Expert guidance on business software, billing systems, and digital tools to streamline your operations.",
    items: [
      { name: "Tally/Busy Setup", price: "₹2,999" },
      { name: "GST Billing Software", price: "₹1,999" },
      { name: "POS System Setup", price: "₹4,999" },
      { name: "CRM Implementation", price: "₹5,999" },
      { name: "WhatsApp Business API", price: "₹3,999" },
      { name: "Custom Software Consultation", price: "₹999/hour" },
    ],
  },
];

const termsAndConditions = [
  {
    title: "Payment Terms",
    points: [
      "50% advance payment required to initiate the project",
      "Remaining 50% due upon project completion, before final delivery",
      "All payments are non-refundable once work has commenced",
      "Payments accepted via UPI, Bank Transfer, or Cheque",
    ],
  },
  {
    title: "Project Timeline",
    points: [
      "Digital Dukaan: 5-7 business days",
      "E-Commerce Launchpad: 10-14 business days",
      "Brand Authority: 15-21 business days",
      "Timeline begins after receiving all required content and advance payment",
      "Delays in client feedback may extend the timeline proportionally",
    ],
  },
  {
    title: "Content Requirements",
    points: [
      "Client must provide all text content, images, and branding materials",
      "Stock images can be sourced at additional cost if required",
      "Content changes after approval may incur revision charges",
      "Maximum 2 rounds of revisions included in package price",
    ],
  },
  {
    title: "Hosting & Maintenance",
    points: [
      "First year hosting included in all website packages",
      "Annual renewal: ₹3,999/year for basic hosting",
      "Domain registration/renewal is client's responsibility",
      "Technical support available via email/WhatsApp during business hours",
    ],
  },
  {
    title: "Intellectual Property",
    points: [
      "All deliverables become client property upon full payment",
      "Source files provided only for Brand Authority package",
      "GrowthSuite reserves the right to showcase work in portfolio",
      "Third-party assets (fonts, images) subject to respective licenses",
    ],
  },
  {
    title: "Scope & Changes",
    points: [
      "Additional features beyond package scope quoted separately",
      "Major scope changes may require revised timeline and pricing",
      "Emergency/rush delivery available at 25% premium",
      "All quotes valid for 30 days from date of issue",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              Comprehensive digital solutions designed specifically for Indian
              businesses. From website development to government compliance, we
              handle it all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Core <span className="text-gold">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to establish and grow your digital presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-off-white rounded-2xl p-8 border border-border"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-navy"
                    >
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business <span className="text-gold">Support Services</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Additional services to help you navigate compliance and scale
              operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy-light rounded-2xl p-8 border border-navy-lighter"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-white/60 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-2 border-b border-navy-lighter last:border-0"
                    >
                      <span className="text-white/80 text-sm">{item.name}</span>
                      <span className="text-gold font-semibold text-sm">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section id="terms" className="py-20 bg-off-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Terms & <span className="text-gold">Conditions</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transparent policies for a smooth working relationship
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {termsAndConditions.map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-border shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-gold" />
                  <h3 className="font-semibold text-navy">{term.title}</h3>
                </div>
                <ul className="space-y-2">
                  {term.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-gold mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get <span className="text-gold">Started?</span>
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Let us help you build your digital presence. Get a free
              consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-hover text-navy font-semibold"
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <a
                  href="https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
