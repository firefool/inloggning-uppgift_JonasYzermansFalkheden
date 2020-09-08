
// Klass för användare
class User{
    constructor(name, pass)
    {
        this.name = name;
        this.pass = pass;
    }
}

// Login funktion
function login(userName, passWord)
{
    var userExists = false;
    var userID;

    // Undersöker först om det finns en användare med namnet som angivits
    for(i = 0; i < users.length; i++)
    {
        if(users[i].name == userName)
        {
            userExists = true;
            userID = i;
            break;
        }
    }

    // Om en användare hittas så kollar vi om lösenordet stämmer
    if(userExists)
    {
        if(users[userID].pass == passWord)
        {
            console.log("Success");
        }
        else
        {
            console.log("fail");
        }
    }
    else
    {
        console.log("no user detected");
    }
}

// Skapar våran testanvändare
var testUser = new User("test", "1234");

// Skapar en array med våran testanvändare, med en array kan vi lättare lägga till flera användare i framtiden
let users = [testUser]

var loginButton = document.getElementById("login");

loginButton.addEventListener("click", function buttonClick()
{
    var userName_ = document.getElementById("username").value;
    var passWord_ = document.getElementById("password").value;
    console.log("Tried to log in");
    console.log(userName_);
    console.log(passWord_);
    login(userName_, passWord_);
});






