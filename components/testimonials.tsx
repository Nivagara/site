export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Depoimentos</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Veja o que meus clientes dizem sobre meus serviços. Todos os depoimentos são de clientes reais.
          </p>
        </div>

        <div className="text-center p-8 bg-slate-50 rounded-lg shadow-sm">
          <p className="text-slate-600 italic">
            Os depoimentos serão exibidos aqui conforme os clientes deixarem suas avaliações.
          </p>
        </div>
      </div>
    </section>
  )
}
