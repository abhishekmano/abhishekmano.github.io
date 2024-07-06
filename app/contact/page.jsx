"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
} from "react-icons/fa";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: (
      <Link href="tel:+918891410500" className="hover:text-accent">
        {" "}
        +91-8891410500
      </Link>
    ),
  },
  {
    icon: <FaLinkedinIn />,
    title: "Linked In",
    href: "https://www.linkedin.com/in/abhishek-mano/",
    description: (
      <Link
        href={"https://www.linkedin.com/in/abhishek-mano/"}
        className="hover:text-accent"
      >
        Abhishek Manoharan
      </Link>
    ),
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: (
      <Link
        href={"mailto:abhishekmanoharan1999@gmail.com"}
        className="hover:text-accent"
      >
        abhishekmanoharan1999@gmail.com
      </Link>
    ),
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "B101, Fortune Nest Apartment Masjid Banda",
  },
];
import { motion } from "framer-motion";
import Link from "next/link";
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row  gap-[30px]">
          <div className="xl:w-[44%] order-2 xl:order-none">
            {/* <form className="flex flex-col gap-6 bg-primary-hover rounded-xl p-10">
              <h3 className="text-4xl text-accent">
                {" "}
                Let&apos;s get in touch{" "}
              </h3>{" "}
              <p className="text-contrast/60"></p>
            </form> */}
          </div>
          <div className="flex-1 flex items-center xl:justify-end xl:order-none order-1 mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:min-w-[72px] xl:min-h-[72px] bg-primary-hover text-accent rounded-md flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-contrast/60">{item.title}</div>
                      <div className=" text-xl">{item.description}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
