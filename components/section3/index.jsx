import React from 'react'
import styles from './Style.module.css'
import Image from 'next/image';
import Picture from '../../public/images/picture2.jpg';

export default function Index() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image 
                    src={Picture}
                    fill={true}
                    alt="background"
                    placeholder='blur'
                />
            </div>
        </div>
    )
}
