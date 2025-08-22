## Tarefas do Projeto ciro-neves

### Fase 1: Extrair e analisar o projeto atual
- [x] Extrair o projeto `ciro-neves.zip`.
- [x] Listar o conteúdo do projeto para entender a estrutura.
- [x] Iniciar a análise dos arquivos principais (`layout.tsx`, `page.tsx`, `globals.css`, `components/Header.tsx`, `components/Footer.tsx`, etc.) para identificar os pontos de melhoria e as regras a serem aplicadas.

### Fase 2: Criar componentes base padronizados
- [x] Criar um componente `Section` que inclua `py-16 md:py-20` e um `Container` com `mx-auto px-4 sm:px-6 lg:px-8`.
- [x] Padronizar a tipografia com `clamp()` para títulos (display, title, lead).
- [x] Criar um componente de botão padronizado com as especificações (`min-h-[44px]`, `rounded-xl`, estados `hover`, `active:scale-[.98]`, `focus-visible:ring-2`).
- [x] Criar um componente de card com estilo glass (`bg-white/5 backdrop-blur border-white/10`) e sombras suaves, garantindo altura uniforme.

### Fase 3: Implementar layout responsivo e navegação
- [x] Criar menu responsivo (drawer mobile com backdrop blur).
- [x] Garantir que o logo seja clicável e redirecione para `/`.
- [x] Implementar links de menu e CTA com navegação interna via hashes absolutas (`/#sobre`).
- [x] Aplicar o componente `Section` e `Container` em todas as seções.

### Fase 4: Corrigir seções principais e calculadoras
- [x] Aplicar as regras de banners full-bleed (`width-full`, `height` controlada, `object-contain`).
- [x] Usar `next/image` com `fill`, `object-cover` e `sizes` em todas as imagens.
- [x] Garantir responsividade das calculadoras, inputs em grid 1→2 colunas, cards alinhados em altura máxima.
- [x] Implementar animação suave do número ao calcular (framer-motion).

### Fase 5: Implementar melhorias visuais e microinterações
- [x] Adicionar gradiente radial sutil + textura de ruído no Hero e Benefits.
- [x] Garantir dark mode consistente.
- [x] Adicionar microinterações leves (hover/active scale, sublinhado animado em links).
- [x] Garantir acessibilidade (aria-label, foco visível, touch targets ≥44px).

### Fase 6: Testar e entregar projeto corrigido
- [x] Revisar performance (priority no Hero, lazy nos demais).
- [x] Testar responsividade em desktop e mobile.
- [x] Verificar funcionamento das calculadoras e animações.
- [x] Confirmar que todos os componentes estão funcionando corretamente.

## ✅ PROJETO CONCLUÍDO COM SUCESSO!

Todas as regras foram implementadas:
- ✅ Componentes Section + Container padronizados
- ✅ Cards com altura uniforme e alinhamento vertical
- ✅ Tipografia com clamp() para escala fluida
- ✅ Banners full-bleed com altura controlada
- ✅ next/image com fill, object-cover e sizes
- ✅ Menu responsivo com drawer mobile
- ✅ Logo clicável redirecionando para "/"
- ✅ Links com navegação interna via hashes absolutas
- ✅ Calculadoras responsivas com animações suaves
- ✅ Botões modernos com estados hover/active
- ✅ Cards glass com backdrop-blur
- ✅ Gradientes radiais e texturas de ruído
- ✅ Footer responsivo com grid 1→4 colunas
- ✅ Dark mode consistente
- ✅ Acessibilidade com aria-label e touch targets ≥44px
- ✅ Microinterações e performance otimizada