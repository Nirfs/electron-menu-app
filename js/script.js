import { getDish } from './fetch.js'

async function init() {
    const data = await getDish()

    LunchMenuList(data)
    ListCourse(data)
}

init()

function LunchMenuList(data){
    const btn_lunch = document.querySelector(".btn_lunch")
    const textBalises = document.querySelectorAll(".text_plat")

    btn_lunch.addEventListener("click", () => {
        let nouvelleListe = [...data]

        textBalises.forEach(text => {
            const random = Math.floor(Math.random() * nouvelleListe.length)
            const platChoisi = nouvelleListe[random]
            
            text.textContent = platChoisi.plat
            nouvelleListe.splice(random, 1)
        })
    })
}

function ListCourse(data) {
    const btn_liste = document.querySelector(".btn_list")

    btn_liste.addEventListener("click", () => {
        const platsChoisis = Array.from(document.querySelectorAll(".text_plat"))
                                  .map(p => p.textContent.trim())
        const recettesFiltrees = data.filter(d => platsChoisis.includes(d.plat))
        const listeIngredients = recettesFiltrees.flatMap(d => d.liste)
        const listeUnique = [...new Set(listeIngredients)]

        const modalOverlay = document.createElement("div")
        modalOverlay.classList.add("modal-overlay")

        const modalBox = document.createElement("div")
        modalBox.classList.add("modal-box")

        const title = document.createElement("h2")
        title.textContent = "Liste de courses"
        modalBox.appendChild(title)

        const ul = document.createElement("ul")
        listeUnique.forEach(item => {
            const li = document.createElement("li")
            li.textContent = item
            ul.appendChild(li)
        })
        modalBox.appendChild(ul)

        const btnClose = document.createElement("button")
        btnClose.textContent = "Fermer"
        btnClose.classList.add("btn-close-modal")
        btnClose.addEventListener("click", () => {
            document.body.removeChild(modalOverlay)
        })

        modalBox.appendChild(btnClose)
        modalOverlay.appendChild(modalBox)
        document.body.appendChild(modalOverlay)
    })
}
