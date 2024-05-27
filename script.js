// alert("Hello Word!")
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")


function abreFechaMenu() {

    //menu fechado - tem a classe menu-fechado 
    //menu aberto - nao tem a classe menu-fechado

    //alterna a class "menu-fechado" no menu
    //menu.classList.toggle("menu-fechado")

    // se o menu contem a class menu-fechado
    if (menu.classList.contains("menu-fechado")) {
        ///abrir o menu - remover a classe menu-fechado
        menu.classList.remove("menu-fechado")


        //mostrar icones barrras
        iconeBarras.style.display = "none"

        // esconder o icone do x
        iconeX.style.display = "inline"

    } else {
        //fechar o menu - adicionar a classe menu-fechado
        menu.classList.add("menu-fechado")

        //mostrar icone do x
        iconeX.style.display = "none"

        //esconder o icone barras
        iconeBarras.style.display = "inline"
    }
}
if (window.innerWidth < 1300) {

}
onresize = () => {
    ///abrir o menu - remover a classe menu-fechado
    menu.classList.remove("menu-fechado")

    //mostrar icone barras
    iconeX.style.display = "inline"

    //esconder icone x
    iconeBarras.style.display = "none"
}

//carrossel
let banner = document.querySelector(".banner")

// let slides = [0, 1, 2]
//slides[0] -> primeiro-banner
//slides[1] -> segundo-banner
//slides[2] -> terceiro-banner
let slides = [
    "primeiro-banner",//0
    "segundo-banner",
    "terceiro-banner"
]

let slideAtual = 0

banner.classList.add(slides[slideAtual])

function mostrarProximoSlide() {
    //remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual < 2) {
        //somare variavel
        slideAtual++
    } else {
        //voltar para o primeiro banner
        slideAtual = 0
    }
    //mostrar slide de acordo com slide atual
    banner.classList.add(slides[slideAtual])

}

function mostrarSlideAnterior() {
    //remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual > 0) {
        slideAtual
        //subtarair 1 na variavel slideAtual
        slideAtual--
    } else {
        //voltar para o ultimo slide
        slideAtual = 2
    }

    //subtrair 1 na variavel slideAtual
    slideAtual--
    //mostara slide de acordo com slide atual
    banner.classList.add(slides[slideAtual])
}

function selecionarSlide(indiceSlide) {
    //remove o slide atual
    banner.classList.remove(slides[slideAtual])

    //atualiza a variavel com o indice de slides selecionado
    slideAtual = indiceSlide

    // mostra o slides selecionado e salvo na varial slideAtual
    banner.classList.add(slides[slideAtual])


}

// carregamento diamico dos cases
let listaCases = [

]

function renderizarCases() {
    //encontrar o elemento para inserir os cards
    let containerCards = document.querySelector(".container-cards")

    //variavel para guardar o html dos cases montados
    let template = ""
    //para cada case da listaCases
    listaCases.forEach(cardCase => {
        //mostrar o html do card, passando od atribuidos do case
        template += `<div class="card">
  <img src=${cardCase.imagem} alt="">
  <p>${cardCase.descricao}</p>
  <button>Ver mais</button>
</div>`
    })


    // inserir html dos cases montados no elemento container-cards
    containerCards.innerHTML = template
}

function carregarCases() {
    //metodo http get - read/leitura - server para mostrar um item ou uma lista de itens
    fetch("http://localhost:3000/cases")
        //deserialization - dessearializacao
        .then((resposta) => resposta.json())
        .then((dadostratados) => {
            console.log(dadostratados)
            listaCases = dadostratados
            renderizarCases()
        })
}

function solicitarOrcamento(event) {
    //pegar os valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-texto").value

    //organizar os valores em um objeto 
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    console.log(dadosForm);
    //enviar a requisicao para a API
    //metodo HTTP POST - creat/criar -> cadastrar um novo registro (solucoes)
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
        //CASO SUCESSO
        .then(resposta => {
            console.log(resposta);
            //limpar os inputs
            document.querySelector("#contato form").reset()

            //mostrar alert de sucesso
            alert("solicitacao enviada com sucesso!!!👍")   
        })
.catch(erro =>{
    console.log(erro)
     //mostrar alert com mensagem de erro
    alert("erro na requisição 😢")
})
    //CASO ERRO
   

event.preventDefalt()
}