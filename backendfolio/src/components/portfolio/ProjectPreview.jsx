import React from 'react'
import { ExternalLink, Globe, User } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card'
import { Button } from '../ui/Button'
// import { Badge } from '../ui/Badge'

export default function ProjectPreview({ project }) {
  if (!project) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
          <Globe size={24} className="text-slate-400" />
        </div>
        <p className="text-slate-600 dark:text-slate-400">No project data available</p>
      </div>
    )
  }

  const portfolioUrl = `/p/${project.username}`
  const endpointCount = project.preview?.endpoints?.length || 0

  return (
    <div className="space-y-6">
      {/* Project Info */}
      <Card className="border-2 border-primary-200/50 dark:border-primary-700/50 bg-gradient-to-br from-primary-50/30 to-secondary-50/30 dark:from-primary-900/10 dark:to-secondary-900/10">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                  {/* <User size={20} className="text-white" /> */}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {project.title || project.owner}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Portfolio URL: <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{portfolioUrl}</code>
                  </p>
                </div>
              </div>
              
              {project.description && (
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
              )}

              <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">
                    {endpointCount} {endpointCount === 1 ? 'endpoint' : 'endpoints'}
                  </Badge>
                </div>
                {project.createdAt && (
                  <div>
                    Created {new Date(project.createdAt).toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>

            <Button className="gap-2">
              <ExternalLink size={16} />
              View Live
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Endpoints Preview */}
      {project.preview?.endpoints && project.preview.endpoints.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>API Endpoints ({endpointCount})</span>
              <Badge variant="outline">{project.preview.info?.version || 'v1.0'}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {project.preview.endpoints.slice(0, 5).map((endpoint, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border"
                >
                  <div className="flex items-center gap-3">
                    <Badge className={`${getMethodColor(endpoint.method)} text-xs font-mono`}>
                      {endpoint.method}
                    </Badge>
                    <code className="text-sm text-slate-700 dark:text-slate-300">
                      {endpoint.path}
                    </code>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {endpoint.tag}
                  </div>
                </div>
              ))}
              
              {endpointCount > 5 && (
                <div className="text-center py-2 text-sm text-slate-500 dark:text-slate-400">
                  + {endpointCount - 5} more endpoints
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Success Message */}
      <Card className="border-emerald-200 dark:border-emerald-700 bg-emerald-50/50 dark:bg-emerald-900/10">
        <CardContent className="p-4 text-center">
          <div className="text-emerald-600 dark:text-emerald-400 mb-2">
            ✅ Portfolio Generated Successfully!
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Your backend portfolio is ready to share with potential employers.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}