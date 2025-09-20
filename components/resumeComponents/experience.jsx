import { ScrollArea } from "@/components/ui/scroll-area";
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
      company: "ServiceNow, Hyderabad",
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
const Experience = () => {
  return (
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
              investigation and Remediation on 16+ servicenow Data-centers over
              6M+ Configuration Items to resolve alerts using automatons).
            </p>
          </div>
          <div className="mt-8 xl:mt-0">
            <div className="text-accent font-semibold">
              Legacy Archive Portal (LAP)
            </div>
            <p>
              Replaced LDA (Legacy Data Archival) with a cost-saving,
              data-format-flexible archival solution saving 11 million dollars a
              year.
            </p>
          </div>
          <div>
            <div className="text-accent font-semibold mt-3">LES PORTAL</div>
            <p>
              Streamlined application retirement, automating processes and
              retiring 500+ apps via end to end intake solution.
            </p>
          </div>
          <div>
            <div className="text-accent font-semibold mt-3">
              Sleep Test Automation
            </div>
            <p>
              Contributed to server sleep test portal, optimizing infrastructure
              costs and accelerating infrastructure scream test .
            </p>
          </div>
          <div>
            <div className="text-accent font-semibold mt-3">
              Electronic Data Conversions Service LEDCS:
            </div>
            <p>
              Build configurable conversion solutions helps to ingest data from
              external source to EPIC EMR with configurable UI.
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
  );
};
export default Experience;
