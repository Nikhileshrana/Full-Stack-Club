let value;
function data(value)
{
    document.getElementById("screen").innerHTML += value;
}

function answer()
{
    let screen = document.getElementById("screen").innerHTML;
    console.log(screen);
    let answer = eval(screen);
    console.log(answer);

    screen =  document.getElementById("screen");
    screen.innerHTML = "";
    screen.innerHTML = answer;
}

function clearkaro()
{
    document.getElementById("screen").innerHTML = "";
    console.log("Screen is Now Cleared Bitch!");
}
