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

//Triângulo

var assert = require('assert')

function Triangulo(a, b, c) {
  this.a = a
  this.b = b
  this.c = c
  this.validarForma = function () {
    //
    // Aqui entra a lógica de seu programa!
    //
  }
}

try {
  // Caso positivo
  var triangulo = new Triangulo(3, 4, 5)
  assert.equal(true, triangulo.validarForma())

  // Caso negativo
  var triangulo = new Triangulo(1, 4, 5)
  assert.equal(false, triangulo.validarForma())
} catch (e) {
  console.log(e)
}

this.validarForma = function () {
  //
  // Aqui entra a lógica de seu programa!
  //
  if (this.a < this.b + this.c) {
    if (this.b < this.a + this.c) {
      if (this.c < this.a + this.b) {
        return true
      }
    }
  }
  return false
}

//Votos em relação ao total de eleitores

var assert = require('assert')

//
// Classe Votos
//
function Votos(total_eleitores) {
  ;(this.total_eleitores = total_eleitores),
    (this.validos = 0),
    (this.brancos = 0),
    (this.nulos = 0)

  this.percValidos = function () {
    return 0
  }

  this.percBrancos = function () {
    return 0
  }

  this.percNulos = function () {
    return 0
  }
}

//
// Testes
//
try {
  var votos = new Votos(1000)
  votos.validos = 800
  votos.brancos = 150
  votos.nulos = 50

  assert.equal(0.8, votos.percValidos())
  assert.equal(0.15, votos.percBrancos())
  assert.equal(0.05, votos.percNulos())
} catch (e) {
  console.log(e)
}

//
// Classe Votos
//
function Votos(total_eleitores) {
  ;(this.total_eleitores = total_eleitores),
    (this.validos = 0),
    (this.brancos = 0),
    (this.nulos = 0)

  this.percValidos = function () {
    return this.validos / this.total_eleitores
  }

  this.percBrancos = function () {
    return this.brancos / this.total_eleitores
  }

  this.percNulos = function () {
    return this.nulos / this.total_eleitores
  }
}

//Condicional - switch

switch (action) {
  case 'draw':
    drawit()
    break
  case 'eat':
    eatit()
    break
  default:
    donothing()
}

//Fibonacci No Javascript Fn = (Fn - 1) + (Fn - 2)

const fibonacci = num => {
  if (num <= 1) return 1

  return fibonacci(num - 1) + fibonacci(num - 2)
}

function fb() {
  const fibonacci = (num, memo) => {
    // Recebe os números anteriores
    // ou um novo objeto, se for a primeira vez
    memo = memo || {}

    // Verifica se já existe o
    // valor calculado anteriormente
    if (memo[num]) return memo[num]
    if (num <= 1) return 1

    // Caso realmente não tenha,
    // executa normalmente o código
    return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo))
  }
}

/* var http = require('http'),
	localAddress = '127.0.0.1',
	listenPort = 2015;
	
function getVerseOfTheDay(callback, error) {
	http.get('http://labs.bible.org/api/?passage=votd', function(response) {
		var verse = '';
		
		response.on('data', function(d) {
            verse += d;
        });
		
		response.on('end', function () {
			callback(verse);
	  	});
	}).on('error', function(e) {
		error(e);
	});
}

//Definição de um servidor
http.createServer(function (req, res) {
	
	//Verso do Dia ;)
	getVerseOfTheDay(function(verse){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(verse);
	}, function(e){
		res.writeHead(500, {'Content-Type': 'text/html'});
		res.end(e);
	});
}).listen(listenPort, localAddress);


console.log('Servidor rodando em %s na %s', localAddress, listenPort); */

var nome
var email
var num = 0

function escrever() {
  info = 'Usuário número ' + ++num + '\n'
  info += 'Nome: ' + nome + '\n'
  info += 'E-mail: ' + email + '\n\n'
}

function escrever(quadro) {
  info = 'Usuário número ' + ++num + '\n'
  info += 'Nome: ' + nome + '\n'
  info += 'E-mail: ' + email + '\n\n'
  quadro.value += info
}

//Implemente a função ao lado, que retorna as strings sim ou não, indicando se os três valores passados são iguais.
//Exemplo: deve retornar sim se forem passados 100, 100 e 100.
//Exemplo: deve retornar não se passados 100, 100 e 50.

function driven(number1, number2, number3) {
if (number1 && number2 || number2 && number3 || number3 && number1){
return "sim"
} else {
return "não"
}
}

//É Palíndromo

function ehPalindromo(string) {
  var reversed = string.split('').reverse().join('');
  if (string === reversed) {
    return "sim";

  } else {

    return "não";

  }
}

/* Média Ponderada
Implemente a função ao lado que recebe como parâmetros 4 números (2 valores e 2 pesos) e retorna o valor da média ponderada entre os valores.

Para se calcular a média ponderada entre dois números, por exemplo 5 e 10, com os respectivos pesos de ponderação 2 e 3 devemos: multiplicar os números pelos pesos, ou seja, calcular 5*2=10 e 10*3=30; depois devemos somar as quantidades obtidas, ou seja 10+30=40; por fim, dividimos o número obtido pela soma dos pesos, ou seja, a soma dos pesos aqui vale 2+3=5 logo 40/5=8. O último valor obtido é a média ponderada que, nesse caso, vale 8.

Exemplo: se passarmos como argumento valor1=5, peso1=2, nota2=10, peso2=3, a função deve retornar o número 8. */

function mediaPonderada (nota1, peso1, nota2, peso2) {
  // escreva seu código aqui :)
  	let somaPeso1 = nota1 * peso1 ;
  	let somaPeso2 = nota2 * peso2 ;
  	let somaTotalPeso = peso1 + peso2 ;
  	let resultadoFinal = (somaPeso1 + somaPeso2) / somaTotalPeso ;
  	return resultadoFinal ;
  
}

/* **Par Ou Ímpar**
Implemente a função ao lado, que retorna Par ou Ímpar dependendo se o número passado é par ou ímpar.

Exemplo: deve retornar Ímpar quando passado numero=5 */

function parOuImpar (numero) {
if (numero%2 == 0)
return "par";
else
return "impar";
}

/* Decidir Compra
Implemente a função ao lado que recebe como parâmetros 2 números, o valor da parcela e a quantidade de parcelas, e retorna Vou comprar ou Não vou comprar de acordo com a seguinte regra:

- Valores acima de 1000 e apenas no caso em que se tem 10 ou mais parcelas sempre se compra
- Valores acima de 500 e com 5 ou mais parcelas, também, sempre se compra
- Valores menores ou iguais a 500 sempre se compra
- Qualquer outra situação, nunca se compra

Exemplo: deve retornar "Vou comprar" quando passados preco=1200 e parcelas=10

Exemplo: deve retornar "Vou comprar" quando passados preco=700 e parcelas=6

Exemplo: deve retornar "Vou comprar" quando passados preco=400 e parcelas=3

Exemplo: deve retornar "Não vou comprar" quando passados preco=1200 e parcelas=6

condição 1: Valores acima de 1000 e apenas no caso em que se tem 10 ou mais parcelas sempre se compra

(> 1000 && >= 10)

- Valores acima de 500 e com 5 ou mais parcelas, também, sempre se compra
(parcela > 500 && quantidade >= 5)
- Valores menores ou iguais a 500 sempre se compra
(parcela <= 500) */

function decidirCompra (preco, parcelas) {
  if (preco > 1000 && parcelas >= 10) {
    return "Vou comprar"; 
 } if ((preco > 500 && preco < 1000) && parcelas >= 5) {
 return "Vou comprar"; 
  }  if (preco <= 500 ) {
      return "Vou comprar"; 
 } { 
  return "Não vou comprar";


}
}

/* 7DaysOfCode - Lógica JS 1/7: Operações Booleanas */

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}


/* 7DaysOfCode -  Lógica JS 2/7: 👩🏽‍💻 Variáveis */

const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const msg = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"!`;

alert(msg);

/* 7DaysOfCode -  Lógica JS 2/7: 👩🏽‍💻 Variáveis BONUS */

const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const msg = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"!`;

alert(msg);

