// Cria uma matriz (array) chamada matriz com cinco elementos, cada um representando um "vetor" diferente. As strings "vetor1", "vetor2", etc., são os valores armazenados nos elementos da matriz.
var matriz = ["vetor1", "vetor2", "vetor3", "vetor4", "vetor5"];


// Inicializa uma variável chamada posicao com o valor zero. Essa variável será usada para rastrear a posição atual durante a iteração pelos elementos da matriz.
var posicao = 0;


// Inicia um loop while que continuará executando enquanto a posicao for menor que o comprimento (número de elementos) da matriz (matriz.length). Em outras palavras, o loop continuará enquanto houver elementos na matriz que ainda não foram percorridos.
while (posicao < matriz.length) {
    
    
    // Imprime no console o elemento da matriz na posição atual (matriz[posicao]). No início, a posicao é zero, então o primeiro elemento da matriz é impresso. A cada iteração, a posição é incrementada, e o próximo elemento da matriz é impresso.
    console.log(matriz[posicao]);


    // Incrementa a variável posicao após cada iteração, movendo-se para o próximo elemento da matriz.
    posicao++;
}