let tentativa = 1;


const exibirTextoNaTela = (tag, texto) => {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

const exibirMensagemInicial = () => {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('.texto__paragrafo', 'selecione um valor de 1 a 100');
}

const gerarNumeroAleatorio = () => {
    return parseInt(Math.random() * 100 + 1);
}
let NumeroAleatorio = gerarNumeroAleatorio();

const verificarChute = () => {
    let valorTentativa = tentativa == 1 ? 'tentativa' : 'tentativas';
    let chute = document.querySelector('input').value;

    if (chute == NumeroAleatorio) {
        exibirTextoNaTela('h1', `Parabens você acertou`);
        let mensagem = `você acertou em ${tentativa} ${valorTentativa}`;
        exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > NumeroAleatorio) {
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }

        tentativa++;
        limparCampo();
    }

}

const novoJogo = () => {
    NumeroAleatorio = gerarNumeroAleatorio();
    exibirMensagemInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

console.log(NumeroAleatorio);

const limparCampo = () => {
    let chute = document.querySelector('input');
    chute.value = '';
}


exibirMensagemInicial();