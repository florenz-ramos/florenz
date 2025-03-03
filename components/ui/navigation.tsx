"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Experience" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="flex items-center space-x-6 p-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === link.href
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation; 