import React from 'react'
import { Link, useLocation } from 'react-router-dom'
// import { Code, LayoutDashboard, Home } from 'lucide-react'
import ThemeToggle from '../ui/ThemeToggle'
import { Button } from '../ui/Button'

export default function Header() {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-xl text-gray-800 dark:text-gray-200 font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent hover:from-primary-500 hover:to-secondary-500 transition-all duration-200"
          >
            <div className="rounded-lg bg-gradient-to-br from-green-500 to-gray-500 p-2 ">
              {/* <Code size={20} className="text-white" /> */}
            </div>
            <span className='text-gray-800 dark:text-gray-200'>BackendFolio</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Link to="/">
              <Button 
                variant={isActive('/') ? 'default' : 'ghost'} 
                size="sm"
                className="gap-2 text-gray-800 dark:text-gray-200 border border-green-600 rounded-md"
              >
                {/* <Home size={16} /> */}
                Home
              </Button>
            </Link>
            
            <Link to="/dashboard">
              <Button 
                variant={isActive('/dashboard') ? 'default' : 'ghost'} 
                size="sm"
                className="gap-2"
              >
                {/* <LayoutDashboard size={16} /> */}
                Dashboard
              </Button>
            </Link>
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Mobile Menu Button - you can add this later */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                {/* <LayoutDashboard size={20} /> */}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}