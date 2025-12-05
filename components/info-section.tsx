import { MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function InfoSection() {
  return (
    <section className="py-12 px-4 bg-card border-y border-border">
      <div className="container mx-auto max-w-[390px] space-y-6">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Dirección</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Av. Principal 123, Centro Histórico</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Horario</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Lunes a Jueves: 6:00 PM - 12:00 AM
              <br />
              Viernes a Sábado: 6:00 PM - 2:00 AM
              <br />
              Domingo: Cerrado
            </p>
          </div>
        </div>

        <Button variant="outline" className="w-full bg-transparent" asChild>
          <a href="https://maps.google.com/?q=BOHEMIA+Lico+Bar" target="_blank" rel="noopener noreferrer">
            Ver Ubicación en Google Maps
          </a>
        </Button>
      </div>
    </section>
  )
}
