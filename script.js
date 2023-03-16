const userName = document.getElementById('Name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const t_Event = document.getElementById('t-Event');
const attend = document.getElementById('attend');
const date = document.getElementById('date');
const form = document.getElementById('form');

function checkRequired(inputs){
     inputs.forEach((input)=>{
          if(input.value.trim()=== ""){
               error(input,`${getName(input)}field is required`)
          }else{
               success(input)  
          } 
     })
}

function error(input,message){
     const parentOfInput = document.parentElement;
     parentOfInput.classList = "form-control no-outline error";
     const p = parentOfInput.querySelector('p');
     p.innerHTML = message;
}

function success(input){
     const parentOfInput = document.parentElement;
     parentOfInput.classList = "form-control no-outline success";
     const p = parentOfInput.querySelector('p');
     p.innerHTML = ""
}

function getName(input){
     return input.getAttribute("data-name");
}

form.addEventListener('submit',(e)=>{
     e.preventDefault();

     checkRequired([userName,email,number,t_Event,attend,date,form]);

})
