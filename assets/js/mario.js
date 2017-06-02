// Adapted from the following Processing example:
// http://processing.org/learning/topics/follow3.html

// The amount of points in the path:
var points = 3;
var start = view.center;

// The distance between the points:
var length = 100;

var path = new Path({
	strokeColor: '#ffffff',
	strokeWidth: 2,
	strokeCap: 'round'
});

for (var i = 0; i < points; i++)
	path.add(start + new Point(i * length, 0));

function onMouseMove(event) {
  var go2 = event.point;
  var vector = go2 - path.firstSegment.point;
  vector.length = length;
  path.segments[1].point = start + vector;
  var vector2 = vector;
  vector2.angle -= 90;
  path.segments[2].point = path.segments[1].point + vector2;

  console.log("start:"+start+"/segment0:"+path.firstSegment.point+"/mouse:"+go2+"/vector:"+vector+"/vectorlenght:"+vector.length);

	//path.smooth({ type: 'continuous' });
}

function onMouseDown(event) {
	path.fullySelected = true;
	path.strokeColor = '#e08285';
}

function onMouseUp(event) {
	path.fullySelected = false;
	path.strokeColor = '#e4141b';
}
