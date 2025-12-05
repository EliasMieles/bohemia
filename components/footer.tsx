import { Instagram, Music } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-[390px]">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://instagram.com/bohemialico"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors active:scale-95"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://tiktok.com/@bohemialico"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors active:scale-95"
              aria-label="TikTok"
            >
              <Music className="w-6 h-6" />
            </a>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} BOHEMIA Lico Bar. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
