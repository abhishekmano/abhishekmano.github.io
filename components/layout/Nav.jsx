"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const paths = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "skills",
    path: "/skills",
  },
  {
    name: "project",
    path: "/projects",
  },
  {
    name: "experience",
    path: "/experience",
  },
];
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {paths.map((route, idx) => {
        return (
          <Link
            key={idx}
            href={route.path}
            className={`${
              route.path == pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all `}
          >
            {route.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
