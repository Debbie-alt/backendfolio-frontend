// src/components/portfolio/EndpointCard.jsx
import  { useState } from 'react'
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

