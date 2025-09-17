"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hablemos de tu <span className="gradient-text">Proyecto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes una idea increíble? Me encantaría escucharla y ayudarte a hacerla realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Envíame un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-input border-border"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Tu email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-input border-border"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Asunto"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-input border-border"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Cuéntame sobre tu proyecto..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-input border-border resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glass border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-card-foreground">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-4" />
                    <span className="text-muted-foreground">vicenteperezc17@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-secondary mr-4" />
                    <span className="text-muted-foreground">+52 427-145-3598</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-4" />
                    <span className="text-muted-foreground">San Juan del Río, Querétaro</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-card-foreground">Sígueme en</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="glass-hover bg-transparent">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="glass-hover bg-transparent"
                    onClick={() => window.open("https://linkedin.com/in/vicente-perez-17-dev", "_blank")}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="glass-hover bg-transparent"
                    onClick={() => window.open("mailto:vicenteperezc17@gmail.com", "_blank")}
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-card-foreground">¿Por qué trabajar conmigo?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Más de 6 años de experiencia comprobada
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Especialista en PHP, Laravel y MySQL
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Resultados medibles: +30% eficiencia, +25% ventas
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Integración completa con marketing digital
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
