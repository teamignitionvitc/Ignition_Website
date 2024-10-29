'use client'

import React from 'react';
import styles from "./Departments.module.css";
import DepartmentCard from './DepartmentCard';
import { departments } from '@/data/departments';

const Departments = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        Departments
      </div>
      <div className={styles.cards}>
        {departments.map(dept => (
          <DepartmentCard 
            key={dept.id}
            title={dept.title}
            description={dept.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Departments;
