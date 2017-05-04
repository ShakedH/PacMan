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
var TILE_SIZE;
var HALF_TILE_SIZE;
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
var ghostsPrevEntityQueue;
var bonus;
var bonusPrevEntityQueue;
//endregion

function Start()
{
    InitializeMembers();
    FillBoardWithPathsAndWalls();
    PositionEntities();
    StartInterval();
}

//region Init & board creation functions
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
    ghostsPrevEntityQueue = new Array();
    bonusPrevEntityQueue = new Array();
    pacShape = new Object();
    bonus = new Object();
    keysDown = new Object();
    score = 0;
    lives = 3;
    numOfGhosts = 3;
    pacColor = "yellow";
    foodsOnBoard = MAX_FOOD;
    TILE_SIZE = Math.min(canvas.width, canvas.height) / ROWS;
    HALF_TILE_SIZE = TILE_SIZE / 2;

    addEventListener("keydown", function (e)
    {
        e.preventDefault();     // Prevent window from moving on arrows key press
        if (interval == null)
        {
            StartInterval();
            return;
        }
        switch (e.keyCode)
        {
            case Keys.Up:
                if (pacShape.j > 0 && board[pacShape.i][pacShape.j - 1] != BoardEntity.Obstacle)
                    SetKeyAsPressed();
                break;
            case Keys.Down:
                if (pacShape.j < ROWS - 1 && board[pacShape.i][pacShape.j + 1] != BoardEntity.Obstacle)
                    SetKeyAsPressed();
                break;
            case Keys.Left:
                if (pacShape.i > 0 && board[pacShape.i - 1][pacShape.j] != BoardEntity.Obstacle)
                    SetKeyAsPressed();
                break;
            case Keys.Right:
                if (pacShape.i < COLS - 1 && board[pacShape.i + 1][pacShape.j] != BoardEntity.Obstacle)
                    SetKeyAsPressed();
                break;
        }
        function SetKeyAsPressed()
        {
            keysDown[Keys.Up] = false;
            keysDown[Keys.Down] = false;
            keysDown[Keys.Left] = false;
            keysDown[Keys.Right] = false;
            keysDown[e.keyCode] = true;
        }
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

    PositionPacman();

    // Position food
    while (food_remain > 0)
    {
        var i = Math.floor(Math.random() * pathsList.length);
        var row = pathsList[i].row;
        var col = pathsList[i].col;
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

    // Position ghosts
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
        ghostsPrevEntityQueue.push(board[col][row]);
        board[col][row] = BoardEntity.Ghost;
        var ghost = new Object();
        ghost.i = col;
        ghost.j = row;
        ghostsArray.push(ghost);
    }

    // Position bonus
    while (true)
    {
        i = Math.floor(Math.random() * pathsList.length);
        row = pathsList[i].row;
        col = pathsList[i].col;
        if (board[col][row] == BoardEntity.Path)
        {
            bonusPrevEntityQueue.push(board[col][row]);
            board[col][row] = BoardEntity.Bonus;
            bonus.i = col;
            bonus.j = row;
            break;
        }
        pathsList.splice(i, 1);
    }
}
//endregion

function PositionPacman()
{
    while (true)
    {
        var i = Math.floor(Math.random() * pathsList.length);
        var row = pathsList[i].row;
        var col = pathsList[i].col;
        if (board[col][row] == BoardEntity.Path)
        {
            board[col][row] = BoardEntity.PacMan;
            pacShape.i = col;
            pacShape.j = row;
            break;
        }
    }
}

function StartInterval()
{
    interval = setInterval(UpdatePositionAndDraw, 500);
}

function UpdatePositionAndDraw()
{
    // Update time elapsed
    var currentTime = new Date();
    timeElapsed = Math.floor((currentTime - startTime) / 1000);

    MoveGhosts();
    MoveBonus();
    MovePacman();
    var pacmanNextMove = board[pacShape.i][pacShape.j];

    switch (pacmanNextMove)
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
            board[bonus.i][bonus.j] = bonusPrevEntityQueue[0];
            bonusPrevEntityQueue.splice(0, 1);
            bonus = undefined;
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
    board[pacShape.i][pacShape.j] = BoardEntity.PacMan;
    Draw();
}

function MovePacman()
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
                    canvasContext.beginPath();
                    canvasContext.arc(boardEntityCenter.x, boardEntityCenter.y, TILE_SIZE / 2, 0, 2 * Math.PI); // circle
                    canvasContext.fillStyle = "pink"; //color
                    canvasContext.fill();
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

function Die()
{
    board[pacShape.i][pacShape.j] = BoardEntity.Path; // BoardEntity.Ghost?
    lives--;
    window.clearInterval(interval);
    interval = undefined;
    if (lives == 0)
        MessageToUser("You lost!");
    else
    {
        PositionPacman();
        // TODO
        // 1. Die animation
        // 2. Restart game
    }
}

function MoveBonus()
{
    if (bonus == null)
        return;

    var options = new Array();

    for (var i = bonus.i - 1; i <= bonus.i + 1; i++)
        for (var j = bonus.j - 1; j <= bonus.j + 1; j++)
            if ((Math.abs(bonus.j - j) == 0 || Math.abs(bonus.i - i) == 0) && CanMove(i, j))   // Not a diagonal move and can move
                options.push({i: i, j: j});

    var chance = Math.floor(Math.random() * options.length);  // Chance can be 0 to 3 (4 possible moves)
    var nextStep = options[chance];
    if (nextStep == null)    // Pacman caught the bonus
        return;
    var originalI = bonus.i;
    var originalJ = bonus.j;
    bonus.i = nextStep.i;
    bonus.j = nextStep.j;
    bonusPrevEntityQueue.push(board[nextStep.i][nextStep.j]);
    board[nextStep.i][nextStep.j] = BoardEntity.Bonus;
    board[originalI][originalJ] = bonusPrevEntityQueue[0];
    bonusPrevEntityQueue.splice(0, 1);
}

// Relevant only to ghosts and bonus
function CanMove(col, row)
{
    return col >= 0 && col < COLS &&
        row >= 0 && row < ROWS &&
        board[col][row] != BoardEntity.Obstacle && board[col][row] != BoardEntity.Ghost && board[col][row] != BoardEntity.Bonus;
}

// region Ghosts movement functions
function MoveGhosts()
{
    for (var i = 0; i < ghostsArray.length; i++)
    {
        var ghost = ghostsArray[i];
        var originalI = ghost.i;
        var originalJ = ghost.j;
        var nextStep = BFS(ghost.i, ghost.j);
        if (nextStep == null)    // Ghost caught Pacman
            break;
        ghost.i = nextStep.i;
        ghost.j = nextStep.j;
        ghostsPrevEntityQueue.push(board[nextStep.i][nextStep.j]);
        board[nextStep.i][nextStep.j] = BoardEntity.Ghost;
        board[originalI][originalJ] = ghostsPrevEntityQueue[0];
        ghostsPrevEntityQueue.splice(0, 1);
    }
}

function BFS(col, row)
{
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
        queue.splice(0, 1);
        if (board[current.i][current.j] == BoardEntity.PacMan)
        {
            try
            {
                while (current.parentNode.parentNode != null)
                    current = current.parentNode;
                return current;
            }
            catch (ex)
            {
            }
        }
        for (var i = current.i - 1; i <= current.i + 1; i++)
            for (var j = current.j - 1; j <= current.j + 1; j++)
            {
                if (Math.abs(current.j - j) == 1 && Math.abs(current.i - i) == 1)   // Diagonal move
                    continue;
                var neighbor = new Object();
                neighbor.i = i;
                neighbor.j = j;
                if (CanMove(i, j) && !IsVisited(neighbor, visited))
                {
                    visited.push(neighbor);
                    queue.push(neighbor);
                    neighbor.parentNode = current;
                }
            }
    }
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
//endregion