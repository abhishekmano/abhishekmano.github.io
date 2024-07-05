"use client";
import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaJs,
  FaTs,
  FaNodeJs,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import {
  SiMicrosoftazure,
  SiAzuredevops,
  SiJavascript,
  SiRedux,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const sections = [
  {
    num: "01",
    title: "Front End Development",
    href: "",
    skills: [
      {
        icon: <FaReact />,
        name: "ReactJS",
      },
      {
        icon: <FaHtml5 />,
        name: "HTML",
      },
      ,
      {
        icon: <FaCss3 />,
        name: "CSS",
      },
      ,
      {
        icon: <SiRedux />,
        name: "Redux",
      },
    ],
  },
  {
    num: "02",
    title: "Back End Development",
    href: "",
    skills: [
      {
        icon: <FaReact />,
        name: ".NET",
      },
      {
        icon: <FaCss3 />,
        name: "Spring Boot",
      },
    ],
  },
  {
    num: "03",
    title: "Languages",
    href: "",
    skills: [
      {
        icon: <TbBrandCSharp />,
        name: "C#",
      },
      {
        icon: <SiJavascript />,
        name: "JavaScript",
      },
    ],
  },
  {
    num: "04",
    title: "Miscellaneous",
    href: "",
    skills: [
      {
        icon: <FaReact />,
        name: "ReactJS",
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
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
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
                  <Link
                    href={section.href}
                    className="w-[50px] h-[50px] rounded-full bg-contrast group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </Link>
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
