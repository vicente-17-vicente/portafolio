import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Palette } from "lucide-react"

export function AboutSection() {
  const skills = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Backend",
      description: "PHP (Avanzado), Laravel, C++, Java",
    },
    {
      icon: <Database className="h-8 w-8 text-secondary" />,
      title: "Base de Datos",
      description: "MySQL, Git, Linux, Windows",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Frontend",
      description: "JavaScript, HTML5, CSS3, Desarrollo Web",
    },
    {
      icon: <Palette className="h-8 w-8 text-secondary" />,
      title: "Diseño & Marketing",
      description: "Diseño Gráfico, Edición Audiovisual, Marketing Digital",
    },
  ]

  return (
    <section id="sobre-mi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Desarrollador web con más de 6 años de experiencia en PHP, Laravel y MySQL, especializado en sistemas
            administrativos, e-commerce y plataformas B2B. Ubicado en San Juan del Río, Querétaro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="glass glass-hover border-border">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="glass border-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Mi Enfoque</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Me especializo en crear sistemas que realmente impactan los negocios. He logrado reducir tiempos de
                gestión en un 30% con sistemas administrativos y aumentar ventas online en más de 25% con plataformas
                e-commerce. Combino desarrollo técnico con estrategias de marketing digital para resultados integrales.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
