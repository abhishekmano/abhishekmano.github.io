import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

const socialLinks = [
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/abhishek-mano/" },
  { icon: <FaCode />, path: "https://leetcode.com/u/AbhishekManoharan/" },
  { icon: <FaEnvelope />, path: "mailto:abhishekmanoharan1999@gmail.com" },
  { icon: <FaGithub />, path: "https://github.com/abhishekmano" },
  { icon: <FaWhatsapp />, path: "https://wa.me/918891410500" },
  { icon: <FaPhoneAlt />, path: "tel:+918891410500" },
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
