// accountPage button function
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

// paymentPage button function
function checkPayment() {
    // List of numbers to check if the credit card number has only numbers
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    
    //User payment details 😈
    var cardNumber = document.getElementById("cardNumber").value;
    var dateNumber = document.getElementById("expireyDate").value;
    var cvvNumber = document.getElementById("cvv").value;
    var hasFailed = 0;

    function checkCardNumber() {
        if(cardNumber.length != (16)){
            if(cardNumber.length != (15)){
                console.log("length error");
                hasFailed = 1;
                error(1);
            }
        }
        for(let i = 0; i < cardNumber.length; i++) {
            let fails = 0;
            for(let j = 0; j < numbers.length; j++) {
                if(cardNumber.charAt(i) == numbers[j]){
                    fails++;
                }
                if(fails == 10) {
                    console.log("number error");
                    hasFailed = 1;
                    error(1);
                }
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

        //Current date values
        const date = new Date();
        let curYear = date.getFullYear();
        let curMonth = date.getMonth() + 1;

        if(curYear > expYear) {
            console.log("failed year");
            hasFailed = 1;
            error(2);
        } else if((curYear == expYear) && (curMonth > expMonth)) {
            console.log("failed month");
            hasFailed = 1;
            error(2);
        } else if(hasFailed == 0) {
            checkCVV();
        }
    }   

    function checkCVV() {
        if(cvvNumber.length != (3 || 4)) {
            console.log("failed cvv length");
            hasFailed = 1;
            error(3);
        } else if(cvvNumber.length == 3) {
            if(cardNumber.length != 16) {
                console.log("cvv doesnt match number1")
                hasFailed = 1;
                error(3);
            }
        } else if(cvvNumber.length == 4) {
            if(cardNumber.length != 15) {
                console.log("cvv doesnt match number2")
                hasFailed = 1;
                error(3);
            }
        }
        console.log(hasFailed);
        if(hasFailed == 0) {
            console.log("success :3");
            window.location.href = "successPage.html";
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
