"use client";
import Container from "@/components/Container";
import Logo from "./Logo";
import Link from "next/link";
import { navbarData } from "../constants";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const Header = () => {
  const path = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <header className="border-b border-b-hoverColor/25 bg-bodyColor text-white/80">
      <Container className="py-5 flex items-center">
        <Logo title="Ryan Soriano" subtitle="." />
        <div className="hidden md:inline-flex items-center gap-7 text-lg lowercase tracking-wide font-medium flex-grow justify-center">
          {navbarData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={`hover:text-hoverColor hoverEffect relative group ${
                path === item?.href && "text-hoverColor"
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
          className="inline-flex md:hidden relative hover:text-hoverColor hoverEffect"
        >
          <Menu />
        </button>
      </Container>
      {isSidebarOpen && (
        <div className="md:hidden">
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            pathname={path}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
