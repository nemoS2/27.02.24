// Define a duração total do filme em segundos como 60.
var tempoFilme = 60;


// Inicializa uma variável inicioFilme com o valor zero. Essa variável será usada para rastrear o tempo decorrido do filme.
var inicioFilme = 0; 


// Inicia um loop for que irá iterar de 0 até tempoFilme - 1 (ou seja, de 0 a 59, já que tempoFilme é 60).
for (var t = 0; t < tempoFilme; t++) {


    // Dentro do loop, para cada iteração, é utilizado setTimeout para agendar a execução de uma função após um determinado intervalo de tempo. O intervalo é calculado multiplicando t por 1000 (convertendo segundos para milissegundos).
    setTimeout(function() {


        // Limpa o console a cada iteração para que a contagem regressiva seja exibida sem acumular mensagens anteriores.
        console.clear();


        // Imprime no console uma mensagem indicando que o filme está sendo assistido e informa quantos segundos ainda restam para o término, usando a variável inicioFilme para calcular a contagem regressiva.
        console.log("Assistindo filme 60 segundos... Ainda faltam [" + (tempoFilme - inicioFilme) + "] segundos.");


        // Incrementa a variável inicioFilme a cada iteração, representando a passagem do tempo.
        inicioFilme++;


        // está relacionada ao uso da função setTimeout
    },t*1000);
}