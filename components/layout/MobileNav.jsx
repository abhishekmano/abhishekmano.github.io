"use client";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { paths } from "./Nav";
import { Button } from "../ui/button";
const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-32 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Mano <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {paths.map((route, idx) => {
            return (
              <Link
                key={idx}
                href={route.path}
                className={`${
                  route.path == pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize  hover:text-accent transition-all `}
              >
                {route.name}
              </Link>
            );
          })}
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
