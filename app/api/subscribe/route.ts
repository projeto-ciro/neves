import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    // Validação básica
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Nome e email são obrigatórios' },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Aqui você pode integrar com seu sistema de email marketing
    // Por exemplo: Mailchimp, ConvertKit, ActiveCampaign, etc.
    
    // Log dos dados (em produção, salve em banco de dados)
    console.log('Nova inscrição:', {
      name,
      email,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip')
    });

    // Simular delay de processamento
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inscrição realizada com sucesso!',
        data: { name, email }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro na API de inscrição:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// Método GET para verificar se a API está funcionando
export async function GET() {
  return NextResponse.json(
    { 
      message: 'API de inscrição funcionando',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  );
}

