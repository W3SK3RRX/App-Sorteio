const buttonSortear = document.querySelector(".botaoSortear")
const textarea = document.querySelector("textarea")
const tagResultado = document.querySelector(".resultado p")
const popUpResultado = document.querySelector(".resultado")
const buttonFechar = document.querySelector(".fechar")

function pegarDadosFormulario(){
    const valorCampo = textarea.value
    const listaNomes = valorCampo.split(",")
    const tamanhoVetor = listaNomes.length
    const posicaoNome = gerarNumero(tamanhoVetor)
    const nome = listaNomes[posicaoNome]

    mostrarResultado(nome)

    textarea.value = ""
}

buttonSortear.addEventListener("click", pegarDadosFormulario)

function gerarNumero(tamanhoVetor){
    return Math.floor(Math.random() * (tamanhoVetor - 0) + 0)
}

function mostrarResultado(nome){
    
    tagResultado.innerText = `Resultado: ${nome}`
    popUpResultado.classList.add("mostrarResultado")
}

function fecharPopUp(){

    popUpResultado.classList.remove("mostrarResultado")
}
buttonFechar.addEventListener("click", fecharPopUp)




