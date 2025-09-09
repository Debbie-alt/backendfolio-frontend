// src/components/ui/Button.jsx
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

// src/components/ui/Card.jsx
export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-sm shadow-sm transition-all duration-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/70",
        className
      )}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }) {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
}

export function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn("text-lg font-semibold text-slate-900 dark:text-slate-100", className)}
      {...props}
    />
  )
}

export function CardContent({ className, ...props }) {
  return <div className={cn("p-6 pt-0", className)} {...props} />
}

// src/components/ui/Input.jsx
export function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm px-4 py-3 text-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800/50 dark:placeholder:text-slate-400 dark:focus-visible:ring-primary-400",
        className
      )}
      {...props}
    />
  )
}

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        "flex min-h-[100px] w-full rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm px-4 py-3 text-sm transition-all duration-200 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800/50 dark:placeholder:text-slate-400 dark:focus-visible:ring-primary-400 resize-none",
        className
      )}
      {...props}
    />
  )
}

// src/components/ui/Badge.jsx
export function Badge({ className, variant, ...props }) {
  const variants = {
    default: "bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300",
    secondary: "bg-secondary-100 text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-300",
    success: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    destructive: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    outline: "border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-300"
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        variants[variant] || variants.default,
        className
      )}
      {...props}
    />
  )
}