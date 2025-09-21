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
import { DiMsqlServer } from "react-icons/di";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
const Skills = () => {
  return (
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
  );
};
export default Skills;
