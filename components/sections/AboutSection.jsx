import React from "react";
import SectionShell from "@/components/SectionShell";
import Reveal from "@/components/Reveal";
import { about } from "@/content/about";
import { RichText } from "@/lib/richText";

const AboutSection = () => {
  return (
    <SectionShell id="about">
      <Reveal>
        <p className="font-display text-2xl text-accent">{about.headline}</p>
        <div className="prose-measure mt-5 space-y-4 text-muted">
          <RichText text={about.body} />
        </div>
      </Reveal>
    </SectionShell>
  );
};

export default AboutSection;
