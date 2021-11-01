// Första lektion!!!!


// Hur man kallar på en div
document.getElementById ("div1").innerHTML = "<h1> Formulär<h1>"
// Hur man gör variablar av divar 
const firstname = document.getElementById("firstname")
let errorfirstname = document.getElementById("errorfirstname")
let lastname = document.getElementById("lastname")
let errorlastname = document.getElementById("errorlastname")
let email = document.getElementById("email")
let password = document.getElementById("password")
let confirmpassword = document.getElementById("confirm-password")


// Andra lektion!!


// // .trim() ====== tar bort mellanslag framför och efter

// // .replace('2', '3') ====== byter ut i dettafall två mot trea

// // .toLocaleLowerCase() ==== gör mindre

// // om man ska slå ihop två variablar + annan info 
// let firstname1 = " mary. ";
// let lastname1 = "wIkdahl ";

// let email1 = `${firstname1.replace('.','').trim()}${lastname1.toLocaleLowerCase().trim()}@hotmail.com`
// console.log(email1)

// // hur man gör en function
// function greeting () {
//     return `Welcome ${firstname1}`
// }
// console.log (greeting())
// // function för att printa i consolen

function printtoconsole (){
    console.log("FALSE")
}

// printtoconsole()

// callbackfuntion 

// const user= () => {
// if (true) {
//     // return false
//     printtoconsole()
// }
// else{
// return true
// }
// }
// console.log(user())

// // tredjelektionen!!!

// // Om man vill skriva fler saker i en variabel 
// let User = {
// name: "Mary",
// lastname: "Wikdahl",
// // om man vill slå ihop något från det egna objectet,
// //  måste man ha "this" och man måste göra det genom en metod "function"
// fullname: function() {
//     return `${this.name} ${this.lastname}`
// },
// age: 24,
// adress: {
//     street: "Oppegårdsvägen 30",
//     zipcode: 69232,
//     town: "Kumla"
// }
// }
// console.log (User) 
// console.log (User.fullname())

// kollar längden på firstname

function validateInput (input){
    if (firstname.lenght > 2)
  console.log(true)
else 
printtoconsole() 
}

validateInput();


// kollar om lösenorden är likadana 


// för att få felmeddelande

firstname.addEventListener("keyup", function(event){
    if (event.target.value.length < 2)
    errorfirstname.innerText ="förnamnet är för kort"
    else
    errorfirstname.innerText =""
}) 




lastname.addEventListener ("keyup", function(event){
    const name= "Namnet"
    if (event.target.value.length < 2)
    errorlastname.innerText =`${name} är för kort`
    else
    errorlastname.innerText =""
})



function confirmpasswords (password, confirmpassword){
    if (password == confirmpassword)
    console.log (true)
    else
    console.log (false)
}
confirmpasswords()



function comparevalue(password, confirmpassword){
    const error = document.getElementById(`errorpassword`)
        
    if (password !== confirmpassword)
    error.innerText= "Lösenorden matchar inte!"
    else 
    error.innerText= ""
}

confirmpassword.addEventListener("keyup", function(event) {
    const password = document.getElementById("password").value

    comparevalue(password, event.target.value)
})


document.getElementById("formulär").addEventListener("submit", function(e) {
    
     e.preventDefault()

     for (let element of e.target)
     console.log(element)
   
     switch(element.tagName) {
    case 'INPUT':
      
        break;
    case 'TEXTAREA':
        
        break;
}
})
function validateemail (element) {

    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(element.value)

}
document.getElementById("email").addEventListener("keyup" function (e){

    if (validateemail(e.target, 8))
    return this.innerText"hej"
    
})