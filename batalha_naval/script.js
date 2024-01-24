const telaJogo = document.getElementById('Jogo')

// Definir tamanho do tabuleiro
const divbtns = document.createElement('div')
divbtns.className = "row col-12"
let tamanho = 0

const tipos = [ "facil", "médio", "dificil" ]
tipos.forEach(tipo =>{
    const div = document.createElement('div')
    div.className = "col"
    const btn = document.createElement('input')
    btn.type = "button"
    btn.className = "form-control btn"
    btn.name = tipo
    btn.value = tipo

    btn.addEventListener('click', function(){
        switch(tipo){
            case "facil":
                tamanho = 8
                break
            case "médio":
                tamanho = 10
                break
            case "dificil":
                tamanho = 13
                break
        }
        console.log(tamanho)
        divbtns.remove()
        criarTabela(tamanho)

    })
    div.appendChild(btn)
    divbtns.appendChild(div)
})

telaJogo.appendChild(divbtns)

// Criar tabela
function criarTabela(tamanho){
    const divTable = document.createElement('div')
    for (let i = 0; i < tamanho; i++) {
        const row = document.createElement('div')
        row.className = "row"
        for (let j = 0; j < tamanho; j++) {
            const cell = document.createElement('div')
            cell.className = 'cell col'
            cell.dataset.row = i
            cell.dataset.col = j
            row.appendChild(cell)
        }
        divTable.appendChild(row)
    }
    telaJogo.appendChild(divTable)
}

// Colocar Barcos

// Ataque

// Vitória

