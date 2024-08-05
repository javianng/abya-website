"use client";

import React from "react";
import Link from "next/link";
import Head from "next/head";
import Avatar from "./Avatar";
import Footer from "./Footer";
import Image from "next/image";
import type { FC } from "react";
import { cn } from "~/utils/cn";
import { useState } from "react";
import logo from "public/logo.png";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">
          <Image src={logo} alt={"ABYA Logo"} className="h-[2rem] w-[2rem]" />
        </HoveredLink>

        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/aboutUs">About Us</HoveredLink>
            <HoveredLink href="/aboutUs/ourAdvisors">Our Advisors</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Get Involved">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/getInvolved">Get Involved</HoveredLink>
            <HoveredLink href="/getInvolved/member">As A Member</HoveredLink>
            <HoveredLink href="/getInvolved/executive">
              As An Executive
            </HoveredLink>
            <HoveredLink href="/getInvolved/partner">As A Partner</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our Events">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/ourEvents">Our Events</HoveredLink>
            <HoveredLink href="/ourEvents/ABYADiscover">
              ABYA Discover
            </HoveredLink>
            <HoveredLink href="/ourEvents/ABYAConnect">
              ABYA Connect
            </HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href="/ourPartners">Our Partners</HoveredLink>
        <HoveredLink href="/blog">Blog</HoveredLink>
        <Avatar />
      </Menu>
    </div>
  );
};

function MobileNavbar() {
  return (
    <Drawer>
      <div className="flex items-center justify-between bg-brandYellow-10 p-4">
        <DrawerTrigger asChild>
          <AlignJustify className="h-5 w-5" />
        </DrawerTrigger>
        <Avatar />
      </div>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>ASEAN Business Youth Association</DrawerTitle>
            <DrawerDescription>
              Join us and learn more about ASEAN today!
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Link href="/">Home</Link>
            <Link href="/aboutUs">About Us</Link>
            <Link href="/aboutUs/ourAdvisors">Our Advisors</Link>
            <Link href="/getInvolved">Get Involved</Link>
            <Link href="/getInvolved/member">Join us as a Member</Link>
            <Link href="/getInvolved/executive">Join us as an Executive</Link>
            <Link href="/getInvolved/partner">Join us as a Partner</Link>
            <Link href="/ourEvents">Our Events</Link>
            <Link href="/ourEvents/ABYADiscover">ABYA Discover</Link>
            <Link href="/ourEvents/ABYAConnect">ABYA Connect</Link>
            <Link href="/ourPartners">Our Partners</Link>
            <Link href="/blog">Blog</Link>
            <br />
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

const PageLayout: FC<PageLayoutProps> = ({
  children,
  title = "ASEAN Business Youth Association",
  description = "Fostering a community of like-minded youths to be business savvy in the ASEAN region.",
  className = "text-black bg-neutral-50",
}) => {
  return (
    <div className={className}>
      <Head>
        <title>{title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={description} name="description" />
        <meta
          property="og:image"
          content="https://github.com/aseanbya/ABYAWebsite/blob/8b9f4b9e810710f01a3e627aced4e9204e813f32/public/IndexEstablishedDate.jpg?raw=true"
        />
        <meta property="og:title" content="ASEAN Business Youth Association" />
        <meta
          property="og:description"
          content="Fostering a community of like-minded youths to be business savvy in the ASEAN region."
        />
        <meta property="og:url" content="https://abya-website.vercel.app/" />
      </Head>
      <main className="flex min-h-screen flex-col justify-between">
        {/* Navbar */}
        <div className="relative hidden w-full items-center justify-center sm:block">
          <Navbar className="top-2" />
        </div>
        <div className="block sm:hidden">
          <MobileNavbar />
        </div>

        {/* Content */}

        {children}

        {/* Footer */}

        <Footer />
      </main>
    </div>
  );
};

export default PageLayout;
