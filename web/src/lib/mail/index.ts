import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { contactTemplate } from "./contactTemplate";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendMail({
  from,
  to,
  name,
  subject,
  body,
}: {
  from: string;
  name: string;
  to: string;
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: `${name} <${from}>`,
      to,
      subject,
      html: body,
      replyTo: from,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}

export function compileTemplate({
  firstName,
  lastName,
  message,
  email,
}: FormData) {
  const template = handlebars.compile(contactTemplate);
  const httpBody = template({
    firstName,
    lastName,
    message,
    email,
  });
  return httpBody;
}
