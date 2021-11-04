import React, {useState} from 'react'

const Home = () => {

const valueHasMinLength = (value, errorHandler, errorMessage = "No good", minLen = 2) => 
{
    if(value.length < minLen){
        errorHandler(errorMessage);
        return;
    }
    errorHandler("");
}

const validateEmail = (value, errorHandler, errorMessage = "No good") => 
{
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!regEx.test(value)) 
    {
        errorHandler(errorMessage);
        return;
    }
    errorHandler("");
}


const [firstName, setfirstName] = useState ("")
const [firstNameError, setFirstNameError] = useState ("")
const firstNameHandler = (e) => {
    setfirstName(e.target.value)
    valueHasMinLength(e.target.value, setFirstNameError, "Förnamnet måste vara minst två tecken!");
}

const [lastName, setLastName] = useState ("")
const [lastNameError, setLastNameError] = useState ("")
const lastNameHandler =(e) => {
    setLastName(e.target.value)
    valueHasMinLength(e.target.value, setLastNameError, "Efternamnet måste vara minst två tecken!");
}

const [email, setEmail] = useState ("")
const [emailError, setEmailError] = useState ("")
const emailHandler =(e) => {
    setEmail(e.target.value)
    validateEmail(e.target.value, setEmailError, "Inkorrekt format på mejladressen")
}

const submithandler = async (e) => {
    e.preventDefault()

    if(firstNameError.length > 0 || lastNameError.length > 0 || emailError.length > 0) 
    {
        alert("Finns fortfarande valideringsfel på sidan!");
        return;
    }

    const reg = { firstName: firstName, lastName: lastName, email: email }
    
    const emptyFields = [];
    for (const key of Object.keys(reg)) {
        if(reg[key].length === 0)
        {
            emptyFields.push(key);
        }
    }

    const minaBokstaver = [ "a", "b", "c" ]
    if(emptyFields.length > 0)
    {
        alert(`Fälten ${emptyFields.join(', ')} kan inte lämnas tomt`);
        return;
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reg)
    };
    const result = await fetch('https://ecexam-webapi.azurewebsites.net/api/customers', requestOptions)

    console.log("Postade! med resultat", result);
}

    return (

    <form id="myForm" className="container col-6">
    <h2 className="d-flex align-items-center">BLI MEDLEM</h2>
    <small>Bli medlem — missa inte erbjudanden, rabatter och bonuscheckar.</small>
    <div>
    <label className=" mt-3"  htmlFor="firstname">Förnamn*</label> 
    <input type="text" id="firstname" placeholder=""  className="form-control need-validation" value={firstName} onChange={firstNameHandler}/>
    <div style={{display:'block'}} id="firstname-error" className="text-danger mb-3 ms-2"> <small>{firstNameError}</small></div>
    <label className=" mt-3"  htmlFor="lastname">Efternamn*</label>
    <input type="text" id="lastname" placeholder="" className="form-control need-validation" value={lastName} onChange={lastNameHandler}/>
    <div style={{display:'block'}} id="lastname-error" className="text-danger mb-3 ms-2"> <small>{lastNameError}</small></div>
    <label className=" mt-3"  htmlFor="email">E-postadress*</label>
    <input type="email" id="email" placeholder="" className="form-control need-validation"value={email} onChange={emailHandler}/>
    <div style={{display:'block'}} id="email-error" className="text-danger mb-3 ms-2"> <small>{emailError}</small></div>
    <button onClick={submithandler} className="btn btn-secondary col-12 mt-4 submit">BLI MEDLEM</button>
<small>Genom att skapa konto godkänner du våra medlemsvillkor och integritetspolicy.</small>            
            </div>
            </form>
      
    )
}

export default Home
