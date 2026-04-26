import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
//import { ScrollArea } from "@radix-ui/react-scroll-area";
const experience = {
  icon: "add later",
  title: "My Experience",
  description: (
    <>
      Experienced Software Development Engineer with <b>4+ years</b> of
      expertise in scalable enterprise solutions. Currently serving as a{" "}
      <b>Software Development Engineer at Apple</b>, previously contributing as
      Software Engineer IC2 at <b>ServiceNow</b> within Global Cloud Services,
      developing operational applications for data center infrastructure. Prior
      experience at <b>Providence India</b> includes delivering multiple
      lifecycle engineering solutions across diverse technology stacks.
    </>
  ),
  info: [
    {
      company: "Apple",
      position: "Software Engineer",
      duration: "Sep-2025 - Present",
      description: "",
      logo: "/assets/logo/apple_logo.jpeg",
      location: "Hyderabad",
      current: true,
    },
    {
      company: "ServiceNow",
      position: "Software Engineer IC2",
      duration: "Oct-2024 - Aug-2025",
      logo: "/assets/logo/servicenow_logo.jpeg",
      logoType: "square",
      location: "Hyderabad",
    },
    {
      company: "Providence India",
      position: "Software Engineer II",
      duration: "Aug-2021 - Sept-2024",
      description: "",
      logo: "/assets/logo/providence_india_logo.jpeg",
      logoType: "square",
      location: "Hyderabad",
    },
    {
      company: "Providence India",
      position: "Software Engineer I",
      duration: "Aug-2021 - April-2022",
      description: "",
      logo: "/assets/logo/providence_india_logo.jpeg",
      logoType: "square",
      location: "Hyderabad",
    },
    {
      company: "ICFOSS",
      position: "Intern",
      duration: "July-2019",
      description: "",
      logo: "/assets/logo/icfoss_logo.jpeg",
      logoType: "square",
      location: "Trivandrum",
    },
  ],
};
const Experience = () => {
  return (
    <div className="flex flex-col gap-6 text-left">
      <h3 className="text-3xl xl:text-4xl font-bold">{experience.title}</h3>
      <p className="max-w-[600px] text-contrast/70 leading-relaxed">
        {experience.description}
      </p>
      <ScrollArea className="h-[420px] w-full overflow-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 pr-4">
          {experience.info.map((info, idx) => {
            return (
              <li
                key={idx}
                className="bg-primary-hover border border-contrast/10 hover:border-accent/40 min-h-[190px] w-full py-5 px-5 rounded-xl flex flex-col justify-between items-start gap-3 transition-all duration-300"
              >
                {/* Header - Company with logo */}
                <div className="flex items-center gap-3 w-full">
                  {/* Company Logo */}
                  <div
                    className={`w-12 h-12 bg-accent/10 flex items-center justify-center flex-shrink-0 relative overflow-hidden ${
                      info.logoType === "square" ? "rounded-md" : "rounded-full"
                    }`}
                  >
                    {info.logo ? (
                      <Image
                        src={info.logo}
                        fill
                        priority
                        sizes="48px"
                        alt={`${info.company} logo`}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-accent font-bold text-lg">
                        {info.company.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-contrast font-semibold text-lg leading-tight truncate">
                      {info.company}
                    </h4>
                    <span className="text-contrast/60 text-sm">
                      {info.location || "Remote"}
                    </span>
                  </div>
                </div>

                {/* Position */}
                <div className="flex-1 flex items-center">
                  <h3 className="text-lg xl:text-xl font-bold text-contrast text-left leading-tight">
                    {info.position}
                  </h3>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between mt-auto w-full">
                  <div className="flex items-center gap-2">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0"></span>
                    <span className="text-accent font-medium">
                      {info.duration}
                    </span>
                  </div>

                  {/* Optional: Current job indicator */}
                  {info.current && (
                    <div className="w-2 h-2 ml-2 rounded-full bg-accent animate-pulse"></div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};
export default Experience;
