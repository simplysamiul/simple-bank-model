document.getElementById("logInButton").addEventListener("click",function(){
    // -------- Get User Email ----------------
    const userEmail = document.getElementById("emailInput");
    const userEmailValue = userEmail.value;
    // -------- Get User Password ----------------
    const userPassword = document.getElementById("passwordInput");
    const userPassValue = userPassword.value;
    
    if(userEmailValue === "samiul@howlader.com" && userPassValue === "1234"){
        window.location.href = "bank-account.html";
    }
    else{
        document.getElementById("errMessage").innerText = "Error : Check Your email and password !!";
    }
})