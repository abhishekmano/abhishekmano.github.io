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
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/abhishek-mano/",
    label: "LinkedIn",
  },
  {
    icon: <FaCode />,
    path: "https://leetcode.com/u/AbhishekManoharan/",
    label: "LeetCode",
  },
  {
    icon: <FaEnvelope />,
    path: "mailto:abhishekmanoharan1999@gmail.com",
    label: "Email",
  },
  { icon: <FaGithub />, path: "https://github.com/abhishekmano", label: "GitHub" },
  { icon: <FaWhatsapp />, path: "https://wa.me/918891410500", label: "WhatsApp" },
  { icon: <FaPhoneAlt />, path: "tel:+918891410500", label: "Phone" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map((link, idx) => {
        return (
          <Link
            key={idx}
            href={link.path}
            className={iconStyles}
            aria-label={link.label}
            title={link.label}
            target={link.path.startsWith("http") ? "_blank" : undefined}
            rel={link.path.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {link.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
