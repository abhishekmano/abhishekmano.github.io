import Link from "next/link";
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaCode />, path: "" },
  { icon: <FaEnvelope />, path: "" },
  { icon: <FaGithub />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map((link, idx) => {
        return (
          <Link key={idx} href={link.path} className={iconStyles}>
            {link.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
