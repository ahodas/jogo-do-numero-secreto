let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//Escreve no titulo do HTML (h1)
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//Escreve no paragrafo do HTML (p)
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

exibirmensageminicial ();

//Evolução do codigo anterior
//Cria a variavel campo, que de acordo com a tga escreve o texto.
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

//Chama a função criada anteriormente e inclui os parametros para tag e texto
function exibirmensageminicial () {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa;'
        let mensagemTentativas = `Voce descobriu o Número Secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O Número Secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O Número secreto é maior.');
        }
        tentativas++;
        limparCampo ();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random () *numeroLimite +1);
    let quantidadeDeelementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeelementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarjogo() {
    numeroSecreto = gerarNumeroAleatorio ();
    limparCampo ();
    tentativas = 1;
    exibirmensageminicial ();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}