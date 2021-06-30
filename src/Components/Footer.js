import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: 'rgb(168, 255, 247)',
    marginTop: '420px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center'
  }
  return (
    <div style={footerStyle}>
      <h4>Footer</h4>
      <span>&nbsp;-&nbsp;</span>
      <p>&copy; 2021 Ahmed, Carlos, & Seth</p>
    </div>

  );
}

export default Footer;