import styles from "./Footer.module.css";

import { BiLogoGmail } from 'react-icons/bi';
import { AiOutlinePhone, AiFillInstagram } from 'react-icons/ai';
// import { BsDiscord, BsInstagram } from 'react-icons/bs';

const location = "https://goo.gl/maps/ALerY7XDZZqgj1es8";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles["social-media"]}>
        <ul>
          <li><AiFillInstagram size={'30px'}/> @makaut_animeclub</li>
          <li><BiLogoGmail size={'30px'}/> makautanimeclub@gmail.com</li>
          <li><AiOutlinePhone size={'30px'}/> +91 91635 09310</li>
          <li><AiOutlinePhone size={'30px'}/> +91 62965 05862</li>
          <li><AiOutlinePhone size={'30px'}/> +91 96410 47507</li>
          <li style={{fontSize: '24px'}} >Working hours &rarr; <span style={{fontWeight: 'bold'}}>10am to 6pm (Monday to Friday)</span> </li>
        </ul>
      </div>
      <div className={styles.map}>
        <h3>Our Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1038.3962602049776!2d88.54279192635929!3d22.957535327812554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bf8b4467fff7%3A0xb7992512444ab73!2sAcademic%20building%20(MAKAUT)!5e0!3m2!1sen!2sin!4v1693123448119!5m2!1sen!2sin"
          width="350"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={styles['location-link']}>
          <button style={{textDecoration: 'none', fontSize: '16px', outline: 'none', border: '2px solid white', borderRadius: '40px', padding: '0.75rem', margin: '1rem', background: 'transparent', color: 'white'}}><a type="button" href={location} style={{textDecoration: 'none', fontSize: '16px', color: 'white'}}>Click to see in Google maps</a></button>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
