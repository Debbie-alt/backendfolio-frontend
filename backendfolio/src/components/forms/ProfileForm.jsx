// src/components/forms/ProfileForm.jsx
import  { useState } from 'react'
import { User, Save, } from 'lucide-react'
import { Button } from '../ui/Button'
// import {  Textarea } from '../ui/Input'
import axios from 'axios'
import { API_URL } from '../../utils/helpers'

export default function ProfileForm({ onSaved }) {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    bio: '',
    username: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    
    try {
      const response = await axios.post(`${API_URL}/projects/upload`, {
        owner: formData.name,
        username: formData.username,
        title: formData.title,
        description: formData.bio
      })
      
      setMessage('Profile saved successfully!')
      onSaved?.(response.data.project)
    } catch (error) {
      setMessage('Failed to save profile')
      console.error('Profile save error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Full Name *
          </label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Username *
          </label>
          <Input
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="johndoe"
            required
          />
          <p className="text-xs text-slate-500 dark:text-slate-400">
            This will be your public portfolio URL: /p/{formData.username || 'username'}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Professional Title
        </label>
        <Input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Backend Developer • API Architect • Node.js Specialist"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Bio
        </label>
        <Textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Tell potential employers about your backend expertise, technologies you work with, and what makes your APIs special..."
          rows={4}
        />
      </div>

      <div className="flex items-center justify-between">
        <Button type="submit" disabled={loading} className="gap-2">
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
          Save Profile
        </Button>
        
        {message && (
          <span className={`text-sm ${message.includes('success') ? 'text-emerald-600' : 'text-red-600'}`}>
            {message}
          </span>
        )}
      </div>
    </form>
  )
}

// src/components/forms/UploadForm.jsx
