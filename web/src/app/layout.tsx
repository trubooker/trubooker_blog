import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import GetStarted from "@/components/GetStarted";
import FooterBody from "@/components/Footer/FooterBody";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TruBooker Blog — Travel Tips & Updates",
  description: "Travel tips, route guides and news from TruBooker.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.className} flex min-h-screen flex-col bg-white text-gray-900 antialiased`}>
        <Navbar />
        <div className="flex-1">{children}</div>
        <GetStarted playstoreurl={""} appstoreurl={""}/>
        <FooterBody/>
        {/* <Footer /> */}
      </body>
    </html>
  );
}