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
var COLS = 28;
var ROWS = 28;
var MAX_FOOD = 50;
var TILE_SIZE = 15;
var HALF_TILE_SIZE = TILE_SIZE / 2;
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
var numOfGhosts;
var ghostsArray;
var prevGhostEntity;
//endregion

window.onload = Start;

function Start()
{
    InitializeMembers();
    FillBoardWithPathsAndWalls();
    PositionEntities();
    interval = setInterval(UpdatePositionAndDraw, 500);
}

//region Build Board Functions
function InitializeMembers()
{
    canvas = document.getElementById("canvas");
    lblScore = document.getElementById("lblScore");
    lblTime = document.getElementById("lblTime");
    canvasContext = canvas.getContext("2d");

    startTime = new Date();
    board = new Array();
    pathsList = new Array();
    ghostsArray = new Array();
    prevGhostEntity = new Array();
    pacShape = new Object();
    keysDown = new Object();
    score = 0;
    lives = 3;
    numOfGhosts = 3;
    pacColor = "yellow";
    foodsOnBoard = MAX_FOOD;

    addEventListener("keydown", function (e)
    {
        keysDown[Keys.Up] = false;
        keysDown[Keys.Down] = false;
        keysDown[Keys.Left] = false;
        keysDown[Keys.Right] = false;
        keysDown[e.keyCode] = true;
    }, false);
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

    // Position Pacman
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

    // Position food
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

    // Position numOfGhosts
    for (i = 0; i < numOfGhosts; i++)    // 1-3 ghosts allowed
    {
        switch (i)
        {
            case 0: // First ghost
                col = 1;
                row = 1;
                break;
            case 1: // Second ghost
                col = COLS - 2;
                row = 1;
                break;
            case 2: // Third ghost
                col = COLS - 2;
                row = ROWS - 2;
                break;
        }
        prevGhostEntity.push(board[col][row]);
        board[col][row] = BoardEntity.Ghost;
        var ghost = new Object();
        ghost.i = col;
        ghost.j = row;
        ghostsArray.push(ghost);
    }
}

//endregion

