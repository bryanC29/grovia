"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-navy-light py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Growth<span className="text-gold">Suite</span>
            </h3>
            <p className="text-white/60 mb-6">
              Building digital infrastructure for Indian businesses since 2020.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 99999 99999
              </a>
              <a
                href="mailto:hello@growthsuite.in"
                className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors"
              >
                <Mail className="w-5 h-5" />
                hello@growthsuite.in
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  123 Business Hub, Sector 44
                  <br />
                  Gurugram, Haryana 122001
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <div className="space-y-3">
              <a
                href="#services"
                className="block text-white/60 hover:text-gold transition-colors"
              >
                Services
              </a>
              <a
                href="#packages"
                className="block text-white/60 hover:text-gold transition-colors"
              >
                Packages
              </a>
              <a
                href="#"
                className="block text-white/60 hover:text-gold transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="block text-white/60 hover:text-gold transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-navy-lighter mt-12 pt-8">
          <p className="text-center text-white/40 text-sm">
            Copyright 2026 GrowthSuite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
