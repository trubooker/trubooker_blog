import React from "react";
import SocialLinks from "@/components/Assets/SocialLinks";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import Link from "next/link";

const ContactDetails = () => {
  return (
    <div>
      <div className="bg-blue-600 flex flex-col text-white rounded-lg my-auto xl:m-10 h-[433px] sm:h-[533px]">
        <div className="p-5 sm:p-10 flex flex-col my-auto justify-between w-full h-full">
          <div className="">
            <h1 className="font-semibold text-2xl md:text-3xl mb-10">
              How can we help you?
            </h1>

            <ul className="list-none">
              <li className="flex gap-x-2 my-8 mx-auto w-full justify-start items-center">
                <FaPhoneAlt className="w-4 h-4" />
                <p className="text-xs md:text-base">
                  {" "}
                  <Link href={"tel:09121556560"}>+(234)-912-155-6560</Link>
                </p>
              </li>
              <li className="flex gap-x-2 my-8 mt-5 mx-auto justify-start items-center">
                <MdEmail className="w-4 h-4" />
                <p className="text-xs md:text-base">
                  <Link href={"mailto:info@trubooker.com"}>
                    info@trubooker.com
                  </Link>
                </p>
              </li>
              <li className="flex gap-x-2 my-8 mt-5 mx-auto justify-start items-center">
                <FaAddressCard className="w-4 h-4" />
                <p className="text-xs md:text-base sm:me-0 flex-wrap">
                  6A, CHARLES IDAHOSA STREET, AMUFI, EDO STATE, NIGERIA
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between w-full mt-auto">
          <div className="flex justify-between items-center mb-2 mt-auto ms-5">
            Follow us: <SocialLinks classname={"flex"} height={5} width={5} />
          </div>
          {/* <div className="flex sm:hidden justify-between mb-2 mt-auto ms-5">
            <SocialLinks classname={"flex"} height={3} width={3} />
          </div> */}
          <div className="h-full mt-auto">
            <Image
              className="rounded-lg h-16 sm:h-24 p-3 sm:px-3 bg-[--primary-btn] shadow-xl mb-2 me-2 w-auto sm:w-52"
              src="/images/truP.png"
              alt=""
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
