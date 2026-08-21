/**
 * Skills, used in two places:
 *   - the Skills page, grouped into `domains`
 *   - the Resume page Skills tab, as the flat `toolkit` grid
 *
 * `icon` values are keys from lib/icons.jsx. Adding a skill is one line; only a
 * genuinely new icon needs an entry added there too.
 */

/**
 * @typedef {Object} Skill
 * @property {string} name
 * @property {string} icon  Key from lib/icons.jsx.
 */

/**
 * @typedef {Object} Domain
 * @property {string} title
 * @property {Skill[]} skills
 */

/** @type {Domain[]} */
export const domains = [
  {
    title: "Backend Engineering",
    skills: [
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "springBoot" },
      { name: "C#", icon: "csharp" },
      { name: ".NET", icon: "dotnet" },
      { name: "Python", icon: "python" },
      { name: "gRPC", icon: "grpc" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Redux", icon: "redux" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
    ],
  },
  {
    title: "Data and Messaging",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "SQL Server", icon: "sqlServer" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "Elasticsearch", icon: "elasticsearch" },
      { name: "Kafka", icon: "kafka" },
      { name: "RabbitMQ", icon: "rabbitmq" },
    ],
  },
  {
    title: "Cloud and DevOps",
    skills: [
      { name: "Azure", icon: "azure" },
      { name: "AWS", icon: "aws" },
      { name: "Splunk", icon: "splunk" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "CI/CD", icon: "cicd" },
      { name: "Git", icon: "git" },
      { name: "Agile", icon: "agile" },
    ],
  },
];

export const toolkit = {
  title: "Skills",
  /** Supports **bold** and blank-line paragraph breaks. */
  summary:
    "Frontend and backend development across Java, Spring Boot, C#, .NET, React, " +
    "TypeScript and JavaScript. SQL and NoSQL databases, event-driven systems on " +
    "Kafka and gRPC, and containerised workloads on Docker and Kubernetes. " +
    "Azure and AWS for deploying scalable services, with Splunk for observability.",

  /**
   * Flat grid on the Resume tab. Deliberately a separate list from `domains`:
   * this one is a broad "everything I've shipped with" set, including things that
   * don't warrant a slot on the Skills page.
   *
   * @type {Skill[]}
   */
  items: [
    { name: "Java", icon: "java" },
    { name: "Spring Boot", icon: "springBoot" },
    { name: "C#", icon: "csharp" },
    { name: ".NET", icon: "dotnet" },
    { name: "React", icon: "react" },
    { name: "Angular", icon: "angular" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Redux", icon: "redux" },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "Material UI", icon: "materialUi" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "SQL Server", icon: "sqlServer" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Redis", icon: "redis" },
    { name: "Kafka", icon: "kafka" },
    { name: "RabbitMQ", icon: "rabbitmq" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "Azure", icon: "azure" },
    { name: "AWS", icon: "aws" },
    { name: "Splunk", icon: "splunk" },
    { name: "gRPC", icon: "grpc" },
  ],
};

export default domains;
