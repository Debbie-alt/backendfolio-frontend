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