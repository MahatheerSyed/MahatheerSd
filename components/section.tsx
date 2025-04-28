import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
}
