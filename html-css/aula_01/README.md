# Aula 1 - Introdução ao HTML e CSS: estrutura, texto, listas e formatação

## ✅ Conteúdos abordados

* [X] Estrutura básica do HTML (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`)
* [X] Metadados e responsividade (`<meta charset>`, `<meta name="viewport">`)
* [X] Título da página e favicon (`<title>`, `<link rel="icon">`)
* [X] Conexão com folha de estilos externa (`<link rel="stylesheet">`)
* [X] Elementos semânticos básicos (`<header>`, `<footer>`)
* [X] Títulos e hierarquia (`<h1>` a `<h6>`)
* [X] Formatação de texto (`<strong>`, `<i>`, `<p>`, `<hr>`)
* [X] Atributos e classes (`class`, `alt` em imagens)
* [X] Imagens (`<img>` com `src`, `alt`)
* [X] Listas (`<ul>`, `<ol>`, `<li>`)
* [X] Elementos de formulário (`<button>`, `<textarea>`, `<input type="number">`)
* [X] Agrupamento com `<div>` e aplicação de classes
* [X] Seletores de classe no CSS (`.lineRed`, `.center-img`, `.estilizacao`)
* [X] Propriedades CSS: `background-color`, `color`, `padding`, `border-radius`, `display`, `margin`, `width`, `text-align`

## 💡 Descrição da aula

Nesta aula construímos uma página simples de **portfólio** para explorar a **estrutura base do HTML** e a  **estilização inicial com CSS** .

Praticamos metatags para  **codificação e responsividade** , adicionamos  **favicon** , conectamos um arquivo **CSS externo** e usamos elementos semânticos como `header` e `footer`.

No conteúdo, exercitamos  **títulos (h1–h6)** , **formatação de texto** (itálico e negrito), **linhas horizontais** (`<hr>`), **listas** (ordenadas e não ordenadas), **imagens** (com `alt` e classes) e **componentes de formulário** (botão, `textarea` e `input number`).

No CSS, aplicamos **seletores de classe** para estilizar parágrafos, centralizar imagens e criar uma seção com  **fundo escuro e texto claro** , revisando propriedades comuns como `padding`, `border-radius`, `margin` e `text-align`.

## 💻 Trecho de código aplicado

```html
<!DOCTYPE html>
<html lang="pt-br">

<!-- O head (cabeçalho) armazena as tags de elementos que não influênciam o corpo da página web que está sendo desenvolvida -->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Utilize em "content" width=device-width - melhor compatibilidade com aparelhos mobiles.  -->
    <title>Portfolio</title>
    <link rel="icon" type="image/png" href="imagens/favicon.png">
    <!-- Atribuindo um favicon (ícone) a página principal. -->
    <link rel="stylesheet" href="style.css"> <!-- Conectando um arquivo css em um arquivo HTML. -->

</head>
<!-- A estrutura dos elementos que se pode visualizar na página HMTL é formada pelas tags impostas no body (corpo). -->

<body>
    <header>Esse é o cabeçalho da página HTML.</header>
    <hr>
    <h1>Isto é um título [h1]</h1>
    <h2>Isto é um subtítulo [h2]</h2>
    <h3>Esse é o h3</h3>
    <h4>Esse é o h4</h4>
    <h5>Esse é o h5</h5>
    <h6>Esse é o h6</h6>
    <hr>
    <p><i>Esse é um texto em itálico.</i></p>
    <p><strong><i>Esse é um texto em itálico e negrito.</i></strong></p>
    <p><strong>Esse é um texto apenas em negrito.</strong></p>
    <hr>
    <p class="lineRed">Isto é um parágrafo <strong><i>com</i></strong> uma classe css atribuída.</p>
    <p>Isto é um parágrafo <strong><i>sem</i></strong> a classe css atribuída.</p>
    <hr>
    <p>Abaixo: Imagem <strong><i>com</i></strong> classe atribuída.</p>
    <img src="imagens/html.png" alt="Logo do HTML 5." class="center-img">
    <p>Abaixo: Imagem <strong><i>sem</i></strong> classe atribuída.</p>
    <img src="imagens/html.png" alt="Logo do HTML 5.">
    <hr>
    <ul>
        <p>Essa é uma lista sem ordenação:</p>
        <li>Banana</li>
        <li>Maça</li>
    </ul>
    <ol>
        <p>Essa é uma lista com ordenação:</p>
        <li>Banana</li>
        <li>Maça</li>
    </ol>
    <hr>
    <div>
        <p>Esse é um botão comum em HTML:</p>
        <button>Botão</button>
        <hr>
        <p>Esse é um campo de texto comum em HTML:</p>
        <textarea name="Descrição" id="texto"></textarea>
        <hr>
        <p>Esse é um campo de input comum em HTML (Tipo número):</p>
        <input type="number">
    </div>
    <hr>
    <div class="estilizacao">
        <h2>Essa parte vai ser com o fundo preto e a fonte branca.</h2>
        <p>Essa parte vai ser com o fundo preto e a fonte branca.</p>
    </div>

    <footer>Esse é o rodapé da página HTML.</footer>

</body>

</html>
```

```css
.lineRed {
    background-color: red;
    color: white;
    padding: 5px;
    /* adiciona espaço interno */
    border-radius: 3px;
    /* cantos arredondados */
}

.center-img {
    display: block;
    margin: 0 auto;
    width: 200px;
}

.estilizacao {
    background-color: black;
    border-radius: 3px;
    color: white;
    text-align: center;
}
```

---
