
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

    // Om något fält är tomt så skrivs ett felmeddelande ut
    if(userName == "" || passWord == "")
    {
        document.getElementById("loginMessage").innerText = "Du glömde något!";
        return;
    }

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
            loggedIn = true;           
            lStorage.setItem("Username", "test");
            lStorage.setItem("LoggedIn", "True");
            switchDisplay("userDisplay");
        }
        else
        {
            switchDisplay("failDisplay");
        }
    }
    else
    {
        switchDisplay("failDisplay");
    }
}

// Funktion för att byta vad som ska visas upp på skärmen, tar emot tre olika sorters "displayer"
function switchDisplay(displayName)
{
    var loginDiv = document.getElementById("loginDisplay");
    var userDiv = document.getElementById("userDisplay");
    var failDiv = document.getElementById("loginFailedDisplay");
    document.getElementById("loginMessage").innerText = "";
    document.getElementById("username").value = "";  
    document.getElementById("password").value = "";  

    if(displayName == "loginDisplay")
    {
        userDiv.style.display = "none";
        loginDiv.style.display = "block";
        failDiv.style.display = "none";
    }
    if(displayName == "userDisplay")
    {
        userDiv.style.display = "block";
        loginDiv.style.display = "none";
        failDiv.style.display = "none"; 
        document.getElementById("welcomeText").innerText = "Välkommen in, " + lStorage.getItem("Username") + "!";   
    }
    if(displayName == "failDisplay")
    {
        userDiv.style.display = "none";
        loginDiv.style.display = "none";
        failDiv.style.display = "block";
    }
}

// Skapar våran testanvändare
var testUser = new User("test", "1234");
// Skapar en array med våran testanvändare, med en array kan vi lättare lägga till flera användare i framtiden
let users = [testUser]
var loggedIn = false;
var currentUser = "";
var lStorage = window.localStorage;

if(lStorage.getItem("LoggedIn") == "True")
{
    loggedIn = true;
    currentUser = lStorage.getItem("Username");
}
else
{
    currentUser = "";
    loggedIn = false;
}

if (loggedIn)
{
    switchDisplay("userDisplay")
}
else
{
    switchDisplay("loginDisplay")
}

var loginButton = document.getElementById("login");
loginButton.addEventListener("click", function buttonClick()
{
    var userName_ = document.getElementById("username").value;
    var passWord_ = document.getElementById("password").value;
    login(userName_, passWord_);
});

var logoutButton = document.getElementById("logout");
logoutButton.addEventListener("click", function logoutClick()
{
    loggedIn = false;
    lStorage.clear();
    switchDisplay("loginDisplay");
});

var tryAgainButton = document.getElementById("tryagain");
tryAgainButton.addEventListener("click", function tryAgainClick()
{
    switchDisplay("loginDisplay");
});









