import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { getPresentationsInfo } from "@/lib/data"
import { PresentationIcon } from "lucide-react"

export function PresentationsSection() {
  const presentations = getPresentationsInfo()

  return (
    <AnimatedSection animation="fade-up" id="presentations">
      <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center mb-4 sm:mb-6">
            <PresentationIcon className="w-5 h-5 mr-2 text-cyan-400" />
            <h3 className="text-lg font-medium">Presentations</h3>
          </div>

          <div className="space-y-4">
            {presentations.map((presentation, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={50 * (index + 1)}>
                <div className="border-l-2 border-cyan-400/30 pl-4 py-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex-1">
                      <h4 className="font-medium text-white text-sm sm:text-base leading-tight">
                        {presentation.title}
                      </h4>
                      
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-xs sm:text-sm text-zinc-400">
                        <span className="text-cyan-400 font-medium">{presentation.date}</span>
                        
                        {presentation.time && (
                          <>
                            <span>•</span>
                            <span>{presentation.time}</span>
                          </>
                        )}
                        
                        {presentation.location && (
                          <>
                            <span>•</span>
                            <span>{presentation.location}</span>
                          </>
                        )}
                        
                        {presentation.organization && (
                          <>
                            <span>•</span>
                            <span>{presentation.organization}</span>
                          </>
                        )}
                      </div>

                      {(presentation.collaborator || presentation.collaborators) && (
                        <div className="text-xs text-zinc-500 mt-1">
                          {presentation.collaborator || presentation.collaborators}
                        </div>
                      )}

                      {presentation.description && (
                        <div className="text-xs text-zinc-400 mt-2">
                          {presentation.description}
                        </div>
                      )}

                      {presentation.type && (
                        <div className="inline-block px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300 mt-2">
                          {presentation.type}
                        </div>
                      )}

                      {(presentation.url || presentation.videoUrl) && (
                        <div className="mt-2 flex gap-3">
                          {presentation.url && (
                            <a
                              href={presentation.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-cyan-400 hover:underline"
                            >
                              View Presentation
                            </a>
                          )}
                          {presentation.videoUrl && (
                            <a
                              href={presentation.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-cyan-400 hover:underline"
                            >
                              Watch Video
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  )
}