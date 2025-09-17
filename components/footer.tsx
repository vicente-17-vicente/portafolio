import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold gradient-text mb-2">Mi Portafolio</div>
            <p className="text-muted-foreground">
              Desarrollador Full Stack apasionado por crear experiencias web excepcionales.
            </p>
          </div>

          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="glass-hover rounded-full">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="glass-hover rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="glass-hover rounded-full">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            © {currentYear} Mi Portafolio. Hecho con <Heart className="h-4 w-4 text-red-500 mx-1" />y mucho café.
          </p>
        </div>
      </div>
    </footer>
  )
}
