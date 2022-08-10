video="";
function preload(){
    video=createVideo("video.mp4");
    video.hide();
}

function setup(){
    canvas=createCanvas(350,350);
    canvas.center();

}

function draw(){
image(video,0,0,350,350);
if(status!=""){
    objectDetector.detect(video,gotResult);
for(i=0; i<object.length; i++ ){
document.getElementById("status").innerHTML="Status: Objects Detected.";
document.getElementById("status").innerHTML="No.Of Objects Detected: "+object.length;
fill("blue");
percentage=floor(object[i].confidence*100)
text(object[i].label+" "+percentage+"%",object[i].x, object[i].y);
noFill();
stroke("indigo");
rect(object[i].x, object[i].y, object[i].width, object[i].height);
}   
}}
object=[];
function gotResult(error,result){
if(error){
    console.log(error);
}
else{
    console.log(result);
    object=result;
}
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
   document.getElementById("status").innerHTML="Status: Detecting Objects";
}
 status="";
 function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
 }