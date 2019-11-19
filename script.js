//Fonctionnalité 1 et 1-bis

let elementFooter = document.getElementsByTagName("footer");
let click_s_number = 0;


elementFooter[0].addEventListener("click", function(){
    click_s_number++;
    console.log(`click number ${click_s_number}`) 
});

// Fonctionnalité 2

let HamburgerMenu = document.querySelector('[data-target = "#navbarHeader"]');
let navbarHeader = document.getElementById("navbarHeader");

HamburgerMenu.addEventListener("click",function(){
    navbarHeader.classList.toggle("collapse");
});

// Fonctionnalité 3
let firstCard = document.getElementsByClassName("card")[0];
let ButtonEdit = document.querySelectorAll(".card .card-body .d-flex .btn-group button.btn-outline-secondary");
    ButtonEdit[0].addEventListener("click", function(){
        firstCard.style.color = "red";
    })

//  Fonctionnalité 4

let secondCard = document.getElementsByClassName("card")[1];
    ButtonEdit[1].addEventListener("click", function(){
        if (secondCard.style.color == "green"){
            secondCard.style.color = "";
        }
         else {
            secondCard.style.color = "green";
            }
    });

// Fonctionnalité 5

    let link = document.getElementsByTagName("link");
    let elementHeader = document.getElementsByClassName("navbar");
    elementHeader[0].addEventListener("dblclick", function(){
        if (link[0].disabled === true){
            link[0].disabled = false;
        } else {
            link[0].disabled = true;
        }
    });

// fonctionnalité 6

    let allCards = document.querySelectorAll('.card.mb-4.box-shadow');
    let buttonView = document.querySelectorAll(".card .card-body .d-flex .btn-group button.btn-success");

    for (let indexCard = 0; indexCard < buttonView.length; indexCard++){
        buttonView[indexCard].addEventListener('mouseover', function(){
            if (allCards[indexCard].childNodes[1].style.width !== "20%"){
                allCards[indexCard].childNodes[1].style.width = "20%";
                allCards[indexCard].childNodes[3].childNodes[1].style.display = "none";
            } else{
                allCards[indexCard].childNodes[1].style.width = "100%";
                allCards[indexCard].childNodes[3].childNodes[1].style.display = "block";
            }
        });
    }
        
// fonctionnalité 7 et 8
    let album = document.querySelector('.album.py-5.bg-light .container .row');
    let cardList = album.children;
    let Next = document.querySelectorAll(".jumbotron.text-center .container p a.btn.btn-secondary.my-2")[0];
    let temp;
    Next.addEventListener('click',function(){
        temp = cardList[cardList.length-1];
        cardList[cardList.length-1].remove();
        album.prepend(temp);
    })
    let Preview = document.querySelectorAll(".jumbotron.text-center .container p a.btn.btn-primary.my-2")[0];
    Preview.addEventListener('click',function(){
        temp = cardList[0];
        cardList[0].remove();
        album.append(temp);
    });

//fonctionnalité 9

let logo = document.querySelector("header div.navbar div.container a.navbar-brand");

logo.addEventListener('keypress', function(e) {
    
    let body = document.querySelector("body");
    if (e.key === "a") {
        console.log("vous avez appuyé sur la touche a");
        body.removeAttribute("class");
        body.classList.add("col-md-4");
    }
    if (e.key === "y") {
        console.log("Vous avez appuyé la touche y");
        body.removeAttribute("class");
        body.classList.add("col-md-4", "offset-md-4");
    }
    if (e.key === "p") {
        console.log("Vous avez appuyé la touche p");
        body.removeAttribute("class");
        body.classList.add("col-md-4", "offset-md-8");
    }
    if (e.key === "b") {
        console.log("Vous avez appuyé la touche b");
        body.removeAttribute("class");
    }
});

