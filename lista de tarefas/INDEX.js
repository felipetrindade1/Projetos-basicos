const input = document.querySelector('.input1')
const lista = document.querySelector('.lista-container')
const btnTarefa = document.querySelector('.btnTarefa')

function CriaLi() {
    const li = document.createElement('li')
    li.style.display = 'flex'
    li.style.gap = '5px'
    li.style.marginBottom = '5px'
    return li;
}

input.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!input.value) return;
        criaTarefa(input.value)

    }
})
function criaTarefa() {
    const li = CriaLi()
    li.innerHTML = input.value
    lista.appendChild(li)
    limpaTarefa()
    adicionaBotao(li)
    
}
btnTarefa.addEventListener('click', function (e) {
    if (!input.value) return;
    criaTarefa(input.value)
    
})

function limpaTarefa() {
    input.value = ''
    input.focus()
}

function adicionaBotao (li) {
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('Tittle', 'Apagar esta tarefa')
    li.appendChild(botaoApagar)
}

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
    }

})

