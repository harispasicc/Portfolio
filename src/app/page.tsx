import { AboutSection } from "@/components/AboutSection";
import { BuiltLikeSaaSSection } from "@/components/BuiltLikeSaaSSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { FitBookCaseStudy } from "@/components/FitBookCaseStudy";
import { FitBookFeatured } from "@/components/FitBookFeatured";
import { Hero } from "@/components/Hero";
import { SecondaryProjects } from "@/components/SecondaryProjects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-w-0 overflow-x-clip">
        <Hero />
        <FitBookFeatured />
        <FitBookCaseStudy />
        <BuiltLikeSaaSSection />
        <SecondaryProjects />
        <SkillsSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <ScrollToTop />
    </>
  );
}
