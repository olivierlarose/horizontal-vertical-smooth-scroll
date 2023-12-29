import React, { useRef, useEffect, useState } from 'react'
import styles from './Style.module.css';
import gsap from 'gsap/dist/gsap';
import TextMask from '../textMask';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function index() {

    const verticalContainer = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(verticalContainer.current, {
                scrollTrigger: {
                    trigger: verticalContainer.current,
                    start: "left left",
                    end: "+=" + (window.innerHeight * 0.75 + window.innerWidth * 0.25),
                    pin: true,
                    pinSpacing: true,
                    scrub: true,
                    horizontal: true,
                },
                y: -(verticalContainer.current.scrollHeight - window.innerHeight),
                ease: "none"
            });
          });
        return () => ctx.revert(); // <-- CLEANUP!
    }, [])

    return (
        <div className={styles.container}>
            <div ref={verticalContainer} className={styles.verticalContainer}>
                <div className={styles.body}>
                    <div className={styles.header}>
                        <p>Awards &</p>
                        <p>Recognition</p>
                    </div>
                    {
                        [...Array(30)].map( (_, index) => {
                            return <Project key={index} projectTitle={"Project " + index} awardTitle={"Css Design Awards"} year={"2023"}/>
                        })
                    }
                </div>
            </div>
        </div>
       
    )
}

export function Project({projectTitle, awardTitle, year}){
    
    const { ref, inView } = useInView({
        threshold: 0
    })

    const animation = {
        initial: {y: "100%", opacity: 0},
        enter: i => ({y: "0", opacity: 1, transition: {duration: 1, ease: [0.33, 1, 0.68, 1]}})
    }

    return(
        <div ref={ref} variants={animation} initial="initial" animate={inView ? "enter" : ""} className={styles.project}>
            <div className={styles.background}></div>
            <div className={inView ? styles.lineActive : styles.line}></div>
            <motion.div className={styles.lineMask}>
                <p>{projectTitle}</p>
                <p>{awardTitle}</p>
                <p>{year}</p>
            </motion.div>
        </div>
    )
}