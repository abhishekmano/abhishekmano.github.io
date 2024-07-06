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
    category: "Full Stack",
    title: "test",
    description: "ajsgfuisf hdfsg ",
    points: ["I have done this", " i have done that"],
    stack: [{ name: "Html 5" }, { name: "React" }],
  },
  {
    num: "02",
    category: "New Project",
    title: "tesdf st",
    description: "ajsgfuisf hdsdf sd fsg ",
    points: [
      "I have done this",
      " i have done that",
      "Optimised this ",
      "optimized that",
    ],
    stack: [{ name: "Html 5" }, { name: "React" }],
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
          <div className="w-full xl:w-[50%] ">
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
                      <ul className="flex gap-4">
                        {project.stack.map((tech, index) => {
                          return (
                            <li key={index} className="text-xl text-accent">
                              {tech.name}{" "}
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
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between ">
            <div className="h-[460px] relative group flex justify-center items-center bg-primary-hover rounded-xl">
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
