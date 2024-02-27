// Declaração de uma função arrow chamada sortear.
const sortear = () => { 


    // Declaração de uma matriz (nomes) contendo sete nomes. Essa matriz representa os nomes que podem ser sorteados.
    let nomes = ["KIM NAMJOON", "KIM SEOKJIN", "MIN YOONGI", "JUNG HOSEOK", "PARK JIMIN", "KIM TAEHYUNG", "JEON JUNGKOOK"];
    

    // Obtém a referência de um elemento HTML com o ID "nome" e armazena na variável h1Nome. Essa variável será usada para atualizar o conteúdo do elemento HTML com o nome sorteado.
    let h1Nome = document.getElementById("nome");
    
    
    // Inicializa uma variável booleana achouNumero como false. Essa variável será usada para controlar o loop enquanto não for encontrado um número válido.
    let achouNumero = false;


    // Declaração da variável numeroSorteado que será usada para armazenar o número aleatório gerado.
    let numeroSorteado; 


    // while (achouNumero == false) {: Inicia um loop que continuará até que um número válido seja encontrado.
    while (achouNumero == false) {   
        
        
        // numeroSorteado = Math.floor(Math.random() * 100);: Gera um número aleatório entre 0 e 99 usando Math.random() e arredonda para baixo usando Math.floor(). Este número será usado como índice para acessar a matriz nomes.
        numeroSorteado = Math.floor(Math.random() * 100);  


        //  verifica se o valor da variável numeroSorteado é menor que o número de elementos na matriz nomes. Isso garante que o número aleatório gerado está dentro dos limites válidos para acessar elementos na matriz. Se a condição for verdadeira, o código dentro do bloco if será executado.
        if (numeroSorteado < nomes.length) {


            // atribui o valor true à variável achouNumero, indicando que uma condição associada a essa variável é verdadeira. Essa atribuição geralmente é usada para controlar loops ou condições no código.
            achouNumero = true;
        }
    }


    // Avalia o valor de numeroSorteado e executa o bloco de código correspondente ao caso encontrado.
    // Cada caso (de 0 a 6) atualiza o conteúdo do elemento HTML (h1Nome) com o nome correspondente na matriz nomes.
    switch (numeroSorteado) {  


        // Atribui o valor nomes[numeroSorteado] ao elemento HTML h1Nome.
        case 0:


            // está atribuindo o conteúdo do elemento HTML referenciado pela variável h1Nome com o valor na posição numeroSorteado da matriz nomes.
            h1Nome.innerText = nomes[numeroSorteado];


            //interrompe a execução do switch.
            break;


        // Atribui o valor nomes[numeroSorteado] ao elemento HTML h1Nome.
        case 1:


            // está atribuindo o conteúdo do elemento HTML referenciado pela variável h1Nome com o valor na posição numeroSorteado da matriz nomes.
            h1Nome.innerText = nomes[numeroSorteado];

            //interrompe a execução do switch.
            break;


        // Atribui o valor nomes[numeroSorteado] ao elemento HTML h1Nome.
        case 2:


            // está atribuindo o conteúdo do elemento HTML referenciado pela variável h1Nome com o valor na posição numeroSorteado da matriz nomes.
            h1Nome.innerText = nomes[numeroSorteado];


             //interrompe a execução do switch.
            break;


        // Atribui o valor nomes[numeroSorteado] ao elemento HTML h1Nome.   
        case 3:


            // está atribuindo o conteúdo do elemento HTML referenciado pela variável h1Nome com o valor na posição numeroSorteado da matriz nomes.
            h1Nome.innerText = nomes[numeroSorteado];


             //interrompe a execução do switch.
            break;


        // Atribui o valor nomes[numeroSorteado] ao elemento HTML h1Nome.   
        case 4:


            // está atribuindo o conteúdo do elemento HTML referenciado pela variável h1Nome com o valor na posição numeroSorteado da matriz nomes.
            h1Nome.innerText = nomes[numeroSorteado];


             //interrompe a execução do switch.
            break;


        // Atribui o valor nomes[numeroSorteado] ao elemento HTML h1Nome.   
        case 5:


            // está atribuindo o conteúdo do elemento HTML referenciado pela variável h1Nome com o valor na posição numeroSorteado da matriz nomes.
            h1Nome.innerText = nomes[numeroSorteado];


            //interrompe a execução do switch.
            break;


        // Atribui o valor nomes[numeroSorteado] ao elemento HTML h1Nome.  
        case 6:  


            // está atribuindo o conteúdo do elemento HTML referenciado pela variável h1Nome com o valor na posição numeroSorteado da matriz nomes.
            h1Nome.innerText = nomes[numeroSorteado];


             //interrompe a execução do switch.
            break;



        // O caso default é acionado se numeroSorteado não estiver entre 0 e 6 
        default:


            // quando o default é acionado exibe a mensagem "Ops! Nome não consta na lista."
            h1Nome.innerText = "Ops! Nome não consta na lista.";


            // em JavaScript é usada para interromper imediatamente a execução de um loop (como for, while, ou do-while) ou de um bloco de código em uma estrutura condicional 
            break;
    }


    // Adiciona ao conteúdo do elemento HTML uma mensagem indicando o número sorteado.
    h1Nome.innerText += " o número sorteado foi: " + numeroSorteado;
}