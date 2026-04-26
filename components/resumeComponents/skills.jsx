import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaAngular,
  FaJava,
  FaCloud,
  FaCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiDotnet,
  SiKubernetes,
  SiMaterialdesign,
  SiTypescript,
  SiSpringboot,
  SiBootstrap,
  SiMongodb,
  SiPostgresql,
  SiApachekafka,
  SiRabbitmq,
} from "react-icons/si";
import { DiMsqlServer, DiRedis } from "react-icons/di";
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
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaCode />,
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
      icon: <DiRedis />,
      name: "Redis",
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
      icon: <FaCloud />,
      name: "Azure",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaCloud />,
      name: "Azure Function",
    },
    {
      icon: <SiApachekafka />,
      name: "Kafka",
    },
    {
      icon: <SiRabbitmq />,
      name: "RabbitMQ",
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
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 text-left">
        <h3 className="text-3xl xl:text-4xl font-bold">{skills.title}</h3>
        <p className="max-w-[600px] text-contrast/70 leading-relaxed">
          {skills.description}
        </p>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 xl:gap-[30px]">
        {skills.info.map((skill, index) => {
          return (
            <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[96px] sm:h-[110px] xl:h-[130px] rounded-xl flex justify-center items-center bg-primary-hover group">
                    <div className="text-4xl xl:text-5xl group-hover:text-accent transition-all duration-300">
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
