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

/* SubArray
Implemente a função ao lado que recebe dois arrays como parâmetro e deve retornar true caso o 2o array seja uma subsequência do 1o array e false caso contrário

Obs: uma subsequência é um conjunto de números que está contido dentro de uma sequência maior de números e na mesma ordem. Por isso, “1,3,5” é uma subsequência de “1,2,3,4,5”, pois todos os números do 1o conjunto aparecem no 2o conjunto e na mesma ordem (o 1 vem antes do 3 e o 3 vem antes do 5 na sequencia original).

Exemplo: se forem passados os arrays “[1,4,3,5]” e “[1,2,4]”, a função deve retornar false, pois o número “2” não está presente no 1o array

Exemplo: se forem passados os arrays “[1,4,3,5]” e “[1,3,4]”, a função deve retornar false, pois, embora todos os valores do 2o array estejam presente no 1o, a ordem não foi respeitada (o “4” deveria vir antes do “3”). */

function subArray(array, subarray) {
  let indiceMenor = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] === subarray[indiceMenor]) {
      indiceMenor++

      if (indiceMenor === subarray.length) break
    }
  }

  return indiceMenor === subarray.length
}

/* Letras Repetidas
Implemente a função ao lado que recebe uma string como parâmetro e retorna um array contendo as letras repetidas na string passada

Obs:

Se não tiver repetição, retorne o array “[]”

Caso mais de uma letra esteja repetida na string, ordene o array de retorno na ordem que as letras aparecem na string originial

Serão passadas strings com no máximo 2 repetições de cada letra, ou seja, não se preocupe com palavras como “carreira”, onde o “r” aparece 3 vezes

Exemplo: se for passado “ovo”, a função deve retornar “[o]”

Exemplo: se for passado “passagem”, a função deve retornar “[s,a]”

Exemplo: se for passado “uva”, a função deve retornar “[]” */

function letrasRepetidas(string) {
  let letras = []
  let acumuladoQuantidade = []

  for (let i = 0; i < string.length; i++) {
    let letra = string[i]
    let limite = i
    let quantidade = 0

    for (let j = 0; j < limite; j++) {
      if (string[j] === letra) quantidade++
    }
    acumuladoQuantidade.push(quantidade)
  }

  for (let i = 0; i < acumuladoQuantidade.length; i++) {
    if (acumuladoQuantidade[i] === 1) letras.push(string[i])
  }

  return letras
}

/* Array Numerada

Implemente a função ao lado que recebe um valor como parâmetro e retorna um array contendo os elementos de 1 até o valor passado como parâmetro.


Exemplo:


Se for passado como parâmetro n = 5, sua função deve retornar [1, 2, 3, 4, 5]

Se for passado como parâmetro n =10, sua função deve retornar [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10]


Observação:


Sempre será passado como parâmetro um valor maior ou igual a 1


Dica:


Para adicionar um elemento a um array você pode utilizar o comando “.push”. Então caso tenha um array “arr=[]” e queira inserir o número “3” nesse array basta fazer “arr.push(3)”. */

function crieArray(n) {
  let array = []
  for (let counter = 1; counter <= n; counter++) {
    array.push(counter)
  }
  return array
}

/* Índice do Valor
Implemente a função ao lado que recebe uma array e um valor e retorna a posição que esse valor se encontra na array (começando em 0).

Exemplo: deve retornar 2 quando passada a array [10, 30, 50, 70, 90] e o valor 50. */

function indiceDoValor(array, valor) {
  // escreva seu código aqui :)
  for (let i = 0; counter < array.length; i++) {
    if (array[i] === valor) {
      return i
    }
  }
  return -1
}

/* Apertos de Mão

Implemente ao lado a função que recebe um número “n” que representa a quantidade de estudantes presentes em um evento e retorna a quantidade mínima de apertos de mãos necessários para todos se cumprimentarem.


Exemplo:


se for passado “n=3”, temos 3 pessoas: p1, p2 e p3. Então p1 aperta a mão de p2 e p3, p2 aperta a mão de p3 e todos já se cumprimentaram. Foram necessários 3 apertos de mão para que todos se cumprimentassem */

function totalDeApertos(n) {
  //escreva seu código aqui :)
  let resultado = (n * (n - 1)) / 2
  return resultado
}

/* Média Ponderada numa Turma

Implemente a função ao lado que recebe dois arrays como parâmetros: listaValores e listaPesos. A sua função deve retornar a média ponderada utilizando os arrays passados. A média é calculada a partir da soma da multiplicação de cada valor por seu respectivo peso, e dividindo o total dessa soma pela soma dos pesos.


Exemplo:

mp = ((5*1) + (8*2) + (10*3)) / 1 + 2 + 3 = 51/6 = 8,5


Se forem passados listaValores = [5, 8, 10] com a listaPesos = [1, 2, 3], a função deve retornar 8,5 porque primeiro multiplicamos o valor 5 pelo peso 1, somamos ao valor 8 multiplicado pelo peso 2, e somamos ao valor 10 multiplicado pelo peso 3. Em seguida pegamos esse total acumulado e dividimos pela soma dos pesos (1 + 2 + 3). */

function calculaPesoTotal(listaPesos) {
  let total = 0
  for (let index = 0; index < listaPesos.length; index += 1) {
    total += listaPesos[index]
  }
  return total
}

