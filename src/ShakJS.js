var DivsNames = ['SignUpDiv', 'LoginDiv'];
var Users;

window.onload = InitPage;

function InitPage()
{
    ErrorToUser("Init");
    Users = [{
        UserName: 'a',
        Password: 'a',
        FirstName: 'test',
        Surname: 'man',
        Email: 'a@a.com',
        BirthDate: '1990-01-01'
    }];
}

function openNav()
{
    document.getElementById("sideNavBar").style.width = "250px";
}

function closeNav()
{
    document.getElementById("sideNavBar").style.width = "0";
}

function OpenDiv(divID)
{
    // Close Other Divs
    DivsNames.forEach(function (divName)
    {
        if (document.getElementById(divName) !== null && divName != divID)
            document.getElementById(divName).style.visibility = 'hidden';
    });
    document.getElementById(divID).style.visibility = 'visible';
}

function AddUser()
{
    var userName = document.getElementById("UserNameSignUp").value;
    var password = document.getElementById("PasswordSignUp").value;
    var firstName = document.getElementById("FirstNameSignUp").value;
    var surname = document.getElementById("SurnameSignUp").value;
    var email = document.getElementById("EmailSignUp").value;
    var birthDate = document.getElementById("BirthDateSignUp").value;

    document.getElementById("SignUpForm").reset();

    var user = {
        UserName: userName,
        Password: password,
        FirstName: firstName,
        Surname: surname,
        Email: email,
        BirthDate: birthDate
    }
    // Check if user already exists:
    var exists = Users.some(function (other)
    {
        return other.Email === user.Email;
    });
    if (exists)
        ErrorToUser("Email already used!");
    else
        Users.push(user);
}

function MessageToUser(message)
{
    window.alert(message)
}

function ErrorToUser(error)
{
    window.alert(error);
}