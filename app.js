let firstName = document.querySelector(".firstName");
let surname = document.querySelector(".surname");
let date = document.querySelector(".date");
let age = document.querySelector(".age");
let gender = document.querySelector("#gender");
let email = document.querySelector(".email");
let positions = document.getElementsByName("positions");
let lang = document.querySelectorAll(".language");
let password = document.querySelector(".pass")
let cPassword = document.querySelector(".confPass");
let form = document.querySelector("form");
let cardDisplay = document.querySelector(".showCard");
let card = document.querySelector(".card");
let cardName = document.querySelector(".cardName");
let cardBirthday = document.querySelector(".cardBirthday");
let cardEmail = document.querySelector(".cardEmail");
let cardAge = document.querySelector(".cardAge");
let cardPass = document.querySelector(".cardPass");
let cardClose = document.querySelector(".cardClose");
form.onsubmit = function(e){
    e.preventDefault();
    
    let informations = 
        {
            name:"", 
            surname:"",
            age:"",
            email:"",
            gender:"",
            positions:"",
            date:"",
            language:[],
            password:"",
    
        }
        informations.name = firstName.value;
        informations.surname = surname.value;
        informations.date = date.value;
        informations.age = age.value;
        informations.gender = gender.value;
        informations.email = email.value;
        positions.forEach(function(e){
            if (e.checked) {
                informations.positions = e.value
            }
        }) 
        lang.forEach(function(e){
            if (e.checked) {
                informations.language = e.value
            }
        }) 

        if(password.value == cPassword.value){
            informations.password = password.value
          console.log(informations);  
          form.reset(); 
        }else{
            alert("Passwords are not same.")
        }
        cardDisplay.addEventListener("click", function () {
            card.style.display = "block";
            cardAge.innerText = informations.age;
            cardName.innerText = `${informations.name} ${informations.surname}`;
            cardBirthday.innerText = informations.date;
            cardEmail.innerText = informations.email;
            cardPass.innerText = informations.password;
        });
        cardClose.addEventListener("click", function(){
            card.style.display = "none";
        })
}