import React from 'react';
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <div className={styles.caro}>Carousel</div>
            {/* <Carousel images={images}/> */}
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div>
                        <h3>AAA</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam aliquam, adipisci nihil, eos quibusdam fugiat, doloremque consequatur voluptate dolorem iure commodi ratione dolore deleniti suscipit nemo illum sint distinctio magnam.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div>
                        <h3>AAA</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam aliquam, adipisci nihil, eos quibusdam fugiat, doloremque consequatur voluptate dolorem iure commodi ratione dolore deleniti suscipit nemo illum sint distinctio magnam.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div>
                        <h3>AAA</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam aliquam, adipisci nihil, eos quibusdam fugiat, doloremque consequatur voluptate dolorem iure commodi ratione dolore deleniti suscipit nemo illum sint distinctio magnam.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
}

export default About;
