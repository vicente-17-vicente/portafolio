"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Avatar */}
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full glass p-1 mb-6 professional-avatar">
              <Image
                src="/vicente-perez-profile.jpg"
                alt="Vicente Pérez Cruz - Desarrollador Web Full Stack"
                width={160}
                height={160}
                className="rounded-full w-full h-full object-cover professional-photo"
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up text-foreground">
            Hola, soy <span className="gradient-text-safe">Vicente Pérez Cruz</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
            Desarrollador Web Full Stack
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up">
            Más de 6 años de experiencia en PHP, Laravel y MySQL, especializado en sistemas administrativos, e-commerce
            y plataformas B2B. Experto en integración de marketing digital y soluciones web escalables.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              Ver Proyectos
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-muted px-8 py-3 text-lg bg-transparent"
            >
              Descargar CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-slide-up">
            <Button variant="ghost" size="icon" className="glass-hover rounded-full">
              <Github className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="glass-hover rounded-full"
              onClick={() => window.open("https://linkedin.com/in/vicente-perez-17-dev", "_blank")}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="glass-hover rounded-full"
              onClick={() => window.open("mailto:vicenteperezc17@gmail.com", "_blank")}
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