function UpdatePositionAndDraw()
{
    TryToMovePacman();

    var previousEntity = board[pacShape.i][pacShape.j];
    board[pacShape.i][pacShape.j] = BoardEntity.PacMan;
    var currentTime = new Date();
    timeElapsed = (currentTime - startTime) / 1000;

    MoveGhosts();

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

function TryToMovePacman()
{
    var originalI = pacShape.i;
    var originalJ = pacShape.j;

    switch (GetKeyPressed())
    {
        case Keys.Up:
            if (pacShape.j == 0 && board[pacShape.i][ROWS - 1] != BoardEntity.Obstacle)     // Interstellar transition
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
        for (var row = 0; row < ROWS; row++)
        {
            var boardEntityCenter = new Object();
            boardEntityCenter.x = col * TILE_SIZE + HALF_TILE_SIZE;
            boardEntityCenter.y = row * TILE_SIZE + HALF_TILE_SIZE;

            switch (board[col][row])
            {
                case BoardEntity.PacMan:
                    canvasContext.beginPath();
                    canvasContext.arc(boardEntityCenter.x, boardEntityCenter.y, HALF_TILE_SIZE, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
                    canvasContext.lineTo(boardEntityCenter.x, boardEntityCenter.y);
                    canvasContext.fillStyle = pacColor; //color
                    canvasContext.fill();

                    canvasContext.beginPath();
                    canvasContext.arc(boardEntityCenter.x + 2, boardEntityCenter.y - TILE_SIZE / 4, 2, 0, 2 * Math.PI); // pacman eye
                    canvasContext.fillStyle = "black"; //color
                    canvasContext.fill();
                    break;

                case BoardEntity.Food_5:
                    canvasContext.beginPath();
                    canvasContext.arc(boardEntityCenter.x, boardEntityCenter.y, TILE_SIZE / 4, 0, 2 * Math.PI); // circle
                    canvasContext.fillStyle = "black"; //color
                    canvasContext.fill();
                    break;

                case BoardEntity.Food_15:
                    canvasContext.beginPath();
                    canvasContext.arc(boardEntityCenter.x, boardEntityCenter.y, TILE_SIZE / 4, 0, 2 * Math.PI); // circle
                    canvasContext.fillStyle = "blue"; //color
                    canvasContext.fill();
                    break;

                case BoardEntity.Food_25:
                    canvasContext.beginPath();
                    canvasContext.arc(boardEntityCenter.x, boardEntityCenter.y, TILE_SIZE / 4, 0, 2 * Math.PI); // circle
                    canvasContext.fillStyle = "gold"; //color
                    canvasContext.fill();
                    break;

                case BoardEntity.Bonus:
                    // TODO
                    break;

                case BoardEntity.Ghost:
                    canvasContext.beginPath();
                    canvasContext.arc(boardEntityCenter.x, boardEntityCenter.y, TILE_SIZE / 2, 0, 2 * Math.PI); // circle
                    canvasContext.fillStyle = "red"; //color
                    canvasContext.fill();
                    break;

                case BoardEntity.Obstacle:
                    canvasContext.beginPath();
                    canvasContext.rect(boardEntityCenter.x - HALF_TILE_SIZE, boardEntityCenter.y - HALF_TILE_SIZE, TILE_SIZE, TILE_SIZE);
                    canvasContext.fillStyle = "grey"; //color
                    canvasContext.fill();
                    break;
            }
        }
}

function MoveGhosts()
{
    for (var i = 0; i < ghostsArray.length; i++)
    {
        var ghost = ghostsArray[i];
        var originalI = ghost.i;
        var originalJ = ghost.j;
        var nextStep = BFS(ghost.i, ghost.j);
        ghost.i = nextStep.i;
        ghost.j = nextStep.j;
        prevGhostEntity.push(board[ghost.i][ghost.j]);
        board[ghost.i][ghost.j] = BoardEntity.Ghost;
        board[originalI][originalJ] = prevGhostEntity[i - prevGhostEntity.length];
        prevGhostEntity.splice(i - prevGhostEntity.length, 1);

        // if (Math.abs(colDiff) < Math.abs(rowDiff))  // x distance from ghost to Pacman is shorter than y distance
        // {
        //     if (colDiff > 0 && GhostCanMove(ghost.i - 1, ghost.j))    // Ghost is located right to Pacman
        //         ghost.i--;
        //
        //     else if (colDiff < 0 && GhostCanMove(ghost.i + 1, ghost.j))    // Ghost is located left to Pacman
        //         ghost.i++;
        //
        //     else if (originalI == ghost.i && originalJ == ghost.j)  // Ghost didn't move. Try to move down or up
        //     {
        //         if (GhostCanMove(ghost.i, ghost.j + 1) && GhostCanMove(ghost.i, ghost.j - 1))
        //         {
        //             var chance = Math.random();
        //             ghost.j = chance < 0.5 ? ghost.j + 1 : ghost.j - 1;
        //         }
        //         else if (GhostCanMove(ghost.i, ghost.j + 1))
        //             ghost.j++;
        //         else
        //             ghost.j--;
        //     }
        // }
        // else   // y distance from ghost to Pacman is shorter or equal to x distance
        // {
        //     if (rowDiff > 0 && GhostCanMove(ghost.i, ghost.j - 1))    // Ghost is located below Pacman
        //         ghost.j--;
        //
        //     else if (rowDiff < 0 && GhostCanMove(ghost.i, ghost.j + 1))    // Ghost is located above Pacman
        //         ghost.j++;
        //
        //     else if (originalI == ghost.i && originalJ == ghost.j)  // Ghost didn't move. Try to move right or left
        //     {
        //         if (GhostCanMove(ghost.i + 1, ghost.j) && GhostCanMove(ghost.i - 1, ghost.j))
        //         {
        //             var chance = Math.random();
        //             ghost.i = chance < 0.5 ? ghost.i + 1 : ghost.i - 1;
        //         }
        //         else if (GhostCanMove(ghost.i + 1, ghost.j))
        //             ghost.i++;
        //         else
        //             ghost.i--;
        //     }
        // }
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

function BFS(col, row)
{
    // window.alert("Pac col: " + pacShape.i + ", Pac row: " + pacShape.j);
    var visited = new Array();
    var queue = new Array();
    var first = new Object();
    first.i = col;
    first.j = row;
    visited.push(first);
    queue.push(first);

    while (queue.length > 0)
    {
        var current = queue[0];
        // window.alert("col: " + current.i + ", row: " + current.j);
        queue.splice(0, 1);
        if (board[current.i][current.j] == BoardEntity.PacMan)
        {
            while (current.parentNode.parentNode != null)
                current = current.parentNode;
            return current;
        }
        for (var i = current.i - 1; i <= current.i + 1; i++)
            for (var j = current.j - 1; j <= current.j + 1; j++)
            {
                var neighbor = new Object();
                neighbor.i = i;
                neighbor.j = j;
                if (GhostCanMove(i, j) && !IsVisited(neighbor, visited))
                {
                    visited.push(neighbor);
                    neighbor.parentNode = current;
                    queue.push(neighbor);
                }
            }
    }
}

function GhostCanMove(col, row)
{
    return col >= 0 && col < COLS &&
        row >= 0 && row < ROWS &&
        board[col][row] != BoardEntity.Obstacle && board[col][row] != BoardEntity.Ghost;
}

function IsVisited(neighbor, visited)
{
    var i = visited.length - 1;
    while (i >= 0)
    {
        if (visited[i].i == neighbor.i && visited[i].j == neighbor.j)
            return true;
        i--;
    }
    return false;
}
