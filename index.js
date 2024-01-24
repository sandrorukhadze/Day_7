let inputElement = document.getElementById('listelement')
let btnAdd = document.getElementById('btn-add')
let ulElement = document.getElementById('ul-element')
let deleteElements = document.getElementById('deleteBtn')
let formElement = document.getElementById('form-element')


    formElement.addEventListener("submit", function(e){
    e.preventDefault();
    let userInputValue = inputElement.value;
    if (userInputValue === " ") {       
         return;
    }
    let liElement = document.createElement('li');
    liElement.textContent = userInputValue;

    let deleteBtn=document.createElement('button')
    deleteBtn.classList.add('fa-solid','fa-person-circle-minus')
    //deleteBtn.innerText = 'წაშლა'
    deleteBtn.addEventListener('click', function(){
    liElement.remove();
    })

    liElement.appendChild(deleteBtn);
    ulElement.appendChild(liElement);
    inputElement.value = " ";
    });

    deleteElements.addEventListener('click', function () {
    ulElement.innerHTML = " ";

    });


///------

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    hamburger.addEventListener("click", mobileMenu);
    
    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

   

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


///

const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}