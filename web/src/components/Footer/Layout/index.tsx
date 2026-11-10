
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
  content: string;
  href: string;
}

const FooterRoutes: React.FC<Props> = ({
  className = "",
  content,
  href,
}) => {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10 hover:text-blue-100 ${className}`}
    >
      {content}
    </Link>
  );
};

export default FooterRoutes;
