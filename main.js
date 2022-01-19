harry_potter="";
peter_pan="";
function preload()
{
    harry_potter=loadSound("harrypotter.mp3");
    peter_pan=loadSound("peterpan.mp3");
}
function setup()
{
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,0,0,600,400);
}