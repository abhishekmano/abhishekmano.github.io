"use client";

import AboutMe from "@/components/resumeComponents/about";

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
import Experience from "@/components/resumeComponents/experience";
import Education from "@/components/resumeComponents/education";
import Skills from "@/components/resumeComponents/skills";
import WorkProjects from "@/components/resumeComponents/workProjects";
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
            <TabsTrigger value="workProjects">Work Projects</TabsTrigger>
          </TabsList>
          {/* Content of Tabs */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <Experience />
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <Education />
            </TabsContent>
            {/* Skills Section */}
            <TabsContent value="skills" className="w-full">
              <Skills />
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <AboutMe />
            </TabsContent>
            <TabsContent value="workProjects" className="w-full">
              <WorkProjects />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
