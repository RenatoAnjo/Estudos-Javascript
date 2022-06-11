/* 
 Minicurso de Javascript Driven Education algoritmos !
Funcao somar dois numeros
*/

function somar(num1, num2) {
  let resultado = num1 + num2
  return resultado
}

/* Complete função ao lado de forma que ela sempre retorne parametro recebido */

function retornaParametro(parametro) {
  return parametro
}

/* Somar todos 
Altere a função ao lado para que ela passe a retornar a soma dos tres parametros 
*/

function somarTodos(num1, num2, num3) {
  return num1 + num2 + num3
}

/* 
somar               num1 + num2
subtracao           num1 - num2 
multiplicacao       num1 * num2
divisao             num1 / num2
resto da divisao    num1 % num2 obs - serve para saber se o numero é par ou impar, se caso o resto for 0 é par se for 1 é impar */

/* Media 
funcao ao lado, que calcule a media simples entre 2 numeros */

function media(num1, num2) {
  let resultado = (num1 + num2) / 2
  return resultado
}

/* Calcula Resto
funcao ao lado, que retorna o resto da divisao entre 2 numeros */

function calculoResto(num1, num2) {
  let resultado = num1 % num2
  return resultado
}

/* Manipulando texto */

function apresentar(nome) {
  let texto = 'Ola ' + nome
  return texto
}

function calcularMedia(nota1, nota2, nota3) {
  let media = (nota1 * 3 + nota2 * 3 + nota3 * 4) / 10
  let resultado = 'Sua media é :' + media
  return resultado
}

/* Hello World 
funcao que retorne a string "Hello World" */

function helloWorld() {
  return 'Hello World'
}

/* Concatenar 
funcao, que retorna a concatenacao dos dois parametros que ela recebe */

function concatenar(texto1, texto2) {
  return texto1 + texto2
}

/* Somar Números
Implemente a função ao lado, que soma dois números e retorna o texto A soma deu: x, sendo x o resultado da soma */

function somar(num1, num2) {
  let resultado = num1 + num2
  return 'A soma deu: ' + resultado
}

/* É Maior de Idade?
Implemente a função ao lado, que retorna Maior de idade caso a idade passada seja maior que 17 ou Menor de idade caso contrário. */

function maiorDeIdade(idade) {
  if (idade > 17) {
    return 'Maior de idade'
  } else {
    return 'Menor de idade'
  }
}

/* Foi Aprovado?
Implemente a função ao lado, que retorna Aprovado caso a nota passada seja maior ou igual a 7, Prova Final caso seja maior ou igual a 5 porém menor que 7 ou Reprovado caso contrário. */

function situacao(nota) {
  if (nota >= 7) {
    return 'Aprovado'
  } else if (nota >= 5) {
    return 'Prova Final'
  } else {
    return 'Reprovado'
  }
}

/* Fui Aprovado com Média
Implemente a função ao lado, que recebe 3 notas e retorna as strings sim ou não, indicando se a média simples entre as 3 notas (somar e dividir por 3) é maior ou igual a 7. */

function aprovado(nota1, nota2, nota3) {
  let resultado = (nota1 + nota2 + nota3) / 3
  if (resultado >= 7) {
    return 'sim'
  } else {
    return 'não'
  }
}

/* 
Cade meu Desconto?
Implemente a função ao lado, que recebe um preço e um booleano indicando se já está com desconto ou não. Se o preço for maior que 100 e não estiver com desconto, a função deve retornar Quero pechinchar. Caso contrário, deve retornar Negócio fechado */

function pecoDesconto(preco, estaComDesconto) {
  if (preco > 100 && estaComDesconto == false) {
    return 'Quero pechinchar'
  } else {
    return 'Negócio fechado'
  }
}

/* Verifica faltas
Implemente a função ao lado, que recebe uma nota e um número de faltas e retorna Aprovado caso a média seja maior ou igual a 7 e o número de faltas menor que 10, ou Reprovado caso contrário. */

function aprovado(nota, faltas) {
  if (nota >= 7 && faltas < 10) {
    return 'Aprovado'
  } else {
    return 'Reprovado'
  }
}

/* Tem Negativo?
Implemente a função ao lado, que recebe 3 números e retorna Tem negativo! caso pelo menos 1 deles seja menor que 0. Caso contrário, ela deve retornar Tudo positivo! */

