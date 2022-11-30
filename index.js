
const mySwitch = document.getElementById('flexSwitchCheckDefault');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');

const darkTheme = ['navbar-dark','bg-dark','text-light']
const darkThemeHeader = ['bg-black','text-light']



//  btn initialization
const  searchBtn = document.getElementById('searchBtn');
const  searchBlog = document.getElementById('searchBlog');

mySwitch?.addEventListener("click", ()=>{
    if(mySwitch.checked === true){
          navbar.classList.add(...darkTheme);
          header.classList.add(...darkThemeHeader)
    }
    else{
        navbar.classList.remove(...darkTheme);
        header.classList.remove(...darkThemeHeader)

    }
} )


//  search btn form 


searchBtn?.addEventListener("click",()=>{
    searchBlog.classList.toggle('d-none')
})





//  register formData

function onSubmit(){
    var inp = document.getElementsByClassName('form-control');           
    
};


// Register.html
//making  password visible onClick

function makeVisible(){
    const passwordInp = document.getElementById("password");


   if(passwordInp.getAttribute("type") === "password"){
          passwordInp.setAttribute("type" ,"text");
   }else{
          passwordInp.setAttribute("type","password");
   }
};

function makeVisibleConfirm(){
    const c_passwordInp = document.getElementById("confirmPassword");

    if(c_passwordInp.getAttribute("type") === "password"){
        c_passwordInp.setAttribute("type" ,"text");
       }else{
        c_passwordInp.setAttribute("type","password");
       }
}
