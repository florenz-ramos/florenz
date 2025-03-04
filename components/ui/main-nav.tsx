"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { siteConfig } from "../config/site"
import Image from "next/image"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 px-2 lg:mr-6">
        <Image
          src={siteConfig.ogImage}
          alt={siteConfig.name}
          width={24}
          height={24}
          className="h-6 w-6"
        />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/80"
          )}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/about")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          About
        </Link>
        <Link
          href="/experience"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/experience")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Experience
        </Link>
        <Link
          href="/education"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/education")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Education
        </Link>
        <Link
          href="/projects"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/projects")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/contact")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Contact
        </Link>
      </nav>
    </div>
  )
}