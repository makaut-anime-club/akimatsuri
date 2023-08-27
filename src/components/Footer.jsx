import React from "react";
import styles from "./Footer.module.css";

const location = "https://goo.gl/maps/ALerY7XDZZqgj1es8";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* <div className={styles["social-media"]}>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Discord</li>
        </ul>
      </div> */}
      {/* <div className={styles["social-media"]}>
        <ul>
          <li>Gallery</li>
          <li>Templates</li>
          <li>Links</li>
        </ul> 
      </div> */}
      {/* <div className={styles["social-media2"]}>
        <ul>
          <li>Online</li>
          <li>Events</li>
          <li>Stalls</li>
        </ul>
      </div> */}
      <div className={styles.map}>
        <h3>Our Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1038.3962602049776!2d88.54279192635929!3d22.957535327812554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bf8b4467fff7%3A0xb7992512444ab73!2sAcademic%20building%20(MAKAUT)!5e0!3m2!1sen!2sin!4v1693123448119!5m2!1sen!2sin"
          width="350"
          height="300"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={styles['location-link']}>
          <button style={{textDecoration: 'none', fontSize: '16px', outline: 'none', border: '2px solid white', borderRadius: '40px', padding: '0.75rem', margin: '1rem', background: 'transparent', color: 'white'}}><a type="button" href={location} style={{textDecoration: 'none', fontSize: '16px', color: 'white'}}>Click to see in Google maps</a></button>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
