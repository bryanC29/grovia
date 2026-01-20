import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhyUs } from "@/components/why-us";
import { Packages } from "@/components/packages";
import { BusinessSupport } from "@/components/business-support";
import { CaseStudies } from "@/components/case-studies";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BusinessSupport />
      <WhyUs />
      <CaseStudies />
      <Packages />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
