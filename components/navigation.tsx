"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-nav-solid backdrop-blur-md" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold gradient-text">Mi Portafolio</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("experiencia")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Experiencia
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-background border border-border rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("experiencia")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Experiencia
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
