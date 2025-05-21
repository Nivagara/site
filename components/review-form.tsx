"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { StarIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ReviewForm() {
  const { toast } = useToast()
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating)
  }

  const handleRatingHover = (hoveredRating: number) => {
    setHoveredRating(hoveredRating)
  }

  const handleRatingLeave = () => {
    setHoveredRating(0)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (rating === 0) {
      toast({
        title: "Avaliação necessária",
        description: "Por favor, selecione uma classificação de 1 a 5 estrelas.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Aqui você implementaria a lógica para salvar o depoimento
      // Simulando um envio bem-sucedido após 1 segundo
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Depoimento enviado!",
        description: "Obrigado por compartilhar sua experiência.",
      })

      setFormData({ name: "", comment: "" })
      setRating(0)
    } catch (error) {
      toast({
        title: "Erro ao enviar depoimento",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="avaliar" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Deixe seu Depoimento</h2>
          <p className="mt-4 text-lg text-slate-600">Sua opinião é muito importante para melhorar meus serviços.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
          <div className="space-y-6">
            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-slate-700 mb-2">
                Classificação
              </label>
              <div className="flex items-center gap-1" onMouseLeave={handleRatingLeave}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleRatingClick(index + 1)}
                    onMouseEnter={() => handleRatingHover(index + 1)}
                    className="focus:outline-none"
                  >
                    <StarIcon
                      className={`h-8 w-8 ${
                        index < (hoveredRating || rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                Nome
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                required
              />
            </div>

            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-slate-700 mb-1">
                Comentário
              </label>
              <Textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Compartilhe sua experiência com os serviços..."
                rows={4}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar Depoimento"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
