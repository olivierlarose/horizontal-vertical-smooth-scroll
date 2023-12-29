//Pictures by George Marazakis
//Inspired by https://e-t.studio/studio
import styles from '../styles/Home.module.css'
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useState, useEffect } from 'react';
import Loader from '../components/loader';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

    const [scroll, setScroll] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        const lenis = new Lenis({
            orientation: "horizontal"
        })

        function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])
    return (
        <>
        {/* <Loader isLoading={isLoading}/> */}
        {<div className={styles.container} id="container">

            <div className={styles.body}>
            <Section1 />
            <Section2/>
            <Section3/>
            </div>

        </div>}
        </>
    )
}
