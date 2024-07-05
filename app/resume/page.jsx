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
  SiGithub,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { BsArrowDownRight } from "react-icons/bs";
import { DiMsqlServer } from "react-icons/di";
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum soluta quaerat, consequatur nostrum, minima commodi impedit repellat recusandae reprehenderit et dolorem veritatis earum, odit rerum id praesentium! Nam, et.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "value",
    },
    {
      fieldName: "Name",
      fieldValue: "value",
    },
    {
      fieldName: "Name",
      fieldValue: "value",
    },
    {
      fieldName: "Name",
      fieldValue: "value",
    },
    {
      fieldName: "Name",
      fieldValue: "value",
    },
  ],
};

const experience = {
  icon: "add later",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum deleniti reprehenderit, modi dolor quod. Obcaecati aliquid provident vel, expedita aliquam aspernatur fugiat quo magnam quasi deserunt, temporibus quam facere.",
  info: [
    {
      company: "Providence Global Centre",
      position: "Software Engineer II",
      duration: "Aug-2021 - present",
      description: "fjsafu df dsf dslfsl",
    },
    {
      company: "Providence Global Centre",
      position: "Software Engineer I",
      duration: "Aug-2021 - present",
      description: "fjsafu df dsf dslfsl",
    },
    {
      company: "ICFOSS",
      position: "Intern",
      duration: "Aug-2021 - present",
      description: "fjsafu df dsf dslfsl",
    },
  ],
};
//Education
const education = {
  icon: "add later",
  title: "Academics",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum deleniti reprehenderit, modi dolor quod. Obcaecati aliquid provident vel, expedita aliquam aspernatur fugiat quo magnam quasi deserunt, temporibus quam facere.",
  info: [
    {
      school: "College Of Engineering Trivandrum",
      course: "Compute Science and Engineering (Honours)",
      duration: "July-2017 - July-2021",
      gpa: "9.98",
      description: "",
    },
    {
      school: "Govt Mopla Higher Secondary School",
      course: "Biology Science",
      duration: "June/2015 - June/2017",
      gpa: "100% - 1200/1200",
      description: "fjsafu df dsf dslfsl",
    },
  ],
};
//skills
const skills = {
  title: "My Skills",
  description: "fsad fsdf sdgfsd g",
  info: [
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
  ],
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py:12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* Content of Tabs */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-contrast/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] p-2 m-2">
                    {experience.info.map((info, idx) => {
                      return (
                        <li
                          key={idx}
                          className="bg-primary-hover h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{info.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {info.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-contrast/60">{info.company}</p>
                          </div>{" "}
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              {" "}
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              {" "}
              skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              {" "}
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