function mediaPonderada(listaValores, listaPesos) {
  //escreva seu código aqui :);
  let media = 0
  const pesoTotal = calculaPesoTotal(listaPesos)
  for (let index = 0; index < listaValores.length; index += 1) {
    media += listaValores[index] * listaPesos[index]
  }
  const result = media / pesoTotal
  return result
}

/* Triplica String

Implemente a função ao lado que recebe uma string que contém apenas letras minúsculas como parâmetro e retorna uma nova string que consiste na string inicial, mas onde houver uma vogal você deve substituir por 3 vogais iguais


Exemplo:


Se for passado str = “caixa”, então o retorno da função deve ser “caaaiiixaaa”


Se for passado str = ‘teste’, então o retorno da função deve ser "teeesteee"


Se str = ‘’kappa’, então o retorno da função deve ser ‘’kaaappaaa”


Dica: Strings se comportam parecido com arrays. Então, podemos obter o número de caracteres de uma string utilizando a propriedade length como se segue:

let palavra = "abcdef"
let tamanho = palavra.length; //Nesse caso a variável tamanho vai receber o valor 6 que é o número de caracteres em palavra


Outra semelhança é que podemos acessar um caractere da string por sua posição, então se quisermos pegar a primeira letra da palavra acima podemos fazer:

let primeiraLetra = palavra[0]//Com isso, temos que primeiraLetra recebeu a string “a”;
let segundaLetra = palavra[1]//Com isso, temos que segundaLetra recebeu a string “b”; */

function triplicaEntrada(str) {
  //escreva seu código aqui :)
  const vogais = ['a', 'e', 'i', 'o', 'u']
  const newString = str.split('')
  for (let index = 0; index < newString.length; index += 1) {
    if (vogais.includes(newString[index])) {
      newString[index] += newString[index] + newString[index]
    }
  }
  return newString.join('')
}

function calculaNumeros(lst, number) {
  let result = 0
  for (let index = 0; index < lst.length; index++) {
    if (number !== lst[index]) {
      result += lst[index]
    }
  }
  return result
}

function miniMaxSum(lst) {
  //escreva seu código aqui :)
  const min = Math.min(...lst)
  const max = Math.max(...lst)
  const miniMaxSumValues = [calculaNumeros(lst, max), calculaNumeros(lst, min)]
  return miniMaxSumValues
}

function somaTresUltimosNumeros(array) {
  const tresUltimosNumeros = array.slice(array.length - 3, array.length)
  let somaTresNumeros = 0
  for (let index = 0; index < tresUltimosNumeros.length; index += 1) {
    somaTresNumeros += tresUltimosNumeros[index]
  }
  return somaTresNumeros
}

let listaInicial = [0, 1, 2]
let novaLista = []

function sequenciaDriven(numeroInteiro) {
  // verificar se numero nao eh inteiro ou menor que zero
  if (!Number.isInteger(numeroInteiro) || numeroInteiro < 0) {
    console.log('Você não informou um número inteiro, maior ou igual a zero')
    return
  }

  console.log(`${numeroInteiro} é um número inteiro`)

  // buscar o numero na listaInicial
  if (listaInicial.includes(numeroInteiro)) {
    console.log(`O número ${numeroInteiro} está na listagem`)
    // filtrar os menores ou iguais que estao na listaInicial
    novaLista = listaInicial.filter(numero => numero <= numeroInteiro)
    return novaLista
  }

  console.log('CALCULO DE NOVO NUMERO')

  let contador = 0
  let limite = numeroInteiro

  while (contador < limite) {
    // 1. Total de elementos -1 indica a ultima posicao
    let posicaoFinal = listaInicial.length - 1
    // console.log('Posicao Final ' + posicaoFinal)

    // 2. Logica da progressao numerica
    // proximoNumero = ultima_posicao + penultima + antepenultima
    let proximoNumero =
      listaInicial[posicaoFinal] +
      listaInicial[posicaoFinal - 1] +
      listaInicial[posicaoFinal - 2]
    //console.log('Próximo número ' + proximoNumero)

    // adicionar resultado na lista
    listaInicial.push(proximoNumero)

    // incremento no contador do while
    contador++
  }

  return listaInicial.filter(numero => numero <= numeroInteiro)
} // fim da funcao

console.log('Sequência Driven')
console.log(sequenciaDriven(100))

// Implemente a função ao lado que recebe uma string que contém apenas letras minúsculas como parâmetro
// e retorna uma nova string que consiste na string inicial, mas onde houver uma vogal você deve substituir por 3 vogais iguais
// Se for passado str = “caixa”, então o retorno da função deve ser “caaaiiixaaa”
// Se for passado str = ‘teste’, então o retorno da função deve ser "teeesteee"
// Se str = ‘kappa’, então o retorno da função deve ser ‘’kaaappaaa”

let str = ''

function triplicaVogais(string) {
  let palavra = string.toLowerCase()
  console.log(palavra)

  // split para separar cada caractere
  let novaPalavra = palavra.split('')
  console.log(novaPalavra)

  let triplicada = []

  novaPalavra.map((letra, index, palavraNova) => {
    if (letra == 'a') letra = 'aaa'
    if (letra == 'e') letra = 'eee'
    if (letra == 'i') letra = 'iii'
    if (letra == 'o') letra = 'ooo'
    if (letra == 'u') letra = 'uuu'
    console.log(letra)
    triplicada.push(letra)
  })
  console.log(triplicada)

  let palavraTriplicada = triplicada.join().replaceAll(',', '')

  return palavraTriplicada
}

