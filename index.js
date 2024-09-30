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
    },
    {
        "resposta": "NUVEM",
        "desc": "Eu flutuo no céu e posso trazer chuva, mas não sou água. O que sou?"
    },
    {
        "resposta": "RELOGIO",
        "desc": "Eu faço tique-taque, mas não sou um animal. Eu marco o tempo, mas não sou um calendário."
    },
    {
        "resposta": "SOMBRA",
        "desc": "Eu sigo você onde quer que vá, mas sou invisível à luz. O que sou?"
    },
    {
        "resposta": "FOGO",
        "desc": "Eu posso aquecer, mas também queimar. Eu sou laranja e danço, mas não tenho pernas."
    },
    {
        "resposta": "GUITARRA",
        "desc": "Eu tenho cordas e posso tocar músicas, mas não sou uma orquestra. O que sou?"
    },
    {
        "resposta": "CAMA",
        "desc": "Eu sou macia e confortante, mas não sou um sofá. Você me usa para descansar."
    },
    {
        "resposta": "PASSARO",
        "desc": "Eu posso voar pelo céu e cantar, mas não sou um avião. O que sou?"
    },
    // {
    //     "resposta": "ARCO-ÍRIS",
    //     "desc": "Eu sou colorido e apareço depois da chuva, mas não sou uma pintura. O que sou?"
    // },  ERRO A SER CORRIGIDO
    {
        "resposta": "CARTÃO",
        "desc": "Eu sou pequeno e faço parte do seu bolso, mas não sou dinheiro. O que sou?"
    },
    {
        "resposta": "BOLHA",
        "desc": "Eu sou leve e posso flutuar, mas se você me tocar, estarei fora do lugar. O que sou?"
    },
    {
        "resposta": "LIVRO",
        "desc": "Eu sou cheio de histórias e conhecimento, mas não tenho vida. O que sou?"
    },
    {
        "resposta": "ARVORE",
        "desc": "Eu tenho raízes, mas não ando. Ofereço sombra e abrigo. O que sou?"
    },
    {
        "resposta": "RUA",
        "desc": "Eu conecto lugares e levo você a diferentes direções, mas não sou um mapa. O que sou?"
    },
    {
        "resposta": "FERRAMENTA",
        "desc": "Eu ajudo a construir ou consertar, mas não sou um trabalhador. O que sou?"
    },
    {
        "resposta": "BICICLETA",
        "desc": "Eu tenho duas rodas e pedais, mas não sou um carro. O que sou?"
    },
    {
        "resposta": "CIDADE",
        "desc": "Eu sou cheia de pessoas e prédios, mas não sou uma casa. O que sou?"
    },
    {
        "resposta": "ESTRELA",
        "desc": "Eu brilho no céu à noite, mas não sou o sol. O que sou?"
    },
    {
        "resposta": "CACHORRO",
        "desc": "Eu sou conhecido como o melhor amigo do homem. O que sou?"
    },
    {
        "resposta": "FLORES",
        "desc": "Eu sou colorido e cheiroso, mas não sou um perfume. O que sou?"
    },
    {
        "resposta": "CENOURA",
        "desc": "Eu sou laranja e cresço na terra, mas não sou uma batata. O que sou?"
    },
    {
        "resposta": "SANDUICHE",
        "desc": "Eu sou feito de pão e posso ter muitos recheios, mas não sou uma refeição completa. O que sou?"
    },
    {
        "resposta": "COMPUTADOR",
        "desc": "Eu sou uma máquina que processa informações, mas não sou um ser humano. O que sou?"
    },
    {
        "resposta": "TROVÃO",
        "desc": "Eu sou o som que vem depois do relâmpago, mas não sou uma música. O que sou?"
    },
    {
        "resposta": "PEIXE",
        "desc": "Eu vivo na água e posso nadar, mas não sou um mamífero. O que sou?"
    },
    {
        "resposta": "CÉU",
        "desc": "Eu sou azul durante o dia e cheio de estrelas à noite, mas não sou uma pintura. O que sou?"
    },
    {
        "resposta": "BANDA",
        "desc": "Eu sou um grupo de músicos que toca juntos, mas não sou um solo. O que sou?"
    },
    {
        "resposta": "TREM",
        "desc": "Eu sigo trilhos e posso levar muitas pessoas, mas não sou um ônibus. O que sou?"
    },
    {
        "resposta": "FUTEBOL",
        "desc": "Eu sou uma bola, mas não sou um brinquedo. Eu sou jogado em um campo, mas não sou um animal. O que sou?"
    },
    {
        "resposta": "SOL",
        "desc": "Eu brilho e dou luz ao dia, mas não sou uma lâmpada. O que sou?"
    },
    {
        "resposta": "MONTANHA",
        "desc": "Eu sou alta e imponente, mas não sou um prédio. O que sou?"
    }
]
const randomIndex = Math.floor(Math.random() * palavras.length)
const palavraEscolhida = palavras[randomIndex].resposta
const arrayPalavra = []
var vidasGastas = 4

document.addEventListener('DOMContentLoaded', palavraTratamento())

alfabeto.forEach((letra) => {
    document.querySelector('.botaos').innerHTML += `<input type="button" id="button" name="${letra}" onclick="letra('${letra}')" value="${letra}">`
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

    setTimeout(() => {ganhou ()}, 1500)
}

function ganhou() {
    if (arrayPalavra.join('') == palavraEscolhida) {
        alert('GANHOU!!!')
        location.reload(true)
        return false
    }

    if (vidasGastas == 1) {
        alert('PERDEU!!')
        location.reload(true)
        return false
    }
}

document.onkeyup=function(e){
    var e = e || window.event; 
    var letter = e.key

    letra (letter.toUpperCase())
}