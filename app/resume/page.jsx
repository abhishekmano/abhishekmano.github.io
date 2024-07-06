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
  SiAzuredevops,
  SiJavascript,
  SiMicrosoftazure,
  SiRedux,
  SiGithub,
  SiDotnet,
  SiCsharp,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";
import { BsArrowDownRight } from "react-icons/bs";
import { DiMsqlServer } from "react-icons/di";
const about = {
  title: "About me",
  description: (
    <>
      As a seasoned software engineer, I specialize in designing and
      implementing robust end to end cloud based solutions.
      <br /> <br />
      My passion lies in solving complex challenges, optimizing processes, and
      driving efficiency through innovative solutions.
    </>
  ),
  info: [
    {
      fieldName: "Name",
      fieldValue: "Abhishek Manoharan",
    },
    {
      fieldName: "Email",
      fieldValue: "abhishekmanoharan1999@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91-8891410500",
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
      company: "Providence Global Centre, Hyderabad",
      position: "Software Engineer II",
      duration: "Aug-2021 - present",
      description: "fjsafu df dsf dslfsl",
    },
    {
      company: "Providence Global Centre, Hyderabad",
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
      school: "College Of Engineering Trivandrum, Kerala",
      course: "Compute Science and Engineering (Honours)",
      duration: "July-2017 - July-2021",
      gpa: "9.98",
      description: "modi dolor quod. Obcaecati aliquid provident vel",
    },
    {
      school: "Govt Mopla Higher Secondary School, Koyilandy, Kerala",
      course: "Maths/Physics/Biology Science",
      duration: "June/2015 - June/2017",
      gpa: "100% - 1200/1200",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ],
};
//skills
const skills = {
  title: "My Skills",
  description: "fsad fsdf sdgfsd g",
  info: [
    {
      icon: <SiDotnet />,
      name: "Dot Net",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <SiJavascript />,
      name: "Javascript",
    },
    {
      icon: <SiCsharp />,
      name: "CSharp",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <DiMsqlServer />,
      name: "SQL Server",
    },
    {
      icon: <SiMicrosoftazure />,
      name: "Azure",
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
import { icons } from "lucide-react";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
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
            {/* Experience */}
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
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-contrast/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 gap-[30px] p-2 m-2">
                    {education.info.map((info, idx) => {
                      return (
                        <li
                          key={idx}
                          className="bg-primary-hover h-[300px] sm:h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{info.duration}</span>
                          <h3 className="text-xl max-w-full min-h-[30px] text-center lg:text-left ">
                            {info.course}
                          </h3>
                          <p className="text-l max-w-full  text-center lg:text-left  ">
                            Score :{" "}
                            <span className="font-semibold text-accent text-xl">
                              {info.gpa}
                            </span>
                          </p>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-contrast/60">{info.school}</p>
                          </div>{" "}
                          {/* <p className="text-contrast/60">{info.description}</p> */}
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600p] text-contrast/60 mx-auto">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {skills.info.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[130px] rounded-xl flex justify-center items-center bg-primary-hover group">
                              <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize"> {skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-contrast/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                {/* <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-centre justify-center xl:justify-start gap-4"
                      >
                        <span className="text-contrast/60">
                          {item.fieldName}
                        </span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul> */}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
