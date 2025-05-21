import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MonitorIcon, PackageIcon, WrenchIcon } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <MonitorIcon className="h-10 w-10 text-blue-500" />,
      title: "Instalação de Windows",
      description: "Instalação e configuração do sistema operacional Windows em computadores e notebooks.",
    },
    {
      icon: <PackageIcon className="h-10 w-10 text-blue-500" />,
      title: "Instalação de Pacote Office",
      description: "Instalação e configuração do Microsoft Office e outras suítes de produtividade.",
    },
    {
      icon: <WrenchIcon className="h-10 w-10 text-blue-500" />,
      title: "Resolução de Problemas",
      description: "Diagnóstico e solução de problemas relacionados ao Windows e outros softwares.",
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Meus Serviços</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Ofereço soluções completas para manter seu computador funcionando perfeitamente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-slate-100 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-col items-center">
                {service.icon}
                <CardTitle className="mt-4 text-xl font-bold text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