console.log(triplicaVogais('CAIXA'))
console.log(triplicaVogais('TESTE'))
console.log(triplicaVogais('KAPPA'))

//Imprimir números de 1 a 10
for (var i = 1; i <= 10; i++) {
  console.log(i)
}
//Imprimir os números impares menores que 100
for (var i = 1; i <= 100; i += 2) {
  console.log(i)
}
//Imprimir a tabuada do número 8
for (var i = 1; i <= 10; i++) {
  var row = '8 * ' + i + ' = ' + 8 * i
  console.log(row)
}
//Imprimir todas as tabuadas do número 1 ao 10
function ImprimirTabuada(n) {
  for (var i = 1; i <= 10; i++) {
    var linha = n + ' * ' + i + ' = ' + n * i
    console.log(linha)
  }
}
for (var i = 1; i <= 10; i++) {
  ImprimirTabuada(i)
  console.log('')
}

// Soma dos números de 1 a 10
var soma = 0
for (var i = 1; i <= 10; i++) {
  soma += i
}
console.log(soma)

//Calculado o fatorial de 10
var numero = 1
for (var i = 1; i <= 10; i++) {
  numero *= i
}
console.log(numero)

//Criar uma função para calcular a porcentagem de um número
function porcentagem(num, per) {
  return (num / 100) * per
}
console.log(porcentagem(1000, 57.18))

//Calcular a soma dos números impares maiores que 10 e menores que 30
var soma = 0
for (var i = 11; i <= 30; i += 2) {
  soma += i
}
console.log(soma)

//Criar uma função que converta uma temperatura de Celsius para Fahrenheit
function celsiusParaFahrenheit(n) {
  return n * 1.8 + 32
}
var r = celsiusParaFahrenheit(20)
console.log(r)

//Criar uma função que converta uma temperatura de Fahrenheit para Celsius
function fahrenheitParaCelsius(n) {
  return (n - 32) / 1.8
}
var r = fahrenheitParaCelsius(68)
console.log(r)

//Calcular a soma dos números de um array
function somarArray(ar) {
  var soma = 0
  for (var i = 0; i < ar.length; i++) {
    soma += ar[i]
  }
  return soma
}
var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95]
var soma = somarArray(ar)
console.log(soma)

//Calcular a média de todos os números de um array
function mediaArray(ar) {
  var n = ar.length
  var soma = 0
  for (var i = 0; i < n; i++) {
    soma += ar[i]
  }
  return soma / n
}
var ar = [1, 3, 9, 15, 90]
var media = mediaArray(ar)
console.log('mediaArray: ', media)

/*Criar uma função que receba como parâmetro um array de números e retorne um array
contendo somente números positivos.*/

function retornarPositivos(ar) {
  var ar2 = []
  for (var i = 0; i < ar.length; i++) {
    var el = ar[i]
    if (el >= 0) {
      ar2.push(el)
    }
  }
  return ar2
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1]
var ar2 = retornarPositivos(ar)

// Localizar o maior valor dentro de um array de números
function LocalizarMaior(ar) {
  var max = ar[0]
  for (var i = 0; i < ar.length; i++) {
    if (ar[i] > max) {
      max = ar[i]
    }
  }
  return max
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1]
var max = LocalizarMaior(ar)
console.log('Maior número: ', max)

// Calcular a soma de todos os dígitos de um número inteiro positivo
function somarDigitos(n) {
  var s = n.toString()
  var soma = 0
  for (var char of s) {
    var digito = parseInt(char)
    soma += digito
  }
  return soma
}
var resultado = somarDigitos(1235231)
console.log('Soma de todos os dígitos: ', resultado)

/* Imprimir os 10 primeiros números da sequência de Fibonacci sem usar recursividade
A sequência de Fibonacci é composta por uma sucessão de números descrita pelo famoso
matemático italiano Leonardo de Pisa (1170-1250), mais conhecido como Fibonacci, no final do
século 12. O matemático percebeu uma regularidade matemática a partir de um problema
criado por ele mesmo. Além disso, quando esses números são transformados em quadrados e
dispostos de maneira geométrica, é possível traçar uma espiral, que curiosamente também
pode ser vista em muitos fenômenos naturais.
A fórmula usada para calcular a sequência de Fibonacci é a seguinte: Fn = Fn - 1 + Fn - 2 
(Fn = Fator numeral)
Neste caso, repetimos o número 1 e somamos os dois, ou seja, 1 + 1 = 2. Em seguida, somamos
o resultado com o número antecessor, ou seja, 2 + 1 = 3, e assim continuamente, em uma
sequência infinita */
var f0 = 0
console.log(f0)
var f1 = 1
console.log(f1)
for (var i = 2; i < 10; i++) {
  var fi = f1 + f0
  console.log(fi)
  f0 = f1
  f1 = fi
}

/* Criar uma função para imprimir os 10 primeiros números da sequência de Fibonacci usando
recursividade */
function localizarFibonacci(n) {
  if (n == 0) return 0
  if (n == 1) return 1
  return localizarFibonacci(n - 1) + localizarFibonacci(n - 2)
}
var n = localizarFibonacci(10)
console.log(n)

