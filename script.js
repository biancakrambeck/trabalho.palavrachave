const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const PalavrasChave = processaTexto(texto);
    
    campoResultado.textContent = PalavrasChave.join(", ");
}

//Código omitido

function processaTexto (texto) {
    let palavras = texto.split(/\P{L}+/u);
    
    let frequencias = [];
    
    return plalavras;
}