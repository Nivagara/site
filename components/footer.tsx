import Link from "next/link"
import { FacebookIcon, InstagramIcon, MailIcon, MessageSquareIcon } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lucas Nivagara</h3>
            <p className="text-slate-300">
              Soluções em TI para resolver seus problemas de informática com rapidez e eficiência.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-slate-300 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-slate-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className="text-slate-300 hover:text-white transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-slate-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MessageSquareIcon className="h-5 w-5 mr-2 text-green-400" />
                <span>+258 87 912 6016</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-2 text-blue-400" />
                <span>wenivagara@gmail.com</span>
              </li>
              <li className="flex items-center">
                <FacebookIcon className="h-5 w-5 mr-2 text-blue-500" />
                <a
                  href="https://www.facebook.com/profile.php?id=100092350849588&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li className="flex items-center">
                <InstagramIcon className="h-5 w-5 mr-2 text-pink-500" />
                <a
                  href="https://www.instagram.com/lucas.a.d.nivagara?igsh=ZGUzMzM3NWJiOQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} Lucas Nivagara. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
