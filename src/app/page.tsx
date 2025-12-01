import { AboutSection } from "@/components/AboutSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { ContactSection } from "@/components/ContactSection";
import { CustomerWall } from "@/components/CustomerWall";
import { FAQSection } from "@/components/FAQSection";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/Hero";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { LanguageProvider } from "@/contexts/language-context";
import { LanguageToggle } from "@/components/LanguageToggle";
import { getSiteSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const settings = await getSiteSettings();

  return (
    <LanguageProvider>
      <div className="bg-slate-50">
        <LanguageToggle />
        <Header />
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <PricingSection />
        <CaseStudiesSection />
        <CustomerWall enabled={settings.showCustomerWall} />
        <AboutSection />
        <FAQSection />
        <ContactSection />
        <Footer />
        <FloatingButtons />
      </div>
    </LanguageProvider>
  );
}
