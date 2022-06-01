//add state to list 
let state = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]

      
function getstate()
{
    var stateList = document.getElementById('stateList')
    for (let i = 0; i < state.length; i++) {
        var makeList = `
        <button class="statebtn" id="state${i}" value="${state[i]}" onclick="selectState(this.id)">${state[i]}</button>
        `
        stateList.innerHTML +=makeList
    }
    document.getElementById('stateList').style.display = 'block'
}

function selectState(id)
{
    document.getElementById('stateList').style.display = 'none'
    selectedState = document.getElementById(id).value
    document.getElementById('state').value = selectedState
}
function closeList()
{
    document.getElementById('stateList').style.display = 'none'
}
// check the password
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

// signin button action
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

//check number validation
function checkNumber(number)
{ 
        var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/; 
        return re.test(number);      
}