const gosta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 - SIM ou 2 - NÃO`);
if (gosta == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
if (gosta == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}


#7DaysOfCode - Lógica JS 3/7: Fluxo de decisão


const area = prompt("Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");
let linguagem = "";
if (area === "Front-End"){
    linguagem = prompt("Você quer aprender React ou Vue?");
}
else if (area === "Back-End"){
    linguagem = prompt("Você quer aprender C# ou Java?");
}
else {
    alert("Você não inseriu uma área válida!");
}

const especialidadeOuFullstack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
if (especialidadeOuFullstack == 1){
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
}
else if (especialidadeOuFullstack == 2){
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}
else {
    alert("Você não inseriu um valor válido!");
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}


/* 4  4/7: 👩🏽‍💻 Mais loops e randomização */

const numeroAdivinhacao = 7;
let chute = "";
let acertou = false;

for(let contador = 0; contador < 3; contador++){    
    chute = prompt("Tente adivinhar o número de 0 a 10:");
    if(chute == numeroAdivinhacao){
        alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
        acertou = true;
        break;
    }
    alert("Errado!");
}
if(!acertou){
    alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
}

/*   4/7: 👩🏽‍💻 Mais loops e randomização (com número randômico)*/

const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let chute = "";
let acertou = false;

for(let contador = 0; contador < 3; contador++){    
    chute = prompt("Tente adivinhar o número de 0 a 10:");
    if(chute == numeroAdivinhacao){
        alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
        acertou = true;
        break;
    }
    alert("Errado!");
}
if(!acertou){
    alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
}


/*Lógica JS 5/7: Arrays e coleções*/

let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";

let adicionarMais = "sim";  // valor inicial como "sim", porque a primeira vez sempre vai entrar no while
while(adicionarMais != "não"){
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    while (adicionarMais != "sim" && adicionarMais != "não") {  //enquanto o texto lido for diferente de "sim" e de "não", exibir que não foi reconhecido e perguntar novamente
	alert(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }
	
    if (adicionarMais === "não"){  //se o texto lido for "não", sair do while
        break;
    }
	
    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    if(categoria === 'frutas'){
        frutas.push(comida);
    } else if (categoria === 'laticínios'){
        laticinios.push(comida);
    } else if (categoria === 'doces'){
        doces.push(comida);
    } else if (categoria === 'congelados'){
        congelados.push(comida);
    } else {
        alert("Essa categoria não foi pré-definida.")
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);


/* Lógica JS 6/7: 👩🏽‍💻 Remoção de Arrays */


let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";
let remover = "";

let adicionarMais = "sim";  // valor inicial como "sim", porque a primeira vez sempre vai entrar no while
while(adicionarMais != "não"){
    if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    } else {
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim', 'não' ou 'remover'.");
    }
	
    while (adicionarMais != "sim" && adicionarMais != "não" && adicionarMais != "remover") {  //enquanto o texto lido for diferente de "sim", "não" e "remover", exibir que não foi reconhecido e perguntar novamente
	alert(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }
	
    if (adicionarMais === "não"){  //se o texto lido for "não", sair do while
	break;
    }
	
    if(adicionarMais === "sim"){
        comida = prompt("Qual comida você deseja inserir?");
        categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
        if(categoria === 'frutas'){
            frutas.push(comida);
        } else if (categoria === 'laticínios'){
            laticinios.push(comida);
        } else if (categoria === 'doces'){
            doces.push(comida);
        } else if (categoria === 'congelados'){
            congelados.push(comida);
        } else {
            alert("Essa categoria não foi pré-definida.")
        }
    } else if(adicionarMais === "remover"){
	if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){  //se a lista estiver vazia (tratamento de bug, caso a pessoa digite "remover" mesmo quando forem exibidas apenas as opções "sim" e "não"
		alert(`A lista está vazia!`);
	} else {  //se a lista não estiver vazia
		remover = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`);
		if(frutas.indexOf(remover) != -1){
			frutas.splice(frutas.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if(laticinios.indexOf(remover) != -1){
			laticinios.splice(laticinios.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (doces.indexOf(remover) != -1){
			doces.splice(doces.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (congelados.indexOf(remover) != -1){
			congelados.splice(congelados.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else {
			alert(`Não foi possível encontrar o item dentro da lista!`)
		}
	}
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);


/*  Lógica JS 7/7: Funções em Javascript  */

function soma(valor1, valor2){
    return Number(valor1) + Number(valor2);
}

function subtracao(valor1, valor2){
    return Number(valor1) - Number(valor2);
}

function multiplicacao(valor1, valor2){
    return Number(valor1) * Number(valor2);
}

function divisao(valor1, valor2){
    return Number(valor1) / Number(valor2);
}

let valor1;
let valor2;
let operacao = "";

do {  //usando o 'do...while', já que a primeira vez sempre vamos entrar
	
    operacao = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);	
    while (operacao != "soma" && operacao != "subtração" && operacao != "multiplicação" && operacao != "divisão" && operacao != "sair") {  //enquanto o texto lido for diferente de "soma", "subtração", "multiplicação", "divisão" e "sair", exibir que não foi reconhecido e perguntar novamente
	alert(`Operação não reconhecida!`);
	operacao = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);
    }
	
    if (operacao === "sair"){  //se o texto lido for "sair", sair do loop e da calculadora
		break;	
    }
	
    valor1 = prompt(`Insira o primeiro valor:`);
    valor2 = prompt(`Insira o segundo valor:`);
    switch (operacao) {
        case 'soma':
          alert(`O resultado da ${operacao} é ${soma(valor1, valor2)}`);
          break;
        case 'subtração':
            alert(`O resultado da ${operacao} é ${subtracao(valor1, valor2)}`);
            break;
        case 'multiplicação':
            alert(`O resultado da ${operacao} é ${multiplicacao(valor1, valor2)}`);
            break;
        case 'divisão':
            alert(`O resultado da ${operacao} é ${divisao(valor1, valor2)}`);
            break;
    }
} while(operacao === "soma" || operacao === "subtração" || operacao === "multiplicação" || operacao === "divisão")
alert(`Até a próxima!`);

/* switch case */ 

let signo = 'Leão';

switch (signo) {
  case 'Áries':
    console.log("De 21 março a 20 abril");
    break;
	case 'Touro':
    console.log("de 21 abril a 20 maio");
    break;
  case 'Gêmeos':
    console.log("de 21 maio a 20 junho");
    break;
  case 'Câncer':
    console.log("de 21 junho a 22 julho");
    break;
  case 'Leão':
    console.log("de 23 julho a 22 agosto");
    break;
  case 'Virgem':
    console.log("de 23 agosto a 22 setembro");
    break;
  default:
  	console.log("Signo não registrado");
    break;
}


// Valor impresso no console: "Usuário logado"
autenticado = true;

switch (autenticado) {
    case true:
        console.log("Usuário logado");
        break;
    case false:
        console.log("Usuário não autenticado");
}

// Valor impresso no console: "Bem-vinda!"
sexo = "feminino";

switch (sexo) {
    case "feminino":
        console.log("Bem-vinda!");
        break;
    case false:
        console.log("Bem-vindo!");
}

// Valor impresso no console: "Outono"
mes = "Maio";

switch (mes) {
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão!");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono!");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno!");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera!");
}

// Valor impresso no console: "Abril"
mes = 4;
nomeMes = "";

switch (mes) {
    case 1:
        nomeMes = "Janeiro";
        break;
    case 2:
        nomeMes = "Fevereiro";
        break;
    case 3:
        nomeMes = "Março";
        break;
    case 4:
        nomeMes = "Abril";
        break;
    case 5:
        nomeMes = "Maio";
        break;
    case 6:
        nomeMes = "Junho";
        break;
    case 7:
        nomeMes = "Julho";
        break;
    case 8:
        nomeMes = "Agosto";
        break;
    case 9:
        nomeMes = "Setembro";
        break;
    case 10:
        nomeMes = "Outubro";
        break;
    case 11:
        nomeMes = "Novembro";
        break;
    case 12:
        nomeMes = "Dezembro";
        break;
    default:
        nomeMes = "Mês inexistente";
}
console.log(nomeMes);

// Usuário redirecionado para "homejovem.html"
tipoUsuario = "Adolescente";

switch (tipoUsuario) {
    case "Adolescente":
        window.location.href = "homejovem.html";
        break;
    case "Adulto":
        window.location.href = "home.html";
}

// Valor atribuído à variável salario: 2300
cargo = "gerente";
salario = 2000;

switch (cargo) {
    case "gerente":
        salario *= 1.15;
        break;
    case "supervisor":
        salario *= 1.10;
        break;
    default:
        salario *= 1.05;
}


/* while e do while */
//Podemos utilizar a estrutura de repetição while caso seja necessário repetir um bloco de comandos por N vezes.

let i = 0;
while(i < 11){
    console.log('5 x ' + i + ' = ' + 5*i);
    i++;
}

/* do-while tem o mesmo conceito que o while com uma única diferença, a condição é verificada após os comandos do bloco serem executados, 
ou seja, mesmo que a condição seja falsa, é garantia que o bloco será executado ao menos uma vez. */


let contador = 0;

do{
	console.log("O contador vale: " + contador);
	contador++;
}while(contador == 1)
	

/* for */ 

for(let i = 0; i < 11; i++){
    console.log("5 x " + i + " = " + 5*i);
}

//array meotodos

/*.forEach() Caso você precise executar algum código para cada elemento do Array, executar um forEach é muito mais simples do que criar um for ou while, 
já que não precisamos declarar variáveis de controle.*/

let myHTML = '<ul>'
const numbersList = [1, 2, 3, 4, 5];

numbersList.forEach((number, index, array) => {
	myHTML += `<li>${number}</li>`;
});
myHTML += '</ul>';



let myHTML = '<ul>'
const numbersList = [1, 2, 3, 4, 5];

numbersList.forEach(number => myHTML += `<li>${number}</li>` );
myHTML += '</ul>';


//.map()
/* Nós utilizamos o .map() quando queremos fazer alguma modificação nos elementos de um Array.*/


const usersList = [
	{name: 'João', credit: 500},
	{name: 'Maria', credit: 800}
];

const newUsersList = usersList.map((user, index, array) => {
	user.credit += 100;
	return user;
})

[
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900}
];

const newUsersList = usersList.map((user, index, array) => {
	return user.name;
})
/* Resultado:
[ 'João', 'Maria' ]
*/

[1, 2, 3, 4, 5].map(number => number * 2);
/* Resultado:
[2, 4, 6, 8, 10]
*/

// .filter()
/* Como o próprio nome indica, serve para filtrarmos os elementos de um Array. Passamos para ele uma função. Se essa função retornar true,
o elemento será inserido no novo Array que será criado. Se a função retornar false, o elemento será ignorado */

const usersList = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const newUsersList = usersList.filter((user, index, array) => user.credit > 500);
/* Resultado:
[
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900}
]
*/


//.find()
/* Usamos esse método quando queremos encontrar algum elemento dentro no Array. Para isso, passamos uma função que irá retornar true 
ou false. O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos. Usamos esse método quando queremos 
encontrar algum elemento dentro no Array. Para isso, passamos uma função que irá retornar true ou false. O primeiro true que for retornado 
irá finalizar a função e retornar o elemento em que estamos.*/

const usersList = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const carlos = usersList.find((user, index, array) => user.name === 'Carlos');
/* Resultado:
	{name: 'Carlos', credit: 300}
*/


/* .findIndex()
Faz o mesmo que o .find(), mas retorna o índice do elemento encontrado ao invés de retornar o próprio elemento. */

const usersList = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const carlos = usersList.findIndex((user, index, array) => user.name === 'Carlos');
/* Resultado:
	2
*/


/* .every()
Serve para testarmos se todos os elementos do Array passam em uma condição.

Passamos uma função que retorna true ou false. Se todos os retornos forem true
significa que todos os elementos passaram no teste, e a função retornará true. */


const usersList = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const result1 = usersList.every((user, index, array) => user.credit < 1000);
const result2 = usersList.every(user => user.credit < 500);


//.some()

/* O .some() faz algo parecido com o .every(). A diferença é que o .every() só retorna true se todos os elementos passarem no teste. 
O .some() retorna true se pelo menos um elemento do Array passar no teste. */

const usersList = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const result = usersList.some((user, index, array) => user.credit === 300);

// .sort()

/* O .sort() serve para ordenar os elementos de Arrays. Muitas pessoas utilizam este método de maneira errada,
apenas executando array.sort(). Isso pode causar retornos inesperados, pois os elementos serão convertidos em texto.

O correto é passar uma função que compare dois elementos. Assim, podemos ordenar um Array com qualquer tipo de objeto, 
ordenando por qualquer propriedade. */

const numbersList = [4, 5, 7, 8, 2];
const orderedList = numbersList.sort((a, b) => {
	if(a < b){
	   return -1;
	} else if(a > b){
		return 1;
	}
	return 0;
})






// .reduce()

/* Esta função serve para reduzirmos o conteúdo de um Array para apenas um elemento.
O exemplo mais clássico é somar todos os valores de um Array. */

const numbersList = [1, 2, 3];
const total = numbersList.reduce((total, currentElement) => total + currentElement)
/* Resultado:
	6
*/


/*documentElement	Captura o elemento raiz <html> de um documento HTML.
getElementById	Busca um elemento da página Web com o uso do atributo id do elemento.
createElement	Cria um nodo elemento na página.
createAttribute	Cria um nodo atributo na página.
createTextNode	Cria um nodo texto na página.
getElementsByTagName	Retorna um array dos elementos com o mesmo nome.
appendChild	Insere um novo elemento filho.
removeChild	Remove um elemento filho.
parentNode	Retorna o nodo pai de um nodo. */


if (algumNodo.nodeType == Node.ELEMENT_NODE) {
  //código aqui
} else {
  if (algumNodo.nodeType == Node.TEXT_NODE) {
    //código aqui
  }
}

  function testandoArvoreDOM() {
        var element = document.documentElement.lastChild;
        alert("Eu sou o nodo" + element.nodeName);

        var outroElemento = document.getElementsByTagName('h1')[0];
        alert("Eu sou o nodo " + outroElemento.nodeValue);

        var filho = outroElemento.firstChild;
        alert("Eu sou o nodo " + filho.nodeValue);
      }


// Criar o elemento <li> e o nó de texto.
// Após isso, anexar o nó de texto ao elemento
var elem  = document.createElement("li");
var texto = document.createTextNode("mais um item");
elem.appendChild(texto);

// Recuperar o elemento lista e
// anexar o elemento <li> ao final de nossa lista <ul>
var lista = document.getElementsByTagName('ul')[0];
lista.appendChild(elem);


var titulo = document.createElement('h1');
var texto  = document.createTextNode("Um título qualquer");
titulo.appendChild(texto);

// Buscar elemento pai
var elemento_pai = document.body;

// Criar elemento
var titulo = document.createElement('h1');

// Criar o nó de texto
var texto = document.createTextNode("Um título qualquer");

// Anexar o nó de texto ao elemento h1
titulo.appendChild(texto);

// Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
elemento_pai.appendChild(titulo);

<body>
    <h1>Um título qualquer</h1>
</body>

var titulo = document.createElement('h1');
titulo.textContent = "Um título qualquer"


// Buscar elemento pai
var elemento_pai = document.body;

// Criar elemento
var titulo = document.createElement('h1');

// Criando o nó de texto de outra forma
titulo.textContent = "Um título qualquer"

// Inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
elemento_pai.appendChild(titulo);

<ul>
    <li>primeiro item</li>
    <li>segundo item</li>
    <li>quarto item</li>
</ul>

//
// Criando o terceiro elemento
//
var novoElem  = document.createElement('li');
var texto     = document.createTextNode('terceiro item');
novoElem.appendChild(texto);

//
// Recuperando a lista
//
var lista = document.getElementsByTagName('ul')[0];

//
// Recuperando os itens
//
var itens = document.getElementsByTagName('li');

//
// Inserindo com insertBefore()
//
lista.insertBefore(novoElem, itens[0]);


//resumo
document.createElement("nome-da-tag") para criar um elemento
document.createTextNode("algum texto") para criar um nó de texto
elemento_pai.appendChild(elemento_filho) para inserir um elemento na última posição
elemento_pai.insertBefore(elemento_filho, elemento_anterior) pra inserir um elemento em posição específica
elemento_pai.removeChild(elemento_filho) para remover um elemento

/* HTML DOM Document 

O objeto de documento HTML DOM é o proprietário de todos os outros objetos em sua página web, se você deseja acessar qualquer elemento HTML em uma página, comece acessando o objeto document. 

Vejamos alguns exemplos de como utilizar o objeto document para acessar e manipular HTML: 

– Método document.getElementById(id) : Encontra um elemento pelo id 

– Método document.getElementByTagName(name) : Encontra elementos pela tag HTML 

– Método document.getElementByClassName(name) : Encontra elementos pela classe html 

Após acessar o elemento, temos a opção de alterá-lo da seguinte forma: 

Propriedade element.innerHTML=”novo conteúdo” : Altera o conteúdo interno de um elemento HTML 
Propriedade element.attribute=”novo valor” : Altera o valor do atributo de um elemento HTML 
Propriedade element.style.property=”novo estilo” : Altera o estilo de um elemento HTML 
Método element.setAttribute(attribute, value) : Altera o valor do atributo de um elemento HTML */


/*
Método document.getElementById(id) : Encontra um elemento pelo id 

– Método document.getElementByTagName(name) : Encontra elementos pela tag HTML 

– Método document.getElementByClassName(name) : Encontra elementos pela classe html 

Após acessar o elemento, temos a opção de alterá-lo da seguinte forma: 

Propriedade element.innerHTML=”novo conteúdo” : Altera o conteúdo interno de um elemento HTML 
Propriedade element.attribute=”novo valor” : Altera o valor do atributo de um elemento HTML 
Propriedade element.style.property=”novo estilo” : Altera o estilo de um elemento HTML 
Método element.setAttribute(attribute, value) : Altera o valor do atributo de um elemento HTML 
Também podemos adicionar e deletar elementos da página da seguinte forma: 

Método document.createElement(element) : Cria um elemento HTML 
Método document.removeChild(element) : Remove um elemento HTML 
Método document.appendChild(element) : Adiciona um elemento HTML 
Método document.replaceChild(new, old) : Substitui um elemento HTML 
Médoto document.write(text) : Escreve no fluxo de saída HTML 
*/

/*
O navegador dispara muitos eventos. Uma lista completa está disponível no MDN, mas aqui estão alguns dos tipos e nomes de eventos mais comuns:
eventos de mouse (MouseEvent): mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel, mouseout, contextmenu
eventos de toque (TouchEvent): touchstart, touchmove, touchend, touchcancel
eventos de teclado (KeyboardEvent): keydown, keypress, keyup
eventos de formulário: focus, blur, change, submit
eventos de janela: scroll, resize, hashchange, load, unload
*/

/*
onBlur	remove o foco do elemento
onChange	muda o valor do elemento
onClick	o elemento é clicado pelo usuário
onFocus	o elemento é focado
onKeyPress	o usuário pressiona uma tecla sobre o elemento
onLoad	carrega o elemento por completo
onMouseOver	define ação quando o usuário passa o mouse sobre o elemento
onMouseOut	define ação quando o usuário retira o mouse sobre o elemento
onSubmit	define ação ao enviar um formulário
*/

/*

Usando evento externo
Para chamar um evento externo iremos precisar de um manipulador de eventos, nesse caso vamos usar o event listener que adiciona ou remove um evento sobre qualquer elemento. O Event Listener disponibiliza duas funções principais, são elas:

addEvent - Adiciona uma função que será disparada quando ocorrer determinado evento no objeto.
removeEvent - Remove um listener previamente adicionado em um objeto e retorna true em caso de sucesso.
Agora vamos ver um exemplo de como utilizar o Event Listener.

*/

<script type="text/javascript" src="/path/to/event-listener.js"></script>

<form>
	<input type="text" name="a" />
	<input type="submit" />
</form>

<script type="text/javascript">
var f = document.forms[0];
addEvent(f, "submit", function( e ) { alert(f.a.value);return false; });
addEvent(f.a, "keyup", function( e ) { f.a.value=f.a.value.toUpperCase(); });
</script>

/*
onLoad
O evento onload pode ser usado quando queremos que algo seja carregado junto com o carregamento da página.
*/

<!DOCTYPE html>
<html>
<head>
<title>Usando eventos no Javascript</title>
</head>
<body onload="checkCookies()">

<script>
function checkCookies()
{
if (navigator.cookieEnabled==true)
	{
	alert("Cookies são permitidos")
	}
else
	{
	alert("Cookies não são permitidos")
	}
}
</script>

<p>Irá aparecer um alert dizendo se os cookies estão ou não liberados em seu navegador</p>
</body>
</html>


/*
onChange
O evento onChange é utilizado para que seja realizada determinada ação após alguma mudança. No exemplo abaixo iremos fazer essa mudança acontecer ao clicarmos fora do input text.
*/

<!DOCTYPE html>
<html>
<head>
<title>Usando eventos no Javascript</title>
<script>
function myFunction()
{
var x=document.getElementById("fname");
x.value=x.value.toUpperCase();
}
</script>
</head>
<body>

Insira seu Nome: <input type="text" id="fname" onchange="myFunction()">
<p>
Ao clicarmos fora do input text o texto escrito nele ficará todo em caixa alta.</p>

</body>
</html>

/*

onMouseOver e onMouseOut
Esses eventos são responsáveis pelas ações que o usuário faz com o mouse, passando o mouse no elemento e tirando o mouse do elemento, respectivamente.
*/


<!DOCTYPE html>
<html>
<head>
<title>Usando eventos no Javascript</title>
</head>
<body>

<div onmouseover="mOver(this)" onmouseout="mOut(this)"
>Passe o mouse em mim</div>

<script>
function mOver(obj)
{
obj.innerHTML="Obrigado"
}

function mOut(obj)
{
obj.innerHTML="Passe o mouse em mim"
}
</script>

</body>
</html>

/*
onmousedown, onmouseup e onclick
Nesse exemplo iremos ver como trabalhar com o clique, o segurar o clique e o soltar do clique.
*/

<!DOCTYPE html>
<html>
<head>
<title>Usando eventos no Javascript</title>
</head>
<body>

<div onmousedown="mDown(this)" onmouseup="mUp(this)" 
>Clique aqui</div>

<script>
function mDown(obj)
{
obj.style.backgroundColor="#1ec5e5";
obj.innerHTML="Solte o clique"
}

function mUp(obj)
{
obj.style.backgroundColor="#D94A38";
obj.innerHTML="Obrigado"
}
</script>

</body>
</html>

/* método setTimeout() define um cronômetro que executa uma
função ou trecho de código especificado assim que expira.
 O setTimeout, por padrão, executa o código somente uma vez */


function horarioAtual() {
  let dataAtual = new Date(); //variável recebe a data atual
  let hora = dataAtual.toLocaleTimeString(); // variável recebe a data atual convertida para hora atual
  console.log(hora); //hora será mostrada no console
}
setTimeout(horarioAtual, 3000); //método executa a função após três segundos

function msgEncerramento() {
alert('Seu tempo acabou!! Tente novamente!!');
}
setTimeout(msgEncerramento, 3000)

setTimeout(() => {
  console.log('1. HTML')

  setTimeout(() => {
    console.log('2. CSS')

    setTimeout(() => {
      console.log('3. JavaScript')

      setTimeout(() => {
        console.log('4. React')

        setTimeout(() => {
          console.log('5. TypeScript')

          setTimeout(() => {
            console.log('6. Next JS')
          }, 800)
        }, 800)
      }, 800)
    }, 800)
  }, 800)
}, 0)


/*
Uso do setTimeout() para mostrar a hora atual de 
um relógio digital no navegador
*/
function horaAtual() {

    setTimeout(function(){

    let hora = new Date().toLocaleTimeString();
    document.getElementById("rel").innerHTML = hora;

  }, 1000)
}

/*O método setInterval precisa de pelo menos dois parâmetros para funcionar. O primeiro é a função que será executada, enquanto o segundo é o tempo em milissegundos em que a função deve se repetir.*/
function horarioAtual() {

  let hora = new Date().toLocaleTimeString();

  console.log(hora);

}

setInterval(horarioAtual, 1000);
let contador = 0;

function somaContador(valor)
{
    contador = contador + valor;
    console.log(contador);
}

setInterval(somaContador, 1000, 1)
let contador = 0;

/*
método setInterval precisa de pelo menos
 dois parâmetros para funcionar. O primeiro 
é a função que será executada, enquanto o 
segundo é o tempo em milissegundos em que a função deve se repetir.
*/


// strings
console.log('Hello, world')

const email = 'renato_anjo.s@hotmail.com'

console.log(email)

// concatenacao de strings

const firstName = 'Renato'
const lastName = 'Anjo'
const fullName = firstName + ' '  +lastName

// acessando caracteres 
console.log(fullName[2])

// comprimento de uma string 
console.log(fullName.length)

// metodos de string
console.log(fullName.toUpperCasa())

const result = full name.toLowerCase()

console.log(result, fullName)

const index = email.indexOf('@')

console.log(index)

let s = 'Hello, world'; // Comece com algum texto.

// Obtendo porções de uma string
s.substring(1,4) // => 'ell': o 2º, 3º e 4º caracteres.
s.slice(1,4) // => 'ell': mesma coisa
s.slice(-3) // => 'rld': últimos 3 caracteres
s.split(', ') // => ['Hello', 'world']: dividir na string delimitadora

// Procurando uma string
s.indexOf('l') // => 2: posição da primeira letra l
s.indexOf('l', 3) // => 3: posição do primeiro 'l' em ou após 3
s.indexOf('zz') // => -1: s não inclui a substring 'zz'
s.lastIndexOf('l') // => 10: posição da última letra l

// Funções de pesquisa booleana no ES6 e posterior
s.startsWith('Hell') // => true: A string começa com este?
s.endsWith('!') // => false: s não termina com isso?
s.includes('or') // => true: s inclui substring 'or'

// Criação de versões modificadas de uma string
s.replace('llo', 'ya') // => 'Heya, world'
s.toLowerCase() // => 'hello, world'
s.toUpperCase() // => 'HELLO, WORLD'
s.normalize() // Normalização Unicode NFC: ES6
s.normalize('NFD') // Normalização NFD. Também 'NFKC', 'NFKD'

// Inspecionando caracteres individuais (16 bits) de uma string
s.charAt(0) // => 'H': o primeiro caractere
s.charAt(s.length-1) // => 'd': o último character
s.charCodeAt(0) // => 72: Número de 16 bits na posição especificada
s.codePointAt(0) // => 72: ES6, funciona para pontos de código > 16 bits

// Funções de preenchimento de uma string no ES2017
'x'.padStart(3) // => '   x': adiciona espaços à esquerda para um comprimento de 3
'x'.padEnd(3) // => 'x   ': adicione espaços à direita para um comprimento de 3
'x'.padStart(3, '*') // => '***x': adicione asteriscos à esquerda com comprimento de 3
'x'.padEnd(3, '-') // => 'x---': adicione travessões à direita para um comprimento de 3

// Funções de corte de espaço. trim() é ES5; outros ES2019
' test '.trim() // => 'test': remove os espaços no início e no final
' test '.trimStart() // => 'test ': remove os espaços à esquerda. Também trimLeft
' test '.trimEnd() // => ' test': remove os espaços à direita. Também trimRight

// Métodos de string diversos
s.concat('!') // => 'Hello, world!': apenas use o operador + em vez
'<>'.repeat(5) // => '<><><><><>': concatena n cópias. ES6

// metodos comuns de strings
const email = 'renato_anjo.s@hotmail.com'

// const lastIndexOfA = email.lastIndexOf('a')
// const emailSlice = email.slice(4, 9)
const emailReplace = email.replace('l', 'y')

console.log(emailReplace, email)

// inteiros e decimais
const radius = 10
const pi = 3.14

// operadores aritmeticos 
const area = pi * radius ** 2

// ordem de operacoes 
const crazyOperation = 5 * (10 - 3) **2

//operadores de incremento e decremento
let postLikes = 10

// concatenacao de string com numero
const likesMessage = 'O post tem' + postLikes + ' likes. '

console.log(likesMessage)

/*Template strings */

const postTitle = 'E bolacha ou biscoito?'
const postAuthor = 'Matheus Saad'
const postComments = 15

//usando concatenacao 
cost postMessage = 'O post "' + postTitle + '"do ' postAuthor + ' , tem ' + postComments + 'comentarios.'

//usando template strings 
const postMessage = 'O post "$(postTitle)", do $(postAuthor), tem $(postComments) comentarios.'

//criando templates HTML

const html
	<h2>${postTitle}</h2>
	<p>Autor: ${postoAuthor}</p>
	<span>Este post tem ${postComments} comentarios</span>
	
console.log(html)

// Arrays
let heroes = ['Batman', 'Catwoman', 'Iron Man']
const ages = [32, 25, 40, 25]
const randomArray = ['Parker', 'Diana, 19, 18]

// Metodos de arrays
const joinHeroes = herois.join ('-')
const indexOf25 = ages.indexOf ('25')
const moreHeores = heroes.concat(['Superman' , 'Wolverine'])
const pushToHeroes = heroes.push('Cyclops', 'Hulk')
const popHeroes = heroes.pop ()

console.log(heroes)
/*Booleans e comparações */

//operadores de comparacao 
const age = 31
const name = 'renato'

// console.log(age == 31)
// console.log(age ==35)
// console.log(age =!31)
// console.log(age>31)
// console.log(age <32)
// console.log(age<=31)
// console.log(age >= 31)

 console.log(name == 'renato')
 console.log(name == 'Renato')
 console.log(name > 'Benato')
 console.log(name > 'Renato')
 console.log(name > 'belinha')

/*Comparações com igualdade estrita -*/

const age = 31

// 'igual a' e 'diferente de'
// console.log(age == 31)
// console.log(age == '31')
// console.log(age != 31)
// console.log(age != '31')

// 'igual a, e do mesmo tipo' e diferente de, e do mesmo tipo'
// console.log(age === 31)
// console.log(age === '31')

console.log(age !== 31)
console.log(age !== '31') 

/* Conversão de tipos*/

// console.log(typeof score)

const crazyConversion = Number('Maçã')
const convertNumber = String(97)
const booleanConversion = Boolean(10)

console.log(boolean('0'))

/*
Valores falsy:
	- false
	- 0
	- == , '' , ''
	- null
	- underfined
	- NaN
	
Valores truthy:
	- qualquer valor que nao é falsy	
*/



// for loop

const names = ['linus', 'ada', 'bill']

for (let i =0 ; i< names.length ; i++) {
	const HTMLTemplate = '<p>${names[i]}</p>'
	console.log(HTMLTemplate)
}	
	
	
// while loop
const names = ['Jobs', 'Hopper', 'Turing']
let i = 0

while ( i < names.length) {
	console.log(names[i])
	i++
}	

// if
const password = 'oi123'

if (password.length >= 8) {
	console.log('essa senha tem 8 ou mais caracteres')
}

// else e else if statements
const password = 'oi123oi'

if (password.length >=12) {
	console.log('senha muito forte :)')
} else if (password.length >=8 ) {
	console.log('essa senha tem 8 ou mais caracteres')
} else {
	console.log('a senha deve conter  ou mais caracteres')
}				

// operadores logicos - ou || e E &&
const password = 'oildr'

if (password.length >= 12 && password.includes('1')) {
	console.log('senha muito forte')
} else if (password.length >= 8 || password.includes >=5) {	
	console.log('senha forte') 
} else {
	console.log(' a senha deve conter 8 ou mais caracteres')
}		

//breal e continue 

const scores = [50, 25, 0, 30, 100, 20, 10]

for (let i =0; i < scores.length; i++) {
	if (scores[i] ===0) {
	continue
}

console.log('sua pontuacao: ${scores[i]}')

if (scores[i] ===10) {	
	console.log('parabens, você atingiu a pontuacao maxima')
	break
	}
}	


// switch statement

const grade = 'A'

switch (grade) 
	case 'A':
		console.log(' vc tirou um A')
		break
	case 'B':
		console.log(' vc tirou um B')
		break
	case 'C':
		console.log(' vc tirou um C')
		break
	case 'D':
		console.log(' vc tirou um D')
		break
	case 'E':
		console.log(' vc tirou um E')
		break				
	default:
		console.log('nota invalida')
}			

/* exemplo switch case */
var agora = new Date()
var diaSem = agora.getDay()
switch(diaSem){
  case 0:
    console.log(‘Domingo’)
    break
  
  case 1:
    console.log(‘Segunda’)
    break
case 2:
    console.log(‘Terça’)
    break
case 3:
    console.log(‘Quarta’);
    break
case 4:
    console.log(‘Quinta’);
    break
case 5:
    console.log(‘Sexta’);
    break
default:
    console.log(‘Sábado’);
}

/* exercicio de fixacao switch*/

let distanceInLY = prompt("Digite a distância em anos-luz")
let chosenOption = prompt("Para qual unidade deseja conveter?\n1. Parse(pc)\n2. Unidade Astronômica (AU)" +
                        "\n3. Quilômetros (km)\n\n(Digite o número da opção desejada)")
let chosenUnity
let convertedDistance
switch(chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceInLY * 0.306601
        break
    case "2":
        chosenUnity = "Unidade Astronômica"
        convertedDistance = distanceInLY * 63241.1
        break
    case "3":
        chosenUnity = "Quilômetros"
        convertedDistance = distanceInLY * 9.5 * Math.pow(10, 12)
        break
    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
}
alert("Distância em Anos-luz: " + distanceInLY + "\n" + chosenUnity + ": " + convertedDistance)

/* exercicio de fixacao while*/

let warpCount = 0
let chosenOption = ""

let spaceship = prompt("Digite o nome da nave")

chosenOption = prompt("Deseja entrar em dobra espacial?\n1- Sim\n2- Não")

while(chosenOption == "1") {
    warpCount += 1
    chosenOption = prompt("Deseja realizar a próxima dobra?\n1- Sim\n2- Não")
}

alert("Nave: " + spaceship + "\nQuantidade de dobras: " + warpCount)


/* exercicio fixacao condicionais */

let pilotName = prompt("Qual seu nome, piloto?")
let velocity = 0
let newVelocity = prompt("A que velocidade você gostaria de acelerar?")
let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "km/s")
if(confirmVelocity) {
    velocity = newVelocity
}
if(velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if(velocity < 40) {
    alert("Você está devagar. Podemos aumentar mais.")
} else if(velocity < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if(velocity < 100) {
    alert("Velocidade alta. Considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}
alert("Piloto: " + pilotName + "\nVelocidade: " + velocity + "km/s")

/*Utilizando o For*/

let spaceship = prompt("Digite o nome da nave")

let charToReplace = prompt("Qual caracter você deseja substituir?")

let replacementChar = prompt("Por qual caracter você deseja substituir?")

let newSpaceship = ""

for(let pos = 0; pos < spaceship.length; pos++) {
    if(spaceship[pos] == charToReplace) {
        newSpaceship += replacementChar
    } else {
        newSpaceship += spaceship[pos]
    }
}

alert("O novo nome da nave é " + newSpaceship)

/* revisao repeticoes*/

let spaceshipName = prompt("Qual é o nome da nave?")

let invertedName = ""

for(let i = spaceshipName.length - 1; i >= 0; i--) {
    if(spaceshipName[i] == "e") {
        break
    }
    invertedName += spaceshipName[i]
}

alert("Nome original da nave: " + spaceshipName + "\nNome após ocultação: " + invertedName)

/*exercitando funcoes*/

let spaceshipName = prompt("Digite o nome da nave")
let spaceshipVelocity = 0
let chosenOption
function showMenu() {
    let option
    while(option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("O que deseja fazer?\n" +
                        "1- Acelerar a nave em 5km/s\n" +
                        "2- Desacelerar a nave em 5km/s\n" +
                        "3- Imprimir dados de bordo\n" +
                        "4- Sair de programa")
    }
    return option
}
function speedUp(velocity) {
    let newVelocity = velocity + 5
    return newVelocity
}
function slowDown(velocity) {
    let newVelocity = velocity - 5
    if(newVelocity < 0) {
        newVelocity = 0
    }
    return newVelocity
}
function printSpaceshipBoardData(name, velocity) {
    alert("Espaçonave: " + name + "\nVelocidade: " + velocity + "km/s")
}
do {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity)
            break
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity)
            break
        case "3":
            printSpaceshipBoardData(spaceshipName, spaceshipVelocity)
            break
        default:
            alert("Encerrando programa de bordo")
    }
} while(chosenOption != "4")
	
/* funcoes aprofundando*/
	
function slowDown(velocity, printer) {
    let deceleration = 20
    while(velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }
    alert("Nave parada. As comportas podem ser abertas.")
}
let spaceshipVelocity = 150
slowDown(spaceshipVelocity, function(velocity) {
    console.log("Velocidade atual: " + velocity)
})	

/* praticando arrays*/

const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

let ongoingHitchPlatform = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ")
message += "\nPlataform com processo de engate: " + (ongoingHitchPlatform + 1)
message += "\nEspaçonaves destacadas: " + highlightedSpaceships.join(", ")

alert(message)

/*praticando dom*/

let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Informe o nome da nave")
    spaceship.type = prompt("Informe o tipo da nave")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade mãxima da nave (km/s)"))
}

