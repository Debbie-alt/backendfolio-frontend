import React, { useState } from 'react'
import { Upload, FileText, Link, Loader2, CheckCircle } from 'lucide-react'
import { Button } from '../ui/Button'
// import { Input } from '../ui/Input'
import { Card, CardContent } from '../ui/Card'
import axios from 'axios'
import { API_URL } from '../../utils/helpers'

export default function UploadForm({ onUploaded }) {
  const [formData, setFormData] = useState({
    file: null,
    url: '',
    owner: '',
    username: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [uploadMethod, setUploadMethod] = useState('file') // 'file' or 'url'

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    setFormData(prev => ({ ...prev, file }))
  }

  const handleInputChange = (e) => {
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
      const data = new FormData()
      data.append('owner', formData.owner)
      data.append('username', formData.username)
      
      if (uploadMethod === 'file' && formData.file) {
        data.append('file', formData.file)
      } else if (uploadMethod === 'url' && formData.url) {
        data.append('url', formData.url)
      }

      const response = await axios.post(`${API_URL}/projects/upload`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      setMessage('Upload successful!')
      onUploaded?.(response.data.project)
    } catch (error) {
      setMessage(error?.response?.data?.message || 'Upload failed')
      console.error('Upload error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Upload Method Selector */}
      <div className="flex gap-2 p-1 bg-slate-100/80 dark:bg-slate-800/80 rounded-xl">
        <button
          type="button"
          onClick={() => setUploadMethod('file')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
            uploadMethod === 'file'
              ? 'bg-white shadow-sm text-slate-900 dark:bg-slate-700 dark:text-slate-100'
              : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
          }`}
        >
          <FileText size={16} />
          Upload File
        </button>
        <button
          type="button"
          onClick={() => setUploadMethod('url')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
            uploadMethod === 'url'
              ? 'bg-white shadow-sm text-slate-900 dark:bg-slate-700 dark:text-slate-100'
              : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
          }`}
        >
          <Link size={16} />
          From URL
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Owner Name *
            </label>
            <Input
              name="owner"
              value={formData.owner}
              onChange={handleInputChange}
              placeholder="Your name"
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
              onChange={handleInputChange}
              placeholder="your-username"
              required
            />
          </div>
        </div>

        {uploadMethod === 'file' ? (
          <Card className="border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
            <CardContent className="p-8 text-center">
              <Upload size={32} className="mx-auto text-slate-400 mb-4" />
              <div className="space-y-2">
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept="application/json,.json"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                    <FileText size={16} />
                    Choose JSON file
                  </span>
                </label>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Swagger/OpenAPI JSON or Postman Collection
                </p>
              </div>
              {formData.file && (
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-emerald-600">
                  <CheckCircle size={16} />
                  {formData.file.name}
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              API Documentation URL *
            </label>
            <Input
              name="url"
              value={formData.url}
              onChange={handleInputChange}
              placeholder="https://api.example.com/swagger.json"
              type="url"
              required
            />
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Direct link to your Swagger JSON or Postman collection
            </p>
          </div>
        )}

        <div className="flex items-center justify-between">
          <Button type="submit" disabled={loading} className="gap-2">
            {loading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
            {loading ? 'Processing...' : 'Upload & Generate'}
          </Button>
          
          {message && (
            <span className={`text-sm ${message.includes('success') ? 'text-emerald-600' : 'text-red-600'}`}>
              {message}
            </span>
          )}
        </div>
      </form>
    </div>
  )
}