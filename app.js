let h1 = document.querySelector('h1');
h1.innerHTML = "<span>"+ localStorage.getItem('somme') +"</span>" + " DHS"


let somme = document.querySelector('span');
let input = document.querySelector('#retrait');
let form = document.querySelector('form');
let error = document.querySelector('p');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(Number(somme.innerText) >= Number(input.value)) {
        somme.innerText = somme.innerText - input.value;
        localStorage.setItem('somme', Number(somme.innerText));
    } else {
        error.innerText = "Votre solde est insuffisant !";
        error.classList.add('text-danger')
    }
    input.value = "";
});