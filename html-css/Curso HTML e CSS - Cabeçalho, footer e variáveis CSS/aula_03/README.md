# Aula 03 - HTML e CSS: Cabeçalho, Footer e Variáveis CSS

Nesta aula, você aprendeu a  **criar e estruturar as seções principais de uma página web** , aplicando boas práticas de semântica e estilização com CSS.

## ✅ Conceitos aplicados

* Criação e estilização do **footer** (rodapé) da página
* Estruturação do **header** (cabeçalho) com título e navegação
* Utilização da tag semântica **`<nav>`** para criar **links de navegação**
* Aplicação de **estilos consistentes** entre cabeçalho e rodapé
* Organização do layout com **display: flex** e espaçamentos adequados

## 💻 Código principal desenvolvido

### Estrutura HTML

```html
<header class="cabecalho">
  <h1>Meu Site</h1>
  <nav class="menu-navegacao">
    <a href="#inicio">Início</a>
    <a href="#sobre">Sobre</a>
    <a href="#contato">Contato</a>
  </nav>
</header>

<footer class="rodape">
  <p>© 2025 Meu Site. Todos os direitos reservados.</p>
</footer>
```

### Estilização com CSS

```css
:root {
  --cor-principal: #5b92ed;
  --cor-fundo: #ffffff;
  --cor-texto: #333;
}

.cabecalho, .rodape {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--cor-principal);
  color: var(--cor-fundo);
  padding: 16px 32px;
}

.menu-navegacao a {
  color: var(--cor-fundo);
  text-decoration: none;
  margin: 0 12px;
  transition: color 0.3s;
}

.menu-navegacao a:hover {
  color: #dfe9ff;
}
```

## 🧠 Atividades práticas resolvidas

1. Criação do **header** da página com título e menu de navegação.
2. Implementação do **footer** com informações de direitos autorais.
3. Aplicação da tag semântica `<nav>` para os links principais.
4. Estilização do cabeçalho e rodapé com cores e alinhamentos.
5. Testes de exibição em diferentes tamanhos de tela.
