import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Lucas Nivagara</h1>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-2 text-blue-400">
            Serviços de TI Profissionais
          </h2>
          <p className="text-xl text-slate-300">
            Soluções tecnológicas confiáveis para resolver seus problemas de informática com rapidez e eficiência.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="#servicos">Ver Serviços</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 border-orange-500 text-white font-bold shadow-lg"
            >
              <Link href="#contato">Entrar em Contacto</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
            <Image src="/profile-image.jpg" alt="Técnico de TI" fill className="object-cover" priority />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
