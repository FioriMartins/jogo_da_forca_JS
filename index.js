const alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","t","s","u","v","w","x","y","z"]
const palavras = ["tiago", "jose"]
const palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)]
const arrayPalavra = []

document.addEventListener('DOMContentLoaded', palavraTratamento())

alfabeto.forEach((letra) => {
    document.querySelector('.botaos').innerHTML += `<div class="button" onclick="letra('${letra}')">${letra}</div>`
})

function palavraTratamento () {
    for (let i = 0; i < palavraEscolhida.length; i++) {
        arrayPalavra.push('_')
    } 
    document.querySelector('.texto').innerHTML += arrayPalavra.join('')

    const palavraUsu = document.querySelector('.texto').innerHTML
    console.log(arrayPalavra.join(''))
}

function letra (letter) {
    let libidgel = letter

    arrayPalavra.forEach((letr, index) => {
        if (letter == palavraEscolhida.charAt(index)) {
            arrayPalavra[index] = letter
        } 
    })

    document.querySelector('.texto').innerHTML = arrayPalavra.join('')

    ganhou()
}

function ganhou () {
    arrayPalavra.forEach((letr, index) => {
        if (arrayPalavra.join('') == palavraEscolhida) {
            alert('ganhou, vagabunda')
        }
    })
}