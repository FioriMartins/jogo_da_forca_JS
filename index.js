const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "t", "s", "u", "v", "w", "x", "y", "z"]
const palavras = ["tiago", "jose"]
const palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)]
const arrayPalavra = []
var vidasGastas = 4

document.addEventListener('DOMContentLoaded', palavraTratamento())

alfabeto.forEach((letra) => {
    document.querySelector('.botaos').innerHTML += `<div class="button" onclick="letra('${letra}')">${letra}</div>`
})

for (let i = 1; i <= 3; i++) {
    document.querySelector('.vida').innerHTML += `<img src="assets/coração.png" id="heart${i}">`
}

function palavraTratamento() {
    for (let i = 0; i < palavraEscolhida.length; i++) {
        arrayPalavra.push('_')
    }
    document.querySelector('.texto').innerHTML += arrayPalavra.join('')
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

            document.querySelector('#heart'+vidasGastas).classList.add('morto')
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
    }
}