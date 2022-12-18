var elBox = document.querySelector(".box");
var elInput = document.querySelector(".input");
var elInput2 = document.querySelector(".input2");
var elBtn = document.querySelector(".btn");
var elTitle = document.querySelector(".title");

function kirish(){
    var login = elInput.value.length;
    var parol = elInput2.value.length;
    if(login >= 5 && parol >= 8){
        elTitle.textContent = "Xush Kelibsiz";
    }else{
        elTitle.textContent = "Login Xato"
    }
}