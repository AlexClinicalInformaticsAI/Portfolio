import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { getPublicationsInfo } from "@/lib/data"
import { BookOpen } from "lucide-react"

export function PublicationsSection() {
  const publications = getPublicationsInfo()

  return (
    <AnimatedSection animation="fade-up" id="publications">
      <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center mb-4 sm:mb-6">
            <BookOpen className="w-5 h-5 mr-2 text-cyan-400" />
            <h3 className="text-lg font-medium">Publications</h3>
          </div>

          <div className="space-y-4">
            {publications.map((publication, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={50 * (index + 1)}>
                <div className="border-l-2 border-cyan-400/30 pl-4 py-3 bg-zinc-800/30 rounded-lg">
                  <div className="space-y-2">
                    <h4 className="font-medium text-white text-sm sm:text-base leading-tight">
                      {publication.title}
                    </h4>
                    
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {publication.authors}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-cyan-400">
                      <span className="font-medium">{publication.journal}</span>
                      <span>•</span>
                      <span>{publication.year}</span>
                      {publication.volume && (
                        <>
                          <span>•</span>
                          <span>Vol. {publication.volume}</span>
                        </>
                      )}
                      {publication.issue && (
                        <>
                          <span>•</span>
                          <span>Issue {publication.issue}</span>
                        </>
                      )}
                      {publication.pages && (
                        <>
                          <span>•</span>
                          <span>pp. {publication.pages}</span>
                        </>
                      )}
                    </div>

                    <div className="inline-block px-2 py-1 bg-zinc-700 rounded-full text-xs text-zinc-300">
                      {publication.type}
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