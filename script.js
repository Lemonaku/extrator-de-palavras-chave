const botaoExibePalavras = document.querySelector('#botao-palavrachave');

botaoExibePalavras.addEventListener('click', exibePalavrasChave);

function exibePalavrasChave() {
    const texto = document.querySelector('#escrita-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processaTexto(texto);

    campoResultado.textContent = palavrasChave.join(", ");
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