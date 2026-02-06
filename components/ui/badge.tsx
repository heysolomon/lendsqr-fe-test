import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "badge",
  {
    variants: {
      variant: {
        default: "badge--default",
        secondary: "badge--secondary",
        destructive: "badge--destructive",
        outline: "badge--outline",
        active: "badge--active",
        pending: "badge--pending",
        blacklisted: "badge--blacklisted",
        inactive: "badge--inactive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
