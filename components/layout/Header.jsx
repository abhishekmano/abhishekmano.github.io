"use client";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "../ui/button";
import ToggleButton from "@/app/toggleButton";
import MobileNav from "./MobileNav";
const Header = (props) => {
  return (
    <header className="py-8 xl:py-10 flex flex-row mr-8">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Mano <span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </div>

        <div className="lg:hidden flex gap-8">
          <ToggleButton />
          <MobileNav />
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-8">
        <ToggleButton />
      </div>
    </header>
  );
};
export default Header;
