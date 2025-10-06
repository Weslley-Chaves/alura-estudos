# Aula 02 - HTML e CSS: Cabeçalho, Footer e Variáveis CSS

Nesta aula, aprofundamos o aprendizado sobre  **posicionamento e interação visual com CSS** , aprimorando o layout do cabeçalho e rodapé.

## ✅ Conceitos aplicados

* Adicionar **ícones** a links clicáveis (usando `<img>` ou bibliotecas como  *Font Awesome* )
* Alinhar elementos horizontalmente com **`justify-content`**
* Aplicar **efeitos visuais de interação** com o seletor **`:hover`**
* Aprimorar a **experiência do usuário (UX)** com botões e links responsivos
* Reforçar o uso de **variáveis CSS** para manter consistência de cores e espaçamentos

## 💻 Código principal desenvolvido

### Exemplo de cabeçalho com ícones

```html
<header class="cabecalho">
  <nav class="menu">
    <a href="#" class="link"><img src="img/home.svg" alt="Início"> Início</a>
    <a href="#" class="link"><img src="img/sobre.svg" alt="Sobre"> Sobre</a>
    <a href="#" class="link"><img src="img/contato.svg" alt="Contato"> Contato</a>
  </nav>
</header>
```

### Estilização com CSS

```css
:root {
  --cor-principal: #5b92ed;
  --cor-hover: #3b6fcc;
  --cor-fundo: #ffffff;
  --cor-texto: #333;
}

.cabecalho {
  display: flex;
  justify-content: center;
  background-color: var(--cor-principal);
  padding: 16px;
}

.menu .link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--cor-fundo);
  text-decoration: none;
  margin: 0 12px;
  transition: color 0.3s, transform 0.3s;
}

.menu .link:hover {
  color: var(--cor-hover);
  transform: scale(1.05);
}
```

## 🧠 Atividades práticas resolvidas

1. Inserção de ícones em links do cabeçalho e rodapé.
2. Centralização dos elementos com `justify-content`.
3. Criação de efeitos de destaque com `:hover`.
4. Teste de responsividade e legibilidade visual.
5. Ajustes de espaçamento e harmonia visual do layout.
