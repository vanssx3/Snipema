function loginButton() {
    //User login variables
    var user = document.getElementById("userInput").value;
    var password = document.getElementById("passwordInput").value;


    //Users that can be logged into (too lazy to use php :p)
    const users = ["Yorkiplier", "slimjimgod", "mrVampork96"];
    const emails = ["theyorker@gmail.com", "davidavid@gmail.com", "therealvampork@vampire.com"];
    const passwords = ["H3110everyone", "cant.teleport", "ColdRoom123"];


    function loginUser() {
        console.log(user);
        console.log(password);
        for (let i = 0; i < users.length; i++) {
            console.log(users[i])
            console.log(passwords[i])
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
            document.getElementById("incorrectText").innerHTML = "Incorrect Password. Try again!";
        }
    }

    login();
}
