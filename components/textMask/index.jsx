import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
export default function Index({text, styles, animate, delay}) {

    const textRef = useRef(null);

    useLayoutEffect( () => {
        let ctx = gsap.context(() => {
            gsap.from(textRef.current, {y: "100%", duration:1, ease: [0.33, 1, 0.68, 1], delay})
        });
        return () => ctx.revert(); // <-- CLEANUP!
    }, [animate])

    return (
        <div className={styles.lineMask}>
            <p ref={textRef}>
                {text}
            </p>
        </div>
    )
}
