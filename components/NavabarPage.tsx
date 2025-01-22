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
      onMenuOpenChange={setIsMenuOpen} position="static"
      className="bg-transparent  border-none shadow-none lg:px-24 md:px-16  text-[18px]  max-lg:pt-4 lg:pt-8 font-[BebasNeue]"
      isBlurred={false}
      classNames={{
        wrapper: "max-w-full", // This removes the max-w-1024 and padding
        base: "max-w-full",        // This ensures the base container is full width
      }}
  
    >
      <NavbarContent className="flex-start items-center" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="800:hidden flex  px-8" 
        />
          <p>STALLION</p>
      </NavbarContent>

      <NavbarContent className="flex flex gap-4 items-center uppercase max-800:hidden" justify="center">
        <div>Home</div>
        <div>How It Works</div>
        <div>Built for you</div>
      </NavbarContent>

      <NavbarContent justify="end" >
        <Link href="https://tally.so/r/mKvyzV" target="_blank" rel="noopener noreferrer">
          <Button variant="stallion" className="">Join Us</Button>
        </Link>
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

