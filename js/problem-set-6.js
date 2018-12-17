/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {

var canvas = document.getElementById("canvas1")
const context = canvas.getContext("2d")
context.clearRect(0, 0, canvas.width, canvas.height)
context.font = "48px Sans-Serif"
context.strokeText("Hello, World", 10, 50)
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {

height = prompt("Enter a height for the rectangle. (Only values greater than or equal to 1 are valid.)")
width = prompt("Enter a width for the rectangle. (Only values greater than or equal to 1 are valid.)")
x = prompt("Enter an x value for the placement of the rectangle. (Only values greater than or equal to 5 are valid.)")
y = prompt("Enter a y value for the placement of the rectangle. (Only values greater than or equal to 5 are valid.)")
if (height < 1) {
  alert("Your height is too small.")
}
else if (width < 1) {
  alert("Your width is too small.")
}
else if (x < 5) {
  alert("Your x value is too small.")
}
else if (y < 5) {
  alert("Your y value is too small.")
}
else if (height != Number.isInteger(height)) {
  alert("The height value is not a number.")
}
else if (width != Number.isInteger(width)) {
  alert("The width value is not a number.")
}
else if (x != Number.isInteger(x)) {
  alert("The x value is not a number.")
}
else if (y != Number.isInteger(y)) {
  alert("The y value is not a number.")
}
else {
canvas = document.getElementById("canvas2")
const context = canvas.getContext("2d")
context.clearRect(0, 0, canvas.width, canvas.height)
context.strokeRect(x, y, width, height)
}
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {

  canvas = document.getElementById("canvas3");
  const context = canvas.getContext("2d");

  let color;
   while(1){
     color = prompt("Please Enter a Valid Color")
     if(color == "black" || color == "blue" || color == "green" || color == "orange" || color == "purple" || color == "red" || color == "yellow") {
       break;
     }
     else {
       alert(`${color} is not supported.`)
     }
   }

  context.fillStyle=color;
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.fillRect(10, 10, 100, 50)

}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {

  canvas = document.getElementById("canvas4");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
    let x = 10;
    let y = 10;
    let a;
    let b;
    let c;
  while(true){
	     a = Number(prompt("Enter the length of side 1."));
	     b = Number(prompt("Enter the length of side 2"));
	     c = Number(prompt("Enter the lenght of the hypotenuse."));
	if(a**2 + b**2 == c**2 && a>0 && b>0 && c>0 && canvas.width-x-a >= 0 && canvas.height-y-b >= 0){
		break;
	}
    else{
		    alert("That is not a valid triangle")
	     }
  }

context.beginPath();
context.moveTo(x,y);
context.lineTo(x,y+a);
context.stroke();
context.beginPath();
context.moveTo(x,y+a);
context.lineTo(x+b,y+a);
context.stroke();
context.beginPath();
context.moveTo(x,y);
context.lineTo(x+b,y+a);
context.stroke();

}


/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {

  canvas = document.getElementById("canvas5");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  let r;

  while(1) {
    r = Number(prompt("Enter a radius for the smiley face."))
    if (r>=1 && r<=canvas.width && Number.isInteger(r)) {
      break;
    }
    else {
      alert("The radius is invalid.")
    }
  }
  let x = canvas.height / 2
  let y = canvas.height / 2

  context.beginPath();
  context.arc(x,y,r,0*Math.PI,2*Math.PI);
  context.stroke();

  let eyer = r * .1
  let mouthr = r *.6

  context.beginPath();
  context.arc(x+r/4,y-r/3,eyer,0*Math.PI,2*Math.PI);
  context.stroke();
  context.beginPath();
  context.arc(x-r/4,y-r/3,eyer,0*Math.PI,2*Math.PI);
  context.stroke();
  context.beginPath();
  context.arc(x,y,mouthr,0*Math.PI,Math.PI);
  context.stroke();
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {

  canvas = document.getElementById("canvas6");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);

  let ir
  let or

  while(1) {
    ir = Number(prompt("Enter an inner radius for the star."))
    or = Number(prompt("Enter an outer radius for the star."))
    if (ir>=5 && ir<=250 && Number.isInteger(ir) && ir<=250 && or>=10 && or<=300 && Number.isInteger(ir)) {
      break;
    }
    else if (ir < 5){
      alert("The inner radius is too small.")
    }
    else if (ir > 250){
      alert("The inner radius is too big")
    }
    else if (or < 10){
      alert("The outer radius is too small.")
    }
    else if (or > 300){
      alert("The outer radius is too big.")
    }
    else if (ir>=or){
      alert("The outer radius must be greater than the inner radius.")
    }
    else {
      alert("One of the radius lengths were invalid.")
    }
  }

  context.beginPath();
  context.translate(125, 125);
  context.moveTo(0,0-or);

  for (var i = 0; i < 5; i++) {
    context.rotate(Math.PI / 5);
    context.lineTo(0, 0 - (ir));
    context.rotate(Math.PI / 5);
    context.lineTo(0, 0 - or);
    context.stroke();
      }
}


/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {

  canvas = document.getElementById("canvas7");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);

  let center = [120*(90/82/Math.sqrt(2)), (50+(80/Math.sqrt(2)))]

  let pointx=[];
  let pointy=[];

  for(let i=0;i<9;i++){
    pointx.push(Math.cos(((Math.PI*2*i)/8)-Math.PI/8)*100+center[0]);
    pointy.push(Math.sin(((Math.PI*2*i)/8)-Math.PI/8)*100+center[1]);
  }

  context.beginPath();
  context.moveTo(pointx[0], pointy[0]);

  for (let j = 0; j < pointx.length; j++) {
    context.lineTo(pointx[j], pointy[j])
    context.strokeStyle = "#000000"
    context.fillStyle = "FF0000"
    context.stroke();
  }
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {

  canvas = document.getElementById("canvas8");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);

  while(1) {
    length = Number(prompt("Enter a length for the block pyramid."))
    if (length>=5 && length<=250 && Number.isInteger(length)) {
      break;
    }
    else if (length < 5){
      alert("The inner radius is too small.")
    }
    else if (length > 250){
      alert("The inner radius is too big")
    }
    else {
      alert("One of the radius lengths were invalid.")
    }
  }








}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {

}
