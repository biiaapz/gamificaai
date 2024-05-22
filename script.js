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
    "primeiro-banner",
    "segundo-banner",
    "terceiro-banner"
]

let slideAtual = 0

banner.classList.add(slides[slideAtual])

function mostrarProximoSlide() {
    //remover o slide anterior
    banner.classList.remove(Slides[slideAtual])

    //somnar 1 na variavel SlideAtual
    slideAtual ++
    //mostrar slide de acordo com slide atual
    banner.classList.add(slides[slideAtual])
}
