/**
 * Site-wide content: who you are, how to reach you, the numbers on the hero.
 *
 * Everything here is plain data. Nav lives in content/sections.js, since on a
 * single-page site the nav and the page order are the same thing.
 *
 * `icon` values are keys from lib/icons.jsx.
 * Text fields support the light markup in lib/richText.jsx: **bold** and blank
 * lines for paragraph breaks.
 */

/**
 * @typedef {Object} SocialLink
 * @property {string} label  Used as the accessible name.
 * @property {string} href
 * @property {string} icon   Key from lib/icons.jsx.
 */

/**
 * @typedef {Object} ContactMethod
 * @property {string} label
 * @property {string} value
 * @property {string} [href]  Omit for values that are not links.
 * @property {string} icon
 */

/**
 * @typedef {Object} Stat
 * @property {number} [value]    Fixed number.
 * @property {string} [derived]  Computed instead: currently "yearsOfExperience".
 * @property {string} suffix
 * @property {string} label
 */

export const profile = {
  /** Shown in the header. The period is rendered in the accent colour. */
  wordmark: "Mano",
  name: "Abhishek Manoharan",
  role: "Software Engineer",
  /**
   * Hero paragraph. Work first, then the human note -- the role eyebrow above it
   * already says "Software Engineer", so this says what kind.
   */
  intro:
    "I build cloud and backend platforms at enterprise scale. Away from the " +
    "editor I'm usually on a badminton court, or in the kitchen attempting a " +
    "dish I've only ever ordered.",
  resumeFile: "resume.pdf",
};

/**
 * Page <title> and <meta name="description">. Not visible on the page itself:
 * this is what search results and link previews show, which matters if the URL
 * gets pasted into a message to a recruiter. Kept here rather than in
 * app/layout.js so all copy stays in content/.
 */
export const seo = {
  description:
    "Software engineer working on scalable enterprise and cloud systems. Currently at Apple.",
};

/**
 * First day of the first full-time role. Years of experience is derived from
 * this, so the site never needs a yearly edit -- change this date only if the
 * start of your career changes.
 */
export const careerStart = "2021-08-01";

/** @type {SocialLink[]} */
export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhishek-mano/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/abhishekmano",
    icon: "github",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/AbhishekManoharan/",
    icon: "leetcode",
  },
  {
    label: "Email",
    href: "mailto:abhishek.manoharan.me@gmail.com",
    icon: "email",
  },
  { label: "WhatsApp", href: "https://wa.me/918891410500", icon: "whatsapp" },
  { label: "Phone", href: "tel:+918891410500", icon: "phone" },
];

/**
 * Shown in the contact section.
 *
 * The street address that used to be here has been removed -- it was a home
 * address on a public page.
 *
 * @type {ContactMethod[]}
 */
export const contactMethods = [
  {
    label: "Email",
    value: "abhishek.manoharan.me@gmail.com",
    href: "mailto:abhishek.manoharan.me@gmail.com",
    icon: "email",
  },
  {
    label: "Phone",
    value: "+91 88914 10500",
    href: "tel:+918891410500",
    icon: "phone",
  },
  {
    label: "LinkedIn",
    value: "abhishek-mano",
    href: "https://www.linkedin.com/in/abhishek-mano/",
    icon: "linkedinIn",
  },
  {
    label: "Location",
    value: "Hyderabad, India",
    icon: "location",
  },
];

export const contactIntro = {
  body: "Feel free to reach out for collaboration, opportunities, or just to say hi.",
};

/**
 * Colour theme a first-time visitor opens the site with. One knob:
 *
 *   "light"  -- light until they pick dark from the header toggle
 *   "dark"   -- dark until they pick light
 *   "system" -- follow whatever the operating system is set to
 *
 * In every case an explicit choice is remembered in localStorage across visits;
 * this only decides what happens before they have made one. "system" was the
 * original setting, which meant anyone whose OS was in dark mode landed in dark
 * mode without having asked for it.
 */
export const theme = {
  default: "light",
};

/**
 * Counters under the hero. `suffix` renders after the number, so the "+" lands
 * where it belongs instead of at the front of the label.
 *
 * Deliberately only two. There were four: "5+ full-stack projects" sat directly
 * above a Projects section listing six, and "10+ technologies used in production"
 * sat above a skills grid of twenty-four -- one undercounted, the other undersold,
 * and neither said anything the sections below did not. The band adapts its column
 * count to the length of this array, so adding a third or fourth needs no CSS edit.
 *
 * @type {Stat[]}
 */
export const stats = [
  { derived: "yearsOfExperience", suffix: "+", label: "Years of experience" },
  { value: 1100, suffix: "+", label: "LeetCode problems solved" },
];
