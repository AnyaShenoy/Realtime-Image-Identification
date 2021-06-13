function preload(){

}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,0,0,300,300)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-beMBKrmu/model.json',modelLoaded);
classifier.classify(video,gotresult)
}

function modelLoaded(){
    console.log("Model Loaded") 
}

function gotresult(error,result){
    if (error){
        console.log(error)
        }
    else{
        console.log(result)
        document.getElementById("result_object_name").innerHTML= result[0].label;
        document.getElementById("accuracy_object_name").innerHTML= result[0].confidence.toFixed(3);
    }
}