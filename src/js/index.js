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
