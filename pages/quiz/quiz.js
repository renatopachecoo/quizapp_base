import { trocarTema, verificarTema } from "../../helpers/tema-helper.js"


const botaoTema = document.querySelector(".tema button")

const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema)
})

verificarTema(body, botaoTema)

const assunto = localStorage.getItem("assunto")


function alterarAssunto(){
    const divIcon = document.querySelector(".assunto_icon")
    const iconeImg = document.querySelector(".assunto_icon img")
    const assuntoTitulo = document.querySelector(".assunto h1")

    divIcon.classList.add(assunto.toLowerCase())
    iconeImg.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`)
    iconeImg.setAttribute("alt", `icone de ${assunto}`)
    assuntoTitulo.innerHTML = assunto
}
alterarAssunto()