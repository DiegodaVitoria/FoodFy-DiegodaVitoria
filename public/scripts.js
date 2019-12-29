const modalOverlay = document.querySelector('.modal-overlay')

const cards = document.querySelectorAll('.card')
const flips = document.querySelectorAll('.flip')


// evento adicionado para abrir modal
for (let flip of flips) {
    flip.addEventListener("click", function(){
        modalOverlay.classList.add('active')
    })
}

// evento que remove a class= "ex: remove active to class"
document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})

// evento adicionado para mudança de pagina
for (let card of cards) {
    card.addEventListener("click", function(){
        window.location.href = "modulo"
    })
}