/* Criar uma função que retorno um valor booleano informando se o número enviado como
parâmetro é um número primo.*/
function numeroPrimo(n) {
  if (n < 2) return false
  if (n == 2) return true
  var maxDiv = Math.sqrt(n)
  for (var i = 2; i <= maxDiv; i++) {
    if (n % i == 0) {
      return false
    }
  }
  return true
}
console.log(2, ' é um número primo? ', numeroPrimo(2))
console.log(3, ' é um número primo? ', numeroPrimo(3))
console.log(4, ' é um número primo? ', numeroPrimo(4))
console.log(5, ' é um número primo? ', numeroPrimo(5))
console.log(9, ' é um número primo? ', numeroPrimo(9))

/*Crie uma função que calcule a raiz quadrada de um número e retorne um número inteiro
como resultado*/
function raiz_quadrada_para_inteiro(num) {
  return parseInt(Math.sqrt(num) + '')
}
console.log(raiz_quadrada_para_inteiro(17))

// Retornar a maior string de um array
function maiorString(arr) {
  var maior = ''
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > maior.length) {
      maior = arr[i]
    }
  }
  return maior
}
console.log(
  maiorString([
    'Sao Paulo',
    'Rio de Janeiro',
    'Amazonas',
    'Pernambuco',
    'Santa Catarina',
    'Rio Grande do Norte',
    'Sergipe'
  ])
)

//Criar uma função que junte dois arrays e retorno o resultado como um novo array
function juntarArrays(ar1, ar2) {
  var ar = []
  for (let el of ar1) {
    ar.push(el)
  }
  for (let el of ar2) {
    ar.push(el)
  }
  return ar
}
var ar1 = [1, 2, 3]
var ar2 = [4, 5, 6]
var ar = juntarArrays(ar1, ar2)
console.log(ar)

//Implemente o algoritmo "bubble sort" para um array de números
function bubbleSort(ar) {
  var shouldSort = true
  var length = ar.length
  while (shouldSort) {
    shouldSort = false
    length--
    for (var i = 0; i < length; i++) {
      var a = ar[i]
      if (a > ar[i + 1]) {
        ar[i] = ar[i + 1]
        ar[i + 1] = a
        shouldSort = true
      }
    }
  }
}
var ar = [23, 1000, 1, -1, 8, 3]
console.log(ar)
bubbleSort(ar)
console.log(ar)

//Implemente o algoritmo "bubble sort" para um array de números
function bubbleSort(ar) {
  var shouldSort = true
  var length = ar.length
  while (shouldSort) {
    shouldSort = false
    length--
    for (var i = 0; i < length; i++) {
      var a = ar[i]
      if (a > ar[i + 1]) {
        ar[i] = ar[i + 1]
        ar[i + 1] = a
        shouldSort = true
      }
    }
  }
}
var ar = [23, 1000, 1, -1, 8, 3]
console.log(ar)
bubbleSort(ar)
console.log(ar)

//Contar a quantidade de palavras em um texto
function contarPalavras(text) {
  var existe_separador = true
  var palavras = 0
  for (var c of text) {
    if (separador(c)) {
      existe_separador = true
      continue
    }
    if (existe_separador) {
      palavras++
      existe_separador = false
    }
  }
  return palavras
}
function separador(c) {
  var separadores = [' ', '\t', '\n', '\r', ',', ';', '.', '!', '?']
  return separadores.includes(c)
}
console.log(contarPalavras(''))
console.log(contarPalavras(' '))
console.log(contarPalavras('SQL Server!! '))
console.log(contarPalavras(' React Native PHP ASP'))
console.log(contarPalavras(' O PHP existe a mais de 26 anos '))
console.log(contarPalavras('Vamos estudar bancos de dados relacionais'))

//Criar uma função para inverter um array
function inverterArray(ar) {
  var ar2 = []
  for (var i = ar.length - 1; i >= 0; i--) {
    ar2.push(ar[i])
  }
  return ar2
}
var ar = [1, 2, 3]
var ar2 = inverterArray(ar)
console.log(ar2)

//Exercício de lógica de programação resolvido onde o objetivo é calcular o dobro de um número qualquer.

function Calc() {
  //
  // Este é o método da classe
  //
  this.dobro = function (num) {
    //
    // aqui entra a sua lógica
    //
    return num * 2
  }
}

try {
  var calc = new Calc()
  assert.equal(10, calc.dobro(5))
} catch (e) {
  console.log(e)
}

//Exercício de lógica de programação resolvido cujo objetivo é encontrar a área quadra e cúbica.

var assert = require('assert')

//
// Classe
//
function Area() {
  //
  // Método
  //
  this.quadrada = function () {
    // sua lógica
  }

  //
  // Método
  //
  this.cubica = function () {
    // sua lógica
  }
}

try {
  var area = new Area()

  // testando a área quadrada
  area.lado1 = 3
  area.lado2 = 9
  assert.equal(27, area.quadrada())

  // testando a área cúbica
  area.lado1 = 3
  area.lado2 = 6
  area.lado3 = 2
  assert.equal(36, area.cubica())
} catch (e) {
  console.log(e)
}

function Area() {
  this.quadrada = function () {
    return this.lado1 * this.lado2
  }
  this.cubica = function () {
    return this.lado1 * this.lado2 * this.lado3
  }
}

/*Exercício de lógica de programação resolvido cujo objetivo é encontrar o sucessor e antecessor de um número qualquer. */

var assert = require('assert')

//
// Um objeto literal
//
var Calc = {
  // Método
  antecessor: function (num) {
    //
    // sua lógica
    //
  }, // reparou na vírgula ?

  // Método
  sucessor: function (num) {
    //
    // sua lógica
    //
  }
}

