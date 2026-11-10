"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
const links = [
  { href: "/", label: "Home" },
  { href: "/#latest", label: "Latest Posts" },
  { href: "https://trubooker.com", label: "TruBooker App" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
      
          <Image src="/images/truP.png" alt="TruBooker Logo" width={50} height={50} />
          <span className="text-lg font-bold text-gray-900">
            TruBooker <span className="font-normal text-gray-500">Blog</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
             className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://trubooker.com"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Book a Trip
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-gray-700 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-gray-700 hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://trubooker.com"
            className="mt-2 block rounded-full bg-blue-600 px-5 py-3 text-center font-semibold text-white"
          >
            Book a Trip
          </a>
        </div>
      )}
    </header>
  );
}