function tudoPositivo(num1, num2, num3) {
  if (num1 < 0 || num2 < 0 || num3 < 0) {
    return 'Tem negativo!'
  } else {
    return 'Tudo positivo!'
  }
}

/* RepetidoRepetido
'Utilizando loops, implemente a função ao lado que recebe um texto e retorna uma string com o texto repetido 10 vezes. */

function vezes10(texto) {
  let resultado = ''

  for (let i = 0; i < 10; i++) {
    resultado = resultado + texto
  }
  return resultado
}

/* 
Multiplica Aí
Utilizando loops, implemente a função ao lado que recebe um texto e um número de repetições. Ela deve retornar uma string com o texto repetido n vezes, sendo n o número de repetições. */

function multiplica(texto, repeticoes) {
  let resultado = ''

  for (let i = 0; i < repeticoes; i++) {
    resultado += texto
  }

  return resultado
}

/* Lista de Nomes
Implemente a função ao lado que recebe 3 nomes e retorna esses nomes em uma array. */

function listar(nome1, nome2, nome3) {
  return [nome1, nome2, nome3]
}

/* Dobrar a meta
Implemente a função ao lado que recebe uma array e retorna a soma de todos os seus números multiplicados por 2. */

function dobraASoma(lista) {
  let soma = 0
  for (let i = 0; i < lista.length; i++) {
    soma = soma + lista[i]
  }
  return soma * 2
}

/* Qual o Maior Indice
Implemente a função ao lado que recebe uma array de números positivos diferentes entre si e retorna o índice do maior número encontrado.

Exemplo: se a array for [10,50,30], o maior número é o 50, então a função deve retornar o índice 1.

Lembre-se que os índices das arrays começam em 0. */

function maiorIndice(lista) {
  // Escreva aqui seu código
  let indice = 0

  for (i = 0; i < lista.length; i++) {
    if (lista[i] > lista[indice]) {
      indice = i
    }
  }

  return indice
}

/* Avançar os Dias
Implemente a função ao lado que vai retornar qual o dia da semana vai ser a partir de um dia passado como string e de uma quantidade de dias a ser avançado. Para isso, a função deve receber uma string e um número como parâmetros e retornar uma string.

Obs: os dias devem ser retornados no seguinte formato

"Segunda-feira, Terca-feira, Quarta-feira, Quinta-feira, Sexta-feira, Sabado, Domingo"

Se for passado “Segunda-feira” e 5: a função deve retornar “Sabado”, pois avançar 5 dias a partir da segunda-feira cai no sábado.
Se for passado “Segunda-feira” e 8, a função deve retornar “Terca-feira”, pois avançar 8 dias a partir da segunda-feira cai na terça-feira da semana seguinte.  */

function avancarDias(dia, quantidade) {
  let dias = [
    'Segunda-feira',
    'Terca-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sabado',
    'Domingo'
  ]

  let indice = 0
  for (let i = 0; i < dias.length; i++) {
    if (dias[i] === dia) {
      indice = i
    }
  }

  indice = (indice + quantidade) % 7

  return dias[indice]
}

/* Intervalos Pares
Implemente a função ao lado que recebe 3 números como parâmetros. Os dois primeiros delimitam um intervalo. A função deve retornar um array contendo os menores números pares dentro do intervalo. A quantidade de elementos nesse array deve ser igual ao 3o parâmetro passado

Obs:

O 1o parâmetro sempre será menor que o 2o parâmetro

No intervalo passado sempre haverá números pares suficientes para a quantidade passada

A função deve retornar os menores números pares possíveis dentro do intervalo

Exemplo: se for passado os valores “2”, “10”, “3”, a função deve retornar o array [4,6,8]

Exemplo: se for passado os valores “2”, “10”, “2”, a função deve retornar o array [4,6]



Dica: para realizar essa questão você vai precisar de uma ferramenta nova. Talvez seja útil construir um array vazio. Você pode fazer isso com o seguinte comando:

const arr =[]//constrói um array vazio chamado “arr”

Depois disso, você, talvez, queira encher esse novo array com elementos. Você pode fazer isso escrevendo “.push” logo após o nome do array. Então, para inserir o número “3” no array que acabamos de criar fazemos:

arr.push(3)//Insere o número 3 dentro do array “arr” */

