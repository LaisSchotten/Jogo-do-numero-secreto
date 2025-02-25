let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(teg, texto) {
       let campo = document.querySelector(teg);
       campo.innerHTML = texto;
       responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

    function exibirMensagemInicial() {
        exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
        exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
    }

    exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
        let mensagemTentativas = `Você descobriu o numero secretro com ${tentativas} ${palavraTentativa}!`;  
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero é menor');
        } else {
            exibirTextoNaTela ('p', 'O numero é maior');
        }
        tentativas++;
        limparCampo();   
    }

}
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  
  if (quantidadeDeElementosNaLista == numeroEscolhido){
    listaDeNumerosSorteados = [];
  }
  
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
  }
}

function limparCampo() {
chute = document.querySelector('input');
chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)

}