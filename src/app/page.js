
import AboutMe from "../components/AboutMe";
import HomeHeroSec from "@/components/homeHeroSec";
import Navbar from "@/components/navbar";
import CustomCursor from "@/components/showDot/CustomCursor";
export default function Home() {
  return (
    <main >
      <HomeHeroSec/>
      <AboutMe/>
      <CustomCursor/>
    </main>
  );
}
