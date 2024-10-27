import React from 'react';
import styles from "./Departments.module.css";
import Department_card from './Department_card';
import { motion } from 'framer-motion';

const Departments = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        Departments
      </div>
      <motion.div className={styles.cards} layout>
        <Department_card />
        <Department_card />
        <Department_card />
        <Department_card />
        <Department_card />
        <Department_card />
      </motion.div>
    </section>
  );
}

export default Departments;
