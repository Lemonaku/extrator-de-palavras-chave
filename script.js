const botaoExibePalavras = document.querySelector('#botao-palavrapasse');

botaoExibePalavras.addEventListener('click', exibePalavrasPasse);

function exibePalavrasPasse() {
    const texto = document.querySelector('#escrita-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrapasse');
    const palavrasPasse = processaTexto(texto);

    campoResultado.textContent = palavrasPasse.join(", ");
}

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);

    let frequencias = {};
    for (let i of palavras) {
        frequencias[i] = 0;
        for (let j of palavras) {
            if (i == j) {
                frequencias[i]++;
            }
        }
    }

    console.log(frequencias);

    return palavras;
}