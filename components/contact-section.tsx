import { Button } from "@/components/ui/button"
import { FacebookIcon, InstagramIcon, MailIcon, MessageSquareIcon } from "lucide-react"
import { ContactForm } from "./contact-form"

export function ContactSection() {
  const whatsappNumber = "+258879126016"
  const whatsappMessage = "Olá gostaria de obter os seus serviços"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section id="contato" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Entre em Contato</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Estou disponível para ajudar com seus problemas de TI. Entre em contato por WhatsApp, email ou redes
            sociais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <MessageSquareIcon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-slate-600 mb-4 text-center">
                Clique no botão abaixo para iniciar uma conversa no WhatsApp
              </p>
              <Button asChild className="bg-green-500 hover:bg-green-600 w-full">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageSquareIcon className="mr-2 h-4 w-4" /> Conversar no WhatsApp
                </a>
              </Button>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <MailIcon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-slate-600 mb-4 text-center">wenivagara@gmail.com</p>
              <Button asChild variant="outline" className="w-full">
                <a href="mailto:wenivagara@gmail.com">
                  <MailIcon className="mr-2 h-4 w-4" /> Enviar Email
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                <FacebookIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Facebook</h3>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href="https://www.facebook.com/profile.php?id=100092350849588&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon className="mr-2 h-4 w-4" /> Seguir
                  </a>
                </Button>
              </div>

              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                <InstagramIcon className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Instagram</h3>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href="https://www.instagram.com/lucas.a.d.nivagara?igsh=ZGUzMzM3NWJiOQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon className="mr-2 h-4 w-4" /> Seguir
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
