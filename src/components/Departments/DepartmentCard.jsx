'use client'

import React, { useState, useRef, useEffect } from 'react';
import styles from './DepartmentCard.module.css';

const DepartmentCard = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [description]);

    return (
        <div 
            className={`${styles.container} ${isOpen ? styles.open : ''}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            style={{
                height: isOpen ? `${150 + contentHeight}px` : '150px'
            }}
        >
            <h2 className={styles.title}>{title}</h2>
            <div 
                ref={contentRef}
                className={`${styles.content} ${isOpen ? styles.visible : ''}`}
                style={{
                    height: isOpen ? contentHeight + 'px' : '0'
                }}
            >
                <p>{description}</p>
            </div>
        </div>
    );
};

export default DepartmentCard;