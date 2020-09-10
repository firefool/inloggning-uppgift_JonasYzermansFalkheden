
// Simpel användarklass med namn och lösenord
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

    // Undersöker först om det finns en användare med namnet som angivits genom att loopa igenom listan av användare
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
        // Om lösenordet stämmer så visar vi våran inloggad-display och sparar användarnamnet i localStorage
        if(users[userID].pass == passWord)
        {
            lStorage.setItem("Username", "test");
            switchDisplay("userDisplay");
        }
        // Annars visar vi våran försökigen-display
        else
        {
            switchDisplay("failDisplay");
        }
    }
    // Om användaren inte hittas visas också våran försökigen-display
    else
    {
        switchDisplay("failDisplay");
    }
}

// Funktion för att byta vad som ska visas upp på skärmen, tar emot tre olika sorters "displayer"
function switchDisplay(displayName)
{
    // Här hämtas våra tre olika display-divs 
    var loginDiv = document.getElementById("loginDisplay");
    var userDiv = document.getElementById("userDisplay");
    var failDiv = document.getElementById("loginFailedDisplay");

    // Här återställs alla textfält så att allt ser snyggt ut när vi byter display
    document.getElementById("loginMessage").innerText = "";
    document.getElementById("username").value = "";  
    document.getElementById("password").value = "";  

    // Baserat på vilken input funktionen fått så döjs och visas de relevanta sektionerna.
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

// Håller reda på alla våra knappar och vad som ska hända när dessa klickas
function buttons()
{
    // Loginknappen tar in våran input från textfälten och skickar vidare detta till våran login funktion.
    var loginButton = document.getElementById("login");
    loginButton.addEventListener("click", function buttonClick()
    {
        var userName_ = document.getElementById("username").value;
        var passWord_ = document.getElementById("password").value;
        login(userName_, passWord_);
    });

    // Logoutknappen, tömmer våran localStorage och byter till inloggningssidan igen
    var logoutButton = document.getElementById("logout");
    logoutButton.addEventListener("click", function logoutClick()
    {
        lStorage.clear();
        switchDisplay("loginDisplay");
    });

    // Försökigenknappen tar dig tillbaks till inloggningssidan
    var tryAgainButton = document.getElementById("tryagain");
    tryAgainButton.addEventListener("click", function tryAgainClick()
    {
        switchDisplay("loginDisplay");
    });
}


// Skapar våran testanvändare och lägger in denna i en array. Använder en array så vi kan lägga till flera användare i framtiden.
var testUser = new User("test", "1234");
let users = [testUser]

// Hämtar våran localStorage och kollar om det finns någon inloggad, visar sedan upp rätt display baserat på om du är inloggad eller inte. 
var lStorage = window.localStorage;
if(lStorage.getItem("Username"))
{
    switchDisplay("userDisplay")

}
else
{
    switchDisplay("loginDisplay")

}

//Kör våran buttons funktion
buttons();










