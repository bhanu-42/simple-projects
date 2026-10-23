function fadein(){
    document.getElementById("img").style.opacity="1";
}
function fadeout(){
    document.getElementById("img").style.opacity="0";
}
function zoomin(){
    document.getElementById("img").style.width="400px";
}
function zoomout(){
    document.getElementById("img").style.width="300px";
}

//select the email input
const emailinput = document.getElementById("email");

//Add event listener for input change
emailinput.addEventListener('input', function(){

    //get the value of the email input 
    const emailvalue= emailinput.ariaValueMax.trim();

    //Validate email format using a simplified regular expressioin
    const emailRegex = /@.*\.com$/;
    if(!emailRegrex.test(emailvalue)){
        //if email format is invalid, display error message
        emailinput.setCustomValidity('Enter a valid email address')
    }else{
        //if email format is valid, clear error message
        emailinput.setCustomValidity('');

    }
    });
