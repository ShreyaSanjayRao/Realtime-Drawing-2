function setup(){
video=createCapture(VIDEO);
    video.size(550,500);
canvas=createCanvas(650,550);
canvas.position(650,250);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function draw(){
background("#4285F4");
}
function preload(){

}

function modelLoaded(){
    console.log("poseNet is inisatilized");
}
function gotPoses(results){
    if(results .length > 0){
        console.log(results);
    }
}