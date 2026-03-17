# My Projects

Aplicacao frontend criada para apresentar projetos em formato de portfolio visual. A pagina exibe um carrossel com destaques e uma grade com todos os projetos, cada um apontando para sua respectiva demo.

## Preview

O projeto foi pensado como uma vitrine simples e direta:

- carrossel com animacoes e troca automatica de slides
- lista de cards clicaveis com links externos para os projetos
- layout construído com `styled-components`

## Tecnologias

- React 19
- TypeScript
- Vite
- Styled Components
- Framer Motion
- Lucide React

## Como executar

### Pre-requisitos

- Node.js 18+ recomendado
- npm

### Instalacao

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

Por padrao, o Vite disponibiliza a aplicacao em `http://localhost:5173`.

### Build de producao

```bash
npm run build
```

### Preview da build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Estrutura do projeto

```text
src/
  assets/
    img/                # imagens usadas nos projetos
  components/
    Cards/              # grade com todos os projetos
    Slides/             # carrossel principal
  page/
    index.tsx           # composicao da pagina
    styled.ts           # estilos de layout
  services/
    index.ts            # dados dos slides e cards
  main.tsx              # ponto de entrada da aplicacao
```

## Como atualizar os projetos exibidos

Os dados da pagina ficam centralizados em `src/services/index.ts`.

- `slides`: controla os itens exibidos no carrossel principal
- `cards`: controla a grade com todos os projetos e seus links

Para adicionar um novo projeto:

1. adicione a imagem em `src/assets/img`
2. importe a imagem em `src/services/index.ts`
3. inclua o item desejado no array `slides` e/ou `cards`

## Comportamento da interface

- o carrossel troca automaticamente a cada 5 segundos
- o usuario tambem pode navegar manualmente pelas setas laterais
- os indicadores inferiores permitem saltar para um slide especifico
- os cards abrem os projetos em uma nova aba

## Observacoes

- o rodape aponta para o perfil do autor no GitHub
- o conteudo atual do portfolio esta em portugues

## Licenca

Este projeto esta licenciado sob a licenca MIT. Consulte o arquivo `LICENSE` para mais detalhes.
