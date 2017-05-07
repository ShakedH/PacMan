var Users;

// Initialize
$(document).ready(function ()
{
    Users =
        [
            {
                UserName: 'a',
                Password: 'a',
                FirstName: 'Test',
                Surname: 'Man',
                Email: 'a@a.com',
                BirthDate: '1990-01-01'
            },
            {
                UserName: 'test2017',
                Password: 'test2017',
                FirstName: 'Tests',
                Surname: 'Guy',
                Email: 'Test@2017.com',
                BirthDate: '2017-05-10'
            }
        ];

    var select = document.getElementById("FoodsSelect");
    for (var i = 50; i <= 90; i++)
        select.options[select.options.length] = new Option(i);
    select.selectedIndex = 0;
});

function OpenDiv(divID)
{
    // Close Other Divs
    $(".MainWinInformationDiv").css('visibility', 'hidden');
    document.getElementById(divID).style.visibility = 'visible';
}

function AddUser()
{
    var userName = $("#UserNameSignUp").get(0);
    VerifyUserName(userName);
    if (!userName.validity.valid)
        return false;

    var password = $("#PasswordSignUp").get(0);
    VerifyPassword(password);
    if (!password.validity.valid)
        return false;

    var firstName = $("#FirstNameSignUp").get(0);
    VerifyName(firstName);
    if (!firstName.validity.valid)
        return false;

    var surname = $("#SurnameSignUp").get(0);
    VerifyName(surname);
    if (!surname.validity.valid)
        return false;

    var Email = $("#EmailSignUp").get(0);
    VerifyEmail(Email);
    if (!Email.validity.valid)
        return false;

    var birthDate = $("#BirthDateSignUp").get(0);
    if (!birthDate.validity.valid)
        return false;


    var user = {
        UserName: userName.value,
        Password: password.value,
        FirstName: firstName.value,
        Surname: surname.value,
        Email: Email.value,
        BirthDate: birthDate.value
    };

    document.getElementById("SignUpForm").reset();
    Users.push(user);
    MessageToUser("Signed up successfully");
    UpdateCurrentUser(userName.value);
    StartGame();
    return true;
}

function Login()
{
    var userName = $("#UsernameLogin").get(0);
    var password = $("#PasswordLogin").get(0);

    VerifyUsernameLogin(userName);
    if (!userName.validity.valid)
        return false;

    VerifyPasswordLogin(password, GetUsers(userName.value)[0]);
    if (!password.validity.valid)
        return false;

    UpdateCurrentUser(userName.value);
    StartGame();
}

function UpdateCurrentUser(userName)
{
    document.getElementById("username").innerHTML = "Welcome, " + userName + "!";
}

function GetUsers(userName)
{
    return user = $.grep(Users, function (u)
    {
        return u.UserName === userName;
    });
}

function StartGame()
{
    OpenDiv('GameDiv');
    var canvas = document.getElementById("canvas");
    var div = document.getElementById("CanvasDiv");
    var ctx = canvas.getContext("2d");
    var canvasSize = Math.min(div.clientHeight, div.clientWidth);
    ctx.canvas.width = ctx.canvas.height = canvasSize;
    document.getElementById("lblScore").innerHTML = "0";
    document.getElementById("lblTime").innerHTML = "0";
}

function ChangeColorSelected(select)
{
    var color = select.options[select.selectedIndex].value;
    select.style.backgroundColor = color;
}

function FillFoodAmount(select)
{

}

//region Verification Functions
function ResetValidation(input)
{
    input.setCustomValidity("");
}

function VerifyUserName(textbox)
{
    var userName = textbox.value;
    if (!userName || userName == '')
        textbox.setCustomValidity('User Name is required');
    else if (!/^[a-z0-9]+$/i.test(userName)) // User name is not alpha numeric
        textbox.setCustomValidity('User name must contain letters or numbers only');
    else
    {
        var exists = Users.some(function (other)
        {
            return other.UserName === userName;
        });
        if (exists)
            textbox.setCustomValidity("User name already exists!");
        else
            textbox.setCustomValidity("");
    }
}

function VerifyPassword(textbox)
{
    var password = textbox.value;
    if (!password || password == '')
        textbox.setCustomValidity('Password is required');
    else if (!(/\d/.test(password)))
        textbox.setCustomValidity('Password must contain digits');
    else if (!(/[a-zA-Z]/.test(password)))
        textbox.setCustomValidity('Password must conatin english characters');
    else if (password.length < 8)
        textbox.setCustomValidity('Password must be at least 8 characters long');
    else
        textbox.setCustomValidity('');
}

function VerifyName(textbox)
{
    name = textbox.value;
    if (!name || name == '')
        textbox.setCustomValidity('First and surname are required');
    else if (!/^[a-zA-Z()]+$/.test(name))
        textbox.setCustomValidity('Name can must contain letters only');
    else
        textbox.setCustomValidity('');
}

function VerifyEmail(textbox)
{
    var email = textbox.value;
    if (!email || email == '')
        textbox.setCustomValidity('Email is required');
    else if (!/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{1,4}\b$/i.test(email))
        textbox.setCustomValidity('Please enter valid Email address');
    else
        textbox.setCustomValidity('');
}

function VerifyUsernameLogin(textbox)
{
    var userName = textbox.value;
    if (!userName || userName == '')
        textbox.setCustomValidity('User Name is required');
    else
    {
        var user = GetUsers(userName);
        if (user.length != 1)
            textbox.setCustomValidity("User name not exists!");
        else
            textbox.setCustomValidity("");
    }
}

function VerifyPasswordLogin(textbox, user)
{
    var password = textbox.value;
    var userPassword = user.Password;
    if (!password || password == '')
        textbox.setCustomValidity('Password is required');
    else if (password != userPassword)
        textbox.setCustomValidity('Incorrect password');
    else
        textbox.setCustomValidity('');
}
//endregion

function MessageToUser(message)
{
    window.alert(message)
}

function ErrorToUser(error)
{
    window.alert(error);
}