try {
  assert.equal(9, Calc.antecessor(10))
  assert.equal(11, Calc.sucessor(10))
} catch (e) {
  console.log(e)
}

//
// Um objeto literal
//
var Calc = {
  // Método
  antecessor: function (num) {
    //
    // sua lógica
    //
    return num - 1
  }, // reparou na vírgula ?

  // Método
  sucessor: function (num) {
    //
    // sua lógica
    //
    return num + 1
  }
}

//Exercício de lógica de programação para calcular o juros simples.

var assert = require('assert')

//
// Calcula o juros simples
//
var juros_simples = function () {
  return 0
}

// Este é o nosso teste.
// Sabemos que 16000 * 0.04 * 4 = 2560, logo
// a variável `juros` deve ter o valor igual a 2560.
try {
  assert.equal(2560, juros_simples(16000, 0.04, 4))
} catch (e) {
  console.log(e)
}

var assert = require('assert')

//
// Calcula o juros simples
//
var juros_simples = function (capital, taxa, n_periodos) {
  return capital * taxa * n_periodos
}

// Este é o nosso teste.
// Sabemos que 16000 * 0.04 * 4 = 2560, logo
// a variável `juros` deve ter o valor igual a 2560.
try {
  assert.equal(2560, juros_simples(16000, 0.04, 4))
} catch (e) {
  console.log(e)
}

//Escreva uma função para cada uma das quatro operações matemáticas simples.

var assert = require('assert')

//
// Funções...
//

var somar = function (num, add) {}

var subtrair = function (num, sub) {}

var multiplicar = function (num, mult) {}

var dividir = function (num, divisor) {}

//
// Testes
//
try {
  var num = 10

  assert.equal(12, somar(num, 2))
  assert.equal(8, subtrair(num, 2))
  assert.equal(20, multiplicar(num, 2))
  assert.equal(5, dividir(num, 2))
} catch (e) {
  console.log(e)
}

var assert = require('assert')

//
// Funções...
//

var somar = function (num, add) {
  return num + add
}

var subtrair = function (num, sub) {
  return num - sub
}

var multiplicar = function (num, mult) {
  return num * mult
}

var dividir = function (num, divisor) {
  return num / divisor
}

//
// Testes
//
try {
  var num = 10

  assert.equal(12, somar(num, 2))
  assert.equal(8, subtrair(num, 2))
  assert.equal(20, multiplicar(num, 2))
  assert.equal(5, dividir(num, 2))
} catch (e) {
  console.log(e)
}

//Exercício de lógica de programação resolvido para descobrir o custo final de um carro.

var assert = require('assert')

//
// Retorna o custo final da fabricação de um carro
//
var custoFinal = function () {
  return 0
}

//
// Seu teste
//
try {
  assert.equal(17300, custoFinal(10000))
} catch (e) {
  console.log(e)
}

var assert = require('assert')

//
// Retorna o custo final da fabricação de um carro
//
var custoFinal = function (custoFabrica) {
  var custoDistribuidor = custoFabrica * 0.28
  var custoImpostos = custoFabrica * 0.45

  return custoFabrica + custoDistribuidor + custoImpostos
}

//
// Seu teste
//
try {
  assert.equal(17300, custoFinal(10000))
} catch (e) {
  console.log(e)
}

//Exercício de lógica de programação para calcular o juros simples.

var assert = require('assert')

//
// Calcula o juros simples
//
var juros_simples = function () {
  return 0
}

// Este é o nosso teste.
// Sabemos que 16000 * 0.04 * 4 = 2560, logo
// a variável `juros` deve ter o valor igual a 2560.
try {
  assert.equal(2560, juros_simples(16000, 0.04, 4))
} catch (e) {
  console.log(e)
}

var assert = require('assert')

//
// Calcula o juros simples
//
var juros_simples = function (capital, taxa, n_periodos) {
  return capital * taxa * n_periodos
}

// Este é o nosso teste.
// Sabemos que 16000 * 0.04 * 4 = 2560, logo
// a variável `juros` deve ter o valor igual a 2560.
try {
  assert.equal(2560, juros_simples(16000, 0.04, 4))
} catch (e) {
  console.log(e)
}

//Exercício de lógica de programação para calcular o reajuste do salário

var assert = require('assert')

//
// Reajusta o salário
//
var reajustar_salario = function (salario, reajuste) {
  return 0
}

// Este é o nosso teste.
// Sabemos que 1000 * 0.15 = 150, logo
// a função `reajustar_salario` deve ter o valor igual a 150.
try {
  assert.equal(150, reajustar_salario(1000, 0.15))
} catch (e) {
  console.log(e)
}

var assert = require('assert')

//
// Reajusta o salário
//
var reajustar_salario = function (salario, reajuste) {
  return salario * reajuste
}

// Este é o nosso teste.
// Sabemos que 1000 * 0.15 = 150, logo
// a função `reajustar_salario` deve ter o valor igual a 150.
try {
  assert.equal(150, reajustar_salario(1000, 0.15))
} catch (e) {
  console.log(e)
}

//Exercício de lógica de programação para descobrir se um número é par ou ímpar.

var assert = require('assert')

//
// Função que descobre se um número é par ou ímpar
//
var ehPar = function (numero) {}

//
// Testes
//
try {
  assert.ok(ehPar(8))
  assert.ok(!ehPar(7))
  assert.ok(ehPar(0))
} catch (e) {
  console.log(e)
}

