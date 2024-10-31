import dynamic from "next/dynamic";
import { FcDepartment } from "react-icons/fc";
import styles from "../styles/App.module.css";
import { Canvas } from "@react-three/fiber";

const Bkg = dynamic(() => import("../components/Bkg/Bkg"), {
  ssr: true,
});
const About = dynamic(() => import("../components/About/About"), {
  ssr: true,
});
const Hero = dynamic(() => import("../components/Hero/Hero"), {
  ssr: true,
});
const Navbar = dynamic(() => import("../components/Navbar/Navbar"), {
  ssr: true,
});
const Projects = dynamic(() => import("../components/Projects/Projects"), {
  ssr: true,
});
const Departments = dynamic(
  () => import("../components/Departments/Departments"),
  {
    ssr: true,
  }
);
const Sponsors = dynamic(() => import("../components/Sponsors/Sponsors"), {
  ssr: true,
});

export default function Home() {
  return (
    <div className={styles.App}>
      <Bkg />
      <Navbar />
      <div id="home" style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
      </div>
      <div id="about" style={{ position: 'relative', zIndex: 1 }}>
        <About />
      </div>
      <div id="projects" style={{ position: 'relative', zIndex: 1 }}>
        <Projects />
      </div>
      <div id="departments" style={{ position: 'relative', zIndex: 1 }}>
        <Departments />
      </div>
      <div id="sponsors" style={{ position: 'relative', zIndex: 1 }}>
        <Sponsors />
      </div>
    </div>
  );
}
