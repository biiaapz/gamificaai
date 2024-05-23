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

    if(slideAtual < 2) {
        //somare variavel
        slideAtual++
    } else{
        //voltar para o primeiro banner
        slideAtual = 0
    }
    //mostrar slide de acordo com slide atual
    banner.classList.add(slides[slideAtual])

}

 function mostrarSlideAnterior(){
    //remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual > 0) {
        slideAtual
        //subtarair 1 na variavel slideAtual
        slideAtual--
    }else {
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