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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const [scroll, setScroll] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    if(!scroll){
      (async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            direction: "horizontal",
            lerp: 0.07
          })

          locomotiveScroll.on("scroll", ScrollTrigger.update)

          ScrollTrigger.scrollerProxy(document.querySelector('[data-scroll-container]'), {
                scrollLeft(value){
                    return arguments.length ? locomotiveScroll.scrollTo(value, 0, 0) : locomotiveScroll.scroll.instance.scroll.x;
                },
                getBoundingClientRect() {
                    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
                },
                pinType: document.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
          })

          ScrollTrigger.defaults({
            scroller: document.querySelector('[data-scroll-container]')
          })

          ScrollTrigger.addEventListener("refresh", () => locomotiveScroll.update());
          ScrollTrigger.refresh();

          setScroll(locomotiveScroll)

          //Block scroll and set loading for first .75 second
          locomotiveScroll.stop();
          document.documentElement.style.cursor = 'wait'
          setTimeout( () => {
            document.documentElement.style.cursor = 'default'
            locomotiveScroll.start();
            setIsLoading(false);
          }, 750)

      })()
    }
    return () => {
      scroll && scroll.destroy();
    }
  }, [scroll])

  return (
    <>
      <Loader isLoading={isLoading}/>
      {<div className={styles.container} data-scroll-container data-scroll id="container">

        <div className={styles.body}>
          <Section1 />
          <Section2 scroll={scroll}/>
          <Section3 scroll={scroll}/>
        </div>

      </div>}
    </>
  )
}
