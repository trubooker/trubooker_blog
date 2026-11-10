
"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavigationMenuProps {
  children: React.ReactNode;
  className?: string;
}

interface NavigationMenuItemProps {
  children: React.ReactNode;
  className?: string;
}

interface NavigationMenuLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

interface NavigationMenuTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function NavigationMenu({
  children,
  className = "",
}: NavigationMenuProps) {
  return (
    <nav className={`relative z-10 flex items-center ${className}`}>
      {children}
    </nav>
  );
}

export function NavigationMenuList({
  children,
  className = "",
}: NavigationMenuProps) {
  return (
    <ul className={`flex list-none items-center space-x-1 ${className}`}>
      {children}
    </ul>
  );
}

export function NavigationMenuItem({
  children,
  className = "",
}: NavigationMenuItemProps) {
  return (
    <li className={`relative ${className}`}>
      {children}
    </li>
  );
}

export function NavigationMenuLink({
  href,
  children,
  className = "",
}: NavigationMenuLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${className}`}
    >
      {children}
    </Link>
  );
}

export function NavigationMenuTrigger({
  children,
  className = "",
}: NavigationMenuTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      className={`group inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${className}`}
    >
      {children}
      <span
        className={`ml-1 transition-transform duration-300 ${
          open ? "rotate-180" : ""
        }`}
      >
        ▼
      </span>
    </button>
  );
}

export function NavigationMenuContent({
  children,
  className = "",
}: NavigationMenuProps) {
  return (
    <div
      className={`absolute left-0 top-full z-50 mt-2 min-w-[200px] rounded-md border bg-white p-2 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

export function NavigationMenuViewport({
  children,
  className = "",
}: NavigationMenuProps) {
  return <div className={className}>{children}</div>;
}

export function NavigationMenuIndicator() {
  return null;
}

export const navigationMenuTriggerStyle =
  "inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground";
