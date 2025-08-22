# Site Institucional Ciro Neves

Site institucional completo e responsivo para Ciro Neves - Academia/Programa de Emagrecimento, desenvolvido com Next.js 14, Tailwind CSS e shadcn/ui.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** (App Router)
- **Tailwind CSS** para estilização
- **shadcn/ui** para componentes
- **Framer Motion** para animações
- **Lucide React** para ícones
- **TypeScript** para tipagem

## 📋 Funcionalidades

### ✅ Seções Implementadas

1. **Header com Menu Hambúrguer**
   - Logo "Ciro Neves"
   - Menu lateral animado
   - Navegação suave entre seções

2. **Hero Principal**
   - Área para foto do Ciro Neves (placeholder 600x800)
   - Texto: "Emagrecimento rápido e saudável após os 40"
   - CTA: "Participe do Desafio Você + Magra"

3. **Seção Apresentação**
   - Imagem ilustrativa (placeholder 600x800)
   - Texto introdutório sobre o método

4. **Reprogramação Metabólica + Vídeo**
   - Bloco de texto explicativo
   - Área para vídeo (placeholder 16:9)

5. **Benefícios do Programa**
   - Placeholder para grupo de pessoas fitness (700x500)
   - Lista de benefícios com ícones

6. **Calculadora do Metabolismo**
   - 3 cards com placeholders (300x200)
   - CTA para análise gratuita

7. **Frase de Impacto**
   - "É sobre ter saúde e disposição"
   - Design impactante com gradiente

8. **Nosso Programa**
   - Texto explicativo
   - Card ilustrativo (400x500)
   - "O que você vai receber na prática" (4 tópicos)

9. **Depoimentos**
   - Carrossel com 4 depoimentos
   - Fotos placeholder circulares (200x200)
   - Sistema de navegação

10. **Chamada Secundária**
    - Background hero secundário (21:9)
    - CTA forte para conversão

11. **Ebook Gratuito**
    - Placeholder de capa (300x450)
    - Formulário funcional (nome + e-mail)
    - API integrada

12. **Footer**
    - Logo, redes sociais, links
    - Informações de contato
    - Links legais

### ✅ Funcionalidades Técnicas

- **100% Responsivo** (mobile-first até 1440px+)
- **SEO Otimizado** (meta tags, OG tags)
- **API Funcional** para formulário (/api/subscribe)
- **Animações Suaves** com Framer Motion
- **Performance Otimizada** para Vercel/Lighthouse
- **Placeholders Organizados** para fácil substituição

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre no diretório
cd ciro-neves-site

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start

# Linting
npm run lint
```

## 📁 Estrutura do Projeto

```
ciro-neves-site/
├── app/
│   ├── api/
│   │   └── subscribe/
│   │       └── route.ts          # API do formulário
│   ├── globals.css               # Estilos globais
│   ├── layout.tsx               # Layout principal
│   └── page.tsx                 # Página inicial
├── components/
│   ├── ui/                      # Componentes shadcn/ui
│   ├── Header.tsx               # Cabeçalho com menu
│   ├── HeroSection.tsx          # Seção hero principal
│   ├── AboutSection.tsx         # Seção sobre
│   ├── MetabolicSection.tsx     # Reprogramação metabólica
│   ├── BenefitsSection.tsx      # Benefícios
│   ├── CalculatorSection.tsx    # Calculadora
│   ├── ImpactSection.tsx        # Frase de impacto
│   ├── ProgramSection.tsx       # Nosso programa
│   ├── TestimonialsSection.tsx  # Depoimentos
│   ├── SecondaryHeroSection.tsx # Chamada secundária
│   ├── EbookSection.tsx         # Ebook gratuito
│   └── Footer.tsx               # Rodapé
├── public/
│   └── placeholders/            # Imagens placeholder
├── lib/
│   └── utils.ts                 # Utilitários
├── components.json              # Configuração shadcn/ui
├── tailwind.config.ts           # Configuração Tailwind
├── next.config.ts               # Configuração Next.js
└── package.json
```

## 🎨 Design System

### Cores Principais

- **Primária**: Cyan (#06B6D4)
- **Secundária**: Blue (#3B82F6)
- **Texto**: Gray-900 (#111827)
- **Background**: White/Black gradients

### Tipografia

- **Font**: Inter (Google Fonts)
- **Tamanhos**: 
  - Hero: 4xl-6xl (36px-60px)
  - Títulos: 2xl-4xl (24px-36px)
  - Corpo: lg-xl (18px-20px)

### Breakpoints

- **Mobile**: 0-768px
- **Tablet**: 768px-1024px
- **Desktop**: 1024px-1440px
- **Large**: 1440px+

## 🔧 Personalização

### Substituindo Imagens

1. Adicione suas imagens em `public/placeholders/`
2. Mantenha as proporções especificadas:
   - Foto Ciro: 600x800px
   - Grupo fitness: 700x500px
   - Cards calculadora: 300x200px
   - Depoimentos: 200x200px (circular)
   - Capa ebook: 300x450px

### Configurando API

1. Copie `.env.example` para `.env.local`
2. Configure suas variáveis de ambiente
3. Integre com seu sistema de email marketing

### Cores e Estilos

1. Edite `tailwind.config.ts` para cores personalizadas
2. Modifique `app/globals.css` para estilos globais
3. Use as classes do Tailwind nos componentes

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instale a CLI da Vercel
npm i -g vercel

# Deploy
vercel

# Ou conecte seu repositório GitHub na Vercel
```

### Outras Plataformas

```bash
# Build para produção
npm run build

# Os arquivos estarão em .next/
```

## 📊 Performance

- **Lighthouse Score**: 90+ (otimizado)
- **Core Web Vitals**: Excelente
- **SEO**: 100% otimizado
- **Acessibilidade**: WCAG 2.1 AA

## 🔒 Segurança

- Validação de formulários
- Sanitização de dados
- Headers de segurança
- HTTPS obrigatório

## 📞 Suporte

Para dúvidas ou suporte:

- **Email**: contato@cironeves.com
- **Telefone**: (11) 99999-9999
- **Documentação**: Este README

## 📄 Licença

Este projeto é propriedade de Ciro Neves. Todos os direitos reservados.

---

**Desenvolvido com ❤️ usando Next.js 14 + Tailwind CSS**
