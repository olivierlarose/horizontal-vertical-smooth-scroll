import React from 'react'
import styles from './Style.module.css';
import TextMask from '../textMask';
import Image from 'next/image';
import Picture from '../../public/images/picture1.jpg';

const phrases = [
    "Beauty and quality need the right time",
    "to be conceived and realised even in a",
    "world that is in too much of a hurry.",
    "That if lightness is not superficiality,",
    "time is not slowness, but just the basic",
    "ingredient to create value."
]

const footerPhrases = [
    "Time",
    "Curiosity",
    "Kindness",
    "Trust"
]
export default function Index() {

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image 
                    src={Picture}
                    fill
                    alt="background"
                    placeholder='blur'
                />
            </div>
            <div className={styles.body}>
                <p className={styles.subtitle}>
                    Post Scriptum
                </p>
                {
                    phrases.map( (phrase, index) => {
                        return <TextMask key={index} text={phrase} styles={styles} animate={true} delay={0.1 * index}/>
                    })
                }
                
                <div className={styles.footer}>
                    <p className={styles.subtitle}>
                        Post Scriptum
                    </p>
                    {
                        footerPhrases.map( (phrase, index) => {
                            return <TextMask key={index} text={phrase} styles={styles} animate={true} delay={0.1 * index}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
