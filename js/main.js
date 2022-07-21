const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");
const imagem = document.querySelector("[data-imagem]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const robos = [
    "img/Robotron 2000 - Vermelho.png",
    "img/robotron 2000 - Rosa.png",
    "img/robotron 2000 - Amarelo.png",
    "img/robotron 2000 - Azul.png",
    "img/robotron 2000 - Branco.png",
    "img/robotron 2000 - Preto.png",
]

var contador = 0;

controle.forEach( (elemento) => {
    elemento.addEventListener ("click", (event) => {
        manipulaDados(event.target.dataset.controle, event.target.parentNode);
        atualizaEstatiticas(event.target.dataset.peca);
    })
})

imagem.addEventListener ("click", trocarRobo);

function manipulaDados (operacao, controle) {
    const peca = controle.querySelector("[data-contador]");
    
    if (operacao === "+") {
        peca.value = parseInt(peca.value) + 1;
    } else {
        peca.value = parseInt(peca.value) - 1;
    }
}

function atualizaEstatiticas (peca) {
    estatistica.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
}

function trocarRobo () {
    console.log(contador);
    contador = contador + 1;

    if (contador >= robos.length) {
        contador = 0;
    }

    imagem.src = robos[contador]
}

