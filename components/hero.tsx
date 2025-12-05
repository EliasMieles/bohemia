"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-[390px]">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="w-48 h-48 relative">
            <Image src="/logo.jpeg" alt="BOHEMIA Logo" fill className="object-contain" priority />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-bold text-balance text-primary">
              Cocina Fusión & Coctelería de Autor
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
              Experimenta sabores únicos en un ambiente sofisticado. Cada plato y cóctel es una obra maestra creada para
              deleitar tus sentidos.
            </p>
          </div>

          <Button size="lg" asChild className="w-full max-w-xs">
            <Link href="/menu">Ver Menú</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
