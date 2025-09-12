import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../utils/helpers'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl",
        secondary: "bg-secondary-600 text-white hover:bg-secondary-700 shadow-lg hover:shadow-xl",
        outline: "border-2 border-primary-300 text-primary-700 hover:bg-primary-50 dark:border-primary-600 dark:text-primary-300 dark:hover:bg-primary-900/20",
        ghost: "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
        destructive: "bg-red-500 text-white hover:bg-red-600 shadow-lg",
      },
      size: {
        sm: "h-9 px-4 py-2",
        default: "h-11 px-6 py-3",
        lg: "h-13 px-8 py-4 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export function Button({ className, variant, size, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}




