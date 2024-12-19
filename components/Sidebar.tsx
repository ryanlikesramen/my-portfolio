import { useOutsideClick } from "@/hooks/use-outside-click";
import { Link, X } from "lucide-react";
import Logo from "./Logo";
import { navbarData } from "../constants";
import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

const Sidebar: React.FC<Props> = ({ isOpen, onClose, pathname }) => {
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 right-0 
          z-50 min-w-72 max-w-96 bg-bodyColor border-l
        border-l-hoverColor/50 shadow-xl transform  
        ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}
    >
      {/* close button red X */}
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="hover:text-red-600 hoverEffect"
          aria-label="Close sidebar"
        >
          <X />
        </button>
        {/* Navigation Links */}
        <nav className="flex flex-col px-5 gap-7 text-sm tracking-wide font-medium mt-2">
          <Logo title="Ryan Soriano" />
          {navbarData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={`hover:text-hoverColor hoverEffect ${pathname === item?.href && "text-hoverColor"}`}
              onClick={onClose}
            >
              {item?.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
