const telaJogo = document.getElementById('Jogo')

// Definir tamanho do tabuleiro
const divbtns = document.createElement('div')
divbtns.className = "row col-12"

const tipos = [ "facil", "médio", "dificil" ]
tipos.forEach(tipo =>{
    const div = document.createElement('div')
    div.className = "col"
    const btn = document.createElement('input')
    btn.type = "button"
    btn.className = "form-control btn"
    btn.name = tipo
    btn.value = tipo
    div.appendChild(btn)
    divbtns.appendChild(div)
})

telaJogo.appendChild(divbtns)

// Criar tabela

// Colocar Barcos

// Ataque

// Vitória

