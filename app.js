const username=document.getElementById("username-value");
const email=document.getElementById("email-value");
const password=document.getElementById("password-value");
const confirmPassword=document.getElementById("confirm-pvalue");
const form=document.getElementById("registration-form");


const showError=(elem,message)=>{
    const inputControl=elem.parentElement;
    const errorElem=inputControl.querySelector(".error");
    errorElem.innerText=message;
    elem.classList.add('error-elem');
    elem.classList.remove('success-elem');
}

const showSuccess=(elem)=>{
    elem.classList.remove('error-elem')
    elem.classList.add('success-elem');
    const inputControl=elem.parentElement;
    const errorElem=inputControl.querySelector(".error");
    errorElem.innerText="";
}

const isValidEmail=(email)=>{
    const emailReg= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailReg.test(email);
}
const validationCheck=()=>{
    //for username
    if(username.value.trim()===""){
        showError(username,"Username is required");
    }
    else{
        showSuccess(username);
    }
    
    //for email
    if(email.value.trim()===""){
        showError(email,"Email is required");
    }
    else if(!isValidEmail(email.value)){
        showError(email,"Enter a valid Email");
    }
    else{
        showSuccess(email);
    }

    //for password
    if(password.value.trim()==""){
        showError(password,"Password is reuired");
    }
    else if(password.value.length < 8){
        showError(password,"Password must be more that 8 characters");
    }
    else{
        showSuccess(password);
    }

    //for confirm password
    if(confirmPassword.value!==password.value){
        showError(confirmPassword,"Passwords don't match");
    }
    else{
        showSuccess(confirmPassword)
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    validationCheck();
});
