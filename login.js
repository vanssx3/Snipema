//User login variables
var user = document.getElementById("userInput");
var password = document.getElementById("passwordInput");


//Users that can be logged into (too lazy to use php :p)
const users = ["Yorkiplier", "slimjimgod", "mrVampork96"];
const emails = ["theyorker@gmail.com", "davidavid@gmail.com", "therealvampork@vampire.com"];
const passwords = ["H3110everyone", "cant.teleport", "ColdRoom123"];


function loginUser() {
    for (let i = 0; i < users.length; i++) {
        if (user == users[i]) {
            if (password == password[i]){
                return 1;
            }
        }
    }
    for (let i = 0; i < emails.length; i++) {
        if (user == emails[i]) {
            if (password == password[i]){
                return 1;
            }
        }
    }
}

function loginButton() {
    if (loginUser() == 1) {
        window.location.href = "paymentPage.html"
    } else {
        // Set text to incorrect credentials or something idk
    }
}


