import React from 'react'
import { SunMedium, Moon, Monitor } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { Button } from './Button'
import { cn } from '../../utils/helpers'


export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const themes = [
    { value: 'light', icon: SunMedium, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ]

  return (
    <div className="flex items-center rounded-xl bg-slate-100/80 p-1 dark:bg-slate-800/80 backdrop-blur-sm">
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={cn(
            "flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200",
            theme === value
              ? "bg-white shadow-sm text-slate-900 dark:bg-slate-700 dark:text-slate-100"
              : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          )}
          title={label}
        >
          <Icon size={14} />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  )
}







