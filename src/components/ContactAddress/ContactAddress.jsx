import React from 'react';
import styles from './ContactAddress.module.css';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import socialData from '../../data/socialData';
import contactData from '../../data/contactData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactAddress = () => {
    return (
        <div className={styles.adressContainer}>
            <ToastContainer
                position="bottom-center"
                autoClose={false}
                closeOnClick
                draggable
                style={{
                    fontSize: "1rem",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                    maxWidth: "270px",
                    textAlign: "center",
                    padding: "10px",
                }}
                toastStyle={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    flexWrap: "wrap",
                    maxWidth: "250px",
                }}
            />
            <div className={styles.contactInfo}>
                {contactData.contactInfo.map((item, index) => (
                    <div key={index} className={styles.contactColumn}>
                        <p>{item.contact}</p>
                    </div>
                ))}
            </div>
            <div className={styles.socialContainer}>
                {socialData.socialLinks
                    .filter(social => social.platform !== 'mail')
                    .map((social, index) => (
                        <SocialIcon
                            key={index}
                            platform={social.platform}
                            link={social.link}
                            hoverColor={social.hoverColor}
                            size={25}
                        />
                    ))}
            </div>
        </div>
    );
};

export default ContactAddress;
