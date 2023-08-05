import React from 'react';
import BackToTopButton from './BackToTopButton';

const Footer = () => {

    const footerStyle = {
        backgroundColor: '#4ebe37', // Change this to the desired color
        padding: '20px',
        textAlign: 'center',
      };

  return (
    <footer style={footerStyle}>
      {/* <h2>Footer</h2> */}
      <BackToTopButton />
    </footer>
  );
};

export default Footer;
