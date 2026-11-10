
import React from "react";
import FooterBody from "./FooterBody";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-blue-500">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <FooterBody />

        {/* Copyright section */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/30 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-sm font-light text-white">
            © 2024 TruBooker. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
