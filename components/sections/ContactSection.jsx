import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import SectionShell from "@/components/SectionShell";
import Reveal from "@/components/Reveal";
import Socials from "@/components/Socials";
import { contactMethods, contactIntro } from "@/content/site";
import { Icon } from "@/lib/icons";

const ContactSection = () => {
  return (
    <SectionShell id="contact">
      <div className="grid gap-10 xl:grid-cols-[1fr_1.1fr] xl:gap-16">
        {/* Two columns, mirroring in from their own sides. */}
        <Reveal from="left">
          <p className="prose-measure text-lg text-muted">{contactIntro.body}</p>

          <div className="mt-8">
            <p className="label text-faint">Elsewhere</p>
            <Socials
              containerStyles="flex flex-wrap gap-2.5 mt-3"
              iconStyles="chip-interactive w-10 h-10 border border-rule rounded-full flex justify-center items-center text-muted"
            />
          </div>
        </Reveal>

        <Reveal from="right" delay={80}>
          <ul className="divide-y divide-rule overflow-hidden rounded-2xl border border-rule bg-paper shadow-card">
            {contactMethods.map((method) => {
              const external = method.href?.startsWith("http");

              const row = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon name={method.icon} />
                  </span>
                  <span className="min-w-0">
                    <span className="label block text-faint">{method.label}</span>
                    <span className="block truncate text-ink">{method.value}</span>
                  </span>
                </>
              );

              return (
                <li key={method.label}>
                  {method.href ? (
                    <Link
                      href={method.href}
                      // These rows are inside one bordered list, so they cannot
                      // lift the way standalone cards do -- the arrow sliding in
                      // does the work instead.
                      className="group flex items-center gap-4 p-5 transition-colors hover:bg-accent-soft"
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                    >
                      {row}
                      <FiArrowUpRight
                        aria-hidden
                        className="ml-auto shrink-0 -translate-x-1 text-accent opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:translate-x-0"
                      />
                    </Link>
                  ) : (
                    <div className="flex items-center gap-4 p-5">{row}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </SectionShell>
  );
};

export default ContactSection;
