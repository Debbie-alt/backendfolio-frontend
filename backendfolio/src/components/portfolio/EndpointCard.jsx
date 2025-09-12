// src/components/portfolio/EndpointCard.jsx
import React, { useState } from 'react'
import { ChevronDown, ChevronRight, Code, Eye } from 'lucide-react'
import { Card, CardContent } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { getMethodColor, truncateText } from '../../utils/helpers'

export default function EndpointCard({ endpoint }) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (!endpoint) return null

  return (
    <Card className="transition-all duration-200 hover:shadow-lg border-l-4 border-l-primary-200 dark:border-l-primary-700">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Badge className={`${getMethodColor(endpoint.method)} border font-mono font-bold`}>
                {endpoint.method}
              </Badge>
              <code className="text-sm font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-700 dark:text-slate-300">
                {endpoint.path}
              </code>
            </div>
            
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              {endpoint.summary || endpoint.operationId || 'Untitled Endpoint'}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {endpoint.plainEnglish || endpoint.description || truncateText(endpoint.summary, 120)}
            </p>

            {endpoint.tag && (
              <div className="mt-3">
                <Badge variant="outline" className="text-xs">
                  {endpoint.tag}
                </Badge>
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-4 gap-2"
          >
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            {isExpanded ? 'Hide' : 'Show'} Details
          </Button>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            {/* Parameters */}
            {endpoint.parameters && endpoint.parameters.length > 0 && (
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                  <Code size={16} />
                  Parameters
                </h4>
                <div className="space-y-2">
                  {endpoint.parameters.map((param, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Badge variant="outline" className="text-xs">
                        {param.in}
                      </Badge>
                      <code className="font-mono">{param.name}</code>
                      {param.required && <span className="text-red-500">*</span>}
                      <span className="text-slate-500">-</span>
                      <span className="text-slate-600 dark:text-slate-400">
                        {param.description || param.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Response Example */}
            {endpoint.responseExample && (
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                  <Eye size={16} />
                  Response Example
                </h4>
                <pre className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg text-xs overflow-auto border">
                  <code className="text-slate-700 dark:text-slate-300">
                    {JSON.stringify(endpoint.responseExample, null, 2)}
                  </code>
                </pre>
              </div>
            )}

            {/* Additional Info */}
            {endpoint.responses && (
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2">
                  Response Codes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(endpoint.responses).map((code) => (
                    <Badge 
                      key={code}
                      variant={code.startsWith('2') ? 'success' : code.startsWith('4') ? 'destructive' : 'secondary'}
                      className="text-xs"
                    >
                      {code}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// src/components/portfolio/ProjectPreview.jsx
import React from 'react'
import { ExternalLink, Globe, User } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

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