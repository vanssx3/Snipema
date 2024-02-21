//Time vars
const startTime = 5;
const time = 10;

//Makes a new cookie with an impossible time
function establishTimer() {
    document.cookie = ("timer="+ (time + 1));
}


//Starts a timer cookie when accountPage loads
function startTimer() {
    document.cookie = ("timer="+ time);
}

//Takes beginning of cookie (cname) and then returns the text that is after the name of the cookie, in other words the value of the cookie
//Ex: getCookie(turnip) will look for a cookie that starts with "turnip", turnip=10, then will return the value of turnip, 10
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//Every 100 ms the time cookie will be updated to reflect the time passing
function passTime() {
    let curTime = Math.floor(getCookie("timer"));
    setInterval(passTime2, 100);

    function passTime2() {
        curTime = (curTime - 0.100);
        document.cookie = ("timer=" + curTime);
    }
    
}

//Login button for accountPage
function loginButton() {
    //User login variables
    var user = document.getElementById("userInput").value;
    var password = document.getElementById("passwordInput").value;


    //Users that can be logged into (too lazy to use php :p)
    const users = ["Yorkiplier", "slimjimgod", "mrVampork96", "1337H4kr"];
    const emails = ["theyorker@gmail.com", "davidavid@gmail.com", "therealvampork@vampire.com", "a55crackers@tor.net"];
    const passwords = ["H3110everyone", "cant.teleport", "ColdRoom123", "archuserbtw"];


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

//Account creation page back button
function backButton() {
    window.location.href = "accountPage.html";
}

//Determine if the user successfully purchased the autograph or not
function judge() {
    let curTime = Math.floor(getCookie("timer"));
    if(curTime > time){
        // Activates if the cookie has an invalid time, achieved by skipping to successPage.html
        console.log("cheater");
        document.getElementById("outcome").innerHTML = "Something's not right!";
        document.getElementById("funnyloltext").innerHTML = "No autographs for you buddy!";
    } else if(curTime < 0){
        //Activates if the time cookie runs too low (noob)
        console.log("noob");
        document.getElementById("outcome").innerHTML = "Purchase failed, item is now out of stock";
        document.getElementById("funnyloltext").innerHTML = "Mald at the cool item you missed out on below";
    } else{
        //Activates if the time cookie is in the acceptable time range (pro)
        console.log("ggwp");
        document.getElementById("outcome").innerHTML = "You got the autograph!!!";
        document.getElementById("funnyloltext").innerHTML = "Shipping time: Eventually... (No refunds!)";
    }
}