var assert = require('assert')

//
// Função que descobre se um número é par ou ímpar
//
var ehPar = function (numero) {
  if (numero % 2 == 0) {
    return true
  } else {
    return false
  }
}

//
// Testes
//
try {
  assert.ok(ehPar(8))
  assert.ok(!ehPar(7))
  assert.ok(ehPar(0))
} catch (e) {
  console.log(e)
}

//Exercício de lógica de programação para descobrir se um número é positivo ou negativo.

var assert = require('assert')

// Função que descobre se um número é positivo ou negativo
//
// retornará 1 caso positivo
// retornará 0 caso negativo
//
var ehPositivo = function (numero) {}

//
// Testes
//
try {
  assert.equal(1, ehPositivo(100))
  assert.equal(1, ehPositivo(0))
  assert.equal(0, ehPositivo(-100))
} catch (e) {
  console.log(e)
}

var assert = require('assert')

// Função que descobre se um número é positivo ou negativo
//
// retornará 1 caso positivo
// retornará 0 caso negativo
//
var ehPositivo = function (numero) {
  if (numero >= 0) {
    return 1
  } else {
    return 0
  }
}

//
// Testes
//
try {
  assert.equal(1, ehPositivo(100))
  assert.equal(1, ehPositivo(0))
  assert.equal(0, ehPositivo(-100))
} catch (e) {
  console.log(e)
}

//Exercício de lógica de programação para descobrir se valor é maior ou menor que 10.

var assert = require('assert')

// Função que descobre se um número é ou não maior que 10
//
// retornará 1 caso seja maior
// retornará 0 caso seja menor
//
var ehMaiorQue10 = function (valorQualquer) {}

//
// Testes
//
try {
  assert.equal(1, ehMaiorQue10(17))
  assert.equal(0, ehMaiorQue10(9))
} catch (e) {
  console.log(e)
}

var assert = require('assert')

//
// Função que descobre se um número é ou não maior que 10
//
// retornará 1 caso seja maior
// retornará 0 caso seja menor
//
var ehMaiorQue10 = function (valorQualquer) {
  if (valorQualquer > 10) {
    return 1
  } else {
    return 0
  }
}

//
// Testes
//
try {
  assert.equal(1, ehMaiorQue10(17))
  assert.equal(0, ehMaiorQue10(9))
} catch (e) {
  console.log(e)
}

//Exercício de lógica de programação para converter celsius em fahrenheit e vice versa.

var assert = require('assert')

//
// Converte fahrenheit em celsius
//
function toCelsius(fahrenheit) {
  // Aqui entra a lógica do programa.
}

//
// Converte celsius em fahrenheit
//
function toFahrenheit(celsius) {
  // Aqui entra a lógica do programa.
}

//
// Testes
//
try {
  var celsius = 100
  var fahrenheit = 212

  assert.equal(celsius, toCelsius(fahrenheit), 'msg')
  assert.equal(fahrenheit, toFahrenheit(celsius), 'msg')
} catch (e) {
  console.log(e)
}

var assert = require('assert')

//
// Converte fahrenheit em celsius
//
function toCelsius(fahrenheit) {
  return (5 * (fahrenheit - 32)) / 9
}

//
// Converte celsius em fahrenheit
//
function toFahrenheit(celsius) {
  return (celsius / 5) * 9 + 32
}

//
// Testes
//
try {
  var celsius = 100
  var fahrenheit = 212

  assert.equal(celsius, toCelsius(fahrenheit), 'msg')
  assert.equal(fahrenheit, toFahrenheit(celsius), 'msg')
} catch (e) {
  console.log(e)
}

//Exercício de lógica de programação - bhaskara.

var assert = require('assert')

// Retorna o valor de delta
var delta = function (a, b, c) {
  return 0
}

// Retorna o valor da primeira raiz
var raiz1 = function (a, b, c) {
  return 0
}

// Retorna o valor da segunda raiz
var raiz2 = function (a, b, c) {
  return 0
}

//
// Testes
//
try {
  var a = 1
  b = 0
  c = -16

  assert.equal(64, delta(a, b, c))
  assert.equal(4, raiz1(a, b, c))
  assert.equal(-4, raiz2(a, b, c))
} catch (e) {
  console.log(e)
}

var assert = require('assert')

// Retorna o valor de delta
var delta = function (a, b, c) {
  return b * b - 4 * a * c
}

// Retorna o valor da primeira raiz
var raiz1 = function (a, b, c) {
  return ((-b + Math.sqrt(delta(a, b, c))) / 2) * a
}

// Retorna o valor da segunda raiz
var raiz2 = function (a, b, c) {
  return ((-b - Math.sqrt(delta(a, b, c))) / 2) * a
}

//
// Testes
//
try {
  var a = 1
  b = 0
  c = -16

  assert.equal(64, delta(a, b, c))
  assert.equal(4, raiz1(a, b, c))
  assert.equal(-4, raiz2(a, b, c))
} catch (e) {
  console.log(e)
}

//Exercício de lógica de programação para descobrir se um número é primo.

var assert = require('assert')

// Função que descobre se o número é ou não primo.
//
// Retorna:
//   0 para false (composto)
//   1 para true  (primo)
//
var ehPrimo = function (num) {
  return 0
}

