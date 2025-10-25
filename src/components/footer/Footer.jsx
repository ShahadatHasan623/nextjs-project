import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-primary text-[#ffff] p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Shahadat Dev
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