function acelerate() {
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"))
    spaceship.speedUp(acceleration)
    if(spaceship.velocity > spaceship.maxVelocity) {
        alert(  "VELOCIDADE MÁXIMA ULTRAPASSADA!" +
                "\nVelocidade da Nave: " + spaceship.velocity + "km/s" +
                "\nVelocidade máxima da Nave: " + spaceship.maxVelocity + "km/s")
    }
}

function stop() {
    alert(  "Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: "
            + spaceship.velocity + "\nMáxima da Nave: " + spaceship.maxVelocity)
    spaceship.velocity = 0
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você deseja:\n1- Acelerar\n2- Parar")
        switch(chosenOption) {
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opação inválida")
        }
    } while(chosenOption != "2")
}

registerSpaceship()
showMenu()

/* praticando dom*/
	
class App {
  addProperty() {
    event.preventDefault()
    let kind = document.querySelector("select[name='kind']").value
    let area = document.querySelector("input[name='area']").value
    let rented = document.querySelector("input[name='rented']").checked
    let property = new Property(kind, area, rented)
    this.addOnPropertiesList(property)
    this.cleanForm()
  }
  addOnPropertiesList(property) {
    let listElement = document.createElement("li")
    let propertyInfo = " Tipo: " + property.kind + " (Área: " + property.area + "m²)"
    if(property.rented) {
      let rentedMark = this.createRentedMark()
      listElement.appendChild(rentedMark)
    }
    listElement.innerHTML += propertyInfo
    let buttonToRemove = this.createRemoveButton()
    listElement.appendChild(buttonToRemove)
    document.getElementById("properties").appendChild(listElement)
  }
  createRentedMark() {
    let rentedMark = document.createElement("span")
    rentedMark.style.color = "white"
    rentedMark.style.backgroundColor = "red"
    rentedMark.innerText = "ALUGADO"
    return rentedMark
  }
  createRemoveButton() {
    let buttonToRemove = document.createElement("button")
    buttonToRemove.setAttribute("onclick", "app.remove()")
    buttonToRemove.innerText = "Remover"
    return buttonToRemove
  }
  cleanForm() {
    document.querySelector("input[name='area']").value = ""
    document.querySelector("input[name='rented']").checked = false
  }
  remove() {
    let liToRemove = event.target.parentNode
    document.getElementById("properties").removeChild(liToRemove)
  }
}

