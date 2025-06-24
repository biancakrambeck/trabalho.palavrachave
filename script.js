const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const PalavrasChave = processaTexto(texto);
    
    campoResultado.textContent = PalavrasChave.join(", ");
}
function processaTexto (texto) {
    let palavras = texto.split(/\P{L}+/u);
    const frequencias = contaFrequencias(palavras);
    let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);
    console.log(ordenadas)
    return plalavras;
}

function contaFrequencias(palavras){
    let frequencias = {};
    for(let i in palavras) {
        frequencias [i] = 0;
        for (let j in palavras) {
            if ( i == j ){
              frequencias[i]++;  
            }
        }
    }
    
    return frequencias;
    
}