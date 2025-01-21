//Cria a lista que armazena os numeros ja selecionados
let listaDeNumeroSorteado = []
//Definindo o limite de itens na lista
let numeroLimite = 10;
//Cria a função responsavel por gerar o numero aleatorio
let numeroSecreto = gerarNumeroAleatorio();
//Cria a variavel que contabiliza as tentativas iniciando em 1
let tentativas = 1;
//Cria a função responsavel por exibir os textos na tela
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//Selecionando os parametros a serem utilizados quando a funçao for utilizada
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
//Utilizando a função para exibir os textos
exibirMensagemInicial()

//Criando a função para verificar se o chute está correto
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }    
        tentativas++;
        limparCampo()
    } 
}

//Selecionando os parametros a serem utilizados na funçao gerarNumeroAleatorio
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1); 
    let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumeroSorteado = []
    }

    if (listaDeNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteado.push(numeroEscolhido);
        console.log(listaDeNumeroSorteado)
        return numeroEscolhido;
    }
}
//Função que limpa a area de escrita do usuario
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
//Função que reinicia o jogo quando o botão ''novo jogo'' é selecionado
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