/*Tabuada */

function mostrarTabuada(){
            console.log("entrei");
            var numero = document.querySelector("#numero");
            var resultado = document.querySelector("#resultado");
            resultado.innerText = "";
            for (var i = 0 ; i <= 10 ; i++){
                var div = document.createElement("div");
                div.innerText = numero.value* i;
                resultado.appendChild(div);
            }
}

/* calculadora das 4 Operacoes*/
	
const entrada1 = prompt("Informe o primeiro número:")
const entrada2 = prompt("Informe o segundo número:")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
  "Resultados:\n" +
  "\nSoma: " + soma +
  "\nSubtração: " + subtracao +
  "\nMultiplicação: " + multiplicacao +
  "\nDivisão: " + divisao
)

/* calculadora */
	
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}
	
/* exercicio visitando cidades*/
	
const turista = prompt("E aí, turista! Qual é o seu nome?")
let cidades = ""
let contagem = 0
let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")
while (continuar === "Sim") {
  let cidade = prompt("Qual é o nome da cidade visitada?")
  cidades += " - " + cidade + "\n"
  contagem++
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}
alert(
  "Turista: " + turista +
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas:\n" + cidades
)	

/* conversor de medidas */
	
const medida = parseFloat(prompt("Insira uma medida em metros:"))
const unidade = prompt(
  "Para qual unidade de medida deseja converter?" +
  "\n1 - milímetros (mm)" +
  "\n2 - centímetros (cm)" +
  "\n3 - decímetros (dm)" +
  "\n4 - decâmetros (dam)" +
  "\n5 - hectômetro (hm)" +
  "\n6 - quilômetro (km)"
)
switch (unidade) {
  case "1":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
  case "2":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
  case "3":
    alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
  case "4":
    alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
  case "5":
    alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
  case "6":
    alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
}
switch (unidade) {
  case "1":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
    break
  case "2":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
    break
  case "3":
    alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
    break
  case "4":
    alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
    break
  case "5":
    alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
    break
  case "6":
    alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
    break
  default:
    alert("Opção inválida!")
    break
}	

	
/*Menu Interativo*/
	

