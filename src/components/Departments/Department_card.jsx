import styles from "./Department_card.module.css";
import { motion } from 'framer-motion';
import { useState } from "react";

const Department_card = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div 
            layout
            onHoverStart={() => setIsOpen(true)}
            onHoverEnd={() => setIsOpen(false)}
            className={styles.container}
            transition={{ layout: { duration: 0.4, type: "spring" } }} 
            style={{ scale: isOpen ? 1.05 : 1 }} 
        >
            <motion.h2 layout className={styles.title}>
                Avionics
            </motion.h2>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.content}
                >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nobis possimus beatae, autem velit totam reiciendis, obcaecati doloribus voluptatibus corporis maxime.
                    </p>
                </motion.div>
            )}
        </motion.div>
    );
}

export default Department_card;
