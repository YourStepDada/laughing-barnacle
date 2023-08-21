function preload(){

}

function setup(){
    canvas = createCanvas(720, 530);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_colour = "";

}

function draw() {
    image(video, 70, 25, 580, 480);
    
    fill(186, 42, 0);
    circle(680, 40, 80);
    circle(680, 490, 80);
    circle(40, 490, 80);
    circle(40, 40, 80);
    fill(0, 128, 0);
    rect(80, 20, 560, 20);
    rect(80, 490, 560, 20);
    rect(30, 80, 20, 370);
    rect(670, 80, 20, 370);
    tint(tint_colour);
    
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_colour = document.getElementById("colour_name").value;
}