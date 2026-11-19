import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

interface Props {
  classname: string;
  height: number;
  width: number;
}

const SocialLinks: React.FC<Props> = ({ classname, width, height }) => {
  return (
    <div className="my-auto">
      <ul className={classname}>
        {/* <li className="py-4 pe-4">
          <Link target={"_blank"} href={"https://www.linkedin.com/"}>
            <div className={`min-w-[${width}] max-w-[${width}]`}>
              <FaLinkedin className={`w-${width} h-${height}`} />
            </div>
          </Link>
        </li>
        <li className="py-4 px-4">
          <Link target={"_blank"} href={"https://www.facebook.com/"}>
            <div className={`min-w-[${width}] max-w-[${width}]`}>
              <FaFacebook className={`w-${width} h-${height}`} />
            </div>
          </Link>
        </li> */}
        <li className="py-4 px-2">
          <Link
            target={"_blank"}
            href={
              "https://www.instagram.com/officialtrubooker/profilecard/?igsh=MTVzNGcxN3ZsZ3Jjdg== "
            }
          >
            <div className={`min-w-[${width}] max-w-[${width}]`}>
              <FaInstagram className={`w-${width} h-${height}`} />
            </div>
          </Link>
        </li>
        {/* <li className="py-4 ps-4">
          <Link target={"_blank"} href={"https://twitter.com/"}>
            <div className={`min-w-[${width}] max-w-[${width}]`}>
              <FaXTwitter className={`w-${width} h-${height}`} />
            </div>
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default SocialLinks;
