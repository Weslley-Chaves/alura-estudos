# 📌 Guia de Boas Práticas para Commits (Conventional Commits)

Este guia ajuda a manter o histórico de commits limpo, organizado e fácil de entender, seguindo a convenção **Conventional Commits**.

---
## ✅ Passo a passo para fazer um commit corretamente:

### 1. Verifique quais arquivos foram modificados
```bash
git status
```
### 2. Adicione os arquivos que deseja incluir no commit
```bash
git add .               # adiciona tudo
### ou
git add nome_do_arquivo.py  # adiciona arquivo específico
```
### 3. Faça o commit com uma mensagem clara seguindo o padrão
```bash
git commit -m "tipo(escopo): descrição curta e clara"
```

### 4. Envie suas mudanças para o repositório remoto (GitHub)
```bash
git push origin main
```
---
## 🧱 Estrutura padrão:

 `<tipo>(escopo opcional): descrição curta e clara`

### 🚀 Tipos de Commits

| Tipo         | Uso                                                        |
| ------------ | ---------------------------------------------------------- |
| `feat`     | Adição de nova funcionalidade                            |
| `fix`      | Correção de bugs                                         |
| `docs`     | Alterações na documentação                             |
| `style`    | Mudanças visuais ou de formatação (sem alterar lógica) |
| `refactor` | Refatoração de código (sem alterar comportamento)       |
| `test`     | Adição ou modificação de testes                        |
| `chore`    | Tarefas de manutenção/configuração (build, deps, etc)  |

---

### ✍️ Regras para escrever commits

- Use o verbo no **imperativo** (ex: “adiciona” e não “adicionando”)
- Seja **claro e específico** sobre o que foi feito
- Evite mensagens genéricas como `update`, `ajustes`, `mudanças`
- Utilize o escopo (`(parte-do-projeto)`) quando fizer sentido

---

## 💡 Exemplos práticos

```bash
feat: adiciona tela inicial com login
```
```bash
fix(login): corrige erro de autenticação com senha inválida
```
```bash
docs: atualiza README com instruções de instalação
```
```bash
style: ajusta indentação do CSS do formulário
```
```bash
refactor(api): separa lógica de autenticação em outro módulo
```
```bash
test: cria teste para componente de botão
```
```bash
chore: configura GitHub Actions para deploy automático
```
