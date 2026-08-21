/**
 * Work history, shown in the Experience section.
 *
 * Add a role by appending an object to `roles`. `logoShape` controls the crop:
 * "square" for wordmark tiles, "circle" for round marks.
 */


/**
 * @typedef {Object} Role
 * @property {string} company
 * @property {string} position
 * @property {string} start
 * @property {string} end       Use "Present" for the current role.
 * @property {string} location
 * @property {string} [logo]    Path under public/. Falls back to an initial.
 * @property {"square"|"circle"} [logoShape]
 * @property {boolean} [current]
 */

export const experience = {
  title: "Experience",
  /**
   * Supports **bold** and blank-line paragraph breaks.
   *
   * One paragraph per employer, in the same order as the timeline below, so the
   * prose and the dated list can be read against each other. As a single block it
   * was five unbroken lines and nothing stood out.
   *
   * No years-of-experience claim here: the About section makes it, and the dated
   * timeline below shows it. This is just the narrative the dates cannot give.
   */
  summary:
    "Currently a **Software Engineer at Apple**, on a team under Information " +
    "Systems & Technology (IS&T).\n\n" +
    "Previously Software Engineer IC2 at **ServiceNow** in Global Cloud Services, " +
    "building operational applications for data centre infrastructure.\n\n" +
    "Before that, **Providence India**, working on application and infrastructure " +
    "lifecycle systems.",

  /** @type {Role[]} */
  roles: [
    {
      company: "Apple",
      position: "Software Engineer",
      start: "Sep 2025",
      end: "Present",
      location: "Hyderabad",
      logo: "/assets/logo/apple_logo.jpeg",
      logoShape: "circle",
      current: true,
    },
    {
      company: "ServiceNow",
      position: "Software Engineer IC2",
      start: "Oct 2024",
      end: "Aug 2025",
      location: "Hyderabad",
      logo: "/assets/logo/servicenow_logo.jpeg",
      logoShape: "square",
    },
    {
      company: "Providence India",
      position: "Software Engineer II",
      start: "Apr 2023",
      end: "Sep 2024",
      location: "Hyderabad",
      logo: "/assets/logo/providence_india_logo.jpeg",
      logoShape: "square",
    },
    {
      company: "Providence India",
      position: "Software Engineer I",
      start: "Aug 2021",
      end: "Apr 2023",
      location: "Hyderabad",
      logo: "/assets/logo/providence_india_logo.jpeg",
      logoShape: "square",
    },
    {
      company: "ICFOSS",
      position: "Intern",
      start: "Jul 2019",
      end: "Jul 2019",
      location: "Trivandrum",
      logo: "/assets/logo/icfoss_logo.jpeg",
      logoShape: "square",
    },
  ],
};

export default experience;

/**
 * The role marked `current`. Exported so the About section can name the present
 * employer without hardcoding it -- change jobs by flipping `current` here and
 * both sections follow. Undefined if no role is marked, which About handles.
 */
export const currentRole = experience.roles.find((role) => role.current);
