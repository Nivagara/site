import { NextResponse } from "next/server"

// Array vazio para armazenar apenas depoimentos reais
const reviews: any[] = []

export async function GET() {
  return NextResponse.json({ reviews })
}

export async function POST(request: Request) {
  try {
    const { name, rating, comment } = await request.json()

    // Validação básica
    if (!name || !rating || !comment) {
      return NextResponse.json({ success: false, message: "Todos os campos são obrigatórios" }, { status: 400 })
    }

    // Formatar a data atual
    const today = new Date()
    const formattedDate = `${today.getDate().toString().padStart(2, "0")}/${(today.getMonth() + 1).toString().padStart(2, "0")}/${today.getFullYear()}`

    // Criar novo depoimento
    const newReview = {
      id: Date.now().toString(),
      name,
      rating,
      comment,
      date: formattedDate,
    }

    // Adicionar ao array (em um ambiente real, seria salvo em um banco de dados)
    reviews.unshift(newReview)

    return NextResponse.json({ success: true, review: newReview })
  } catch (error) {
    console.error("Erro ao salvar depoimento:", error)
    return NextResponse.json({ success: false, message: "Erro ao processar o depoimento" }, { status: 500 })
  }
}
