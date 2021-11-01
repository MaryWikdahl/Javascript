const email= document.getElementById('email')
const password= document.getElementById('password')
window.screen.width

if (window.screen.width >= 768){
    document.getElementById('signin').classList.add('border', 'bg-white', 'shadow')
    
}

function validatepassword(password){
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
if (regEx.test(password))
return true

return false
}


function validateemail(email){
    const regEx =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEx.test(email))
    return true

return false
}

function onSubmit(event) {
    event.preventDefault()
for (let element of event.target){
        switch(element.type) {
            case'email': 
            validateemail(elemet.value)
            break;

            case 'password':
                validatepassword(elemet.value)
            break;

        }
 }
}