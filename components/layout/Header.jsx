"use client";
import React from "react";
import Nav from "./Nav";
import { Button } from "../ui/button";
import ToggleButton from "@/app/toggleButton";
import MobileNav from "./MobileNav";
import { profile } from "@/content/site";
import { navCtaSection } from "@/content/sections";

const Header = () => {
  return (
    // Sticky and translucent so the page reads as continuous behind it, with a
    // hairline rule instead of the old hard edge. Previously the header simply
    // scrolled away.
    <header className="sticky top-0 z-50 border-b border-rule bg-canvas/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between gap-6">
        <a href="#home" aria-label="Back to top" className="group">
          <span className="font-display text-2xl font-semibold tracking-tight text-ink">
            {profile.wordmark}
            <span className="text-accent">.</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-3">
          <Nav />
          {navCtaSection && (
            <>
              <div className="mx-1 h-5 w-px bg-rule" aria-hidden />
              <Button asChild size="sm">
                {/* A plain anchor, not next/link: this is an in-page jump now that
                    /contact is a section rather than a route. Routing it through the
                    router sent it to a page that no longer exists.

                    Label and target come from the section marked `navCta`, so this
                    button and the nav can never disagree about where it points. */}
                <a href={`#${navCtaSection.id}`}>{navCtaSection.navLabel}</a>
              </Button>
            </>
          )}
          <ToggleButton />
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ToggleButton />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
