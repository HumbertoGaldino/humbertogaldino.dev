import React from "react";

interface BurgerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => {
  return (
    <button
      className="absolute top-5 right-8 z-[1001] flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer z-10 focus:outline-none"
      onClick={() => setOpen(!open)}
    >
      <div
        className={`w-8 h-1 bg-${open ? "black" : "white"} rounded transform transition-transform origin-left ${
          open ? "rotate-45" : "rotate-0"
        }`}
      />
      <div
        className={`w-8 h-1 bg-${open ? "black" : "white"} rounded transition-opacity ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`w-8 h-1 bg-${open ? "black" : "white"} rounded transform transition-transform origin-left ${
          open ? "-rotate-45" : "rotate-0"
        }`}
      />
    </button>
  );
};

export default Burger;