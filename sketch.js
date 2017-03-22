// DRAWING MACHINE

var angle = 0;
var ellipseAngle = 0;

// SET VALUES FOR ROTATING ELLIPSES CREATING FLOWER-LIKE SHAPE.
// BLUE/GREY
var redValue = 79;
var greenValue = 98;
var blueValue = 142;
var opac = 127;

function setup() {
    createCanvas(800, 800);
    background(255, 240, 170); // PALE YELLOW
    //background(255);
}

function draw() {

    // START OF ROTATING FLOWER-LIKE SHAPE.
    strokeWeight(1); // WEIGHT FOR ALL SHAPES
    stroke(120, 135, 171); // STROKE OF ALL SHAPES --> LIGHT BLUE/GREY

    fill(redValue, greenValue, blueValue,opac);
    translate(400, 400);
    rotate(radians(angle));

    for (var i = 0; i < 5; i++) {
        ellipse(0, 0, mouseX, height / 2);
        rotate(PI / 4);
    }
    rotate(angle++);
    // angle++;
    // END OF ROTATING FLOWER-LIKE SHAPE.

    // START OF SMALL ELLIPSE ROTATING AROUND FLOWER-LIKE SHAPE.
    // INNER CIRCLE
    push();
    translate(0, 230);
    fill(64, 48, 117, 127); //INDIGO
    rotate(ellipseAngle);
    ellipse(0, 0, 50, 50);
    ellipseAngle += .5;
    pop();

    // OUTER CIRCLE
    translate(0, 300);
    fill(212, 177, 106, 127); //BURNT YELLOW TONE
    ellipse(0, 0, 50, 50);
    rotate(angle++);
    // END OF CODE FOR SMALL ELLIPSE ROTATING AROUND FLOWER-LIKE SHAPE.


}

function mousePressed() {
    // ONLY THE ROTATING ELLIPSES CREATING A FLOWER-LIKE SHAPE CHANGES COLOR IN CASE OF A mousePressed EVENT.
    if (redValue == 79) {
        redValue = 170;
        greenValue = 110;
        blueValue = 57;
    }

    // RETURN TO INITIAL COLORS
    else {
        redValue = 79;
        greenValue = 98;
        blueValue = 142;
    }

}
