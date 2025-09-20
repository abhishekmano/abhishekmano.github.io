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
  FaAngular,
  FaJava,
} from "react-icons/fa";
import {
  SiAzuredevops,
  SiJavascript,
  SiMicrosoftazure,
  SiRedux,
  SiGithub,
  SiDotnet,
  SiCsharp,
  SiAzurefunctions,
  SiKubernetes,
  SiMaterialdesign,
  SiTypescript,
  SiSpringboot,
  SiBootstrap,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";
import { BsArrowDownRight } from "react-icons/bs";
import { DiMsqlServer } from "react-icons/di";
const about = {
  title: "About me",
  description: (
    <>
      <span className="font-bold text-contrast">
        🚀 Passionate Software Engineer | Cloud Enthusiast
      </span>
      <br />
      <br />
      As a seasoned software engineer, I specialize in designing robust
      end-to-end cloud solutions. <br /> <br />
      My drive? Solving complex challenges, collaborating with teams, and
      eagerly learning to stay ahead and to build remarkable things together! 🌟
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
  description: (
    <>
      Software Development Engineer with <b>4+</b> years of hands-on experience,
      I&apos;ve honed my skills in both frontend and backend development along
      with Azure could.
      <br></br> Currently Working as a <b>Software Development Engineer IC2</b>{" "}
      in <b>ServiceNow</b> in Global Cloud Services Vertical Developing Products
      for Ops Apps to run Support Servicenow Data-centers. Previously As a
      software Engineer 2 in Providence india i have contributed to Multiple
      LifeCycle Engineering Solutions
      <br />
    </>
  ),
  info: [
    {
      company: "ServiceNow , Hyderabad",
      position: "Software Engineer IC2",
      duration: "Oct-2024 - Aug-2025",
      description: "",
    },
    {
      company: "Providence India, Hyderabad",
      position: "Software Engineer II",
      duration: "Aug-2021 - Sept-2024",
      description: "",
    },
    {
      company: "Providence India, Hyderabad",
      position: "Software Engineer I",
      duration: "Aug-2021 - April-2022",
      description: "",
    },
    {
      company:
        "ICFOSS (International Centre For Free and Open Source Software)",
      position: "Intern",
      duration: "July-2019",
      description: "",
    },
  ],
};
//Education
const education = {
  icon: "add later",
  title: "Academics",
  description: (
    <>
      I hold a &nbsp;
      <b className="text-contrast font-semibold">
        Bachelor&apos;s degree with Honours in Computer Science and Engineering
      </b>{" "}
      &nbsp; from the esteemed College of Engineering Trivandrum. During my
      tenure, I achieved the remarkable feat of securing the
      <b className="text-contrast font-semibold"> State Rank 1</b> at Kerala
      Technological University (KTU) for the batch of 2017-2021. 🌟
    </>
  ),
  info: [
    {
      school: "College Of Engineering Trivandrum, Kerala",
      course: "Bachelor of Technology (Honours)",
      specialization: "Computer Science and Engineering ",
      duration: "July-2017 - July-2021",
      gpa: "CGPA 9.98",
      description: "modi dolor quod. Obcaecati aliquid provident vel",
    },
    {
      school: "Govt Mopla Higher Secondary School, Koyilandy, Kerala",
      course: "Higher Secondary",
      specialization: "Science",
      duration: "June-2015 - June-2017",
      gpa: "100% - 1200/1200",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ],
};
//skills
const skills = {
  title: "My Skills",
  description:
    "Skilled in frontend and backend development with expertise in Java, Spring Boot, C#, .NET, React, TypeScript, and JavaScript. Experienced in SQL and NoSQL databases, event-driven systems using Kafka, and containerized applications with Docker and Kubernetes. Proficient in leveraging Azure Cloud services to design and deploy scalable solutions.",
  info: [
    {
      icon: <SiSpringboot />,
      name: "Spring Boot",
    },
    {
      icon: <SiDotnet />,
      name: "Dot Net",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
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
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <SiCsharp />,
      name: "C#",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
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
    {
      icon: <SiAzurefunctions />,
      name: "Azure Function",
    },
    {
      icon: <SiKubernetes />,
      name: "Kubernetes",
    },
    {
      icon: <SiMaterialdesign />,
      name: "Material UI",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
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
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
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
                <div className="grid grid-cols-1 xl:grid-cols-2">
                  <div className="xl:order-none order-2 text-contrast/60">
                    <div className="mt-8 xl:mt-0">
                      <div className="text-accent font-semibold">
                        Network Status Analytics (NSA)
                      </div>
                      <p>
                        Managing NSA (Network Status Analytics Framework to run
                        investigation and Remediation on 16+ servicenow
                        Data-centers over 6M+ Configuration Items to resolve
                        alerts using automatons).
                      </p>
                    </div>
                    <div className="mt-8 xl:mt-0">
                      <div className="text-accent font-semibold">
                        Legacy Archive Portal (LAP)
                      </div>
                      <p>
                        Replaced LDA (Legacy Data Archival) with a cost-saving,
                        data-format-flexible archival solution saving 11 million
                        dollars a year.
                      </p>
                    </div>
                    <div>
                      <div className="text-accent font-semibold mt-3">
                        LES PORTAL
                      </div>
                      <p>
                        Streamlined application retirement, automating processes
                        and retiring 500+ apps via end to end intake solution.
                      </p>
                    </div>
                    <div>
                      <div className="text-accent font-semibold mt-3">
                        Sleep Test Automation
                      </div>
                      <p>
                        Contributed to server sleep test portal, optimizing
                        infrastructure costs and accelerating infrastructure
                        scream test .
                      </p>
                    </div>
                    <div>
                      <div className="text-accent font-semibold mt-3">
                        Electronic Data Conversions Service LEDCS:
                      </div>
                      <p>
                        Build configurable conversion solutions helps to ingest
                        data from external source to EPIC EMR with configurable
                        UI.
                      </p>
                    </div>
                  </div>
                  <ScrollArea className="h-[600px] order-1 xl:order-none">
                    <ul className="grid grid-cols-1  gap-[30px] p-2 m-2">
                      {experience.info.map((info, idx) => {
                        return (
                          <li
                            key={idx}
                            className="bg-primary-hover h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{info.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[40px] text-center lg:text-left ">
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
                  <ul className="grid grid-cols-1 gap-[30px] p-2 m-2 ">
                    {education.info.map((info, idx) => {
                      return (
                        <li
                          key={idx}
                          className="bg-primary-hover h-[300px] sm:h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{info.duration}</span>
                          <h3 className="text-xl max-w-full min-h-[20px] text-center lg:text-left ">
                            {info.course}
                          </h3>
                          <h3 className="text-xl max-w-full min-h-[30px] text-center lg:text-left ">
                            {info.specialization}
                          </h3>
                          <p className="text-l max-w-full  text-center lg:text-left  ">
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
            {/* Skills Section */}
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
