/**
 * The About section.
 *
 * Names the current employer only. Past employers -- ServiceNow, Providence --
 * are already in the Experience section directly below, so listing them here too
 * just makes the reader read the same list twice. This section is the identity
 * claim (what kind of engineer, where, for how long, with what); Experience is
 * the record.
 *
 * The degree is a one-line mention only. The Education section carries the full
 * detail, including the CGPA and the state rank.
 *
 * Supports **bold** and blank lines for paragraph breaks (see lib/richText.jsx).
 */

import { careerStart } from "@/content/site";
import { currentRole } from "@/content/experience";
import { yearsSince } from "@/lib/dates";

export const about = {
  title: "About me",

  /**
   * Rendered as plain text, so no **bold** here. Both the employer and the years
   * are derived rather than typed -- the employer from whichever role is marked
   * `current` in content/experience.js, the years from `careerStart` -- so this
   * line cannot go stale or disagree with the timeline and the stats band.
   */
  headline: `Full-stack engineer${currentRole ? ` at ${currentRole.company}` : ""}, ${yearsSince(careerStart)}+ years of experience`,

  body:
    "I like building enterprise systems. Java, Spring Boot, C# and .NET on the " +
    "backend, React and TypeScript on the front, deployed on Azure and AWS.\n\n" +
    "Bachelor's with Honours in Computer Science and Engineering.",
};

export default about;
