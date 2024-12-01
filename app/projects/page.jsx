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
import { BsArrowRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";
import WorkSliderBtns from "@/components/styledElements/WorkSliderBtns";
const projects = [
  {
    num: "01",
    category: "(NSA) Network Status Analytics ",
    title: "test",
    description: "Alert Automation Framework on ServiceNow Data-centers.",
    points: [
      "Managing Alert Automation running Investigation/Remediation on Alert over servicenow data-center CIs",
      "Standardized CI Type on-boarding to the NSA Framework which greatly reduced developer overhead managing automation target types",
      "Added Support for Kubernetes Clusters and Kubernetes Nodes for NSA Framework which enabled SREs to write automation on these",
      "Significantly reduced development time and maintenance time for CI Type onboarding to NSA, which currently support 30+ CI types where automation can be written",
    ],
    stack: [
      { name: "Javascript" },
      { name: "Message Queue" },
      { name: "Background Script" },
    ],
  },
  {
    num: "02",
    category: "(LAP) Legacy Archive Portal ",
    title: "test",
    description: "Complete Archive Solution to Archive App Data.",
    points: [
      "Conceptualized and implemented cloud based data archival solution replacing 3rd Party application LDA (Legacy Data Access).",
      " Saved substantial license cost of 8 million dollar per year.",
      "Utilized no-code low-code techniques,resulting ina configurable User Interface",
      "Significantly reduced development time from two weeks to just one day by creating user-configurable templates, search criteria and screens.",
      "This Facilitated in Archiving 50+ apps with 1000+ screens and over 100TB data in 2 Years.",
    ],
    stack: [
      { name: "React" },
      { name: "ASP.NET MVC" },
      { name: ".NET" },
      {
        name: "SQL Server",
      },
      { name: "Logic App" },
      { name: "Html/CSS" },
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
    description: "Application Suite For Infra/App Retirement Solution",
    points: [
      "Revamped Application Retirement Intake solution, stream lining the process for retiring applications, resulting in 500+ Apps retired in 2 years.",
      "Automated submission and decommissioning,significantly reducing intake time from three months to 15 days.",
      "Developed,managed and deployed multipleBack ground services to Notify users, trigger workflow to initiate Retirement, and approval flows which reduced manual intervention of 30 Analysts",
    ],
    stack: [
      { name: "React" },
      { name: ".NET" },
      { name: "SeriLog" },
      { name: "Function App" },
      { name: "Html/CSS" },
      {
        name: "JavaScript",
      },
      {
        name: "Cosmos DB",
      },
      {
        name: "Docker/Kebernetes",
      },
    ],
  },
  {
    num: "04",
    category: "(STAP) SLEEP TEST AUTOMATION",
    title: "test",
    description:
      "Server Scream Test Solution. To Ping Disconnect and Perform Pre decommission Validation",
    points: [
      "Created multiple dashboards and their endpoints for high level overview of server sleep test, and states. with 10+ views 100+ filters and multiple drill down option for Upper Management",
      "Build  UI and API development in the Scream Test process which contains 3 Flows with 5+ Stages and over 30+ Tasks for each server Type Sleep Test with retry mechanism",
      "750+ Servers sleep-tested with 2 weeks average per sever saving infrastructure cost",
    ],
    stack: [
      { name: "React" },
      { name: ".NET" },
      { name: "Material UI" },
      {
        name: "Feature Management",
      },
      {
        name: "Application Insight",
      },
      { name: "Html/CSS" },
      {
        name: "JavaScript",
      },
    ],
  },
  {
    num: "05",
    category: "LEDCS Electronic DataConversion Services",
    title: "test",
    description:
      "Data Conversion solution from Data Ingestion from external sources to EPIC EMR",
    points: [
      "Contributed to the electronic Data Conversion project from external vendors to the EPIC EMR system Reducing integration time to 2 weeks.",
      "Developed solution with 5+conversionTypes 12+Datasets,Configurable attributes for each conversion. ",
      "Engineered reusable components using custom hooks to streamline complex UI requirements, greatly reducing code duplication.",
    ],
    stack: [
      { name: "React" },
      { name: ".NET" },
      { name: "BootStrap" },
      { name: "Html/CSS" },
      {
        name: "JavaScript",
      },
    ],
  },
  {
    num: "06",
    category: "SCRAP Server Decommissioning ",
    title: "test",
    description: "Server Decommission Solution ",
    points: [
      "Created RESTful Service for External Teams to initiate Server Decommission",
      "Developed Reliable Endpoints with OAuth Authentication to initiate Server Decommission for external services",
      "Implemented Multiple validations and Transactional Execution to ensure integrity for Bulk Server Retirement",
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
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
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
