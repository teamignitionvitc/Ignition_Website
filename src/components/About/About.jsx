'use client'

import React from 'react';
import styles from "./About.module.css";
import Carousel from './Carousel';

const About = () => {
    const images = [
        '/images/about1.jpg',
    '/images/about2.JPG',
    '/images/about3.jpg',
    '/images/about4.JPG',
    '/images/about5.jpeg'
    ];
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <div className={styles.caro}>
            <Carousel images={images}/>
            </div>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div>
                        <h3>Ideology</h3>
                        <p>The core philosophy of Team Ignition can be attributed to one trait alone-Obsession. The obsession to challenge oneself, continuously learn from mistakes and push the boundaries of what is possible defines the team's work culture and ethos.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div>
                        <h3>About Ignition</h3>
                        <p> Driven by a passion to represent VIT Chennai and India globally,we focus on mastering sounding rockets through collaboration and interdisciplinary teamwork. We are committed to expanding our knowledge and pushing the limits of space technology.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
}

export default About;