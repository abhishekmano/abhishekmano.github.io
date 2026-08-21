import React from "react";
import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaPython,
  FaJava,
  FaCloud,
  FaUsers,
  FaAngular,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaAws,
} from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import {
  SiJavascript,
  SiRedux,
  SiGithub,
  SiKubernetes,
  SiDocker,
  SiMongodb,
  SiApachekafka,
  SiSpringboot,
  SiPostgresql,
  SiTypescript,
  SiElastic,
  SiRabbitmq,
  SiMaterialdesign,
  SiBootstrap,
  SiSplunk,
} from "react-icons/si";
import { DiRedis, DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp, TbApi } from "react-icons/tb";
import { RiInfinityLine } from "react-icons/ri";

/**
 * Name -> icon component. This exists so content/ files can name an icon with a
 * string ("java") instead of importing and embedding a React element, which is
 * what kept the old data blocks trapped inside .jsx components.
 *
 * Adding a skill is a one-line content edit; only a genuinely new icon needs a
 * new entry here.
 */
export const icons = {
  // Languages and frameworks
  java: FaJava,
  springBoot: SiSpringboot,
  csharp: TbBrandCSharp,
  dotnet: AiOutlineDotNet,
  python: FaPython,
  react: FaReact,
  angular: FaAngular,
  html: FaHtml5,
  css: FaCss3,
  javascript: SiJavascript,
  typescript: SiTypescript,
  redux: SiRedux,
  materialUi: SiMaterialdesign,
  bootstrap: SiBootstrap,

  // Data and messaging
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  redis: DiRedis,
  elasticsearch: SiElastic,
  sqlServer: DiMsqlServer,
  rabbitmq: SiRabbitmq,
  kafka: SiApachekafka,

  // Cloud and delivery
  azure: FaCloud,
  git: SiGithub,
  cicd: RiInfinityLine,
  kubernetes: SiKubernetes,
  docker: SiDocker,
  agile: FaUsers,
  aws: FaAws,
  splunk: SiSplunk,
  // simple-icons has no gRPC mark, so a generic API glyph stands in.
  grpc: TbApi,

  // Contact and social
  github: FaGithub,
  linkedin: FaLinkedin,
  linkedinIn: FaLinkedinIn,
  leetcode: FaCode,
  email: FaEnvelope,
  whatsapp: FaWhatsapp,
  phone: FaPhoneAlt,
  location: FaMapMarkerAlt,
};

/**
 * Looks up an icon by name. An unknown name renders a visible placeholder and
 * warns in development rather than silently disappearing, so a typo in a content
 * file is obvious instead of leaving a mysterious gap in the grid.
 *
 * @param {{ name: string, className?: string }} props
 */
export function Icon({ name, className }) {
  const Component = icons[name];

  if (!Component) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[icons] Unknown icon "${name}". Add it to lib/icons.jsx or fix the name in content/.`,
      );
    }
    return <FaCode className={className} aria-hidden />;
  }

  return <Component className={className} aria-hidden />;
}

export default Icon;