// Função que descobre se dois números possuem divisão exata.
//
// Retorna:
//   0 para false
//   1 para true
//
var ehDivisaoExata = function (dividendo, divisor) {
  return 0
}

//
// Testes
//
try {
  assert.equal(1, ehDivisaoExata(3, 1))
  assert.equal(1, ehDivisaoExata(3, 3))
  assert.equal(0, ehDivisaoExata(3, 2))

  assert.equal(1, ehPrimo(2))
  assert.equal(1, ehPrimo(3))
  assert.equal(1, ehPrimo(5))
  assert.equal(1, ehPrimo(7))
  assert.equal(1, ehPrimo(11))
  assert.equal(1, ehPrimo(13))

  assert.equal(0, ehPrimo(4))
  assert.equal(0, ehPrimo(6))
  assert.equal(0, ehPrimo(9))
  assert.equal(0, ehPrimo(10))
  assert.equal(0, ehPrimo(12))
} catch (e) {
  console.log(e)
}

var assert = require('assert')

// Função que descobre se o número é ou não primo.
//
// Retorna:
//   0 para false (composto)
//   1 para true  (primo)
//
var ehPrimo = function (num) {
  var i,
    quantDivisores = 0

  for (i = 1; i <= num; i++) {
    if (ehDivisaoExata(num, i)) {
      quantDivisores++
    }
  }

  if (quantDivisores == 2) {
    return 1
  } else {
    return 0
  }
}

// Função que descobre se dois números possuem divisão exata.
//
// Retorna:
//   0 para false
//   1 para true
//
var ehDivisaoExata = function (dividendo, divisor) {
  return dividendo % divisor == 0
}

//
// Testes
//
try {
  assert.equal(1, ehDivisaoExata(3, 1))
  assert.equal(1, ehDivisaoExata(3, 3))
  assert.equal(0, ehDivisaoExata(3, 2))

  assert.equal(1, ehPrimo(2))
  assert.equal(1, ehPrimo(3))
  assert.equal(1, ehPrimo(5))
  assert.equal(1, ehPrimo(7))
  assert.equal(1, ehPrimo(11))
  assert.equal(1, ehPrimo(13))

  assert.equal(0, ehPrimo(4))
  assert.equal(0, ehPrimo(6))
  assert.equal(0, ehPrimo(9))
  assert.equal(0, ehPrimo(10))
  assert.equal(0, ehPrimo(12))
} catch (e) {
  console.log(e)
}

//Exercício de lógica de programação para somar os dígitos de um número inteiro.

var assert = require('assert')

var somarDigitos = function (numero) {}

//
// Testes
//
try {
  assert.equal(8, somarDigitos(2015))
  assert.equal(15, somarDigitos(456))
} catch (e) {
  console.log(e)
}

var assert = require('assert')

var somarDigitos = function (numero) {
  var soma = 0

  while (numero != 0) {
    soma += numero % 10
    numero = parseInt(numero / 10) // <--- atenção
  }

  return soma
}

//
// Testes
//
try {
  assert.equal(8, somarDigitos(2015))
  assert.equal(15, somarDigitos(456))
} catch (e) {
  console.log(e)
}

//Exercício de lógica de programação para descobrir o MDC (máximo divisor comum).

var assert = require('assert')

//
// Função mdc
//
var mdc = function (num1, num2) {}

//
// Testes
//
try {
  assert.equal(3, mdc(24, 9))
  assert.equal(10, mdc(30, 20))
} catch (e) {
  console.log(e)
}

var assert = require('assert')

//
// Função mdc
//
var mdc = function (num1, num2) {
  var resto

  do {
    resto = num1 % num2

    num1 = num2
    num2 = resto
  } while (resto != 0)

  return num1
}

//
// Testes
//
try {
  assert.equal(3, mdc(24, 9))
  assert.equal(10, mdc(30, 20))
} catch (e) {
  console.log(e)
}

//Exercício de lógica de programação que ajuda a desenvolver os diversos tipos de laços.

var assert = require('assert')

var vetor = [1, 2, 3, 4, 5]

//
// Testes
//
try {
  assert.equal(1, vetor[0])
  assert.equal(2, vetor[1])
  assert.equal(3, vetor[2])
  assert.equal(4, vetor[3])
  assert.equal(5, vetor[4])
} catch (e) {
  console.log(e)
}

var assert = require('assert')

var i,
  vetor = []

for (i = 1; i < 6; i++) {
  vetor.push(i)
}

//
// Testes
//
try {
  assert.equal(1, vetor[0])
  assert.equal(2, vetor[1])
  assert.equal(3, vetor[2])
  assert.equal(4, vetor[3])
  assert.equal(5, vetor[4])
} catch (e) {
  console.log(e)
}

//Exercício de lógica de programação onde criaremos uma função para somar um vetor.

var assert = require('assert')

//
// Seu código
//
var somarLista = function (lista) {}

//
// Seu teste
//
try {
  lista = [10, 20, 30, 0]
  assert.equal(60, somarLista(lista))
} catch (e) {
  console.log(e)
}

var assert = require('assert')

//
// Seu código
//
var somarLista = function (lista) {
  var soma = 0
  for (chave in lista) {
    soma += lista[chave]
  }
  return soma
}

//
// Seu teste
//
try {
  lista = [10, 20, 30, 0]
  assert.equal(60, somarLista(lista))
} catch (e) {
  console.log(e)
}

var assert = require('assert')