function intervaloPares(inicio, fim, quantidade) {
  // Escreva aqui seu código
  let pares = []

  let numero = inicio

  while (pares.length < quantidade) {
    numero += 1
    if (numero % 2 == 0) {
      pares.push(numero)
    }
  }

  return pares
}

/* Conta Letras
Implemente a função ao lado que recebe como parâmetros uma string e uma letra e deve retornar a quantidade de ocorrências da letra passada na string passada.

Exemplo: se for passado “carreira” e a letra “r”, a função deve retornar 3

Exemplo: se for passado “ovo” e a letra “s”, a função deve retornar 0

Dica: Strings se comportam parecido com arrays. Então, podemos obter o número de caracteres de uma string utilizando a propriedade length como se segue:

let palavra = "abcdef";
let tamanho=palavra.length;//Nesse caso a variável tamanho vai receber 6 que é o número de caracteres em palavra
Outra semelhança é que podemos acessar um caractere da string por sua posição. Então, se quisermos acessar a primeria letra da string palavra fazemos:

let primeiraLetra=palavra[0]//Com isso, temos que primeiraLetra vai receber a string "a" */

function contaLetras(string, letra) {
  let quantidade = 0

  for (let i = 0; i < string.length; i++) {
    if (string[i] === letra) {
      quantidade++
    }
  }

  return quantidade
}

/* Troca as Vogais
Implemente a função ao lado que recebe uma string como parâmetro e retorna a string original, mas com o número 1 no lugar das vogais

Exemplo: se for passada a palavra “uva”, a função deve retornar “1v1”

Exemplo: se for passada a palavra “carro”, a função deve retornar “c1rr1”

Dica: para realizar essa questão você vai precisar de uma ferramenta nova. Talvez seja útil construir um array vazio. Você pode fazer isso com o seguinte comando:

const arr=[] //constrói um array vazio chamado "arr"
Depois disso, você, talvez, queira encher esse novo array com elementos. Você pode fazer isso escrevendo ".push" logo após o nome do array. Então, para inserir "3" no array que acabamos de criar fazemos:

arr.push(3) //Insere 3 dentro do array "arr" */

function trocaVogais(string) {
  let novaString = ''

  for (let i = 0; i < string.length; i++) {
    let caractere = string[i]

    if (
      caractere === 'a' ||
      caractere === 'e' ||
      caractere === 'i' ||
      caractere === 'o' ||
      caractere === 'u'
    ) {
      novaString += '1'
    } else {
      novaString += caractere
    }
  }

  return novaString
}

/* Remover os Números
Implemente a função ao lado que recebe como parâmetro uma string, misturando letras e números, e deve retornar uma string contendo apenas as letras da string passada na mesma ordem

Exemplo: se for passada a string “ab2c4d”, a função deve retornar “abcd”

Exemplo: se for passada a string “1234”, a função deve retornar “” */

function tiraNumeros(string) {
  let resultado = ''

  for (let i = 0; i < string.length; i++) {
    let c = string[i]

    if (
      c !== '0' &&
      c !== '1' &&
      c !== '2' &&
      c !== '3' &&
      c !== '4' &&
      c !== '5' &&
      c !== '6' &&
      c !== '7' &&
      c !== '8' &&
      c !== '9'
    ) {
      resultado += c
    }
  }

  return resultado
}

/* Soma até a Meta
Implemente a função ao lado que recebe 2 números como parâmetros e retorna um array contendo os números consecutivos ao 1o parâmetro até o valor em que, ao somar todos os números no array, temos o valor passado no 2o parâmetro.

Exemplo: se for passado os valores “2” e “12”, a função deve retornar o array [3,4,5], pois 3+4+5=12 que é a meta passada no 2o parâmetro

Exemplo: se for passado os valores “12” e “58”, a função deve retornar o array [13,14,15,16], pois 13+14+15+16=58 que é a meta informada no 2o parâmetro */

function somaAteMeta(inicio, meta) {
  let numeros = []
  let soma = 0

  for (let i = inicio + 1; soma < meta; i++) {
    numeros.push(i)
    soma += i
  }

  return numeros
}
