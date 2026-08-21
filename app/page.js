import React from "react";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/styledElements/Stats";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";

// Single page. Section order here mirrors content/sections.js, which also drives
// the header nav and its scroll-spy -- so the nav can never drift out of step with
// the page.
export default function Home() {
  return (
    <main>
      {/* Hero and the stats band together fill one viewport on a normal screen, so
          nothing from the next section peeks above the fold. The min() caps that at
          46rem: without the cap, a tall window stretched the hero to its full height
          and left a large dead gap above and below the content. dvh rather than vh
          because mobile browser chrome makes vh overshoot. */}
      <div className="flex min-h-[min(calc(100dvh-4rem),46rem)] flex-col">
        <Hero />
        <Stats />
      </div>

      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
