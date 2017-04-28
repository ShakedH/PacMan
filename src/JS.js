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
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    [0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
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
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
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
var lives;
var foodsOnBoard;
var pathsList;
//endregion

function Start()
{
    CreateBoard();
    SetKeyEvents();
    interval = setInterval(Run, 250);
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
    foodsOnBoard = MAX_FOOD;
    startTime = new Date();
    lives = 3;
    pathsList = new Array();

    FillBoardWithPathsAndWalls();
    PositionEntities();
}

function FillBoardWithPathsAndWalls()
{
    for (var col = 0; col < COLS; col++)
    {
        board[col] = new Array(ROWS);
        for (var row = 0; row < ROWS; row++)
            if (LevelBoard[row][col] == 1)
                board[col][row] = BoardEntity.Obstacle;
            else
            {
                board[col][row] = BoardEntity.Path;
                pathsList.push({col: col, row: row});
            }
    }
}

function PositionEntities()
{
    var remainingBoardCells = ROWS * COLS;
    var food_remain = MAX_FOOD;
    while (true)
    {
        var row = Math.floor(Math.random() * ROWS);
        var col = Math.floor(Math.random() * COLS);
        if (board[col][row] == BoardEntity.Path)
        {
            board[col][row] = BoardEntity.PacMan;
            pacShape.i = col;
            pacShape.j = row;
            break;
        }
    }

    while (food_remain > 0)
    {
        var i = Math.floor(Math.random() * pathsList.length);
        row = pathsList[i].row;
        col = pathsList[i].col;
        if (board[col][row] == BoardEntity.Path)
        {
            var randomFood = Math.floor(Math.random() * 100)
            if (randomFood <= 10)
                board[col][row] = BoardEntity.Food_25;
            else if (randomFood <= 30)
                board[col][row] = BoardEntity.Food_15;
            else
                board[col][row] = BoardEntity.Food_5;
            food_remain--;
        }
        pathsList.splice(i, 1);
    }


}

//endregion

function Run()
{
    UpdatePositionAndDraw();
}

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
    for (var col = 0; col < COLS; col++)
    {
        for (var row = 0; row < ROWS; row++)
        {
            var boardEntityCenter = new Object();
            boardEntityCenter.x = col * TileSize + HalfTileSize;
            boardEntityCenter.y = row * TileSize + HalfTileSize;
            switch (board[col][row])
            {
                case BoardEntity.PacMan:
                    canvasContext.beginPath();
                    canvasContext.arc(boardEntityCenter.x, boardEntityCenter.y, HalfTileSize, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
                    canvasContext.lineTo(boardEntityCenter.x, boardEntityCenter.y);
                    canvasContext.fillStyle = pacColor; //color
                    canvasContext.fill();

                    canvasContext.beginPath();
                    canvasContext.arc(boardEntityCenter.x + 2, boardEntityCenter.y - TileSize / 4, 2, 0, 2 * Math.PI); // pacman eye
                    canvasContext.fillStyle = "black"; //color
                    canvasContext.fill();
                    break;

                case BoardEntity.Food_5:
                    canvasContext.beginPath();
                    canvasContext.arc(boardEntityCenter.x, boardEntityCenter.y, TileSize / 4, 0, 2 * Math.PI); // circle
                    canvasContext.fillStyle = "black"; //color
                    canvasContext.fill();
                    break;

                case BoardEntity.Food_15:
                    canvasContext.beginPath();
                    canvasContext.arc(boardEntityCenter.x, boardEntityCenter.y, TileSize / 4, 0, 2 * Math.PI); // circle
                    canvasContext.fillStyle = "red"; //color
                    canvasContext.fill();
                    break;

                case BoardEntity.Food_25:
                    canvasContext.beginPath();
                    canvasContext.arc(boardEntityCenter.x, boardEntityCenter.y, TileSize / 4, 0, 2 * Math.PI); // circle
                    canvasContext.fillStyle = "gold"; //color
                    canvasContext.fill();
                    break;

                case BoardEntity.Obstacle:
                    canvasContext.beginPath();
                    canvasContext.rect(boardEntityCenter.x - HalfTileSize, boardEntityCenter.y - HalfTileSize, TileSize, TileSize);
                    canvasContext.fillStyle = "grey"; //color
                    canvasContext.fill();
                    break;
            }
        }
    }
}

function UpdatePositionAndDraw()
{
    TryToMove();
    var previousEntity = board[pacShape.i][pacShape.j];
    board[pacShape.i][pacShape.j] = BoardEntity.PacMan;
    var currentTime = new Date();
    timeElapsed = (currentTime - startTime) / 1000;

    if (score >= 20 && timeElapsed <= 10)
        pacColor = "green";

    Draw();

    switch (previousEntity)
    {
        case BoardEntity.Food_5:
            score += 5;
            foodsOnBoard--;
            break;
        case BoardEntity.Food_15:
            score += 15;
            foodsOnBoard--;
            break;
        case BoardEntity.Food_25:
            score += 25;
            foodsOnBoard--;
            break;
        case BoardEntity.Bonus:
            score += 50;
            break;
        case BoardEntity.Ghost:
            Die();
            break;
    }
    if (foodsOnBoard == 0)
    {
        window.clearInterval(interval);
        window.alert("Game completed");
    }
}

function Die()
{
    lives--;
    window.clearInterval(interval);
    if (lives == 0)
        window.alert("You lost!");
    else
    {
        // TODO
        // 1. Die animation
        // 2. Restart game
    }
}

function TryToMove()
{
    var originalI = pacShape.i;
    var originalJ = pacShape.j;

    switch (GetKeyPressed())
    {
        case Keys.Up:
            if (pacShape.j == 0 && board[pacShape.i][ROWS - 1] != BoardEntity.Obstacle)
                pacShape.j = ROWS - 1;
            else if (pacShape.j > 0 && board[pacShape.i][pacShape.j - 1] != BoardEntity.Obstacle)
                pacShape.j--;
            break;
        case  Keys.Down:
            if (pacShape.j == ROWS - 1 && board[pacShape.i][0] != BoardEntity.Obstacle)
                pacShape.j = 0;
            else if (pacShape.j < ROWS - 1 && board[pacShape.i][pacShape.j + 1] != BoardEntity.Obstacle)
                pacShape.j++;
            break;
        case Keys.Left:
            if (pacShape.i == 0 && board[COLS - 1][pacShape.j] != BoardEntity.Obstacle)
                pacShape.i = COLS - 1;
            else if (pacShape.i > 0 && board[pacShape.i - 1][pacShape.j] != BoardEntity.Obstacle)
                pacShape.i--;
            break;
        case Keys.Right:
            if (pacShape.i == COLS - 1 && board[0][pacShape.j] != BoardEntity.Obstacle)
                pacShape.i = 0;
            else if (pacShape.i < COLS - 1 && board[pacShape.i + 1][pacShape.j] != BoardEntity.Obstacle)
                pacShape.i++;
            break;
    }

    if (originalI != pacShape.i || originalJ != pacShape.j) // Pacman moved
        board[originalI][originalJ] = BoardEntity.Path;
}
