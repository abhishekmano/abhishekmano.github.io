import React from "react";
import { FiDownload, FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";
import Photo from "@/components/styledElements/Photo";
import PDFViewer from "@/components/PdfViewer";
import Reveal from "@/components/Reveal";
import { profile } from "@/content/site";

const Hero = () => {
  return (
    // flex-1 lets the hero absorb whatever height is left after the stats band, so
    // the two together fill exactly one viewport (see app/page.js). min-h-0 keeps it
    // from refusing to shrink; on short or narrow viewports the content simply grows
    // past the fold rather than being squeezed.
    <section
      id="home"
      className="relative flex min-h-0 flex-1 items-center overflow-hidden"
    >
      {/* Faint dot grid, so the hero sits on a surface instead of a blank field. */}
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 opacity-70"
      />

      <div className="container relative mx-auto">
        <div className="grid items-center gap-10 py-10 xl:grid-cols-[1.15fr_1fr] xl:gap-8 xl:py-12">
          <Reveal className="order-2 text-center xl:order-none xl:text-left">
            <p className="label text-accent">{profile.role}</p>

            <h1 className="h1 mt-4">
              Hello, I&apos;m <br />
              <span className="text-accent">{profile.name}</span>
            </h1>

            <p className="prose-measure mx-auto mt-6 text-lg text-muted xl:mx-0">
              {profile.intro}
            </p>

            <div className="mt-9 flex flex-col items-center gap-6 xl:flex-row xl:gap-8">
              <div className="flex items-center gap-2.5">
                {/* Desktop opens the PDF inline; small screens download it,
                    because an embedded viewer is unusable at that width. */}
                <div className="hidden xl:flex">
                  <PDFViewer>
                    <Button variant="outline" size="lg">
                      Resume
                      <FiArrowUpRight className="text-base" />
                    </Button>
                  </PDFViewer>
                </div>

                <Button asChild variant="outline" size="lg" className="xl:hidden">
                  <a href={profile.resumeFile} download>
                    Resume <FiDownload className="text-base" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="hidden xl:flex"
                >
                  <a
                    href={profile.resumeFile}
                    download
                    aria-label="Download resume PDF"
                  >
                    <FiDownload className="text-base" />
                  </a>
                </Button>
              </div>

              <Socials
                containerStyles="flex gap-2.5"
                iconStyles="chip-interactive w-9 h-9 border border-rule rounded-full flex justify-center items-center text-muted text-[15px]"
              />
            </div>
          </Reveal>

          <Reveal className="order-1 flex justify-center xl:order-none" delay={80}>
            <Photo />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
