import React from "react";
import Link from "next/link";
import { socials } from "@/content/site";
import { Icon } from "@/lib/icons";

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((link) => {
        const external = link.href.startsWith("http");

        return (
          <Link
            key={link.label}
            href={link.href}
            className={iconStyles}
            aria-label={link.label}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            <Icon name={link.icon} />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
