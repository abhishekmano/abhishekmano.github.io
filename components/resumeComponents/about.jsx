import * as React from "react";

const about = {
  title: "About me",
  description: (
    <>
      <span className="font-bold text-contrast">
        🚀 Passionate Software Engineer | Cloud Enthusiast
      </span>
      <br />
      <br />
      As a seasoned software engineer, I specialize in designing robust
      end-to-end cloud solutions. <br /> <br />
      I enjoy solving complex challenges, collaborating with teams, and
      continuously learning to stay ahead and build impactful products. 🌟
    </>
  ),
  info: [
    {
      fieldName: "Name",
      fieldValue: "Abhishek Manoharan",
    },
    {
      fieldName: "Email",
      fieldValue: "abhishekmanoharan1999@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91-8891410500",
    },
  ],
};
const AboutMe = () => {
  return (
    <div className="flex flex-col gap-6 text-left">
      <h3 className="text-3xl xl:text-4xl font-bold">{about.title}</h3>
      <p className="max-w-[600px] text-contrast/70 leading-relaxed">
        {about.description}
      </p>
    </div>
  );
};
export default AboutMe;
