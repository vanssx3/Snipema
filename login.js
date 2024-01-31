function loginButton() {
    //User login variables
    var user = document.getElementById("userInput").value;
    var password = document.getElementById("passwordInput").value;


    //Users that can be logged into (too lazy to use php :p)
    const users = ["Yorkiplier", "slimjimgod", "mrVampork96"];
    const emails = ["theyorker@gmail.com", "davidavid@gmail.com", "therealvampork@vampire.com"];
    const passwords = ["H3110everyone", "cant.teleport", "ColdRoom123"];


    function loginUser() {
        // console.log(user);
        // console.log(password);
        for (let i = 0; i < users.length; i++) {
            // console.log(users[i])
            // console.log(passwords[i])
            if (user == users[i]) {
                if (password == passwords[i]){
                    return 1;
                }
            }
        }
        for (let i = 0; i < emails.length; i++) {
            if (user == emails[i]) {
                if (password == passwords[i]){
                    return 1;
                }
            }
        }
    }

    function login() {
        if (loginUser() == 1) {
            window.location.href = "paymentPage.html"
        } else {
            document.getElementById("incorrectText").innerHTML = "Incorrect Username or Password. Try again!";
        }
    }

    login();
}

function checkPayment() {
    // List of numbers to check if the credit card number has only numbers
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    
    //User payment details 😈
    var cardNumber = document.getElementById("cardNumber").value;
    var dateNumber = document.getElementById("expireyDate").value;
    var cvvNumber = document.getElementById("cvv").value;
    var hasFailed = 0;

    function checkCardNumber(){
        for(let i = 0; i < cardNumber.length; i++) {
            if(cardNumber.length != (16)){
                hasFailed = 1;
                error(1);
            }
            if(cardNumber[i] != ("1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0")) {
                hasFailed = 1;
                error(1);
            }
        }
        if(hasFailed == 0){
            checkDate();
        }
    }  

    function checkDate() {
        //Expirey date values
        var expYear = Math.floor(dateNumber.substr(0, 4));
        var expMonth = Math.floor(dateNumber.substr(5, 2));
        var expDay = Math.floor(dateNumber.substr(8, 2));

        //Current date values
        const date = new Date();
        let curYear = date.getFullYear();
        let curMonth = date.getMonth() + 1;
        let curDay = date.getDate();

        if(curYear > expYear) {
            hasFailed = 1;
            error(2);
        } else if((curYear = expYear) && (curMonth > expMonth)) {
            hasFailed = 1;
            error(2);
        }
    }   

    function checkCVV() {
        if(cvvNumber.length != (3 || 4)){
            hasFailed = 1;
            error(3)
        }
    }

    function error(Error){
        if(Error == 1) {
            document.getElementById("incorrectText").innerHTML = "Invalid Card Number!";
        } else if(Error == 2) {
            document.getElementById("incorrectText").innerHTML = "Invalid Expirey Date!";
        } else if(Error == 3) {
            document.getElementById("incorrectText").innerHTML = "Invalid CVV!";
        }
    }

    checkCardNumber();
}