let opcao = ""

do {
  
} while (opcao !== "5");
	
let opcao = ""

do {
  opcao = prompt(
    "Seja bem-vindo(a)!\n" +
    "\nEscolha uma das opções abaixo:" +
    "\n1 - Opção Um" +
    "\n2 - Opção Dois" +
    "\n3 - Opção Três" +
    "\n4 - Opção Quatro" +
    "\n5 - Encerar"
  )

} while (opcao !== "5");
	
let opcao = ""

do {
  opcao = prompt(
    "Seja bem-vindo(a)!\n" +
    "\nEscolha uma das opções abaixo:" +
    "\n1 - Opção Um" +
    "\n2 - Opção Dois" +
    "\n3 - Opção Três" +
    "\n4 - Opção Quatro" +
    "\n5 - Encerar"
  )

  switch (opcao) {
    case "1":
      alert("Você escolheu a opção 1.")
      break
    case "2":
      alert("Você escolheu a opção 2.")
      break
    case "3":
      alert("Você escolheu a opção 3.")
      break
    case "4":
      alert("Você escolheu a opção 4.")
      break
    case "5":
      alert("Encerrando o programa...")
      break
    default:
      alert("Entrada inválida! Escolha uma das cinco opções.")
  }
} while (opcao !== "5");

let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"))
let opcao = ""

