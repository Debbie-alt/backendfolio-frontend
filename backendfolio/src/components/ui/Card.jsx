
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