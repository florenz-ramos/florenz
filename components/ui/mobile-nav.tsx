"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { siteConfig } from "../config/site";
import Image from "next/image";

interface NavItem {
  href: string;
  label: string;
}

const navigationItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

interface MobileLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

function MobileLink({ href, className, children }: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "block w-full py-3 px-4 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function MobileNav() {
  return (
    <div className="flex items-center gap-2 md:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon" className="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex flex-col space-y-4 p-4">
            <div className="flex items-center gap-2 px-4 py-2">
              <Image
                src={siteConfig.ogImage}
                alt={siteConfig.name}
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="font-bold">{siteConfig.name}</span>
            </div>
            <nav className="flex flex-col space-y-1">
              {navigationItems.map((item) => (
                <MobileLink key={item.href} href={item.href}>
                  {item.label}
                </MobileLink>
              ))}
            </nav>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
