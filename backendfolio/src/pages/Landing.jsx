import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Zap, Globe, Star, Users, FileText } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'

export default function Landing() {
  return (
    <div className="py-12 lg:py-20">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-100/50 backdrop-blur-sm text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6 dark:bg-primary-900/20 dark:text-primary-300 border border-primary-200/50 dark:border-primary-700/50">
            <Star size={16} className="animate-pulse" />
            Transform your backend docs into portfolios
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Show your backend work
            <span className="block gradient-text">without the JSON</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Upload your Swagger docs or Postman collections and get a 
            <span className="text-primary-600 dark:text-primary-400 font-medium"> beautiful, recruiter-friendly</span> portfolio page in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/dashboard">
              <Button size="lg" className="gap-2 group">
                Get Started Free
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="gap-2">
              <Globe size={20} />
              View Example
            </Button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card className="h-full hover:scale-105 transition-all duration-300 group border-2 hover:border-primary-200 dark:hover:border-primary-700">
              <CardContent className="p-8 text-center">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="text-center mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <Card className="max-w-2xl mx-auto border-2 border-primary-200/50 dark:border-primary-700/50 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-primary-900/20 dark:to-secondary-900/20">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">
              Ready to showcase your APIs?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Join developers who are already impressing recruiters with their backend portfolios.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="gap-2 group">
                Create Your Portfolio
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const features = [
  {
    icon: FileText,
    title: "Import Anywhere",
    description: "Upload Swagger/OpenAPI docs, Postman collections, or paste URLs. We handle the parsing."
  },
  {
    icon: Zap,
    title: "Instant Preview", 
    description: "Get a beautiful portfolio page in seconds. No coding, no design skills required."
  },
  {
    icon: Users,
    title: "Recruiter Friendly",
    description: "Clean, professional presentation that non-technical people can actually understand."
  }
]

const stats = [
  { value: "1K+", label: "Portfolios Created" },
  { value: "50K+", label: "APIs Showcased" },
  { value: "95%", label: "Interview Rate" },
  { value: "0$", label: "Cost to Start" }
]