//
// Seu código
//
var somarLista = function (lista) {
  var soma = 0
  for (var i = 0; i < lista.length; i++) {
    soma += lista[i]
  }
  return soma
}
//
// Seu teste
//
try {
  lista = [10, 20, 30, 0]
  assert.equal(60, somarLista(lista))
} catch (e) {
  console.log(e)
}

//Exercício de lógica de programação para copiar um vetor

var a = [1, 2]
console.log(a) // [ 1, 2 ]

var b = a
console.log(b) // [ 1, 2 ]

a.push(3)
console.log(a) // [ 1, 2, 3 ]
console.log(b) // [ 1, 2, 3 ]

var assert = require('assert')

//
// Seu código
//
var clonar = function (data) {
  var clone = []
  for (var i = 0; i < data.length; i++) {
    clone.push(data[i])
  }
  return clone
}
//
// Seu teste
//
try {
  assert.deepEqual([10, 20, 30, 0], clonar([10, 20, 30, 0]))
} catch (e) {
  console.log(e)
}

//Para comparar dois arrays precisamos usar deepEqual() ao invés de equal().

//Exercício de lógica de programação para descobrir o índice do maior e o menor valor do vetor.

var assert = require('assert')

var arr = [6, 10, 4, 21, 9],
  iMaior = 0,
  iMenor = 0,
  i = 0

//
// Sua lógica
//

//
// Seu teste
//
try {
  assert.equal(3, iMaior)
  assert.equal(2, iMenor)
} catch (e) {
  console.log(e)
}

var assert = require('assert')

var arr = [6, 10, 4, 21, 9],
  iMaior = 0,
  iMenor = 0,
  i = 0

//
// Sua lógica
//
for (i = 0; i < arr.length; i++) {
  if (arr[i] > arr[iMaior]) {
    iMaior = i
  }

  if (arr[i] < arr[iMenor]) {
    iMenor = i
  }
}

//
// Seu teste
//
try {
  assert.equal(3, iMaior)
  assert.equal(2, iMenor)
} catch (e) {
  console.log(e)
}

//Valores repetidos em vetor

var assert = require('assert')

var haDuplicados = function (arr) {
  // aqui entra a sua lógica
}

//
// Seu teste
//
try {
  assert.equal(true, haDuplicados([100, 200, 300, 300, 500]))
  assert.equal(false, haDuplicados([100, 200, 300, 400, 500]))
} catch (e) {
  console.log(e)
}

var assert = require('assert')

var haDuplicados = function (arr) {
  var i
  for (i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) != i) {
      return true
    }
  }
  return false
}

//
// Seu teste
//
try {
  assert.equal(true, haDuplicados([100, 200, 300, 300, 500]))
  assert.equal(false, haDuplicados([100, 200, 300, 400, 500]))
} catch (e) {
  console.log(e)
}

var haDuplicados = function (arr) {
  var i
  //
  // Vamos percorrer o array e...
  //
  for (i = 0; i < arr.length; i++) {
    // ..se o índice do valor atual "indexOf(arr[i])"
    // for diferente do índice corrente "i"
    // retornamos "true"
    if (arr.indexOf(arr[i]) != i) {
      return true
    }
  }
  // Se não houver repetido
  // retornamos false
  return false
}

//Contar vogais string exercicio

var assert = require('assert')

var contarVogais = function (palavra) {}

//
// Seu teste
//
try {
  assert.equal(6, contarVogais('abecedario'))
} catch (e) {
  console.log(e)
}

var assert = require('assert')

var contarVogais = function (palavra) {
  var totalVogal = 0
  var vogais = ['a', 'e', 'i', 'o', 'u']
  var i

  for (i = 0; i < palavra.length; i++) {
    if (vogais.indexOf(palavra[i]) != -1) {
      totalVogal++
    }
  }

  return totalVogal
}

//
// Seu teste
//
try {
  assert.equal(6, contarVogais('abecedario'))
} catch (e) {
  console.log(e)
}

//O dobro de um número qualquer

var assert = require('assert')

//
// Está é nossa classe
//
function Calc() {
  //
  // Este é o método da classe
  //
  this.dobro = function () {
    //
    // aqui entra a sua lógica
    //
  }
}

try {
  var calc = new Calc()
  assert.equal(10, calc.dobro(5))
} catch (e) {
  console.log(e)
}

var assert = require('assert')

//
// Está é nossa classe
//
function Calc() {
  //
  // Este é o método da classe
  //
  this.dobro = function (num) {
    //
    // aqui entra a sua lógica
    //
    return num * 2
  }
}

try {
  var calc = new Calc()
  assert.equal(10, calc.dobro(5))
} catch (e) {
  console.log(e)
}

//Área quadrada e área cúbica

var assert = require('assert')

//
// Classe
//
function Area() {
  //
  // Método
  //
  this.quadrada = function () {
    // sua lógica
  }

  //
  // Método
  //
  this.cubica = function () {
    // sua lógica
  }
}

try {
  var area = new Area()

  // testando a área quadrada
  area.lado1 = 3
  area.lado2 = 9
  assert.equal(27, area.quadrada())

  // testando a área cúbica
  area.lado1 = 3
  area.lado2 = 6
  area.lado3 = 2
  assert.equal(36, area.cubica())
} catch (e) {
  console.log(e)
}

function Area() {
  this.quadrada = function () {
    return this.lado1 * this.lado2
  }
  this.cubica = function () {
    return this.lado1 * this.lado2 * this.lado3
  }
}
