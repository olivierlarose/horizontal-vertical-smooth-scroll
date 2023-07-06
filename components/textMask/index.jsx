import React from 'react'
import { motion } from 'framer-motion';

export default function index({text, styles, animate, delay}) {

    const animation = {
        initial: {y: "100%", opacity: 0},
        enter: i => ({y: "0", opacity: 1, transition: {duration: 1, ease: [0.33, 1, 0.68, 1], delay: delay}})
    }

    return (
        <div className={styles.lineMask}>
            <motion.p custom={index} variants={animation} initial="initial" animate={animate ? "enter" : ""}>{text}</motion.p>
        </div>
    )
}
