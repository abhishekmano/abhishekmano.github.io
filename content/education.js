/**
 * Academic history, shown on the Resume page under the Education tab.
 *
 * The old version carried lorem ipsum in a `description` field ("modi dolor
 * quod...", "Lorem ipsum dolor sit amet...") that was commented out of the render.
 * Both the placeholder text and the dead field are gone.
 */

/**
 * @typedef {Object} Qualification
 * @property {string} school
 * @property {string} course
 * @property {string} [specialization]
 * @property {string} start
 * @property {string} end
 * @property {string} result   Free text: "CGPA 9.98", "100% - 1200/1200".
 */

export const education = {
  title: "Education",
  /** Supports **bold** and blank-line paragraph breaks. */
  summary:
    "**Bachelor's degree with Honours in Computer Science and Engineering** from " +
    "College of Engineering Trivandrum, where I finished **State Rank 1** at Kerala " +
    "Technological University for the 2017–2021 batch.",

  /** @type {Qualification[]} */
  qualifications: [
    {
      school: "College of Engineering Trivandrum, Kerala",
      course: "Bachelor of Technology (Honours)",
      specialization: "Computer Science and Engineering",
      start: "Jul 2017",
      end: "Jul 2021",
      result: "CGPA 9.98",
    },
    {
      school: "Govt Mopla Higher Secondary School, Koyilandy, Kerala",
      course: "Higher Secondary",
      specialization: "Science",
      start: "Jun 2015",
      end: "Jun 2017",
      result: "100% — 1200/1200",
    },
  ],
};

export default education;
