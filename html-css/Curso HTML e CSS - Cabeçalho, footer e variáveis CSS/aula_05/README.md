# Aula 05 - HTML e CSS: Cabeçalho, Footer e Variáveis CSS

Nesta aula, você aprendeu a **adicionar conteúdo a novas páginas** e a **personalizar o estilo do projeto** utilizando **variáveis CSS** para tornar o código mais limpo e reutilizável.

## ✅ Conceitos aplicados

* Adicionar **conteúdo HTML** em novas páginas do projeto
* Compreender o que são **variáveis CSS** e sua importância na manutenção de estilos
* Declarar variáveis globais no seletor **`:root`**
* Aplicar **variáveis CSS** em propriedades como cores, fontes e espaçamentos
* Personalizar o **layout** de forma mais flexível e organizada

## 💻 Código principal desenvolvido

### Exemplo de estrutura HTML com conteúdo

```html
<main class="conteudo">
  <h2>Sobre mim</h2>
  <p>Sou desenvolvedor em formação e este portfólio mostra meus principais projetos e aprendizados.</p>
</main>
```

### Uso de variáveis CSS

```css
:root {
  --cor-principal: #5b92ed;
  --cor-secundaria: #3b6fcc;
  --cor-fundo: #ffffff;
  --cor-texto: #333;
  --fonte-principal: 'Arial', sans-serif;
}

body {
  background-color: var(--cor-fundo);
  color: var(--cor-texto);
  font-family: var(--fonte-principal);
}

h2 {
  color: var(--cor-principal);
}

p {
  line-height: 1.6;
}
```

## 🧠 Atividades práticas resolvidas

1. Criação de novas seções de conteúdo no HTML.
2. Definição de variáveis CSS no `:root`.
3. Aplicação das variáveis em propriedades de cor, fonte e layout.
4. Customização do projeto para manter uma identidade visual coerente.
5. Testes de modificação rápida alterando apenas o valor das variáveis.
