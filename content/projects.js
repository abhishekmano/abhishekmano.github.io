/**
 * Work projects. Single source of truth for the Projects section.
 *
 * The Projects page and the old Resume tab used to be separate hardcoded blocks,
 * which had already drifted -- the Legacy Archive Portal saving read 8 million in
 * one place and 11 million in the other. Confirmed as 11 million per year and
 * stated once, here.
 *
 * A `title: "test"` placeholder was also sitting on all six entries, unused by the
 * render. Gone.
 */

/**
 * @typedef {Object} Project
 * @property {string} name        Full name.
 * @property {string} [shortName] Acronym, shown as an eyebrow.
 * @property {string} summary     One line, shown under the project name.
 * @property {string[]} highlights Bullets, shown on the card.
 * @property {string[]} stack
 */

/**
 * How many projects the section shows before asking the reader to opt in to the
 * rest. Six full cards is a long scroll for someone skimming, and the first three
 * are the ones worth leading with -- change this number to show more or fewer.
 */
export const initialVisibleCount = 3;

/** @type {Project[]} */
export const projects = [
  {
    name: "Network Status Analytics",
    shortName: "NSA",
    summary:
      "Alert automation framework running investigation and remediation workflows across ServiceNow data centres.",
    highlights: [
      "Managed alert automation workflows for investigation and remediation across ServiceNow data centre infrastructure, spanning 16+ data centres and 6M+ configuration items (CIs).",
      "Standardised CI type onboarding to the NSA framework, cutting developer overhead for automation target management.",
      "Added support for Kubernetes clusters and nodes, letting SREs build automation for cloud-native infrastructure.",
      "Reduced development and maintenance effort for CI type onboarding; the framework now supports 30+ CI types.",
    ],
    stack: ["JavaScript", "Message Queue", "Background Script"],
  },
  {
    name: "Legacy Archive Portal",
    shortName: "LAP",
    summary:
      "Cloud archival solution replacing a third-party product, with a configurable low-code interface.",
    highlights: [
      "Designed and implemented a cloud-based archival solution to replace the third-party Legacy Data Access (LDA) application.",
      "Delivered annual licence cost savings of approximately 11 million dollars.",
      "Used low-code and no-code patterns to build a highly configurable user interface.",
      "Cut delivery time from two weeks to one day through reusable templates, search criteria and screen configurations.",
      "Enabled archival for 50+ applications, 1000+ screens and 100+ TB of data over two years.",
    ],
    stack: [
      "React",
      "ASP.NET MVC",
      ".NET",
      "SQL Server",
      "Logic App",
      "App Service",
      "HTML/CSS",
      "JavaScript",
    ],
  },
  {
    name: "Life Cycle Engineering Services Portal",
    shortName: "LES",
    summary:
      "Application suite for infrastructure and application retirement, from intake through decommissioning.",
    highlights: [
      "Revamped the application retirement intake process, helping retire 500+ applications in two years.",
      "Automated submission and decommissioning flows, reducing intake time from three months to 15 days.",
      "Built and deployed background services for notifications, retirement workflows and approvals, cutting manual effort for 30 analysts.",
    ],
    stack: [
      "React",
      ".NET",
      "Serilog",
      "Function App",
      "Cosmos DB",
      "Docker/Kubernetes",
      "HTML/CSS",
      "JavaScript",
    ],
  },
  {
    name: "Sleep Test Automation",
    shortName: "STAP",
    summary:
      "Server scream-test platform covering ping, disconnect and pre-decommission validation.",
    highlights: [
      "Created dashboards and APIs for visibility into server sleep-test status, with 10+ views, 100+ filters and drill-down.",
      "Built UI and API layers for a process spanning 3 flows, 5+ stages and 30+ tasks per server type, including retries.",
      "Validated sleep tests for 750+ servers, averaging two weeks per server, reducing infrastructure cost.",
    ],
    stack: [
      "React",
      ".NET",
      "Material UI",
      "Feature Management",
      "Application Insights",
      "HTML/CSS",
      "JavaScript",
    ],
  },
  {
    name: "Electronic Data Conversion Services",
    shortName: "LEDCS",
    summary:
      "Configurable conversion pipeline ingesting external vendor data into Epic EMR.",
    highlights: [
      "Contributed to electronic data conversion from external vendors into Epic EMR, reducing integration time to two weeks.",
      "Developed a configurable solution with 5+ conversion types and 12+ datasets.",
      "Engineered reusable components with custom hooks to handle complex UI requirements, greatly reducing duplication.",
    ],
    stack: ["React", ".NET", "Bootstrap", "HTML/CSS", "JavaScript"],
  },
  {
    name: "Server Decommissioning",
    shortName: "SCRAP",
    summary:
      "RESTful services letting external teams initiate and track server decommissioning.",
    highlights: [
      "Created RESTful services for external teams to initiate server decommissioning.",
      "Built reliable endpoints with OAuth authentication for external integrations.",
      "Implemented validations and transactional execution to preserve integrity during bulk server retirement.",
    ],
    stack: [
      ".NET",
      "MediatR",
      "CQRS",
      "Clean Architecture",
      "EF Core",
      "xUnit / Moq / FluentValidation",
    ],
  },
];

export default projects;
