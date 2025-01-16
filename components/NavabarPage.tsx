'use client';

import React from "react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  Link,
} from "@nextui-org/react";
import { Button } from "@/components/UI/button";


export default function NavbarPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "How It Works",
    "Built for you",
  ];

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen}
      className="bg-transparent border-none shadow-none md:px-16 max-800:px-6 text-[18px]  lg:py-8 font-[BebasNeue]"
      classNames={{ wrapper: "px-0" }}
      isBlurred={false}
  
    >

      <NavbarContent className="flex-start items-center" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="800:hidden flex  px-8" 
        />
          <p>STALLION</p>
      </NavbarContent>

      <NavbarContent className="flex flex gap-4 items-center uppercase max-800:hidden" justify="start">
        <div>Home</div>
        <div>How It Works</div>
        <div>Built for you</div>
      </NavbarContent>

      <NavbarContent justify="end" >
        <Button variant="stallion" className="">Join Us</Button>
      </NavbarContent>
      
      <NavbarMenu className="flex text-white gap-6" >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full font-[BebasNeue] text-[20px]"
              
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

