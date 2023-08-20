import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles['social-media']}>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Discord</li>
          </ul>
        </div>
        <div className={styles['social-media']}>
        <ul>
            <li>Gallery</li>
            <li>Templates</li>
            <li>Links</li>
          </ul>
        </div>
        <div className={styles['social-media2']}>
          <ul>
            <li>Online</li>
            <li>Events</li>
            <li>Stalls</li>
          </ul>
        </div>

    </div>
  )
}

export default Footer