import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Desarrollador Web - Freelance / Proyectos propios",
      company: "Independiente",
      location: "San Juan del Río, Querétaro",
      period: "2017 - Actualidad",
      description:
        "Desarrollo de sistemas administrativos, e-commerce y plataformas B2B. Especialización en integración de marketing digital con sistemas web.",
      achievements: [
        "Diseñé sistemas administrativos para clínicas, reduciendo tiempos de gestión en un 30%",
        "Creé plataformas de e-commerce y B2B que impulsaron las ventas online en más de 25%",
        "Integré estrategias de marketing digital logrando crecimiento en tráfico y engagement",
        "Administré bases de datos MySQL y repositorios en Git con enfoque en escalabilidad",
        "Realicé mantenimiento y optimización mejorando el rendimiento en hasta 40%",
      ],
    },
    {
      title: "Diseñador y Editor",
      company: "Estudio Fotográfico",
      location: "San Juan del Río, Querétaro",
      period: "Período complementario",
      description:
        "Edición de fotografías y contenido audiovisual para clientes corporativos y personales. Desarrollo de material gráfico para campañas digitales.",
      achievements: [
        "Edición profesional de fotografías para clientes corporativos y personales",
        "Desarrollo de material gráfico y multimedia para redes sociales",
        "Creación de contenido digital para campañas de marketing",
        "Integración de diseño visual con estrategias de marketing digital",
      ],
    },
  ]

  const technologies = [
    "PHP",
    "Laravel",
    "MySQL",
    "JavaScript",
    "HTML5",
    "CSS3",
    "C++",
    "Java",
    "Git",
    "Linux",
    "Windows",
    "Marketing Digital",
    "Diseño Gráfico",
    "Edición Audiovisual",
    "Redes Sociales",
    "E-commerce",
    "Sistemas B2B",
    "Gestión de Bases de Datos",
  ]

  return (
    <section id="experiencia" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mi <span className="gradient-text">Experiencia</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Más de 6 años de experiencia en desarrollo web, especializado en PHP, Laravel y MySQL con enfoque en
            resultados medibles.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Experiencia Profesional</h3>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-border"></div>
                )}

                <Card className="bg-card border-border ml-12 relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-8 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-card-foreground mb-1">{exp.title}</h4>
                        <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-muted-foreground mb-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div>
                      <h5 className="font-semibold mb-2 text-card-foreground">Logros principales:</h5>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Tecnologías y Herramientas</h3>
          <Card className="bg-card border-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
