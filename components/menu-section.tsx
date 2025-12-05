"use client"

import { useState } from "react"
import { MenuCategory } from "@/components/menu-category"
import { cn } from "@/lib/utils"

const menuData = {
  entradas: [
    {
      name: "Ceviche de Autor",
      description: "Pescado fresco marinado con leche de tigre especiada",
      price: "$12.00",
    },
    {
      name: "Gyozas Fusion",
      description: "Dumplings rellenos de cordero y especias orientales",
      price: "$10.00",
    },
    {
      name: "Tártaro de Atún",
      description: "Atún rojo con aguacate, chile y cítricos",
      price: "$14.00",
    },
  ],
  platosF: [
    {
      name: "Lomo al Malbec",
      description: "Lomo de res en reducción de vino con papas gratinadas",
      price: "$22.00",
    },
    {
      name: "Risotto Negro",
      description: "Risotto con tinta de calamar, camarones y parmesano",
      price: "$18.00",
    },
    {
      name: "Pato Laqueado",
      description: "Pato confitado con glaseado de miel y especias",
      price: "$24.00",
    },
    {
      name: "Pasta Trufa",
      description: "Fettuccine con crema de trufa negra y hongos",
      price: "$20.00",
    },
  ],
  cocteles: [
    {
      name: "BOHEMIA Signature",
      description: "Gin, elderflower, pepino, lima y tónica premium",
      price: "$11.00",
    },
    {
      name: "Negroni Ahumado",
      description: "Gin, Campari, vermut rosso con toque de humo",
      price: "$12.00",
    },
    {
      name: "Margarita de Autor",
      description: "Tequila reposado, cointreau, jugo de lima fresco",
      price: "$10.00",
    },
    {
      name: "Old Fashioned",
      description: "Bourbon, bitters, azúcar y naranja",
      price: "$13.00",
    },
  ],
  sinAlcohol: [
    {
      name: "Mocktail Tropical",
      description: "Maracuyá, mango, lima y hierbabuena",
      price: "$7.00",
    },
    {
      name: "Limonada de Lavanda",
      description: "Limón fresco con jarabe de lavanda casero",
      price: "$6.00",
    },
    {
      name: "Té Helado Premium",
      description: "Selección de tés fríos con frutas de estación",
      price: "$5.00",
    },
  ],
}


type CategoryId = keyof typeof menuData

const categories: { id: CategoryId; label: string }[] = [
  { id: "entradas", label: "Entradas" },
  { id: "platosF", label: "Platos Fuertes" },
  { id: "cocteles", label: "Cócteles" },
  { id: "sinAlcohol", label: "Sin Alcohol" },
]

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("entradas")

  const activeCategoryData = menuData[activeCategory]
  const activeCategoryLabel =
    categories.find((category) => category.id === activeCategory)?.label ?? "Menú"

  return (
    <section id="menu" className="py-16 px-4">
      <div className="container mx-auto max-w-[390px]">
        <h2 className="text-4xl font-serif font-bold text-center mb-8 text-primary">
          Menú
        </h2>

        <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium border transition-colors flex-shrink-0",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <MenuCategory title={activeCategoryLabel} items={activeCategoryData} />
      </div>
    </section>
  )
}
