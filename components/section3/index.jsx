import React from 'react'
import styles from './Style.module.css'
import Image from 'next/image';

export default function index() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image 
                    src="/images/picture2.jpg"
                    fill={true}
                    alt="background"
                />
            </div>
        </div>
    )
}
