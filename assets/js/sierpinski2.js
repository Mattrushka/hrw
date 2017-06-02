function calculateFractal (a, b, c, depth) {
    if (depth == 0) drawTriangle(a, b, c);
    else {
        var ab = (a + b) / 2;
        var ac = (a + c) / 2;
        var bc = (b + c) / 2;

        calculateFractal(a, ab, ac, depth - 1);
        calculateFractal(ab, b, bc, depth - 1);
        calculateFractal(ac, bc, c, depth - 1);
    }
}

function drawTriangle(a, b, c) {
    var path = new Path();
    path.strokeColor = 'red';
    path.moveTo(a);
    path.lineTo(b);
    path.lineTo(c);
    path.lineTo(a);
    //path.rotate(Math.random()*20*-20);
}

calculateFractal(new Point(10, 610), new Point(610, 610), new Point(310, 10), 5);
