/**
 * Section order, anchors and copy for the single-page site.
 *
 * This is the spine of the page. `app/page.js` maps over `sections` to render,
 * and the header nav maps over the ones marked `inNav` to build its anchor links
 * and scroll-spy. So reordering the page, renaming a nav label or retitling a
 * section is a change here and nowhere else.
 *
 * `id` becomes the anchor (#experience) and must be unique.
 * Copy fields support **bold** and blank-line paragraph breaks (lib/richText.jsx).
 */

/**
 * @typedef {Object} Section
 * @property {string} id        Anchor id.
 * @property {string} [navLabel] Label in the header. Omit to keep out of the nav.
 * @property {boolean} [inNav]
 * @property {boolean} [navCta]  Rendered as the header's button instead of a link.
 * @property {string} [eyebrow] Small mono label above the title.
 * @property {string} [title]
 * @property {string} [summary]
 * @property {boolean} [texture] Draw the faint dot grid behind this section.
 */

/** @type {Section[]} */
export const sections = [
  {
    id: "home",
    navLabel: "Home",
    inNav: true,
    texture: true,
  },
  {
    id: "about",
    eyebrow: "Profile",
    title: "About me",
  },
  {
    id: "experience",
    navLabel: "Experience",
    inNav: true,
    eyebrow: "Career",
    title: "Experience",
    texture: true,
  },
  {
    id: "skills",
    navLabel: "Skills",
    inNav: true,
    eyebrow: "Toolkit",
    title: "Skills",
  },
  {
    id: "projects",
    navLabel: "Projects",
    inNav: true,
    eyebrow: "Selected work",
    title: "Projects",
    summary: "Platforms I have built and the outcomes they delivered.",
    texture: true,
  },
  {
    id: "education",
    eyebrow: "Academics",
    title: "Education",
  },
  {
    id: "contact",
    navLabel: "Contact",
    inNav: true,
    navCta: true,
    eyebrow: "Get in touch",
    title: "Let's connect",
  },
];

/** Convenience lookups so components don't re-filter this list themselves. */
export const navSections = sections.filter((section) => section.inNav);

/**
 * Sections that get a plain text link in the desktop nav. Contact is excluded via
 * `navCta` because the header already renders it as a button -- having it in both
 * places showed "Contact" twice, side by side. The mobile sheet has no button, so
 * it uses `navSections` and keeps the link.
 */
export const navLinkSections = navSections.filter((section) => !section.navCta);

/** The section promoted to the header's call-to-action button, if any. */
export const navCtaSection = sections.find((section) => section.navCta);

/** @param {string} id */
export const getSection = (id) => sections.find((section) => section.id === id);

export default sections;
