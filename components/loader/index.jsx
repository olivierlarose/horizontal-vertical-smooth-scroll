import React from 'react'
import styles from './Style.module.css';

export default function Index({isLoading}) {
    const loadingClass = !isLoading ? styles.isLoaded : ''
    return (
        <div className={`${styles.loader} ${loadingClass}` }></div>
    )
}
