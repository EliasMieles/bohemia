import { Card } from "@/components/ui/card"

interface MenuItem {
  name: string
  description: string
  price: string
}

interface MenuCategoryProps {
  title: string
  items: MenuItem[]
}

export function MenuCategory({ title, items }: MenuCategoryProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-serif font-semibold text-primary border-b border-primary pb-2">{title}</h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <Card key={index} className="p-4 border-border bg-card">
            <div className="flex justify-between items-start gap-3">
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
              <span className="text-primary font-semibold flex-shrink-0">{item.price}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
