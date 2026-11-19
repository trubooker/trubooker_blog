"use client";

import ContactForm from "./contactForm";
import ContactDetails from "./contactDetails";

const ContactBody = () => {
  return (
    <div className="xl:py-10 xl:mx-10 mx-5">
      <div className="grid grid-cols-1 text-center w-full justify-center items-center mt-10 xl:mt-0 gap-y-5">
        <h1 className="text-[--primary] text-3xl xl:text-4xl font-semibold">
          Contact Us
        </h1>
        <p className="font-normal text-base xl:text-lg mb-10 xl:mb-14">
          Any questions or remarks? Just write us a mesage!
        </p>
      </div>
      <div className="grid grid-rows-1 xl:grid-cols-2 items-center xl:mx-5 lg:p-10 xl:justify-center mb-10 rounded-3xl lg:shadow-2xl">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactBody;
