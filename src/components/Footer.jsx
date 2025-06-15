// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-100 text-blue-700 text-center text-sm py-3 mt-10">
      © {new Date().getFullYear()} WaterScope Project. All rights reserved.
    </footer>
  );
}

export default Footer;