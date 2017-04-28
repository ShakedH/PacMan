//region Enums
var BoardEntity =
    {
        Path: 0,
        Food_5: 1,
        PacMan: 2,
        Ghost: 3,
        Obstacle: 4,
        Bonus: 5,
        Food_15: 6,
        Food_25: 7
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
var COLS = 28, ROWS = 28, MAX_FOOD = 50;
var TileSize = 15, HalfTileSize = TileSize / 2;
var LevelBoard = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
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
    CreateBoard();
    SetKeyEvents();
    interval = setInterval(Run, 250);
}

function Run()
{
    UpdatePositionAndDraw();
}

//region Build Board Functions
function CreateBoard()
{
    canvas = document.getElementById("canvas");
    lblScore = document.getElementById("lblScore");
    lblTime = document.getElementById("lblTime");
    canvasContext = canvas.getContext("2d");
    pacShape = new Object();
    board = new Array();
    score = 0;
    pacColor = "yellow";
    startTime = new Date();

    FillBoardWithPathsAndWalls();
    PositionObstacles();
    PositionEntities();
}

function FillBoardWithPathsAndWalls()
{
    for (var row = 0; row < ROWS; row++)
    {
        board[row] = new Array(COLS);
        for (var col = 0; col < COLS; col++)
            if (LevelBoard[row][col] == 1)
                board[row][col] = BoardEntity.Obstacle;
            else
                board[row][col] = BoardEntity.Path;
    }
}

function PositionObstacles()
{

}

function PositionEntities()
{
    var remainingBoardCells = ROWS * COLS;
    var food_remain = MAX_FOOD;
    var pacman_remain = 1;
    for (var row = 0; row < ROWS; row++)
    {
        for (var col = 0; col < COLS; col++)
        {
            if (board[row][col] != BoardEntity.Path)
            {
                remainingBoardCells--;
                continue;
            }
            var randomNum = Math.random();
            if (randomNum <= 1.0 * food_remain / remainingBoardCells)
            {
                food_remain--;
                board[row][col] = BoardEntity.Food_5;
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
}

//endregion

function SetKeyEvents()
{
    keysDown = new Object();

    addEventListener("keydown", function (e)
    {
        keysDown[e.keyCode] = true;
    }, false);
    addEventListener("keyup", function (e)
    {
        keysDown[e.keyCode] = false;
    }, false);
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
            boardEntityCenter.x = row * TileSize + HalfTileSize;
            boardEntityCenter.y = col * TileSize + HalfTileSize;
            if (board[row][col] == BoardEntity.PacMan)
            {
                canvasContext.beginPath();
                canvasContext.arc(boardEntityCenter.x, boardEntityCenter.y, HalfTileSize, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
                canvasContext.lineTo(boardEntityCenter.x, boardEntityCenter.y);
                canvasContext.fillStyle = pacColor; //color
                canvasContext.fill();

                canvasContext.beginPath();
                canvasContext.arc(boardEntityCenter.x + 5, boardEntityCenter.y - TileSize / 4, 5, 0, 2 * Math.PI); // pacman eye
                canvasContext.fillStyle = "black"; //color
                canvasContext.fill();
            }
            else if (board[row][col] == BoardEntity.Food_5)
            {
                canvasContext.beginPath();
                canvasContext.arc(boardEntityCenter.x, boardEntityCenter.y, TileSize / 4, 0, 2 * Math.PI); // circle
                canvasContext.fillStyle = "black"; //color
                canvasContext.fill();
            }
            else if (board[row][col] == BoardEntity.Obstacle)
            {
                canvasContext.beginPath();
                canvasContext.rect(boardEntityCenter.x - HalfTileSize, boardEntityCenter.y - HalfTileSize, TileSize, TileSize);
                canvasContext.fillStyle = "grey"; //color
                canvasContext.fill();
            }
        }
    }
}

function UpdatePositionAndDraw()
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

    if (board[pacShape.i][pacShape.j] == BoardEntity.Food_5)
        score++;

    board[pacShape.i][pacShape.j] = BoardEntity.PacMan;
    var currentTime = new Date();
    timeElapsed = (currentTime - startTime) / 1000;

    if (score >= 20 && timeElapsed <= 10)
        pacColor = "green";

    if (score == MAX_FOOD)
    {
        window.clearInterval(interval);
        window.alert("Game completed");
    }
    else
        Draw();
}
