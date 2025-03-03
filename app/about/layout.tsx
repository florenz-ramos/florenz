import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me and my background.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 