import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Aqui você implementaria a lógica para enviar o email
    // Por exemplo, usando um serviço como SendGrid, Mailgun, etc.

    // Simulando um envio bem-sucedido
    console.log("Email enviado:", { name, email, message })

    return NextResponse.json({ success: true, message: "Email enviado com sucesso!" })
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return NextResponse.json({ success: false, message: "Erro ao enviar email" }, { status: 500 })
  }
}
