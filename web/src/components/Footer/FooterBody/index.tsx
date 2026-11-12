import React from "react";
import Image from "next/image";
import { FooterLinks } from "@/constants";
import Link from "next/link";

const FooterBody = () => {
  return (
    <footer className="w-full bg-blue-600 text-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-x-8 gap-y-8 px-5 py-10 text-sm sm:grid-cols-2 sm:gap-y-10 sm:px-6 sm:py-12 sm:text-base lg:grid-cols-4 lg:px-4">
        {/* Logo */}
        <div className="flex max-w-xl flex-col">
          <Link href="/">
            <Image
              src="/images/truP.png"
              width={176}
              height={80}
              alt="TruBooker Logo"
              className="h-20 w-44 object-contain"
            />
          </Link>
        </div>

        {/* Footer Links */}
        {FooterLinks.map((link) => (
          <div key={link.header}>
            <h3 className="pb-2 pt-2 font-bold sm:pb-3">{link.header}</h3>

            <div className="my-3 flex flex-col gap-3 sm:my-5 sm:gap-4">
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.path}
                  className="w-fit max-w-full break-words text-sm font-normal transition-colors duration-300 hover:text-blue-100 sm:text-base"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default FooterBody;