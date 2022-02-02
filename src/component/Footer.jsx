import React from "react";

function Footer() {
  const t = new Date();
  const year = t.getFullYear();

  return (
    <footer>
      <p>© copyright {year}</p>
    </footer>
  );
}

export default Footer;
