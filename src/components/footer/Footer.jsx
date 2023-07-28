import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>© GK2023</div>
            <div>
                <div className={styles.social}>
                    <Image src="/1.png" alt="demo" width={15} height={15} className={styles.icon}/>
                    <Image src="/2.png" alt="demo" width={15} height={15} className={styles.icon}/>
                    <Image src="/3.png" alt="demo" width={15} height={15} className={styles.icon}/>
                    <Image src="/4.png" alt="demo" width={15} height={15} className={styles.icon}/>
                </div>
            </div>
        </div>
    )
}

export default Footer 