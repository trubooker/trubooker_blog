
"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface ButtonProps {
  link: string;
  classname?: string;
  content: React.ReactNode;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  classname,
  content,
  link,
}) => {
  const router = useRouter();

  return (
    <div>
      <button
        type="button"
        onClick={() => router.push(link)}
        className={`bg-[--primary] hover:bg-[--primary-btn] font-bold text-white hover:scale-105 duration-300 hover:text-white rounded-full p-5 my-[12px] ${classname}`}
      >
        {content}
      </button>
    </div>
  );
};

export default ButtonComponent;
