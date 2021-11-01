document.getElementById("email").addEventListener("focus", function(e){

     document.getElementById("labelemail").style.color= "yellow"
     document.getElementById("labelemail").style.fontSize= "5px"

}) 

document.getElementById("message").addEventListener("blur", function(e){

    document.getElementById("message1").style.color= "yellow"
    document.getElementById("message1").style.fontSize= "5px"

}) 

function OnSubmit (e) {
    e.preventDefault()
    console.log("submitted")
}

function checkValidFormn (elements){
    elements.forEach(element => {
        switch(element.type){
            case "text";
            element.addEventListener("keyup" function(e){
        if (!ValidMinValue(e.target.value)) {
            e.target.classlist.add ("is-invalid");
            document.getElementsById (`${e.target.id}`).style.display ="block"
        }
        else {
                e.target.classlist.add("is-invalid)");
                document.getElementsById (`${e.target.id}-error`).style.display ="none"
             }
        
        })
        break;
    }

    })
}
// for (let element of e.target)
// switch(element.type){
//     case "text";
//     element.addEventListener("keyup" function(e)

// }
var form =document.querySelectorAll(".needs-validation");



form.forEach( element => {
    switch(element.type){
        case "text";
        element.addEventListener("keyup" function(e){
    if (!ValidMinValue(e.target.value)) {
        e.target.classlist.add ("is-invalid");
        document.getElementsById (`${e.target.id}`).style.display ="block"
    }
    else {
            e.target.classlist.add("is-invalid)");
            document.getElementsById (`${e.target.id}-error`).style.display ="none"
         }
    
    })
    break;
}




})




// den här funkar 


function checkvalueform (element => {
    let error =false 
elements.forEach(Element => {
    if (element.value === "")
    disabeld =true})

});
document.getElementsById ("knapp").disabeld =disabeld

    


})