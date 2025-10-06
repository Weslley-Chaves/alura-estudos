# Aula 01 - HTML e CSS: Cabeçalho, Footer e Variáveis CSS

Esta aula foi dedicada à **atualização do layout de um projeto no Figma** e à implementação prática em HTML e CSS, com foco em boas práticas de posicionamento e estilização.

## ✅ Conceitos aplicados

* Compreender o processo de **atualização de layout** a partir do Figma
* Posicionar elementos na tela utilizando o **display: flex**
* Organizar o **cabeçalho (header)** e o **rodapé (footer)**
* Utilizar **variáveis CSS** (`:root { --cor-principal: ... }`) para padronizar cores e estilos
* Estilizar **botões** conforme o novo layout proposto
* Aplicar **hierarquia visual** e espaçamentos consistentes no design

## 💻 Código principal desenvolvido

### Estrutura HTML base

```html
<header class="cabecalho">
  <h1>Meu Projeto</h1>
  <nav>
    <button class="btn">Início</button>
    <button class="btn">Sobre</button>
    <button class="btn">Contato</button>
  </nav>
</header>

<footer class="rodape">
  <p>© 2025 Meu Projeto. Todos os direitos reservados.</p>
</footer>
```

### Estilização com CSS

```css
:root {
  --cor-principal: #5b92ed;
  --cor-secundaria: #ffffff;
  --cor-texto: #333;
}

.cabecalho, .rodape {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
}

.btn {
  background: var(--cor-secundaria);
  color: var(--cor-texto);
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn:hover {
  background: #e0e0e0;
}
```

## 🧠 Atividades práticas resolvidas

1. Atualização do layout no Figma conforme o novo design.
2. Posicionamento dos botões com  **display: flex** .
3. Criação e aplicação de **variáveis CSS** para cores e espaçamentos.
4. Estilização dos botões com base no layout atualizado.
5. Montagem do cabeçalho e rodapé completos do projeto.
