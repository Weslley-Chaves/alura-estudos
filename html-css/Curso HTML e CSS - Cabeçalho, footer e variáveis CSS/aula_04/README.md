# Aula 04 - HTML e CSS: Cabeçalho, Footer e Variáveis CSS

Nesta aula, você aprendeu a  **criar e estilizar o cabeçalho do portfólio** , além de desenvolver a **navegação entre múltiplas páginas HTML** de forma funcional e elegante.

## ✅ Conceitos aplicados

* Estilização completa do **header** do portfólio
* Criação da nova página **“Sobre mim”** em HTML
* Implementação de **navegação entre páginas** com links internos
* Aplicação de **consistência visual** entre as páginas
* Uso de **flexbox** para organizar os elementos do cabeçalho

## 💻 Código principal desenvolvido

### Estrutura HTML - Página **Home**

```html
<header class="cabecalho">
  <h1>Meu Portfólio</h1>
  <nav class="menu">
    <a href="index.html">Home</a>
    <a href="sobre.html">Sobre mim</a>
  </nav>
</header>

<main>
  <h2>Bem-vindo ao meu portfólio!</h2>
</main>
```

### Estrutura HTML - Página **Sobre mim**

```html
<header class="cabecalho">
  <h1>Meu Portfólio</h1>
  <nav class="menu">
    <a href="index.html">Home</a>
    <a href="sobre.html">Sobre mim</a>
  </nav>
</header>

<main>
  <h2>Sobre mim</h2>
  <p>Olá! Sou estudante de desenvolvimento web e apaixonado por tecnologia.</p>
</main>
```

### Estilização com CSS

```css
:root {
  --cor-principal: #5b92ed;
  --cor-fundo: #ffffff;
  --cor-texto: #333;
  --cor-hover: #3b6fcc;
}

body {
  font-family: Arial, sans-serif;
  background-color: var(--cor-fundo);
  color: var(--cor-texto);
  margin: 0;
}

.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--cor-principal);
  padding: 16px 32px;
}

.menu a {
  color: var(--cor-fundo);
  text-decoration: none;
  margin: 0 12px;
  transition: color 0.3s;
}

.menu a:hover {
  color: var(--cor-hover);
}
```

## 🧠 Atividades práticas resolvidas

1. Criação e estilização do **header** do portfólio.
2. Desenvolvimento da página **“Sobre mim”** com conteúdo introdutório.
3. Implementação de **links de navegação** entre “Home” e “Sobre mim”.
4. Manutenção da identidade visual entre as páginas.
5. Testes de navegação e layout responsivo.
