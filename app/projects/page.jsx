"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/styledElements/WorkSliderBtns";
const projects = [
  {
    num: "01",
    category: "(NSA) Network Status Analytics ",
    title: "test",
    description: "Alert automation framework for ServiceNow data centers.",
    points: [
      "Managed alert automation workflows for investigation and remediation across ServiceNow data center CIs.",
      "Standardized CI type onboarding to the NSA framework, reducing developer overhead for automation target management.",
      "Added support for Kubernetes clusters and nodes, enabling SREs to build automation for cloud-native infrastructure.",
      "Reduced development and maintenance effort for CI type onboarding; the framework now supports 30+ CI types.",
    ],
    stack: [
      { name: "JavaScript" },
      { name: "Message Queue" },
      { name: "Background Script" },
    ],
  },
  {
    num: "02",
    category: "(LAP) Legacy Archive Portal ",
    title: "test",
    description: "Complete archival solution for application data.",
    points: [
      "Designed and implemented a cloud-based archival solution to replace the third-party Legacy Data Access (LDA) application.",
      "Delivered annual license cost savings of approximately 8 million dollars.",
      "Used low-code and no-code patterns to build a highly configurable user interface.",
      "Reduced delivery time from two weeks to one day through reusable templates, search criteria, and screen configurations.",
      "Enabled archival for 50+ applications, 1000+ screens, and 100+ TB of data over two years.",
    ],
    stack: [
      { name: "React" },
      { name: "ASP.NET MVC" },
      { name: ".NET" },
      {
        name: "SQL Server",
      },
      { name: "Logic App" },
      { name: "HTML/CSS" },
      {
        name: "JavaScript",
      },
      {
        name: "App Service",
      },
    ],
  },
  {
    num: "03",
    category: "(LES) Life Cycle Engineering Services Portal",
    title: "test",
    description: "Application suite for infrastructure and app retirement.",
    points: [
      "Revamped the application retirement intake process, helping retire 500+ applications in two years.",
      "Automated submission and decommissioning flows, reducing intake time from three months to 15 days.",
      "Developed and deployed multiple background services for notifications, retirement workflows, and approvals, reducing manual effort for 30 analysts.",
    ],
    stack: [
      { name: "React" },
      { name: ".NET" },
      { name: "Serilog" },
      { name: "Function App" },
      { name: "HTML/CSS" },
      {
        name: "JavaScript",
      },
      {
        name: "Cosmos DB",
      },
      {
        name: "Docker/Kubernetes",
      },
    ],
  },
  {
    num: "04",
    category: "(STAP) SLEEP TEST AUTOMATION",
    title: "test",
    description:
      "Server scream-test solution for ping, disconnect, and pre-decommission validation.",
    points: [
      "Created multiple dashboards and APIs for high-level visibility into server sleep-test status, with 10+ views, 100+ filters, and drill-down capabilities.",
      "Built UI and API flows for a process with 3 flows, 5+ stages, and 30+ tasks per server type, including retry mechanisms.",
      "Validated sleep tests for 750+ servers with an average cycle of two weeks per server, reducing infrastructure cost.",
    ],
    stack: [
      { name: "React" },
      { name: ".NET" },
      { name: "Material UI" },
      {
        name: "Feature Management",
      },
      { name: "Application Insights" },
      { name: "HTML/CSS" },
      {
        name: "JavaScript",
      },
    ],
  },
  {
    num: "05",
    category: "LEDCS Electronic Data Conversion Services",
    title: "test",
    description:
      "Data conversion solution for ingesting external data into EPIC EMR.",
    points: [
      "Contributed to electronic data conversion from external vendors into EPIC EMR, reducing integration time to two weeks.",
      "Developed a configurable solution with 5+ conversion types and 12+ datasets.",
      "Engineered reusable components using custom hooks to streamline complex UI requirements, greatly reducing code duplication.",
    ],
    stack: [
      { name: "React" },
      { name: ".NET" },
      { name: "Bootstrap" },
      { name: "HTML/CSS" },
      {
        name: "JavaScript",
      },
    ],
  },
  {
    num: "06",
    category: "SCRAP Server Decommissioning ",
    title: "test",
    description: "Server decommissioning solution.",
    points: [
      "Created RESTful services for external teams to initiate server decommissioning.",
      "Developed reliable endpoints with OAuth authentication for external integrations.",
      "Implemented robust validations and transactional execution to ensure integrity during bulk server retirement.",
    ],
    stack: [
      { name: "MediatR" },
      { name: ".NET" },
      {
        name: "xUnit Moq Fluent Validation",
      },
      { name: "CQRS" },
      { name: "Clean Architecture" },
      {
        name: "EF Core",
      },
    ],
  },
];
const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.12, duration: 0.3, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[45%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col gap-[30px] xl:justify-center items-center xl:items-start mb-5">
                      <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                        {project.num}
                      </div>
                      {/* category */}
                      <h2 className="text-[42px] font-bold leading-none text-contrast group-hover:text-accent transition-all duration-500 capitalize ">
                        {project.category}
                      </h2>
                      <p className="text-contrast/60">{project.description}</p>
                      <ul className="flex gap-2 flex-wrap">
                        {project.stack.map((tech, index) => {
                          return (
                            <li key={index} className="text-xl text-accent">
                              {tech.name}
                              {index != project.stack.length - 1 && ","}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="border border-contrast/20"></div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns
                iconStyles={"text-primary"}
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(80%)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
          <div className="w-full xl:w-[60%] xl:h-[460px] flex flex-col xl:justify-between  ">
            <div className="xl:h-[460px]  h-auto relative group flex justify-center items-center bg-primary-hover rounded-xl px-6">
              <ul className="list-disc pl-4 pt-2 ">
                {project.points.map((point, index) => {
                  return (
                    <li
                      key={index}
                      className="text-x text-contrast/60 hover:text-accent"
                    >
                      {point}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
