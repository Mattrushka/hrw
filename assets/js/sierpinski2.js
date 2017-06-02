//Globale Variablen
var maxIterations = 1;
var circleSize = 150;
var angleA = 0; //getRandomInt(-120, 120);
var angleB = 120; //getRandomInt(-120,120);
var angleC = -120; //getRandomInt(-120, 120);

function calculateFractal (a, size, depth) {console.log(size);

    if (depth == 0) drawCircle(a, size);
    else {
        drawCircle(a, size);

        size = size/2; //getRandomInt(size/2, size);
        var vector = (a+10) - a ;

        vector.length = size*2; //getRandomInt(size, size*5);
        vector.angle = angleA;
        calculateFractal(a + vector, size, depth - 1);
        drawCircle(a + vector, size);

        vector.angle = angleB; //getRandomInt(0, 180)
        calculateFractal(a + vector, size, depth - 1);
        drawCircle(a + vector, size);

        vector.angle = angleC; //getRandomInt(0, 180)
        calculateFractal(a + vector, size, depth - 1);
        drawCircle(a + vector, size);
    }
}

function drawCircle(a, size) {
  var myCircle = new Path.Circle(a, size);
  myCircle.fillColor = new Color(1, 0, 0.5, 0.2);
}

calculateFractal(new Point(view.size.width/2, view.size.height/2), circleSize, maxIterations);

function onFrame(event) {
	// Your animation code goes in here
  //view.rotate(1);

}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
