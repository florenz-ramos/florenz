"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface NavItem {
  title: string;
  href: string;
}

const navigationItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Experience", href: "/experience" },
  { title: "Education", href: "/education" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" }
];

interface MobileLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => onOpenChange?.(false)}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}

export function MobileNav() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="grid gap-4 p-4">
          <nav className="grid grid-flow-row auto-rows-max text-sm">
            {navigationItems.map((item, index) => (
              <MobileLink
                key={index}
                href={item.href}
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                onOpenChange={() => {}}
              >
                {item.title}
              </MobileLink>
            ))}
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
