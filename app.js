const markBtn = document.querySelector(".mark-btn")
const numCount = document.querySelector(".numNotes")
const cards = document.querySelectorAll(".card")
const redDots = document.querySelectorAll(".unread-circle")

markBtn.addEventListener("click", () => {
    numCount.innerHTML = 0;
    markAsRead();
    hideRedDots();
})

function markAsRead() {
    cards.forEach((card) => {
        if (card.classList.contains("unread")) {
            card.classList.remove("unread")
        }
    })
}


function hideRedDots() {
    redDots.forEach((dot) => {
            dot.classList.add("hidden")
    })
}

