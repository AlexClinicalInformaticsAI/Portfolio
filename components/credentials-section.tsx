import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"
import { SkillTag } from "@/components/skill-tag"
import { AnimatedSection } from "@/components/animated-section"
import { getCredentialsInfo, getAwardsInfo } from "@/lib/data"

export function CredentialsSection() {
  const credentialsInfo = getCredentialsInfo()
  const awards = getAwardsInfo()

  // Dr. Dummett's honors
  const honors = [
    { text: "Austco Excellence Award Gold Winner for Quality & Patient Safety (Nov 2021)", year: 2021 },
    { text: "Lawrence Patient Safety Regional Award – Kaiser Permanente (May 2020)", year: 2020 },
    { text: "Resident Teacher of the Year – Kaiser Permanente Santa Clara (2010)", year: 2010 },
    { text: "Intern of the Year – Kaiser Permanente Santa Clara (2009)", year: 2009 },
    { text: "Meyerhoff Scholar – UMBC (2000)", year: 2000 },
  ]

  return (
    <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center mb-4 sm:mb-6">
          <Award className="w-5 h-5 mr-2 text-cyan-400" />
          <h3 className="text-lg font-medium">Credentials</h3>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Professional Certifications */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-zinc-400 flex items-center border-b border-zinc-800 pb-2">
                <Award className="w-4 h-4 mr-2 text-cyan-400" />
                Professional Certifications
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {credentialsInfo.certifications.map((cert, index) => (
                  <div key={index} className="flex items-start bg-zinc-800/30 p-2 sm:p-3 rounded-lg">
                    {cert.logo && (
                      <div className="relative w-12 h-12 rounded overflow-hidden mr-3 flex-shrink-0 bg-zinc-800 flex items-center justify-center">
                        <Image
                          src={cert.logo || "/placeholder.svg"}
                          alt={cert.issuer}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <div>
                      <h5 className="text-sm font-medium">{cert.name}</h5>
                      <p className="text-xs text-zinc-400">
                        {cert.issuer} • {cert.date}
                      </p>
                      {cert.credentialId && (
                        <p className="text-xs text-cyan-400 mt-1">
                          Credential ID: {cert.credentialId}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-zinc-400 flex items-center border-b border-zinc-800 pb-2">
                <GraduationCap className="w-4 h-4 mr-2 text-cyan-400" />
                Education
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {credentialsInfo.education.map((edu, index) => (
                  <div key={index} className="flex items-start bg-zinc-800/30 p-2 sm:p-3 rounded-lg">
                    {edu.logo && (
                      <div className="relative w-10 h-10 rounded overflow-hidden mr-3 flex-shrink-0 bg-zinc-800">
                        <Image
                          src={edu.logo || "/placeholder.svg"}
                          alt={edu.institution}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <div>
                      <h5 className="text-sm font-medium">{edu.degree}</h5>
                      <p className="text-xs text-zinc-400">
                        {edu.institution} • {edu.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Awards from JSON */}
          {awards && awards.length > 0 && (
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-zinc-400 flex items-center border-b border-zinc-800 pb-2">
                  <Award className="w-4 h-4 mr-2 text-cyan-400" />
                  Awards
                </h4>
                <div className="space-y-3">
                  {awards.map((award, index) => (
                    <div key={index} className="flex items-start bg-zinc-800/30 p-2 sm:p-3 rounded-lg">
                      {award.logo && (
                        <div className="relative w-12 h-12 rounded overflow-hidden mr-3 flex-shrink-0 bg-zinc-800 flex items-center justify-center">
                          <Image
                            src={award.logo || "/placeholder.svg"}
                            alt={award.issuer}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                      )}
                      <div>
                        <h5 className="text-sm font-medium">{award.name}</h5>
                        <p className="text-xs text-zinc-400">
                          {award.issuer} • {award.date}
                        </p>
                        {award.url && (
                          <a
                            href={award.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-cyan-400 hover:underline mt-1 inline-block"
                          >
                            View Award Details
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Honors and Awards */}
          <AnimatedSection animation="fade-up" delay={250}>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-zinc-400 flex items-center border-b border-zinc-800 pb-2">
                <Award className="w-4 h-4 mr-2 text-cyan-400" />
                Honors and Awards
              </h4>
              <div className="space-y-2">
                {honors.map((honor, index) => (
                  <div key={index} className="flex items-start">
                    {honor.logo ? (
                      <div className="relative w-6 h-6 rounded overflow-hidden mr-3 flex-shrink-0 bg-zinc-800 flex items-center justify-center">
                        <Image
                          src={honor.logo}
                          alt="Award logo"
                          fill
                          className="object-contain p-0.5"
                        />
                      </div>
                    ) : (
                      <span className="text-cyan-400 mr-2">•</span>
                    )}
                    <p className="text-sm text-zinc-300">{honor.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Skills & Expertise */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-zinc-400 flex items-center border-b border-zinc-800 pb-2">
                <Award className="w-4 h-4 mr-2 text-cyan-400" />
                Skills & Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {credentialsInfo.skills.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </CardContent>
    </Card>
  )
}
