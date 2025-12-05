import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-[390px]">
        <h1 className="text-lg font-serif font-semibold tracking-wider text-primary">BOHEMIA</h1>
        <Button size="sm" className="gap-2" asChild>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">WhatsApp</span>
          </a>
        </Button>
      </div>
    </header>
  )
}
