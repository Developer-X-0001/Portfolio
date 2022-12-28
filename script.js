var button = document.getElementById('moon')

function changeClass() {
    console.log(button.innerHTML)
    if (button.innerHTML == '<i class="fa fa-sun-o" aria-hidden="true"></i>') {
        document.body.classList.toggle('lightmode');
        document.body.classList.toggle('darkmode');
        document.getElementById('moon').innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
    } else if (button.innerHTML == '<i class="fa fa-moon-o" aria-hidden="true"></i>') {
        document.body.classList.toggle('darkmode');
        document.body.classList.toggle('lightmode');
        document.getElementById('moon').innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>';
    }
    
}