import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../styles/style-footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='link'>
        <a
          href='https://github.com/AldoWijaya27'
          target='_blank'
          rel='noreferrer'
          aria-label='github'
        >
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/aldo-wijaya-0a8750201/'
          target='_blank'
          rel='noreferrer'
          aria-label='linkedin'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://www.instagram.com/wijayaaldoo'
          target='_blank'
          rel='noreferrer'
          aria-label='instagram'
        >
          <FaInstagram />
        </a>
        <a
          href='https://api.whatsapp.com/send?phone=6282180228516'
          target='_blank'
          rel='noreferrer'
          aria-label='whatsapp'
        >
          <FaWhatsapp />
        </a>
      </div>
      <p>Developed by Aldo Wijaya</p>
    </footer>
  );
};

export default Footer;
