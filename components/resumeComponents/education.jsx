import { ScrollArea } from "@/components/ui/scroll-area";
//Education
const education = {
  icon: "add later",
  title: "Academics",
  description: (
    <>
      I hold a &nbsp;
      <b className="text-contrast font-semibold">
        Bachelor&apos;s degree with Honours in Computer Science and Engineering
      </b>
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
const Education = () => {
  return (
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
  );
};
export default Education;
