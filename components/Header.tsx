"use client";
import Container from "@/components/Container";
import Logo from "./Logo";
import Link from "next/link";
import { navbarData } from "../constants";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  console.log(path);
  return (
    <header className="border-b border-b-hoverColor/25 bg-bodyColor text-white/80">
      <Container className="py-5 flex items-center justify-between">
        <Logo title="Ryan Soriano" subtitle="." />
        <div className="hidden md:inline-flex items-center gap-7 text-lg lowercase tracking-wide font-medium">
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
      </Container>
    </header>
  );
};

export default Header;
