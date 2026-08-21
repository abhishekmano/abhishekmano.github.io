"use client";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { navSections } from "@/content/sections";
import { profile } from "@/content/site";

const MobileNav = () => {
  // Controlled so tapping a link closes the sheet -- an anchor jump inside an open
  // overlay otherwise leaves the sheet covering the section you just asked for.
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open navigation menu"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-rule text-ink transition-colors hover:border-accent hover:text-accent"
      >
        <CiMenuFries className="text-xl" />
      </SheetTrigger>

      <SheetContent className="flex flex-col gap-10 border-rule bg-canvas">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="mt-10 font-display text-3xl font-semibold tracking-tight text-ink"
        >
          {profile.wordmark}
          <span className="text-accent">.</span>
        </a>

        <nav className="flex flex-col gap-1">
          {navSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setOpen(false)}
              // Left accent bar on hover, matching the language used elsewhere.
              className="border-l-2 border-transparent py-2 pl-4 text-lg text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {section.navLabel}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
