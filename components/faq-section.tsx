import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqItems = [
    {
      question: "Quanto tempo leva para formatar um computador?",
      answer:
        "O tempo para formatar um computador e instalar o Windows varia de acordo com a configuração do equipamento, mas geralmente leva entre 1 a 3 horas, incluindo a instalação de drivers e programas básicos.",
    },
    {
      question: "Você faz atendimento a domicílio?",
      answer:
        "Sim, ofereço serviço de atendimento a domicílio para maior comodidade dos clientes. Entre em contato para verificar disponibilidade e agendar uma visita.",
    },
    {
      question: "É possível recuperar arquivos após a formatação?",
      answer:
        "Em alguns casos, é possível recuperar arquivos após a formatação, mas o ideal é sempre fazer backup dos seus dados importantes antes de qualquer procedimento. Posso ajudar com o backup dos seus arquivos antes da formatação.",
    },
    {
      question: "Quais versões do Windows você instala?",
      answer:
        "Instalo todas as versões do Windows, incluindo Windows 10 e Windows 11, de acordo com a compatibilidade do seu equipamento e sua preferência.",
    },
    {
      question: "Você oferece garantia para os serviços?",
      answer:
        "Sim, todos os serviços têm garantia. Se ocorrer algum problema relacionado ao serviço prestado, farei os ajustes necessários sem custo adicional.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Perguntas Frequentes</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Respostas para as dúvidas mais comuns sobre meus serviços de TI.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">{item.question}</AccordionTrigger>
                <AccordionContent className="text-slate-600">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
