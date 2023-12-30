import React, { useRef, useLayoutEffect } from 'react'
import styles from './Style.module.css';
import gsap from 'gsap/dist/gsap';
import { useInView } from 'react-intersection-observer';

export default function Index() {

    const verticalContainer = useRef();

    useLayoutEffect(() => {
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
        threshold: 0,
    });

    const line = useRef(null);
    const div = useRef(null);

    useLayoutEffect( () => {
        let ctx = gsap.context(() => {
            if(inView){
                gsap.to(div.current, {y: "0", duration: 1, ease: [0.33, 1, 0.68, 1]})
                gsap.to(line.current, {width: "100%", duration: 1.2})
            }
            else{
                gsap.set(div.current, {y: "100%"})
                gsap.set(line.current, {width: 0})
            }
        })
        return () => ctx.revert();
    }, [inView])

    return(
        <div ref={ref} className={styles.project}>
            <div className={styles.background}></div>
            <div ref={line} className={styles.line}></div>
            <div ref={div} className={styles.lineMask}>
                <p>{projectTitle}</p>
                <p>{awardTitle}</p>
                <p>{year}</p>
            </div>
        </div>
    )
}