let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"))
let opcao = ""

do {
  opcao = prompt(
    "Saldo disponível: R$ " + saldo +
    "\n1 - Adicionar dinheiro" +
    "\n2 - Remover dinheiro" +
    "\n3 - Sair"
  )

} while (opcao !== "3");
	
let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"))
let opcao = ""

do {
  opcao = prompt(
    "Saldo disponível: R$ " + saldo +
    "\n1 - Adicionar dinheiro" +
    "\n2 - Remover dinheiro" +
    "\n3 - Sair"
  )

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"))
      break
    case "2":
      saldo -= prompt("Informe o valor a ser removido:")
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Entrada inválida.")
      break
  }
} while (opcao !== "3");	

/*Trabalhando com Arrays*/	
	
const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

/* Adicionando Elementos*/

// push: Adiciona um elemento no final do array e devolve o novo tamanho do array
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)
	
/* Remove Elementos */
	
// pop: Remove um elemento no final do array e devolve o elemento removido
let elementoRemovido = arr.pop("Boromir")
console.log(arr)
console.log(elementoRemovido)

// shift: Remove um elemento no começo do array e devolve o elemento removido
elementoRemovido = arr.shift("Boromir")
console.log(arr)
console.log(elementoRemovido)
	
/* Pesquisando por um elemento */	
// includes: Verifica se um certo elemento está presente no array 
const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array
const indice = arr.indexOf("Gandalf")
console.log(indice)	

/* Cortando e Concatenando*/
	
// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original
const hobbits = arr.slice(0, 4)
// Também pode ser usado com números negativos referenciar o final do array
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)
console.log(hobbits)
console.log(outros)
	
/*Substituindo ELementos */
	
// splice: Permite remover elementos em qualquer posição do array e substituir por novos
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(elementosRemovidos)
console.log(sociedade)	
	
/*Iterando sobre os Elementos*/
	
// Usando o for para percorrer cada elemento do array
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice]
  console.log(elemento + " se encontra na posição " + indice)
}

	/* arrays dentro de arrays*/

// Arrays podem receber qualquer tipo da dado, inclusive outros arrays
const arr = [
  "1º Nível",
  ["2º nível", 42, true],
  [
    ["3º nível, 1º item", "Olá, mundo!"],
    ["3º nível, 2º item", "Oi, mundo!"],
  ],
  []
]

// Cada par de colchetes referencia um nível mais interno do array
console.log(arr[0])       // Saída: '1º Nível'
console.log(arr[1])       // Saída: [ '2º nível', 42, true ]
console.log(arr[1][0])    // Saída: '2º nível'
console.log(arr[1][1])    // Saída: 42
console.log(arr[2])       // Saída: [ [ '3º nível, 1º item', 'Olá, mundo!' ], [ '3º nível, 2º item', 'Oi, mundo!' ] ]
console.log(arr[2][0])    // Saída: [ '3º nível, 1º item', 'Olá, mundo!' ]
console.log(arr[2][1][1]) // Saída: 'Oi, mundo!'
	
// Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]
console.table(matriz)
	
// Podemos usar vários níveis de laços FOR para iterar facilmente pela matriz
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const elemento = matriz[i][j]
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
  }
}		
	
/*Funcao*/

// O parâmetro é a entrada da função.

// Ele é como uma variável que fica disponível dentro da função
// mas que é informada na hora de chamar a função
function dobro(x) {
  console.log("O dobre de " + x + " é " + (x * 2))
}
dobro(5)
dobro(7)
	
// Se uma função for chamada sem informar o parâmetro
// o valor usado para ele será o undefined
dobro()	

// Mas podemos declarar um valor padrão para um parãmetro, assim, 
// se ele não for informado, o valor padrão será usado no lugar do undefined
function dizerOla(nome = "mundo") {
  console.log("Olá, " + nome + "!")
}
dizerOla("Isaac")
dizerOla()	
	
// Uma função pode ter quantos parâmetros quisermos, basta separaá-los por vírgula
function soma(a, b) {
  console.log(a + b)
}
soma(1, 1)
soma(34, 5)
	
// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function criarUsuario(nome, email, senha, tipo = "leitor") {
  const usuario = { nome, email, senha, tipo }
  console.log(usuario)
}

function novoUsuario(nome, tipo = "leitor", email, senha) {
  const usuario = { nome, email, senha, tipo }
  console.log(usuario)
}

criarUsuario("Isaac", "isaac@email.com", "1234")
novoUsuario("Isaac", "isaac@email.com", "1234")
	
// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
  // ...
}
function parametrosDoJeitoCerto(usuario) {
  // ...
}
// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  aniversario: "",
  endereco: ""
}
parametrosDoJeitoCerto(dadosDoUsuario)	

// Retorno é a saída da função

// O retorno é usado para armazenarmos a saída da função em uma variável
// Se não explicitarmos qual deve ser a saída da função, sua saída será undefined
function calcularMedia(a, b) {
  const media = (a + b) / 2
}
const resultado = calcularMedia(5, 9)
console.log(resultado)
	
// Para dizer qual é a saída de uma função usamos o return
function criarProduto(nome, preco) {
  const produto = { nome, preco, estoque: 1 }
  return produto
}
const notebook = criarProduto("Notebook Intel Core i3 8GB", 3000)
console.log(notebook)


// Também podemos jogar a saída de uma função dentro dos parâmetros de outra
console.log(criarProduto("Smartphone Samsung Galaxy", 1000))
	
// E o retorno não precisa ser uma variável,
// pode ser o resultado de qualquer expressão
function areaRetangular(base, altura) {
  return base * altura
}
console.log(areaRetangular(3, 5))
// Ou até o retorno de outra função
function areaQuadrada(lado) {
  return areaRetangular(lado, lado)
}
console.log(areaQuadrada(8))
	
// Uma função só pode ter uma saída, depois do return nada é executado
// Repare que o VS Code nos avisa que nosso código não será executado
function olaMundo() {
  let texto = "..."
  return texto
  texto = "Olá, mundo!"
  console.log(texto)
}
console.log(olaMundo())
	
// No entanto, diferentes ramificações dentro
// da função podem ter diferentes retornos
function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade"
  } else {
    return "Menor de idade"
  }
}
console.log(maioridade(20))
console.log(maioridade(13))	
	
// Escopo é o contexto onde a variável foi declarada podendo ser
// mais externo, ou mais interno (se estiver dentro de um bloco)

// Variáveis no escopo mais externo podem ser
// usadas dentro de escopos mais internos
let pokemon = "Charmander"

