export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "advance-alert-monitor",
    title: "Advance Alert Monitor",
    category: "Clinical Decision Support",
    shortDescription:
      "An award-winning early warning system that reduced in-hospital deterioration across multiple hospitals.",
    description: [
      "The Advance Alert Monitor is a comprehensive early warning system designed to identify patients at risk of deterioration before critical events occur. It leverages advanced analytics and machine learning to continuously monitor patient vital signs and lab results.",
      "This system provides real-time alerts to rapid response teams, allowing for timely interventions that prevent adverse outcomes. The implementation included extensive workflow redesign, staff training, and integration with existing EHR systems.",
      "The project has been recognized nationally for its impact on patient safety and has been credited with saving hundreds of lives annually across the hospital network.",
    ],
    features: [
      "Real-time patient risk assessment using machine learning algorithms",
      "Integration with EPIC EHR for seamless clinical workflow",
      "Customized alert thresholds based on hospital-specific needs",
      "Comprehensive dashboard for monitoring system performance",
      "Automated documentation of interventions and outcomes",
      "Continuous quality improvement through data analysis",
    ],
    technologies: [
      "Machine Learning",
      "EPIC EHR",
      "Clinical Decision Support",
      "Healthcare Analytics",
      "Patient Safety Systems",
    ],
    coverImage: "/finance-dashboard-cover.png",
    thumbnailImage: "/modern-finance-overview.png",
    gallery: [
      { url: "/AAM1.png", caption: "Advanced Alert Monitor System Overview" },
      { url: "/AAM2.png", caption: "Patient Risk Assessment Interface" },
    ],
    timeline: "6 years (2013-2019)",
    role: "Regional Clinical Lead",
    liveUrl: "https://example.com/advance-alert-monitor",
    relatedProjects: [
      {
        slug: "medical-education",
        title: "Medical Education",
        category: "Medical Education",
        image: "/modern-finance-app.png",
      },
      {
        slug: "clinical-workflow-optimization",
        title: "Clinical Workflow Optimization",
        category: "Healthcare Consulting",
        image: "/modern-apparel-storefront.png",
      },
    ],
  },
  {
    id: 2,
    slug: "medical-education",
    title: "Medical Education",
    category: "Medical Education",
    shortDescription: "Teaching clinical educators across undergraduate, graduate medical education, and fellowships how to use AI and become effective clinical educators.",
    description: [
      "As an Associate Program Director for both fellowship and residency programs, this project encompasses comprehensive medical education across all levels - undergraduate medical education, graduate medical education (residency), and fellowship training.",
      "The focus is on teaching clinical educators how to effectively integrate AI tools into their teaching practices while developing their skills as clinical educators. This includes curriculum development, educational methodology, and the responsible implementation of AI in medical training.",
      "The program addresses the dual challenge of preparing educators to teach with AI while ensuring they maintain strong foundational clinical education principles and pedagogical skills.",
    ],
    features: [
      "Curriculum development for undergraduate and graduate medical education",
      "Faculty development programs for clinical educators",
      "AI integration training for medical education faculty",
      "Educational methodology workshops and training sessions",
      "Residency and fellowship program leadership and management",
      "Clinical teaching skills development across all medical education levels",
    ],
    technologies: [
      "Medical Education",
      "Clinical Teaching",
      "AI in Education",
      "Curriculum Development",
      "Faculty Development",
      "Program Leadership",
    ],
    coverImage: "/job-finder-cover.png",
    thumbnailImage: "/modern-finance-app.png",
    gallery: [
      { url: "/Knee.png", caption: "Knee Joint Educational Module" },
      { url: "/ShoulderJoint.png", caption: "Shoulder Joint Educational Module" },
    ],
    timeline: "3 years (2022-2025)",
    role: "Associate Program Director",
    liveUrl: "https://youtu.be/VmALt0xnbSU?si=WFD83C6XRoEFh6mo",
    relatedProjects: [
      {
        slug: "advance-alert-monitor",
        title: "Advance Alert Monitor",
        category: "Clinical Decision Support",
        image: "/modern-finance-overview.png",
      },
      {
        slug: "clinical-workflow-optimization",
        title: "Clinical Workflow Optimization",
        category: "Healthcare Consulting",
        image: "/modern-apparel-storefront.png",
      },
    ],
  },
  {
    id: 3,
    slug: "clinical-workflow-optimization",
    title: "Clinical Workflow Optimization",
    category: "Healthcare Consulting",
    shortDescription:
      "Comprehensive redesign of clinical workflows to improve efficiency, reduce physician burnout, and enhance patient care.",
    description: [
      "This consulting project involved a thorough analysis and redesign of clinical workflows across multiple departments in a large healthcare system. The goal was to address inefficiencies, reduce documentation burden, and optimize the use of the electronic health record system.",
      "The approach included extensive shadowing of clinicians, time-motion studies, and collaborative design sessions with frontline staff. The resulting workflow improvements were implemented through EHR customization, process standardization, and targeted training programs.",
      "The project achieved significant reductions in documentation time, improved clinical team communication, and enhanced patient satisfaction through more efficient care delivery.",
    ],
    features: [
      "Comprehensive workflow analysis and optimization",
      "EHR template customization and standardization",
      "Implementation of AI-assisted documentation tools",
      "Development of role-specific quick reference guides",
      "Creation of specialty-specific order sets and care pathways",
      "Training programs for optimal EHR utilization",
    ],
    technologies: [
      "Epic EHR",
      "Workflow Analysis",
      "Change Management",
      "Clinical Documentation",
      "Process Improvement",
    ],
    coverImage: "/ecommerce-redesign-cover.png",
    thumbnailImage: "/modern-apparel-storefront.png",
    gallery: [
      { url: "/ecommerce-redesign-screen1.png", caption: "Workflow Analysis Dashboard" },
      { url: "/ecommerce-redesign-screen2.png", caption: "EHR Template Design" },
      { url: "/ecommerce-redesign-screen3.png", caption: "Clinical Process Map" },
      { url: "/ecommerce-redesign-screen4.png", caption: "Efficiency Metrics" },
    ],
    client: "Major Healthcare System",
    timeline: "18 months (2023-2025)",
    role: "Lead Healthcare Consultant",
    liveUrl: "https://example.com/clinical-workflow",
    relatedProjects: [
      {
        slug: "advance-alert-monitor",
        title: "Advance Alert Monitor",
        category: "Clinical Decision Support",
        image: "/modern-finance-overview.png",
      },
      {
        slug: "medical-education",
        title: "Medical Education",
        category: "Medical Education",
        image: "/modern-finance-app.png",
      },
    ],
  },
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
