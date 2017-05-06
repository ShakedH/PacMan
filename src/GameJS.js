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
        Food_25: 7,
        Ice: 8
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
var ghostsPrevEntityQueue;
var bonusPrevEntityQueue;
var iceActive;

var fivePtsColor;
var fifteenPtsColor;
var twentyFivePtsColor;

// entities:
var pacShape;
var ghostsArray;
var bonus;
var ice;
//endregion

function Start()
{
    InitializeMembers();
    FillBoardWithPathsAndWalls();
    PositionEntities();
    StartInterval();
    document.getElementById("HiddenAtFirst").style.visibility = 'visible';
    document.getElementById("StartButton").innerHTML = "New Game";
}

//region Init & board creation functions
function InitializeMembers()
{
    canvas = document.getElementById("canvas");
    lblScore = document.getElementById("lblScore");
    lblTime = document.getElementById("lblTime");
    canvasContext = canvas.getContext("2d");

    var fiveColorInput = document.getElementById("5ptsSelect");
    var fifteenColorInput = document.getElementById("15ptsSelect");
    var twentyFiveColorInput = document.getElementById("25ptsSelect");
    fivePtsColor = fiveColorInput.options[fiveColorInput.selectedIndex].value;
    fifteenPtsColor = fifteenColorInput.options[fifteenColorInput.selectedIndex].value;
    twentyFivePtsColor = twentyFiveColorInput.options[twentyFiveColorInput.selectedIndex].value;

    var numOfGhostsInput = document.getElementById("GhostsSelect");
    numOfGhosts = numOfGhostsInput.options[numOfGhostsInput.selectedIndex].value;

    var numOfFoodInput = document.getElementById("FoodsInput");
    MAX_FOOD = numOfFoodInput.value;

    // Show all lives:
    $(".LifeImg").css('visibility', 'visible');

    startTime = new Date();
    board = new Array();
    pathsList = new Array();
    ghostsArray = new Array();
    ghostsPrevEntityQueue = new Array();
    bonusPrevEntityQueue = new Array();
    pacShape = new Object();
    bonus = new Object();
    ice = new Object();
    keysDown = new Object();
    score = 0;
    lives = 3;
    iceActive = false;
    foodsOnBoard = MAX_FOOD;
    TILE_SIZE = Math.min(canvas.width, canvas.height) / ROWS;
    HALF_TILE_SIZE = TILE_SIZE / 2;

    addEventListener("keydown", function (e)
    {
        e.preventDefault();     // Prevent window from moving on arrows key press
        if (interval == null)
            StartInterval();
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
            bonus.i = col;
            bonus.j = row;
            break;
        }
        pathsList.splice(i, 1);
    }

    // Position Ice
    while (true)
    {
        i = Math.floor(Math.random() * pathsList.length);
        row = pathsList[i].row;
        col = pathsList[i].col;
        if (board[col][row] == BoardEntity.Path)
        {
            ice.i = col;
            ice.j = row;
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
            pacShape.i = col;
            pacShape.j = row;
            break;
        }
    }
}

function StartInterval()
{
    interval = setInterval(UpdatePositionAndDraw, 300);
}

function UpdatePositionAndDraw()
{
    // Update time elapsed
    var currentTime = new Date();
    timeElapsed = Math.floor((currentTime - startTime) / 1000);

    if (HasGhost(pacShape.i, pacShape.j))
        Die();
    else if (HasBonus(pacShape.i, pacShape.j))
    {
        bonus = undefined;
        score += 50;
    }
    else if (HasIce(pacShape.i, pacShape.j))
    {
        ice = undefined;
        iceActive = true;
        // Wait 3 seconds and change back to false:
        setTimeout(function ()
        {
            iceActive = false;
        }, 3000); // Start new thread with ActivateIce
    }

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
    }

    if (foodsOnBoard == 0)
    {
        window.clearInterval(interval);
        window.alert("Game completed");
    }

    board[pacShape.i][pacShape.j] = BoardEntity.Path;
    if (!iceActive)
    {
        MoveGhosts();
        MoveBonus();
    }
    Draw();
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

//region Draw Functions
function Draw()
{
    canvas.width = canvas.width; //clean board
    lblScore.innerHTML = score;
    lblTime.innerHTML = timeElapsed;
    for (var col = 0; col < COLS; col++)
        for (var row = 0; row < ROWS; row++)
        {
            var entityCenter = new Object();
            entityCenter.x = col * TILE_SIZE + HALF_TILE_SIZE;
            entityCenter.y = row * TILE_SIZE + HALF_TILE_SIZE;

            if (HasPacman(col, row))
                DrawPacman(entityCenter);
            else if (HasGhost(col, row))
                DrawGhost(entityCenter);
            else if (HasBonus(col, row))
                DrawBonus(entityCenter);
            else if (HasIce(col, row))
                DrawIce(entityCenter);
            else if (board[col][row] == BoardEntity.Obstacle)
                DrawObstacle(entityCenter);
            else if (board[col][row] == BoardEntity.Food_5 || board[col][row] == BoardEntity.Food_15 ||
                board[col][row] == BoardEntity.Food_25)
                DrawFood(entityCenter, board[col][row]);

        }
}

