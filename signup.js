const SIGNUP_FORM = document.getElementById('signup_t');
const USERNAME_S = document.getElementById('S_Name');
const USEREMAIL_S = document.getElementById('S_Email');
const USER_PASS_S = document.getElementById('S_Password');

function checkRequired_signup(inputs) {
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        error_(input, `${getName_signup(input)} field is required`);
    } else {
        success_signup(input);
      }
    });
  }
  
  function error_signup(input, message) {
    const parentOfInput = input.parentElement;
    const p = parentOfInput.querySelector("p");
    p.classList = 'error';
    p.innerHTML = message;
  }
  
  function success_signup(input) {
    const parentOfInput = input.parentElement;
    const p = parentOfInput.querySelector("p");
    p.classList = 'success';
    p.innerHTML = " ";
    console.log("s_runed")
  }

function getName_signup(input) {
  return input.getAttribute("data-name");
}

const check_name_signup = (e) => {
    const user_trim=e.value.trim();
    var usernameRegex = /^[a-zA-Z0-9_]{5,20}$/;

    if (e.value === "") {
      error_signup(e, `${getName_signup(e)} field is mandatory`);
    } else {
      if (!usernameRegex.test(user_trim)) {
        error_signup(e, "please try another username");
      } else {
        success_signup(e);
        return true;
      }
    }
  };

  String.prototype.isEmail_signup = function () {
    return !this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
  };
  
  const checkEmail_signup = (e) => {
    if (e.value === "") {
      error_signup(e, `${getName_signup(e)} field is mandatory`);
    } else {
      if (!!e.value.trim().isEmail_signup()) {
        error_signup(e, "This is not an valid email address");
      } else {
        success_signup(e);
        return true;
      }
    }
  };

  const check_password_signup = (e) => {
    const password_trim=e.value.trim();
    var passwordRegex = /^[a-zA-Z0-9]{1,10}[!@#$%^&*()_+=[\]{};':",.<>/?]{1,15}$/;

    if (e.value === "") {
      error_signup(e, `${getName_signup(e)} field is mandatory`);
    } 
    else {
      if (!passwordRegex.test(password_trim)) {
        error_signup(e, "please strong your password");
      } 
      else {
        success_signup(e);
        return true;
      }
    }
  }

SIGNUP_FORM.addEventListener('submit',function (e){
    e.preventDefault();

    checkRequired_signup=[USERNAME_S,USEREMAIL_S,USER_PASS_S];
    check_name_signup(USERNAME_S);
    checkEmail_signup(USEREMAIL_S);
    check_password_signup(USER_PASS_S);
    
        if(check_name_signup(USERNAME_S) && checkEmail_signup(USEREMAIL_S) && check_password_signup(USER_PASS_S)){
            const form_User_signup = new FormData(SIGNUP_FORM);
            console.log([...form_User_signup])
            fetch("http://localhost:8000/signup/",{
                method:"POST",
                mode:"cors",
                headers:{
                'content-type':'application/json',
                },
                body: form_User_signup,
            }).then((res)=>{
                if(!res.ok){
                    throw new Error('Network is not ok')
                }
                return res.json();
            }).then((data)=>{
               console.log(data)
            }).catch((e)=>{
               console.log(e)    
            });
        }
        SIGNUP_FORM.reset();
  });
  
