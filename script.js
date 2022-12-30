var button = document.getElementById('moon')

function changeClass() {
    if (document.body.classList.contains('lightmode')) {
        document.body.classList.toggle('lightmode')
        document.body.classList.toggle('darkmode')
        button.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>'
    } else if (document.body.classList.contains('darkmode')) {
        document.body.classList.toggle('darkmode')
        document.body.classList.toggle('lightmode')
        button.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>'
    } 
}
window.onload = () => {
    document.getElementById('ratingbox').classList.toggle('showRatings')
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.toggle('darkmode')
        button.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>'
    } else {
        document.body.classList.toggle('lightmode')
        button.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>'
    }
}

function showRating() {
    document.getElementById('ratingbox').classList.toggle('showRatings')
    document.getElementById('mainCont').classList.toggle('showRatings')
}
function ratingBack() {
    document.getElementById('mainCont').classList.toggle('showRatings')
    document.getElementById('ratingbox').classList.toggle('showRatings')
}