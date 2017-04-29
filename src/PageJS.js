var DivsNames = ['SignUpDiv', 'LoginDiv'];
var Users;

// Initialize
$(document).ready(function ()
{
    Users = [{
        UserName: 'a',
        Password: 'a',
        FirstName: 'Test',
        Surname: 'Man',
        Email: 'a@a.com',
        BirthDate: '1990-01-01'
    }, {
        UserName: 'test2017',
        Password: 'test2017',
        FirstName: 'Tests',
        Surname: 'Guy',
        Email: 'Test@2017.com',
        BirthDate: '2017-05-10'
    }];
});

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
    var userName = $("#UserNameSignUp").get(0);
    VerifyUserName(userName);
    if (!userName.validity.valid)
        return;

    var password = $("#PasswordSignUp").get(0);
    VerifyPassword(password);
    if (!password.validity.valid)
        return;

    var firstName = $("#FirstNameSignUp").get(0);
    VerifyName(firstName);
    if (!firstName.validity.valid)
        return;

    var surname = $("#SurnameSignUp").get(0);
    VerifyName(surname);
    if (!surname.validity.valid)
        return;

    var Email = $("#EmailSignUp").get(0);
    VerifyEmail(Email);
    if (!Email.validity.valid)
        return;

    var birthDate = $("#BirthDateSignUp").get(0);
    VerifyBirthDate(birthDate);
    if (!birthDate.validity.valid)
        return;


    var user = {
        UserName: userName.val(),
        Password: password.val(),
        FirstName: firstName.val(),
        Surname: surname.val(),
        Email: email.val(),
        BirthDate: birthDate.val()
    };

    // Check if user already exists:
    var exists = Users.some(function (other)
    {
        return other.UserName === user.UserName;
    });
    if (exists)
        ErrorToUser("User name already exists!");
    else
    {
        document.getElementById("SignUpForm").reset();
        Users.push(user);
    }
}

function VerifyUserName(textbox)
{
    var userName = textbox.value;
    if (!userName || userName == '')
        textbox.setCustomValidity('User Name is required');
    else
        textbox.setCustomValidity('');
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
    else if (/\d/.test(name))
        textbox.setCustomValidity('Name can not contain digits');
    else
        textbox.setCustomValidity('');
}

function VerifyEmail(textbox)
{
    var email = textbox.value;
    if (!email || email == '')
        textbox.setCustomValidity('Email is required');
    else if (textbox.validity.typeMismatch)
        textbox.setCustomValidity('Please enter valid Email address');
    else
        textbox.setCustomValidity('');
}

function VerifyBirthDate(textbox)
{
    var dateText = textbox.value;
    if (!dateText || dateText == '')
        textbox.setCustomValidity('Birth Date is required');
    else
    {
        var comp = dateText.split('-');
        var m = parseInt(comp[0], 10);
        var d = parseInt(comp[1], 10);
        var y = parseInt(comp[2], 10);
        var date = new Date(y, m - 1, d);
        if (date.getFullYear() != y || date.getMonth() + 1 != m || date.getDate() != d)
            textbox.setCustomValidity('Invalid Birth date');
    }

}
function MessageToUser(message)
{
    window.alert(message)
}

function ErrorToUser(error)
{
    window.alert(error);
}