import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
//Components
import Socials from "@/components/Socials";
import Photo from "@/components/styledElements/Photo";
import Stats from "@/components/styledElements/Stats";
import PDFViewer from "@/components/PdfViewer";
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-8">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />
              <span className="text-accent">Abhishek Manoharan</span>
            </h1>
            <p className="max-w-[500px] mb-7 text-contrast/80">
              👨🏽‍💻 Full-Time coder 📚 Part-Time Reader 🏸 Badminton Enthusiast and
              Occasional Chef 🍳.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <div className="hidden xl:flex">
                  <PDFViewer>
                    <span>Resume</span>{" "}
                  </PDFViewer>
                </div>
                <a href="test.pdf" download className="hidden xl:flex">
                  <FiDownload className="text-xl" />
                </a>
                <div className="xl:hidden">
                  <a href="test.pdf" download className="flex ">
                    <span>Resume</span>
                    <FiDownload className="text-xl" />
                  </a>
                </div>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Social Information */}

          <div className="order-1 xl:order xl:order:none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
