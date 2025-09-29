
# Aula 01 - Python para Data Science: funções, estruturas de dados e exceções

Esta aula foi dedicada à introdução prática do  **Python aplicado à Ciência de Dados** , com foco em:

## ✅ Conceitos aplicados

* Instalar e importar uma biblioteca (`pip install` e `import`)
* Instalar uma **versão específica** de uma biblioteca (`pip install biblioteca==versão`)
* Verificar a versão de uma biblioteca (`biblioteca.__version__`)
* Importar pacotes/módulos e **métodos específicos**
* Revisão de **estruturas de dados** (listas, dicionários, tuplas, conjuntos)
* Definição e uso de **funções** (`def`, parâmetros, retorno)
* Introdução ao tratamento de **exceções** (`try/except`)

## 💻 Código principal desenvolvido

* **Exemplo de importação**

```python
import numpy as np
print(np.__version__)
```

* **Instalação de versão específica**

```bash
pip install numpy==1.24.0
```

* **Função simples com tratamento de exceção**

```python
def divisao(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Não é possível dividir por zero!"

print(divisao(10, 2))  # 5.0
print(divisao(10, 0))  # "Não é possível dividir por zero!"
```

## 🧠 Atividades práticas resolvidas

1. Instalar e importar uma biblioteca (ex.: `pandas`)
2. Verificar a versão instalada de uma biblioteca
3. Importar um método específico (`from math import sqrt`)
4. Criar uma função simples para cálculo de média
5. Usar `try/except` para tratar divisões por zero

## 📝 Exemplo prático de função

```python
def media(valores):
    return sum(valores) / len(valores)

notas = [7, 8, 6, 9]
print("Média da turma:", media(notas))
```
