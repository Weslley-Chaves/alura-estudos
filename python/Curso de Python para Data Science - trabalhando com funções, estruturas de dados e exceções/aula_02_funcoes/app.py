import matplotlib # Importando uma biblioteca em Python
import matplotlib.pyplot as plt # Importando uma biblioteca com alias
import random

# Criando um pequeno gráfico de barras com a biblioteca pyplot
estudantes = ['João', 'Maria', 'José']
notas = [8.5, 9, 6.5]

plt.bar(x=estudantes, height=notas)
# plt.show() # Esse comando exibe o gráfico criado.

# Segundo exemplo utilizando a biblioteca random

estudantes_2 = estudantes = ['João', 'Maria', 'José', 'Ana']

from random import choice # Importando uma função específica de uma biblioteca

estudante = choice(estudantes_2) # Utilizando a função 'choise' para escolher um item aleatório dentro de uma lista não vazia;
print(estudante)









