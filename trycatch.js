// Declara uma constante chamada variavel1 e a inicializa com o valor "valor somente leitura". A constante não pode ser reatribuída após a inicialização.
const variavel1 = "valor somente leitura";         


// Declara uma variável chamada variavel2 usando a palavra-chave var e a inicializa com o valor "valor editável". A variável declarada com var pode ser reatribuída a qualquer momento.
var variavel2 = "valor editável";             


// Tenta atribuir um novo valor 
try { 


    // à constante variavel1, o que não é permitido, pois é uma constante.
    variavel1 = "valor não permitido"; 


    // ", variavel1); utiliza a função console.log para imprimir uma mensagem no console do navegador. Ela exibe a frase "A variavel1 foi alterada para:" seguida pelo valor atual da variável variavel1. Isso é parte de um código JavaScript que tenta modificar uma constante (variavel1) e registra no console o resultado dessa tentativa, incluindo o valor atual da constante.
    console.log("A variavel1 foi alterada para: ", variavel1); 


// Isso gera um erro e o bloco catch é executado. 
} catch (e) {


    // O bloco catch captura o erro e imprime uma mensagem indicando que ocorreu um erro ao tentar modificar variavel1.
    console.error("Ops! Ocorreu o erro: ", e);
}


// Tenta atribuir um novo valor
try {


    // à variável variavel2 atribui um novo valor, o que é permitido, pois var não impõe a mesma restrição que const.
    variavel2 = "valor permitido";


    // A mensagem indicando que variavel2 foi alterada é impressa no console.
    console.log("A variavel2 foi alterado para: ", variavel2);


// Como não há erro, o bloco catch não é executado.
} catch (e) {


    // utiliza console.error para imprimir uma mensagem de erro no console do navegador. A mensagem inclui a string "Ops! Ocorreu um erro: " e o objeto de erro e, fornecendo informações detalhadas sobre a natureza do erro para fins de depuração.
    console.error("Ops! Ocorreu um erro: ", e);
}