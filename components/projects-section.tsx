import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const professionalProjects = [
    {
      title: "Sistema Integral para Clínica de Fisioterapia",
      description:
        "Sistema completo de gestión para clínica con módulos de pacientes, empleados, citas médicas y radiografías. Redujo tiempos de gestión en un 30%.",
      image: "/medical-clinic-management-system-interface.jpg",
      technologies: ["PHP", "Laravel", "MySQL", "HTML5", "CSS3"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "E-commerce B2B para Ferretería",
      description:
        "Plataforma B2B completa con catálogo en línea, carrito de compras y control de inventarios. Impulsó las ventas online en más de 25%.",
      image: "/b2b-ecommerce-hardware-store-platform.jpg",
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Marketing Digital"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Sistemas Administrativos Personalizados",
      description:
        "Desarrollo de múltiples sistemas administrativos para diferentes industrias, optimizando procesos y mejorando la eficiencia operativa.",
      image: "/administrative-management-system-dashboard.jpg",
      technologies: ["PHP", "Laravel", "MySQL", "Git", "Linux"],
      demoUrl: "#",
      repoUrl: "#",
    },
  ]

  const practiceProjects = [
    {
      title: "Integración Marketing Digital",
      description:
        "Proyectos de integración de estrategias de marketing digital con sistemas web para aumentar tráfico y engagement.",
      image: "/digital-marketing-integration-dashboard.jpg",
      technologies: ["PHP", "Marketing Digital", "Redes Sociales"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Contenido Audiovisual y Diseño",
      description: "Edición de fotografías y contenido audiovisual para clientes corporativos y campañas digitales.",
      image: "/photo-editing-and-audiovisual-content-creation.jpg",
      technologies: ["Diseño Gráfico", "Edición Audiovisual", "Contenido Digital"],
      demoUrl: "#",
      repoUrl: "#",
    },
  ]

  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Una selección de proyectos profesionales y experimentales que demuestran mis habilidades y pasión por el
            desarrollo web.
          </p>
        </div>

        {/* Professional Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Proyectos Profesionales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalProjects.map((project, index) => (
              <Card key={index} className="glass glass-hover border-border overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-card-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Practice Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Proyectos de Práctica</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {practiceProjects.map((project, index) => (
              <Card key={index} className="glass glass-hover border-border overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-card-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
