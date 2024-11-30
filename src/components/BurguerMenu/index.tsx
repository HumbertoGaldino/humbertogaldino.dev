"use client"
import React, { useState, useRef } from "react";
import Burger from "./Burguer";
import Menu from "./Menu";

export default function BurguerMenu() {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (node.current && !node.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} />
    </div>
  );
};