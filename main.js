var status = "";
function preload() {
    
    
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createVideo(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 400, 400);

}

function start() {
    objectDetection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('modelStatus').innerHTML = "Status: Detecting Objects";
    detectingObject = document.getElementById('objectDetect').value;
}

function modelLoaded() {
    console.log("model is loaded");
    status = true;
}