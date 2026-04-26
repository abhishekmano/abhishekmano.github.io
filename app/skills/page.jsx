"use client";
import { FaReact, FaCss3, FaHtml5, FaPython, FaJava, FaCloud, FaUsers } from "react-icons/fa";
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
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { motion } from "framer-motion";
import { RiInfinityLine } from "react-icons/ri";
const sections = [
  {
    num: "01",
    title: "Backend Engineering",
    href: "",
    skills: [
      {
        icon: <FaJava />,
        name: "Java",
      },
      {
        icon: <SiSpringboot />,
        name: "Spring Boot",
      },
      {
        icon: <TbBrandCSharp />,
        name: "C#",
      },
      {
        icon: <AiOutlineDotNet />,
        name: ".NET",
      },
      {
        icon: <FaPython />,
        name: "Python",
      },
    ],
  },
  {
    num: "02",
    title: "Frontend Development",
    href: "",
    skills: [
      {
        icon: <FaReact />,
        name: "React",
      },
      {
        icon: <FaHtml5 />,
        name: "HTML",
      },
      {
        icon: <SiJavascript />,
        name: "JavaScript",
      },
      {
        icon: <FaCss3 />,
        name: "CSS",
      },
      {
        icon: <SiRedux />,
        name: "Redux",
      },
      {
        icon: <SiTypescript />,
        name: "TypeScript",
      },
    ],
  },

  {
    num: "03",
    title: "Data and Messaging",
    href: "",
    skills: [
      {
        icon: <SiPostgresql />,
        name: "PostgreSQL",
      },
      {
        icon: <SiMongodb />,
        name: "MongoDB",
      },
      {
        icon: <DiRedis />,
        name: "Redis",
      },

      {
        icon: <SiElastic />,
        name: "Elasticsearch",
      },
      {
        icon: <DiMsqlServer />,
        name: "SQL Server",
      },
      {
        icon: <SiRabbitmq />,
        name: "RabbitMQ",
      },
      {
        icon: <SiApachekafka />,
        name: "Kafka",
      },
    ],
  },
  {
    num: "04",
    title: "Cloud and DevOps",
    href: "",
    skills: [
      {
        icon: <FaCloud />,
        name: "Azure",
      },
      {
        icon: <SiGithub />,
        name: "Git",
      },
      {
        icon: <RiInfinityLine />,
        name: "CI/CD",
      },
      {
        icon: <SiKubernetes />,
        name: "Kubernetes",
      },
      {
        icon: <SiDocker />,
        name: "Docker",
      },
      {
        icon: <FaUsers />,
        name: "Agile",
      },
    ],
  },
];
const Skills = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.12, duration: 0.3, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {sections.map((section, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {section.num}
                  </div>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-contrast group-hover:text-accent transition-all duration-500">
                  {section.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  {section.skills.map((skill, idx) => {
                    return (
                      <div
                        key={idx}
                        className="flex border border-accent justify-center items-center rounded-md gap-3"
                      >
                        <div>{skill.icon}</div>
                        <div>{skill.name}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="border-b border-contrast w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
