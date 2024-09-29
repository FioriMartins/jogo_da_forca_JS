const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "T", "S", "U", "V", "W", "X", "Y", "Z"]
const palavras = [
    {
        "resposta": "JORNAL",
        "desc": "Eu tenho páginas, mas não sou livro. Você me lê para aprender sobre o que acontece no mundo."
    },
    {
        "resposta": "ELEVADOR",
        "desc": "Eu estou sempre subindo e descendo, mas nunca saio do lugar. O que sou?"
    },
    {
        "resposta": "TECLADO",
        "desc": "Eu tenho teclas, mas não sou piano. Eu tenho letras, mas não sou livro."
    },
    {
        "resposta": "PRIMO",
        "desc": "Eu sou um número que não pode ser dividido por mais nada além de mim mesmo e 1."
    },
    {
        "resposta": "VENTO",
        "desc": "Eu corro sem pernas e assobio sem boca. O que sou?"
    },
    {
        "resposta": "ESPONJA",
        "desc": "Eu sou cheio de buracos, mas seguro a água."
    },
    {
        "resposta": "LUA",
        "desc": "Eu sou redondo e brilhante, mas não sou o sol. Apareço à noite e mudo de forma."
    },
    {
        "resposta": "AVIAO",
        "desc": "Eu sou pequeno, leve, e viajo em grandes alturas. No entanto, posso derrubar algo muito maior que eu."
    }
]
const randomIndex = Math.floor(Math.random() * palavras.length)
const palavraEscolhida = palavras[randomIndex].resposta
const arrayPalavra = []
var vidasGastas = 4

document.addEventListener('DOMContentLoaded', palavraTratamento())

alfabeto.forEach((letra) => {
    document.querySelector('.botaos').innerHTML += `<div id="button" name="${letra}" onclick="letra('${letra}')">${letra}</div>`
})

for (let i = 1; i <= 3; i++) {
    document.querySelector('.vida').innerHTML += `<img src="assets/coração.png" id="heart${i}">`
}

function palavraTratamento() {
    for (let i = 0; i < palavraEscolhida.length; i++) {
        arrayPalavra.push('_')
    }
    document.querySelector('.texto').innerHTML += arrayPalavra.join('')
    document.querySelector('.charada').innerHTML = palavras[randomIndex].desc
}

function letra(letter) {
    let i = 0

    arrayPalavra.forEach((letr, index) => {
        if (letter == palavraEscolhida.charAt(index)) {
            arrayPalavra[index] = letter
        } else {
            i++
        }

        if (i === palavraEscolhida.length) {
            vidasGastas--

            document.querySelector('#heart' + vidasGastas).classList.add('morto')
        }
    })

    document.querySelector('.texto').innerHTML = arrayPalavra.join('')

    ganhou()
}

function ganhou() {
    if (arrayPalavra.join('') == palavraEscolhida) {
        alert('ganhou, vagabunda')
        location.reload(true)
    }

    if (vidasGastas == 1) {
        alert('perdeu mamon')
        location.reload(true)
    }
}