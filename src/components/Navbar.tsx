"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { Button } from "./ui/button";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import ProfileEditSheet from "./ProfileEditSheet";
import Login from "./Login";
import { FiMenu } from "react-icons/fi";
import { PiAlienBold } from "react-icons/pi";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="bg-gray-200 fixed top-0 inset-x-0 z-50">
      <Menubar className="flex justify-between p-4">
        <div className="flex">
          <div className="mr-4 mt-1">
            <Link href="/">
              <PiAlienBold size={24} />
            </Link>
          </div>

          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
              <Link href="/bot">
               New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </Link>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
              <MenubarItem>Cut</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Pricing</MenubarTrigger>
            <MenubarContent>
              <MenubarItem><Link href="/pricing"> Pricing</Link> </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>About</MenubarTrigger>
            <MenubarContent>
              <MenubarItem><Link href="/contact"> Contact Us </Link></MenubarItem>
              <MenubarItem>
              Overview
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </div>

        <ProfileEditSheet />
      </Menubar>
    </div>
  );
};

export default Navbar;
