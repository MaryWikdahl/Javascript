const firstname = document.getElementById("firstname")
const errorfirstname= document.getElementById("errorfirstname")
const lastname = document.getElementById("lastname")
const email= document.getElementById("email")
const password = document.getElementById("password")
const confirmpassword = document.getElementById("confirmpassword")
const forms = document.querySelectorAll(".need-validation");

setEventListeners()
setselectorListener()
validatezipcode()
validatepassword()
validateAge()
populateSelector()
   
function minvalidvalue (value){
    const regex = /^.{2,}$/;
    if (!regex.test(value))
     return false
     else 
     return true
}


function validpassword (value){
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!regex.test(value))
        return false
    else 
        return true
}

function validatepassword(){
    confirmpassword.addEventListener("keyup", function(e){
    if (password.value !== confirmpassword.value){
 
    e.target.classList.add("is-invalid");
    document.getElementById(`${e.target.id}-error`).style.display= "block"
    checkvalidform(forms)
}
else {
    e.target.classList.remove("is-invalid");
    document.getElementById(`${e.target.id}-error`).style.display= "none"
    checkvalidform(forms)
}
    })
}

function validemail(value){
    const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(value))
        return false
    else 
        return true  
}

function validatezipcode (){
    const zipcode = document.getElementById("zipcode")

    zipcode.addEventListener("keyup", function(e){
    if (!minvalidvalue(e.target.value, 5)){
        e.target.classList.add("is-invalid");
        document.getElementById(`zipcode-error`).style.display= "block"
        checkvalidform(forms)
    }

    else {
     document.getElementById(`zipcode-error`).style.display= "none"
     } 
    })
  }


function setEventListeners() {
    forms.forEach(element => {
        switch(element.type) {
            case "text":
                element.addEventListener("keyup", function(e) { 
                    if(!minvalidvalue(e.target.value)) {
                        e.target.classList.add("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display= "block"
                        checkvalidform(forms)
                    }
                    else {
                        e.target.classList.remove("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display= "none"
                        checkvalidform(forms)
                    }
                })
                break;
                case "number":
                    element.addEventListener("keyup", function(e) { 
                        if(!minvalidvalue(e.target.value)) {
                            e.target.classList.add("is-invalid");
                            document.getElementById(`${e.target.id}-error`).style.display= "block"
                            checkvalidform(forms)
                        }
                        else {
                            e.target.classList.remove("is-invalid");
                            document.getElementById(`${e.target.id}-error`).style.display= "none"
                            checkvalidform(forms)
                        }
                    })
                    break;
            case "password":
            element.addEventListener("keyup", function(e) { 

                if(!validpassword(e.target.value)) {
                    e.target.classList.add("is-invalid");
                    document.getElementById(`${e.target.id}-error`).style.display= "block"
                    checkvalidform(forms)
                }
                else {
                    e.target.classList.remove("is-invalid");
                    document.getElementById(`${e.target.id}-error`).style.display= "none"
                    checkvalidform(forms)
                }
            })
            break;
            case "email":
            element.addEventListener("keyup", function(e) { 

                if(!validemail(e.target.value)) {
                    e.target.classList.add("is-invalid");
                    document.getElementById(`${e.target.id}-error`).style.display= "block"
                    checkvalidform(forms)
                }
                else {
                    e.target.classList.remove("is-invalid");
                    document.getElementById(`${e.target.id}-error`).style.display= "none"
                    checkvalidform(forms)
                }
            })
            break;
        }
    })
}



// populateYearSelector();
populateSelector("yearselector", 1921, 2021)
populateSelector("monthselector", 1, 12)
populateSelector("dayselector", 1, 31)


function populateSelector(selectorId, to, from){
    const selector = document.getElementById(selectorId);

    for(let i = to; i <= from; ++i) {  
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        selector.appendChild(option);
    }
}



function setselectorListener(){

const agevalidation = document.querySelectorAll(".agevalidation")
agevalidation.forEach(element => {
    element.addEventListener("change", function(e){
    validateAge()
    })
})
}


function validateAge (){
    const todayYear = new Date().getFullYear();
    const todayMonth = new Date().getMonth() + 1;
    const todayDay = new Date().getDate();

    const year =document.getElementById("yearselector").value
    const month =document.getElementById("monthselector").value
    const day =document.getElementById("dayselector").value
    if(isNaN(year) || isNaN(month) || isNaN(day) ) {
        return;
    }
    const birthDate = new Date(year, month, day);
    const currentDay = new Date(todayYear, todayMonth, todayDay);

     var userAge = dateDiffInDays(currentDay, birthDate) / 365.25; 
    if (userAge >= 18)
    { 
        document.getElementById('selector-error').style.display= "none"
    }
    else {
        document.getElementById('selector-error').style.display= "block"
    }
  
}

function dateDiffInDays(todaysDate, birthDate) {
    var difference = todaysDate.getTime() - birthDate.getTime();
    
    return difference / (1000 * 3600 * 24);
  }
 




