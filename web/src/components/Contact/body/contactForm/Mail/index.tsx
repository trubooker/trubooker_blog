"use server";

import { compileTemplate, sendMail } from "@/lib/mail";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const Send = async ({
  email,
  firstName,
  lastName,
  subject,
  message,
}: FormData) => {
  return await sendMail({
    from: email,
    to: process.env.TRUBOOKER_EMAIL!,
    name: "Trubooker Support",
    subject,
    body: compileTemplate({
      email,
      firstName,
      lastName,
      subject,
      message,
    }),
  });
};

export default Send;
