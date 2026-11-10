
import React from "react";
import Image from "next/image";
import { FooterLinks } from "@/constants";
import Link from "next/link";

const FooterBody = () => {
  return (
    <div className="bg-blue-600 grid w-full grid-cols-1 gap-x-8 gap-y-10 py-12 text-sm text-white sm:grid-cols-2 sm:text-base lg:grid-cols-4">
      
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
          <h3 className="pb-3 pt-2 font-bold">
            {link.header}
          </h3>

          <div className="my-5 flex flex-col gap-4">
            {link.links.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className="w-fit text-sm font-normal transition-colors duration-300 hover:text-blue-100 sm:text-base"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterBody;
