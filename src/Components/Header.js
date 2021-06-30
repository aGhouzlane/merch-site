import React from "react";

function Header() {
  const footerStyle = {
    backgroundColor: 'rgb(168, 255, 247)',
    marginTop: '0px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center'
  }
  return (
    <div style={footerStyle}>
      <h1>T-Shirt Shop</h1>
    </div>

  );
}

export default Header;