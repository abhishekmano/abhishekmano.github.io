"use client";

import AboutMe from "@/components/resumeComponents/about";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
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
        transition: { delay: 0.12, duration: 0.3, ease: "easeInOut" },
      }}
      className="min-h-[80vh] py-8 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-8 xl:gap-[60px]"
        >
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 xl:flex xl:flex-col w-full max-w-full xl:max-w-[320px] xl:mx-0 gap-3">
            <TabsTrigger value="about">
              About Me
            </TabsTrigger>
            <TabsTrigger value="experience">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills">
              Skills
            </TabsTrigger>
            <TabsTrigger value="workProjects" className="col-span-2 sm:col-span-1">
              Work Projects
            </TabsTrigger>
          </TabsList>
          {/* Content of Tabs */}
          <div className="w-full bg-primary-hover/40 rounded-2xl p-4 sm:p-6 xl:p-0 xl:bg-transparent xl:rounded-none">
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
