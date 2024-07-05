import Link from "next/link";
import Nav from "./Nav";
import { Button } from "../ui/button";
import ToggleButton from "@/app/toggleButton";
const Header = (props) => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Mano <span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
          <ToggleButton />
        </div>

        <div className="xl:hidden"> mobile nav</div>
      </div>
    </header>
  );
};
export default Header;
