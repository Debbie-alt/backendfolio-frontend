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