function DrawPacman(pacman)
{
    var image = new Image();
    image.src = '../Images/pacman.jpg';
    switch (GetKeyPressed())
    {
        case Keys.Up:
            drawRotatedImage(image, pacman.x, pacman.y, 270);
            break;
        case Keys.Down:
            drawRotatedImage(image, pacman.x, pacman.y, 90);
            break;
        case Keys.Left:
            // drawRotatedImage(image, pacman.x, pacman.y, 180);
            drawFlippedImage(image, pacman.x, pacman.y);
            break;
        default:
        case Keys.Right:
            drawRotatedImage(image, pacman.x, pacman.y, 0);
            break;
    }

    var direction;

    function drawRotatedImage(image, x, y, angle)
    {
        var TO_RADIANS = Math.PI / 180;
        // save the current co-ordinate system
        // before we screw with it
        canvasContext.save();

        // move to the middle of where we want to draw our image
        canvasContext.translate(x, y);

        // rotate around that point, converting our
        // angle from degrees to radians
        canvasContext.rotate(angle * TO_RADIANS);

        // draw it up and to the left by half the width
        // and height of the image
        canvasContext.drawImage(image, -(TILE_SIZE / 2), -(TILE_SIZE / 2), TILE_SIZE, TILE_SIZE);

        // and restore the co-ords to how they were when we began
        canvasContext.restore();
    }

    function drawFlippedImage(image, x, y)
    {
        canvasContext.save();
        canvasContext.translate(x, y);
        canvasContext.scale(-1, 1);
        canvasContext.drawImage(image, -(TILE_SIZE / 2), -(TILE_SIZE / 2), TILE_SIZE, TILE_SIZE);
        canvasContext.restore();
    }
}

function DrawBonus(bonusCenter)
{
    var image = new Image();
    image.src = '../Images/bonus.png';
    canvasContext.drawImage(image, bonusCenter.x - TILE_SIZE / 2, bonusCenter.y - TILE_SIZE / 2, TILE_SIZE, TILE_SIZE);
}

function DrawGhost(ghostCenter)
{
    canvasContext.beginPath();
    canvasContext.arc(ghostCenter.x, ghostCenter.y, TILE_SIZE / 2, 0, 2 * Math.PI); // circle
    canvasContext.fillStyle = "red"; //color
    canvasContext.fill();
}

function DrawObstacle(obstacleCenter)
{
    canvasContext.beginPath();
    canvasContext.rect(obstacleCenter.x - HALF_TILE_SIZE, obstacleCenter.y - HALF_TILE_SIZE, TILE_SIZE, TILE_SIZE);
    canvasContext.fillStyle = "grey"; //color
    canvasContext.fill();
}

function DrawFood(foodCenter, entity)
{
    var color, score;
    var radius = TILE_SIZE / 3;
    switch (entity)
    {
        case BoardEntity.Food_5:
            color = fivePtsColor;
            score = 5;
            break;
        case BoardEntity.Food_15:
            color = fifteenPtsColor;
            score = 15;
            break;
        case BoardEntity.Food_25:
            color = twentyFivePtsColor;
            score = 25;
            break;
    }
    canvasContext.beginPath();
    canvasContext.arc(foodCenter.x, foodCenter.y, radius, 0, 2 * Math.PI); // circle
    canvasContext.closePath();
    canvasContext.fillStyle = color; //color
    canvasContext.fill();

    // Text on food will be black, unless the food is black:
    canvasContext.fillStyle = color == "black" ? "white" : "black";
    var font = "bold " + radius + "px serif";
    canvasContext.font = font;
    // Move it down by half the text height and left by half the text width
    var width = canvasContext.measureText(score).width;
    var height = canvasContext.measureText("w").width; // this is a GUESS of height
    canvasContext.fillText(score, foodCenter.x - (width / 2), foodCenter.y + (height / 2));
}

function DrawIce(iceCenter)
{
    var image = new Image();
    image.src = '../Images/ice.png';
    canvasContext.drawImage(image, iceCenter.x - TILE_SIZE / 2, iceCenter.y - TILE_SIZE / 2, TILE_SIZE, TILE_SIZE);
}
//endregion

function Die()
{
    var LifeId = "Life" + lives;
    lives--;
    document.getElementById(LifeId).style.visibility = "hidden";
    window.clearInterval(interval);
    interval = undefined;
    if (lives == 0)
        MessageToUser("You lost!");
    else
        PositionPacman();
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

}

// Relevant only to ghosts and bonus
function CanMove(col, row)
{
    return col >= 0 && col < COLS &&
        row >= 0 && row < ROWS &&
        board[col][row] != BoardEntity.Obstacle &&
        !(HasGhost(col, row));
}

function HasGhost(col, row)
{
    var found = false;
    ghostsArray.forEach(function (ghost)
    {
        if (ghost.j == row && ghost.i == col)
            found = true;
    });
    return found;
}

function HasPacman(col, row)
{
    return pacShape.j == row && pacShape.i == col;
}

function HasBonus(col, row)
{
    if (bonus == null)
        return false;
    return bonus.j == row && bonus.i == col;
}

function HasIce(col, row)
{
    if (ice == null)
        return false;
    return ice.j == row && ice.i == col;
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
        if (HasPacman(current.i, current.j))
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