import React from "react";
import Link from 'next/link'

interface MenuProps {
  open: boolean;
}

const Menu: React.FC<MenuProps> = ({ open }) => {
  return (
    <nav
      className={`flex flex-col justify-center bg-white transform ${
        open ? "translate-x-0" : "translate-x-full hidden"
      } h-screen text-left p-8 absolute top-0 right-0 z-[1000] transition-transform duration-300`}
    >
      <Link
        href="/"
        className="text-2xl uppercase py-8 font-bold tracking-wide text-black hover:text-yellow"
      >
        Home
      </Link>
      <Link
        href="/#sobre"
        className="text-2xl uppercase py-8 font-bold tracking-wide text-black hover:text-yellow"
      >
        Sobre Mim
      </Link>
      <Link
        href="/portfolio"
        className="text-2xl uppercase py-8 font-bold tracking-wide text-black hover:text-yellow"
      >
        Portfólio
      </Link>
    </nav>
  );
};

export default Menu;