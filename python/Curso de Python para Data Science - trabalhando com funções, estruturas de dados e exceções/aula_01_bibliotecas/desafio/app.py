# 1. Escreva um código para instalar a versão 3.7.1 da biblioteca matplotlib.
'''
import subprocess
subprocess.check_call(["pip", "install", "matplotlib==3.7.1"])

import matplotlib
'''

# 2. Escreva um código para importar a biblioteca numpy com o alias np.

'''
import numpy as np
'''

# 3. . Crie um programa que leia a seguinte lista de números e escolha um número desta aleatoriamente.
'''
from random import choice

lista = [8, 12, 54, 23, 43, 1, 90, 87, 105, 77]

print(choice(lista))
'''

#  4. Crie um programa que sorteia, aleatoriamente, um número inteiro positivo menor que 100.

'''
from random import randrange

print(randrange(1, 100))
'''

# 5. Crie um programa que solicite à pessoa usuária digitar dois números inteiros e calcular a potência do 1º número elevado ao 2º.

'''
while True:
    try:
        base = int(input('Digite a base (número inteiro): '))
        expoente = int(input('Digite o expoente (número inteiro): '))
        break
    except ValueError:
        print('❌ Entrada inválida. Digite apenas números inteiros.')

resultado = pow(base, expoente)
print(f'✅ A potência de {base} elevado a {expoente} é: {resultado}')
'''

# 6. Um programa deve ser escrito para sortear uma pessoa seguidora de uma rede social para ganhar um prêmio. A lista de participantes é numerada e devemos escolher aleatoriamente um número de acordo com a quantidade de participantes. Peça à pessoa usuária para fornecer o número de participantes do sorteio e devolva para ela o número sorteado.


'''
from random import randint

print('🎉 SORTEADOR DE NÚMEROS 🎉\n')

while True:
    try:
        total_participantes = int(input('Digite o TOTAL de participantes do sorteio: '))
        if total_participantes < 1:
            print('❌ O número de participantes deve ser maior que zero.')
            continue
        break
    except ValueError:
        print('❌ Entrada inválida. Digite apenas números inteiros.')

sorteado = randint(1, total_participantes)

print(f'✅ O número sorteado foi {sorteado}.')
'''

# 7. Você recebeu uma demanda para gerar números de token para acessar o aplicativo de uma empresa. O token precisa ser par e variar de 1000 até 9998. Escreva um código que solicita à pessoa usuária o seu nome e exibe uma mensagem junto a esse token gerado aleatoriamente.

# "Olá, [nome], o seu token de acesso é [token]! Seja bem-vindo(a)!"

'''
from random import randrange
import time

print('Gerador de TOKENS 🔢\n')

min_token = 1000
max_token = 9998
nome_usuario = input('Qual é o seu nome? ')

for i in range(3, 0, -1):
    print(f'Gerando seu TOKEN em {i}...', end="\r")
    time.sleep(1)

print("\nToken gerado com sucesso. ✅\n")

# Gera apenas números pares
token_aleatorio = randrange(min_token, max_token + 1, 2)

print(f'\nOlá, {nome_usuario}, o seu token de acesso é {token_aleatorio}! Seja bem-vindo(a)!')
'''

# 8. Para diversificar e atrair novos(as) clientes, uma lanchonete criou um item misterioso em seu cardápio chamado "salada de frutas surpresa". Neste item, são escolhidas aleatoriamente 3 frutas de uma lista de 12 para compor a salada de frutas da pessoa cliente. Crie o código que faça essa seleção aleatória de acordo com a lista abaixo:


'''
from random import sample # sorteia sem repetição

print('🍎🍊🍏🍋🍐 SALADA DE FRUTAS SUPRESA 🍇🍍🍌🥭🍉\n')

frutas = ["maçã", "banana", "uva", "pêra",
          "manga", "coco", "melancia", "mamão",
          "laranja", "abacaxi", "kiwi", "ameixa"]

frutas_escolhidas = sample(frutas,k=3)

print('As frutas escolhidas foram:\n')

for i in frutas_escolhidas:
    print(f'- {i.capitalize()}')
'''

# 9. Você recebeu um desafio de calcular a raiz quadrada de uma lista de números, identificando quais resultaram em um número inteiro. A lista é a seguinte:

'''
import math

numeros = [2, 8, 15, 23, 91, 112, 256]

for n in numeros:
    raiz = math.sqrt(n)

    if raiz.is_integer():
        print(f"✅ A raiz de {n} é inteira: {int(raiz)}")
    else:
        print(f"❌ A raiz de {n} não é inteira: {raiz:.2f}")
'''

# 10. Faça um programa para uma loja que vende grama para jardins. Essa loja trabalha com jardins circulares e o preço do metro quadrado da grama é de R$ 25,00. Peça à pessoa usuária o raio da área circular e devolva o valor em reais do quanto precisará pagar.

'''
import math

print("🌱 Loja de Grama - Jardins Circulares 🌱\n")

# Entrada do usuário
raio = float(input("Digite o raio do jardim em metros: "))

# Preço fixo por m²
preco_m2 = 25.0

# Cálculo da área e do valor total
area = math.pi * (raio ** 2)
valor_total = area * preco_m2

# Saída formatada
print(f"\nA área do jardim é {area:.2f} m².")
print(f"O valor a pagar pela grama é R$ {valor_total:.2f}.")
'''
