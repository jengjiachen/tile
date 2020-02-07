function setup () {
    createCanvas(200, 200);
    noLoop();
}

function popArt() {
    translate(0, 0); 
    fill('#9F61E8');
    noStroke();
    rect(0, 0, 200, 200);
    fill('#876BFF');
    noStroke();
    
    
    stroke('#FF6BB3');
    strokeWeight(15);
    
    line(100, 0, 0, 100);
    line(300, 0, 0, 300);
    
    fill('#FFB2E6');
    circle(200, 100, 180);
    circle(0, 100, 180);
    fill ('#DD9BFF');
    circle(100, 100, 90);
    
}

function draw() {
    popArt();
    noLoop();
}