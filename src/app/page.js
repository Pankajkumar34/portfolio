
import AboutMe from "../components/AboutMe";
import HomeHeroSec from "@/components/homeHeroSec";
import Navbar from "@/components/navbar";
import CustomCursor from "@/components/showDot/CustomCursor";
import  Skills  from "../components/skills";
export default function Home() {
  return (
    <main >
      <HomeHeroSec/>
      <AboutMe/>
      <Skills/>
      <CustomCursor/>
    </main>
  );
}
