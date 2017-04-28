//region Enums
var BoardEntity =
    {
        Path: 0,
        Food: 1,
        PacMan: 2,
        Ghost: 3,
        Obstacle: 4,
        Bonus: 5
    };
var Keys =
    {
        Left: 37,
        Up: 38,
        Right: 39,
        Down: 40
    };
//endregion

//region Consts
var COLS = 10, ROWS = 10, MAX_FOOD = 50;
//endregion

//region Members
var canvas;
var lblScore;
var lblTime;
var canvasContext;
var pacShape;
var board;
var score;
var pacColor;
var startTime;
var timeElapsed;
var interval;
//endregion

function Start()
{
    canvas = document.getElementById("canvas");
    lblScore = document.getElementById("lblScore");
    lblTime = document.getElementById("lblTime");
    canvasContext = canvas.getContext("2d");
    pacShape = new Object();
    board = new Array();
    score = 0;
    pacColor = "yellow";
    var remainingBoardCells = ROWS * COLS;
    var food_remain = MAX_FOOD;
    var pacman_remain = 1;
    startTime = new Date();
    for (var row = 0; row < ROWS; row++)
    {
        board[row] = new Array();
        for (var col = 0; col < COLS; col++)
        {
            var randomNum = Math.random();
            if (randomNum <= 1.0 * food_remain / remainingBoardCells)
            {
                food_remain--;
                board[row][col] = BoardEntity.Food;
            }
            else if (randomNum < 1.0 * (pacman_remain + food_remain) / remainingBoardCells)
            {
                pacShape.i = row;
                pacShape.j = col;
                pacman_remain--;
                board[row][col] = BoardEntity.PacMan;
            }
            else
            {
                board[row][col] = BoardEntity.Path;
            }
            remainingBoardCells--;
        }
    }
    keysDown = new Object();

    addEventListener("keydown", function (e)
    {
        keysDown[e.keyCode] = true;
    }, false);
    addEventListener("keyup", function (e)
    {
        keysDown[e.keyCode] = false;
    }, false);

    interval = setInterval(UpdatePosition, 250);
}

function GetKeyPressed()
{
    if (keysDown[Keys.Up])
    {
        return Keys.Up;
    }
    if (keysDown[Keys.Down])
    {
        return Keys.Down;
    }
    if (keysDown[Keys.Left])
    {
        return Keys.Left;
    }
    if (keysDown[Keys.Right])
    {
        return Keys.Right;
    }
}

function Draw()
{
    canvas.width = canvas.width; //clean board
    lblScore.value = score;
    lblTime.value = timeElapsed;
    for (var row = 0; row < ROWS; row++)
    {
        for (var col = 0; col < COLS; col++)
        {
            var boardEntityCenter = new Object();
            boardEntityCenter.x = row * 60 + 30;
            boardEntityCenter.y = col * 60 + 30;
            if (board[row][col] == BoardEntity.PacMan)
            {
                canvasContext.beginPath();
                canvasContext.arc(boardEntityCenter.x, boardEntityCenter.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
                canvasContext.lineTo(boardEntityCenter.x, boardEntityCenter.y);
                canvasContext.fillStyle = pacColor; //color
                canvasContext.fill();

                canvasContext.beginPath();
                canvasContext.arc(boardEntityCenter.x + 5, boardEntityCenter.y - 15, 5, 0, 2 * Math.PI); // circle
                canvasContext.fillStyle = "black"; //color
                canvasContext.fill();
            }
            else if (board[row][col] == BoardEntity.Food)
            {
                canvasContext.beginPath();
                canvasContext.arc(boardEntityCenter.x, boardEntityCenter.y, 15, 0, 2 * Math.PI); // circle
                canvasContext.fillStyle = "black"; //color
                canvasContext.fill();
            }
        }
    }
}

function UpdatePosition()
{
    board[pacShape.i][pacShape.j] = BoardEntity.Path;

    switch (GetKeyPressed())
    {
        case Keys.Up:
            pacShape.j = pacShape.j > 0 ? pacShape.j - 1 : pacShape.j;
            break;
        case  Keys.Down:
            pacShape.j = pacShape.j < ROWS - 1 ? pacShape.j + 1 : pacShape.j;
            break;
        case Keys.Left:
            pacShape.i = pacShape.i > 0 ? pacShape.i - 1 : pacShape.i;
            break;
        case Keys.Right:
            pacShape.i = pacShape.i < COLS - 1 ? pacShape.i + 1 : pacShape.i;
            break;
    }

    if (board[pacShape.i][pacShape.j] == BoardEntity.Food)
        score++;

    board[pacShape.i][pacShape.j] = BoardEntity.PacMan;
    var currentTime = new Date();
    timeElapsed = (currentTime - startTime) / 1000;
    if (score >= 20 && timeElapsed <= 10)
    {
        pacColor = "green";
    }
    if (score == MAX_FOOD)
    {
        window.clearInterval(interval);
        window.alert("Game completed");
    }
    else
        Draw();
}
