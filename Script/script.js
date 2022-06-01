function CheckPassword(){
    Pass = document.getElementById('password').value
    ConfirmPass = document.getElementById('confirmpass').value
    if(Pass != ConfirmPass)
    {
      document.getElementById('passwordErr').style.visibility = 'visible'
      return false
    }
    else if(Pass == ConfirmPass)
    {
        document.getElementById('passwordErr').style.visibility = 'hidden'
        return true
    }
}


function SignUp(){
number = document.getElementById('MobileNumber').value
if(!checkNumber(number) || !CheckPassword())
{
    document.getElementById('invalidErr').style.visibility = 'visible'
    if(!checkNumber(number))
    {
        document.getElementById('numberErr').style.visibility = 'visible'
    }
    else{
        document.getElementById('numberErr').style.visibility = 'hidden'
    }

    if(!CheckPassword)
    {
        document.getElementById('passwordErr').style.visibility = 'visible'
    }
    else {
        document.getElementById('passwordErr').style.visibility = 'hidden'
    }
}
else{
    document.getElementById('invalidErr').innerHTML = 'Success'
    document.getElementById('invalidErr').style.visibility = 'visible'
    document.getElementById('passwordErr').style.visibility = 'hidden'
    document.getElementById('numberErr').style.visibility = 'hidden'
}

}
function checkNumber(number)
{ 
        var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/; 
        return re.test(number);      
}