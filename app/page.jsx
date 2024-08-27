import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//component
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/** text details with name and display details */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* <span className="text-xl">Backend Developer @ Infosys Limited</span> */}
            <h1 className="h2 md-6">
              Hello I&apos;m <br />{" "}
              <span className="text-accent h1">Bhavesh Raut</span>
            </h1>
            <p className="max-w-[670px] mb-9 text-white/80 pt-5">
            An aspiring Cloud Engineer with a solid foundation in computer science, passionate about creating scalable and efficient cloud solutions.
            </p>
            {/**btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                download
                href="https://aniket-thakre.vercel.app/assets/resume/bhavesh_raut.pdf"
              >
                <Button
                  varient="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/** Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
