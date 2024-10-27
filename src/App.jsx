
import { FcDepartment } from 'react-icons/fc';
import styles from './App.module.css';
import About from './components/About/About';

import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Departments from './components/Departments/Departments';
import Sponsors from './components/Sponsors/Sponsors';


function App() {


  return  <div className={styles.App}>
    <Navbar/>
    <Hero />
    <About/>
    <Projects/>
    <Departments/>
    <Sponsors/>

  </div>
 
  
}

export default App
