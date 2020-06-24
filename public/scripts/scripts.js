const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function(){
        const imgId = card.getAttribute("id");
        const title = card.querySelector("h2").textContent;
        const author = card.querySelector("p").textContent;
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `../public/assets/${imgId}.png`;
        modalOverlay.querySelector('h2').innerHTML = title
        modalOverlay.querySelector('p').innerHTML = author
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})