function evoluir() {
  pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

// Variáveis no escopo mais interno não podem ser
// usadas fora dele em escopos mais internos
function criarAnimal() {
  let animal = "Gato"
}

criarAnimal()
console.log(animal) // Gera erro
	
// Apenas variáveis declaradas com var ficam
// disponíveis em um escopo mais externo
function avaliarNota(nota) {
  if (nota > 60) {
    var aprovado = true
    let situacao = "Aprovado"
  } else {
    var aprovado = false
    let situacao = "Reprovado"
  }

  console.log(nota)
  console.log(aprovado)
  console.log(situacao) // Gera erro
}
avaliarNota(83)
avaliarNota(49)

// Mas mesmo o var não consegue "sair" para fora do escopo da função
function ola() {
  var texto = "Olá, mundo!"
}
console.log(texto) // Gera erro
	
// Apenas variáveis declaradas com var são carregadas
// sempre no começo do código, acima de todo o resto
console.log(nome)
console.log(sobrenome)
var nome = "Isaac"
let sobrenome = "Pontes"
console.log(nome)
console.log(sobrenome)	

	
// Função recursiva é uma função que chama ela mesma repetidamente
function dividir(num) {
  console.log(num)
  if (num % 2 === 0) {
    dividir(num / 2)
  } else {
    return num
  }
}
dividir(256)
	
// É fundamental que uma função recursiva tenha uma forma de parar de chamar novas funções
function dobrar(num) {
  console.log(num)
  dobrar(num * 2)
}
dobrar(1) // Estoura a pilha de chamadas
	
// Para construir uma função recursiva, geralmente partimos de um caso de base
// para garantir que nossa função não vai continuar se chamando para sempre
// Obs.: !5 (fatorial de 5) = 5 * 4 * 3 * 2 * 1 = 5 * !4
function fatorial(num) {
  console.log("num = " + num)
  if (num === 0) { // caso base
    return 1
  } else if (num === 1) { // caso base
    return 1
  } else {
    console.log(num + " * !" + (num - 1))
    return num * fatorial(num - 1)
  }
}

console.log("\n!5 = " + fatorial(5))
console.log("\n!0 = " + fatorial(0))
console.log("\n!9 = " + fatorial(9))	

// No javascript as funções podem ser atribuidas
// a variáveis como se elas fosse valores
function somar(a, b) {
  return a + b
}
// Repare que não usamos os () ao lado do nome da função,
// porque ao fazer isso estaríamos executando a função
const operacao = somar
console.log(operacao(4, 5))
	
// Para isso, podemos usar as funções anônimas, que
// nada mais são do que funções que não possuem um nome
const subtrair = function (a, b) {
  return a - b
}
console.log(subtrair(36, 13))
	
// Com as funções anônimas podemos, por exemplo,
// atribuir uma função a uma chave de objeto
const calculadora = {}
calculadora.somar = somar
calculadora.subtrair = subtrair
calculadora.multiplicar = function (a, b) {
  return a * b
}
console.log(calculadora.multiplicar(3, 7))
	
// Funções anônimas só podem ser chamadas após a atribuição da variável,
// elas não são jogadas para o topo do arquivo como funções normais
olaMundo()
oiMundo()

function olaMundo() {
  console.log("Olá, mundo!")
}

const oiMundo = function () {
  console.log("Oi, mundo!")
}	

// Funções de alta-ordem, ou high-order functions, são funções que
// recebem outras funções como parâmetro e as executam em algum momento
function calcular(a, b, operacao) {
  console.log("Realizando uma operação.")
  const resultado = operacao(a, b)
  return resultado
}
	
// Repare que não usamos os () ao lado do nome da função,
// porque ao fazer isso estaríamos executando a função
function somar(x, y) {
  console.log("Realizando soma.")
  return x + y
}
calcular(3, 5, somar)
console.log(somar)       // Retorna a própria função
console.log(somar(1, 1)) // Chama a função (retorna o resultado da função)	


// Também podemos escrever funções anônimas dentro da própria chamada da high-order function
calcular(9, 2, function (x, y) {
  console.log("Realizando substração.")
  return x - y
})
	
// Essas funções que são passadas como parâmetros geralmente são chamadas de callbacks
// Um exemplo comum de high-order function no javascript é a função .forEach() dos arrays
function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
}

const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"]
// Forma tradicional
for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista)
}
// Forma funcional
lista.forEach(exibirElemento)
// Também poderia ser feito:
lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
})	

const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

const nomes = []
for (let i = 0; i < personagens.length; i++) {
  const personagem = personagens[i]
  nomes.push(personagem.nome)
}

// map: permite obter um novo array a partir de um array existenste
const nomes = personagens.map(function (personagem) {
  return personagem.nome
})


const orcs = []
for (let i = 0; i < personagens.length; i++) {
  const personagem = personagens[i]
  if (personagem.raca === "Orc") {
    orcs.push(personagem)
  }
}

// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
const orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc"
})

let nivelTotal = 0
for (let i = 0; i < personagens.length; i++) {
  nivelTotal += personagens[i].nivel
}
// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
const nivelTotal = personagens.reduce(function (acumulador, personagem) {
  return acumulador + personagem.nivel
}, 0)

const racas = personagens.reduce(function (acumulador, personagem) {
  if (acumulador[personagem.raca]) {
    acumulador[personagem.raca].push(personagem)
  } else {
    acumulador[personagem.raca] = [personagem]
  }
  return acumulador
}, {})

// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
personagens.sort(function (a, b) {
  return a.nivel - b.nivel
})
	
	/*Sistema de Vagas de Emprego*/
	
const vagas = []

function listarVagas() {
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += indice + ". "
    textoFinal += vaga.nome
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
    return textoFinal
  }, "")

  alert(vagasEmTexto)
}
	
function novaVaga() {
  const nome = prompt("Informe um nome para a vaga:")
  const descricao = prompt("Informe um descrição para a vaga:")
  const dataLimite = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:")

  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" +
    "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
  )

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
    vagas.push(novaVaga)
    alert("Vaga criada.")
  }
}	
	
function exibirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja exibir:")
  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")

  alert(
    "Vaga nº " + indice +
    "\nNome: " + vaga.nome +
    "\nDescrição: " + vaga.descricao +
    "\nData limite: " + vaga.dataLimite +
    "\nQuantidade de candidatos: " + vaga.candidatos.length +
    "\nCandidatos inscritos:" + candidatosEmTexto
  )
}	

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do(a) candidato(a):")
  const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
  )

  if (confirmacao) {
    vaga.candidatos.push(candidato)
    alert("Inscrição realizada")
  }
}

function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir:")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
  )

  if (confirmacao) {
    vagas.splice(indice, 1)
    alert("Vaga excluída.")
  }
}	

function exibirMenu() {
  const opcao = prompt(
    "Cadastro de Vagas de Emprego" +
    "\n\nEscolha uma das opções" +
    "\n1. Listar vagas disponíveis" +
    "\n2. Criar uma nova vaga" +
    "\n3. Visualizar uma vaga" +
    "\n4. Inscrever um(a) candidato(a)" +
    "\n5. Excluir uma vaga" +
    "\n6. Sair"
  )

  return opcao
}	

function executar() {
  let opcao = ""

  do {
    opcao = exibirMenu()

    switch (opcao) {
      case "1":
        listarVagas()
        break
      case "2":
        novaVaga()
        break
      case "3":
        exibirVaga()
        break
      case "4":
        inscreverCandidato()
        break
      case "5":
        excluirVaga()
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida.")
    }

  } while (opcao !== "6");
}

executar()	

	function addContact() {
  const contactSection = document.getElementById('contacts-list')

  const h3 = document.createElement('h3')
  h3.innerText = "Contato"

  const ul = document.createElement('ul')

  const nameLi = document.createElement('li')
  nameLi.innerText = "Nome: "
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  nameLi.appendChild(nameInput)
  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br'))

  const phoneLi = document.createElement('li')
  phoneLi.innerText = "Telefone: "
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'
  phoneLi.appendChild(phoneInput)
  ul.appendChild(phoneLi)
  ul.appendChild(document.createElement('br'))

  const addressLi = document.createElement('li')
  addressLi.innerHTML = '<label for="address">Endereço: </label>'
  const addressInput = document.createElement('input')
  addressInput.type = 'text'
  addressInput.name = 'address'
  addressInput.id = 'address'
  addressLi.appendChild(addressInput)
  ul.appendChild(addressLi)
  ul.appendChild(document.createElement('br'))

  contactSection.append(h3, ul)
}

function removeContact() {
  const contactSection = document.getElementById('contacts-list')

  const titles = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')

  contactSection.removeChild(titles[titles.length - 1])
  contactSection.removeChild(contacts[contacts.length - 1])
}

function addPlayer() {
  const position = document.getElementById("position").value
  const name = document.getElementById("name").value
  const number = document.getElementById("number").value

  const confirmation = cfirm("Escalar " + name + " como " + position + "?")

  if (confirmation) {
    const teamList = document.getElementById("team-list")
    const playerItem = document.createElement("li")
    playerItem.id = "player-" + number
    playerItem.innerText = position + ": " + name + " (" + number + ")"
    teamList.appendChild(playerItem)

    document.getElementById("position").value = ""
    document.getElementById("name").value = ""
    document.getElementById("number").value = ""
  }
}	
	
function register(element) {
  const username = element.children.username.value
  const password = element.children.password.value
  const passwordConfirmation = element.children.passwordConfirmation.value

  if (password === passwordConfirmation) {
    alert("Usuário " + username + " registrado!")
  } else {
    alert("As senhas não conferem")
  }
}

const form = document.getElementById("orderForm")

form.addEventListener("submit", function (ev) {
  ev.preventDefault()

  const name = document.querySelector("input[name='name']").value
  const address = document.querySelector("input[name='address']").value
  const breadType = document.querySelector("select[name='breadType']").value
  const main = document.querySelector("input[name='main']").value
  const observations = document.querySelector("textarea[name='observations']").value

  let salad = ""
  document.querySelectorAll("input[name='salad']:checked").forEach(function (item) {
    salad += " - " + item.value + "\n"
  })

  console.log({
    name,
    address,
    breadType,
    main,
    salad,
    observations
  })

  alert(
    "Pedido Realizado!" +
    "\nNome do cliente: " + name +
    "\nEndereço de entrega: " + address +
    "\nTipo de pão: " + breadType +
    "\nRecheio: \n - " + main + "\n" + salad +
    "Observações: " + observations
  )
})	

	/*Agora, para o javascript, vamos começar criando algumas funções auxiliares para agilizar o 
	processo de criação dos elementos, já que faremos isso várias vezes:*/
function createLabel(text, htmlFor) {
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  label.innerText = text
  return label
}

