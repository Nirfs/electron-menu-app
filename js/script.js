import { getDish } from './fetch.js'

async function init() {
    const data = await getDish()

    LunchMenuList(data)
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
