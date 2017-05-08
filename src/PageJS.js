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

    SetValidation();
});

//<editor-fold desc="Validations">
function SetValidation()
{
    SetCustomValidationFunctions();
    SetValidationErrorDesign();
    SetSignUpValidator();

    SetSignUpValidator();
}

function SetCustomValidationFunctions()
{
    $.validator.addMethod("UserExists", function (userName)
    {
        var exists = Users.some(function (other)
        {
            return other.UserName === userName;
        });
        return !exists;
    }, "User name already exists!")

    $.validator.addMethod("AlphaNumeric", function (username)
    {
        return /^[a-z0-9\-\s]+$/i.test(username);
    })

    $.validator.addMethod("NumsAndChars", function (password)
    {
        if (!(/\d/.test(password)))
            return false;
        else if (!(/[a-zA-Z]/.test(password)))
            return false;
        return true;
    }, "Password must contain letters and numbers")

    $.validator.addMethod("OnlyLetters", function (name)
    {
        return /^[a-z]+$/i.test(name);
    }, "Name must contain only letters")
}

function SetValidationErrorDesign()
{
    $('input[type="text"]').tooltipster({ //find more options on the tooltipster page
        trigger: 'custom', // default is 'hover' which is no good here
        position: 'right',
        animation: 'grow'
    });
    $('input[type="password"]').tooltipster({ //find more options on the tooltipster page
        trigger: 'custom', // default is 'hover' which is no good here
        position: 'right',
        animation: 'grow'
    });
    $('input[type="email"]').tooltipster({ //find more options on the tooltipster page
        trigger: 'custom', // default is 'hover' which is no good here
        position: 'right',
        animation: 'grow'
    });
    $('input[type="date"]').tooltipster({ //find more options on the tooltipster page
        trigger: 'custom', // default is 'hover' which is no good here
        position: 'right',
        animation: 'grow'
    });
}

function SetSignUpValidator()
{

    $("form[name='SignUp']").validate(
        {
            rules: {
                username: {
                    required: true,
                    AlphaNumeric: true,
                    UserExists: true
                },
                password: {
                    required: true,
                    minlength: 8,
                    NumsAndChars: true
                },
                firstName: {
                    required: true,
                    OnlyLetters: true
                },
                surname: {
                    required: true,
                    OnlyLetters: true
                },
                birthDate: {
                    required: true,
                    date: true
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                username: {
                    required: "User Name is required",
                    AlphaNumeric: 'User name must contain letters or numbers only',
                    UserExists: "User name already exists!"
                },
                password: {
                    required: 'Password is required',
                    minlength: 'Password must be at least 8 characters long',
                    NumsAndChars: "Password must contain letters and numbers"
                },
                firstName: {
                    required: 'First name is required',
                    OnlyLetters: 'Name must contain only letters'
                },
                surname: {
                    required: 'Surname is required',
                    OnlyLetters: 'Name must contain only letters'
                },
                email: {
                    required: 'Email is required',
                    email: 'Please enter valid Email address'
                },
                birthDate: {
                    required: 'Birth date is required'
                }

            },
            // any other options & rules,
            errorPlacement: function (error, element)
            {
                var lastError = $(element).data('lastError'),
                    newError = $(error).text();

                $(element).data('lastError', newError);

                if (newError !== '' && newError !== lastError)
                {
                    $(element).tooltipster('content', newError);
                    $(element).tooltipster('show');
                }
            },
            success: function (label, element)
            {
                $(element).tooltipster('hide');
            }
        }
    )
}
//</editor-fold>

function OpenDiv(divID)
{
    // Hide all divs
    $(".MainWinInformationDiv").css('visibility', 'hidden');
    $('#' + divID).css('visibility', 'visible');
    if (divID != "GameDiv")
    {
        EndGame();
        $("#HiddenAtFirst").css('visibility', 'hidden');
        $("#Life1").css('visibility', 'hidden');
        $("#Life2").css('visibility', 'hidden');
        $("#Life3").css('visibility', 'hidden');
    }
}

function AddUser()
{
    var form = $("#SignUpForm");
    var validator = form.validate();
    if (!form.valid())
        return;

    var userName = $("#UserNameSignUp").get(0);
    var password = $("#PasswordSignUp").get(0);
    var firstName = $("#FirstNameSignUp").get(0);
    var surname = $("#SurnameSignUp").get(0);
    var Email = $("#EmailSignUp").get(0);
    var birthDate = $("#BirthDateSignUp").get(0);
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
    ctx.canvas.height = Math.min(div.clientHeight, div.clientWidth);
    ctx.canvas.width = Math.max(div.clientHeight, div.clientWidth);
}

function SettingsPressed()
{
    ClearInterval();
    StopKeyPressListening();
    window.location.href = "#SettingsModal";
}

function ApplySettings()
{
    var timeInserted = document.getElementById("TimeInput");
    VerifyTime(timeInserted);
    if (!timeInserted.validity.valid)
        return false;
    window.location.href = '#';
    StartInterval();
    AddKeyPressListening();
}

function ChangeColorSelected(select)
{
    var color = select.options[select.selectedIndex].value;
    select.style.backgroundColor = color;
}

//region Verification Functions
function ResetValidation(input)
{
    input.setCustomValidity("");
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

function VerifyTime(textbox)
{
    var seconds = textbox.value;
    if (!seconds || seconds == '')
        textbox.setCustomValidity('Please enter game time (min 60)');
    else if (seconds < 60)
        textbox.setCustomValidity('Minumum 60 seconds')
    else
        textbox.setCustomValidity('');
}
//endregion

function MessageToUser(message)
{
    window.alert(message)
}