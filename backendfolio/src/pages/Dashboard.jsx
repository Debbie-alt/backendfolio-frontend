import  { useState } from 'react'
import { User, Upload, Eye, Settings } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
// import UploadForm from '../components/forms/UploadForm'
import ProfileForm from '../components/forms/ProfileForm'
import ProjectPreview from '../components/portfolio/ProjectPreview'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('profile')
  const [project, setProject] = useState(null)

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'upload', label: 'Upload API', icon: Upload },
    { id: 'preview', label: 'Preview', icon: Eye }
  ]

  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          Developer Dashboard
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Manage your API portfolio and showcase your backend work
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 p-1 bg-slate-100/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-white shadow-sm text-primary-700 dark:bg-slate-700 dark:text-primary-300'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
            }`}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {activeTab === 'profile' && (
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User size={20} />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ProfileForm onSaved={setProject} />
              </CardContent>
            </Card>
          )}

          {activeTab === 'upload' && (
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload size={20} />
                  Upload API Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <UploadForm onUploaded={setProject} />
              </CardContent>
            </Card>
          )}

          {activeTab === 'preview' && (
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye size={20} />
                  Portfolio Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                {project ? (
                  <ProjectPreview project={project} />
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      <Eye size={24} className="text-slate-400" />
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      No project to preview yet
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                      Complete your profile and upload API docs to see a preview
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start gap-2"
                onClick={() => setActiveTab('profile')}
              >
                <User size={16} />
                Edit Profile
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start gap-2"
                onClick={() => setActiveTab('upload')}
              >
                <Upload size={16} />
                Upload New API
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start gap-2"
                onClick={() => setActiveTab('preview')}
              >
                <Eye size={16} />
                Preview Portfolio
              </Button>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-primary-900/20 dark:to-secondary-900/20 border-primary-200/50 dark:border-primary-700/50">
            <CardHeader>
              <CardTitle className="text-lg">💡 Pro Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                <div>
                  <strong>Complete documentation:</strong> The more detailed your API docs, the better your portfolio looks.
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary-500 mt-2 flex-shrink-0" />
                <div>
                  <strong>Add descriptions:</strong> Write clear, business-focused descriptions for your endpoints.
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                <div>
                  <strong>Share widely:</strong> Your portfolio URL works great on resumes and LinkedIn.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}