function createInput(id, value, name, type = 'text', placeholder = '') {
  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder = placeholder
  return input
}	
	
/*Vamos criar algumas váriaveis globais*/	
const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0	


/*Agora vamos criar o evento do botão que adiciona os novos campos no formulário:*/
addTechBtn.addEventListener('click', function (ev) {
  const stackInputs = document.getElementById('stackInputs')

  const newRow = document.createElement('li')
  const rowIndex = inputRows
  inputRows++
  newRow.id = 'inputRow-' + rowIndex
  newRow.className = 'inputRow'

  const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
  const techNameInput = createInput('techName-' + rowIndex, null, 'techName')

  const expLabel = createLabel('Experiência: ')
  const id1 = 'expRadio-' + rowIndex + '.1'
  const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
  const expLabel1 = createLabel('0-2 anos', id1)
  const id2 = 'expRadio-' + rowIndex + '.2'
  const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
  const expLabel2 = createLabel('3-4 anos', id2)
  const id3 = 'expRadio-' + rowIndex + '.3'
  const expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')
  const expLabel3 = createLabel('5+ anos', id3)

  const removeRowBtn = document.createElement('button')
  removeRowBtn.type = 'button'
  removeRowBtn.innerText = 'Remover'
  removeRowBtn.addEventListener('click', function () {
    stackInputs.removeChild(newRow)
  })


  newRow.append(
    techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
  )

  stackInputs.appendChild(newRow)
})


/*Por fim, vamos adicionar o evento de submissão do formulário:*/	
form.addEventListener('submit', function (ev) {
  ev.preventDefault()

  const fullnameInput = document.getElementById('fullname')
  const inputRows = document.querySelectorAll('.inputRow')

  let technologies = []
  inputRows.forEach(function (row) {
    // #rowId input[name="techName"]
    const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    technologies.push({ name: techName, exp: techExp })
  })

  const newDev = { fullname: fullnameInput.value, technologies: technologies }
  developers.push(newDev)
  alert('Dev cadastrado com sucesso!')

  fullnameInput.value = ''
  inputRows.forEach(function (row) {
    row.remove()
  })

  console.log(developers)
})	
	
	
/* Manipulando estilos diretamente pela propriedade style */
function useLightTheme() {
  document.body.style.color = '#212529'
  document.body.style.backgroundColor = '#f1f5f9'
}

function useDarkTheme() {
  document.body.style.color = '#f1f5f9'
  document.body.style.backgroundColor = '#212529'
}

// Manipulando estilos através das classes utilizadas pelo CSS
function switchTheme() {
  document.body.classList.toggle('is-light')
  document.body.classList.toggle('is-dark')
}

// Adicionando os eventos
document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)
	
/*Vamos começar pelo valor do input:*/	
const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
  input.value = 'Olá, mundo!'

  console.log(input.value)
  console.log(input.getAttribute('value'))
})	

/*Também podemos alterar o próprio tipo de input, e isso reflete imediatamente na página:*/	
document.getElementById('type').addEventListener('click', function () {
  // input.type = input.type !== 'date' ? 'date' : 'text'
  input.setAttribute('type', 'radio')
})	

/*Podemos manipular atributos comuns, como o placeholder:*/
document.getElementById('placeholder').addEventListener('click', function () {
  input.placeholder = 'Digita algo...'
})	
	
/*E também atributos booleanos, como o disabled:*/	
	
document.getElementById('disable').addEventListener('click', function () {
  input.setAttribute('disabled', !input.disabled)
})
	
/*- Por fim, podemos usar o poder dos atributos de dados do HTML dentro do javascript para aumentar ainda mais as nossas possiblidades:
    
    Obs.: Repare no “Inspecionar” que podemos inserir atributos dinamicamente no elemento*/

document.getElementById('data').addEventListener('click', function () {
  const data = input.dataset.somethingElse
  console.log("O valor do atributo data-something-else é: " + data)
  input.dataset.somethingElse = 'Algum outro valor'
  console.log("O valor do atributo data-something-else agora é: " + input.dataset.somethingElse)
})
	
/*Arrow Functions*/	
function normalSum(a, b) {
  return a + b
}

console.log(`Soma normal: ${normalSum(2, 2)}`)

const anonymousSum = function (a, b) {
  return a + b
}

console.log(`Soma anônima: ${anonymousSum(2, 2)}`)

const arrowSum = (a, b) => {
  return a + b
}

console.log(`Soma arrow function: ${arrowSum(2, 2)}`)

const subtract = (a, b) => a - b

console.log(`Subtração: ${subtract(5, 2)}`)

const double = n => `O dobro de ${n} é ${n * 2}`

const number = 21
console.log(`Dobro: ${double(number)}`)

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P')
console.log(startingWithP)	

/*desestruturacao de arrays e objetos*/

	/*Encapsulamento*/
const person = {
  name: "Luke",
  job: "Farmer",
  parents: ["Anakin", "Padme"]
}

const name = person.name

const { job, parents } = person

console.log(name, job, parents)

const [father, mother] = parents

console.log(father, mother)

function createUser({ name, job, parents }) {
  const id = Math.floor(Math.random() * 9999)
  return {
    id,
    name,
    job,
    parents
  }
}

const luke = createUser(person)

console.log(luke)
	
class Account {
  #password
  #balance

  constructor(user) {
    this.email = user.email
    this.#password = user.password
    this.#balance = 0
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance
    } else {
      return null
    }
  }

  #authenticate(email, password) {
    return this.email === email && this.#password === password
  }
}	

/*Repare que fora da classe podemos acessar apenas o atributo email e
 o método getBalance(), tentar acessar #password, 
#balance ou #authenticate() gerará um erro:*/
const user = {
  email: "user@email.com",
  password: "123456"
}

const userAccount = new Account(user)

console.log(userAccount)
console.log(userAccount.#password) // Gera erro
console.log(userAccount.#balance) // Gera erro
console.log(userAccount.#authenticate()) // Gera erro
console.log(userAccount.getBalance("user@email.com", "123456"))
console.log(userAccount.getBalance("user@email.com", "000000"))
```
/* Encadeamento Opcional*/

const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [{
    name: "Mary",
    address: {
      street: "Some Street",
      number: 89
    }
  }],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432"
  }
}

// console.log(user.friends[0].phone.ddd)
console.log(user.friends[0].phone?.ddd)
console.log(user?.brothers?.length)

console.log(user.brothers?.[5].name)

/*Operador de Coalescência Nula*/
let a = 0

let b = a || 42

console.log({ a, b })

b = a ?? 42

console.log({a, b})

let c = false ?? 42

console.log({c})]

/*Módulos CommonJS*/

function render() {
  console.log('Renderizando a interface da aplicação...')
}

function store() {
  console.log("Salvando as informações no banco de dados...")
}

console.log("Aplicação iniciada.")
render()
store()

// render.js

function render() {
  console.log('Renderizando a interface da aplicação...')
}

module.exports = render

// store.js

function store() {
  console.log("Salvando as informações no banco de dados...")
}

module.exports = store

// index.js

const render = require("./render")
const store = require("./store")

console.log("Aplicação iniciada.")
render()
store()
console.log("Aplicação finalizada.")
console.log("Aplicação finalizada.")

/*ES Modules*/
function label(attributes) {
  const element = document.createElement('label')
  Object.assign(element, attributes)
  return element
}

function input(attributes) {
  const element = document.createElement('input')
  Object.assign(element, attributes)
  return element
}

function br() {
  const element = document.createElement('br')
  return element
}

console.log(label({ for: 'fullname', textContent: 'Nome Completo'}))
console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...'}))
console.log(br())

// functions.js

export function label(attributes) {
  const element = document.createElement('label')
  Object.assign(element, attributes)
  return element
}

export function input(attributes) {
  const element = document.createElement('input')
  Object.assign(element, attributes)
  return element
}

export function br() {
  const element = document.createElement('br')
  return element
}

// index.js

import { label, input, br } from './functions.js'

console.log(label({ for: 'fullname', textContent: 'Nome Completo'}))
console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...'}))
console.log(br())


/*Vamos imaginar que na nossa aplicação temos um arquivo javascript com várias funções e que utilizamos essas funções várias vezes:*/

function label(attributes) {
  const element = document.createElement('label')
  Object.assign(element, attributes)
  return element
}

function input(attributes) {
  const element = document.createElement('input')
  Object.assign(element, attributes)
  return element
}

function br() {
  const element = document.createElement('br')
  return element
}

console.log(label({ for: 'fullname', textContent: 'Nome Completo'}))
console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...'}))
console.log(br())


/*Promise*/
function asyncSum(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a + b)
        }
    })
}

function asyncSubtract(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a - b)
        }
    })
}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, null)

Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, null)

Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})

const numbers = [4, 9, 5, 13, 77]

function asyncSquare(x) {
    return new Promise((resolve, reject) => {
        resolve(x * x)
    })
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
    console.log(squares)
})

/*revisando como fazemos para lançar um erro no javascript com a palavra reservada throw*/
function sum(a, b) {
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error('arguments must be two numbers')
    }

    return firstNumber + secondNumber
}

console.log(sum(2, 9))
console.log(sum(true, 14))
console.log(sum(undefined, 22))
console.log(sum(18, "0"))
console.log(sum(39, null))
console.log(sum(13, "zero"))

/*utilizar o bloco try para “tentar” executar uma parte do nosso código e 
juntamente com ele um bloco catch para “capturar” os erros e executar um código em caso de erro:*/

function sum(a, b) {
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error('arguments must be two numbers')
    }

    return firstNumber + secondNumber
}

try {
    console.log(sum(2, 9))
    console.log(sum(true, 14))
    console.log(sum(undefined, 22))
    console.log(sum(18, "0"))
    console.log(sum(39, null))
    console.log(sum(13, "zero"))
} catch {
    console.log("An error ocurred!")
}
