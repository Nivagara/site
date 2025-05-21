"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MenuIcon, XIcon } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "#servicos" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contato" },
    { name: "Depoimentos", href: "#depoimentos" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600">Lucas Nivagara</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-orange-600 hover:bg-orange-700 font-semibold shadow-md">
              <Link href="#contato">Contactar</Link>
            </Button>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200">
          <div className="container mx-auto px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-slate-700 hover:text-blue-600 transition-colors"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-3 bg-orange-600 hover:bg-orange-700 font-semibold shadow-md">
              <Link href="#contato" onClick={toggleMenu}>
                Contactar
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
