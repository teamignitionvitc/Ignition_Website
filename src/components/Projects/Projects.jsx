import React, { useState } from 'react';
import styles from "./Projects.module.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons

const projects = [
  {
    name: "Poseidon",
    description: "Poseidon, our inaugural build for the Technoxian Water Rocket Challenge, marked Ignition's entry into competitive rocketry. It provided key insights into aerodynamics and design, fueling progress for future projects.",
    status: "Completed",
    achievement: "Achieved a top 10 finish at the Technoxian World Cup, setting a strong foundation for Ignition's competitive journey.",
    image: "./images/ignitexx.png"
  },
  {
    name: "Jericho",
    description: "Jericho introduced Ignition to solid-fuel rocketry, expanding our knowledge of rocket mechanics and system integration. This project deepened our expertise and prepared us for more advanced builds.",
    status: "Discontinued",
    achievement: "Provided foundational experience in solid-fuel rocketry, significantly enhancing our technical understanding despite technical challenges.",
    image: "./images/jericho2.png"
  },
  {
    name: "Pioneer",
    description: "Pioneer is a high-powered rocket designed to reach a 1 km apogee, powered by our SRAD motor. It carries Suryasat, a CANSAT studying UV radiation effects at high altitudes, advancing our scientific research contributions.",
    status: "Ongoing",
    achievement: "Completed a successful static test, making us one of the fastest teams to reach this milestone. Data collection will focus on UV radiation exposure at high altitudes, contributing valuable insights to atmospheric research.",
    image: "./images/pioneer3.png"
  },
  {
    name: "IgniteX",
    description: "IgniteX is our entry for the InSpace competition, featuring innovative recovery systems and a deployable CANSAT at 1 km. This project showcases our advancements in design, creativity, and engineering.",
    status: "Ongoing",
    achievement: "This is our first entry in an Indian competition, with the launch set for March 2025, highlighting our commitment to pushing the boundaries of rocketry and CANSAT deployment technology.",
    image: "./images/ignitexx.png"
  },
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section>
      <div className={styles.title}>PROJECTS</div>
      <div className={styles.carousel}>
        <button onClick={prevProject} className={styles.carouselButton}>
          <FaChevronLeft />
        </button>
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <h2>{projects[currentIndex].name}</h2>
            <p>{projects[currentIndex].description}</p>
            <p><strong>Completion Status:</strong> {projects[currentIndex].status}</p>
            <p><strong>Key Achievement:</strong> {projects[currentIndex].achievement}</p>
          </div>
          <img src={projects[currentIndex].image} alt={projects[currentIndex].name} className={styles.projectImage} />
        </div>
        <button onClick={nextProject} className={styles.carouselButton}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Projects;
