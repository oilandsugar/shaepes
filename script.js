var gameOver = false;
var inputForm = $('#userinput');
var textIn = $('#datainput');
var textOut = $('#output');
var shape = "none";
var color = "white";

// initialize canvas

var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

textOut.html("What geometrical shape do you want to be?");

// Make an instance of two and place it on the page.
var elem = document.getElementById('drawshapes');
var params = { width: 150, height: 150 };
var two = new Two(params).appendTo(elem);

var circle = two.makeCircle(75, 75, 50);
circle.fill = '#FF8000';
circle.noStroke();

var group = two.makeGroup(circle);
group.scale = 0;
group.noStroke();

two.bind('update', function(frameCount) {
  // This code is called everytime two.update() is called.
  // Effectively 60 times per second.
  if (group.scale > 0.9999) {
    group.scale = 0;
  }
  var t = (1 - group.scale) * 0.125;
  group.scale += t;
}).play();  // Finally, start the animation loop

//process input into output

function process(input) {
    if (input == "triangle") { shape = "triangle"; updateCanvas(input); return "Your complex shape simplifies and you display proudly your three sides." + "<br>"; }
	else if (input == "square") { shape = "square"; updateCanvas(input);}
	else if (input == "circle") { shape = "circle"; updateCanvas(input);}
	else if (input == "octagon") { shape = "octagon"; updateCanvas(input);}
	else if (input == "ngon") { shape = "ngon"; return "Your already numerous faces multiply at an alarming rate. Do something about it.";}
    else if (input == "pink") { color = "pink"; $('body').css('background-color', 'pink');}
	else if (input == "exit") { return "There is no exit, only more shapes" + "<br>" + ""; }
	else if (input == "help") { return "To help you, here is a list of usefull commands:";}
	else { shape = "none"; return "<strong>" + input + "</strong> is a pretty complex shape, so complex that your body slowly <strong>disintegrates</strong> into pure matter. Quick, pick another one."; }
}

// change canvas shape

function updateCanvas(shape) {
	if (canvas.getContext) {
		switch(shape){
			case "circle":
				rendercircle();
			break;
			case "square":
				rendersquare();
			break;
			case "octagon":
				renderoctagon();
			break;
			case "ngon":
				renderngon();
			break;
			case "triangle":
				rendertriangle();
			break;
		}
	}
}

// shapes presets

var square = {
    'x': 0,
    'y': 0,
    'width': 150,
    'height': 150,
    'fill': '#000000'
};

var circle = {
    'x': 75,
    'y': 75,
    'radius': 73,
    'anglestart': 0,
	'angleend': 2*Math.PI,
    'fill': '#000000'
};

// render shapes on canvas

var rendersquare = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.rect(square.x, square.y, square.width, square.height);
    context.fillStyle = square.fill;
    context.fill();
};

var rendercircle = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(circle.x, circle.y, circle.radius, circle.anglestart, circle.angleend);
    context.fillStyle = circle.fill;
    context.fill();
};

var rendertriangle = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
	context.beginPath();
    context.moveTo(75,0);
	context.lineTo(150,150);
	context.lineTo(0,150);
	context.closePath();
    context.fill();
};

var renderoctagon = function() {
	
};

var renderngon = function() {
	
};

// animate between shapes

var requestAnimationFrame =  
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(callback) {
          return setTimeout(callback, 1);
        };


// main loop

inputForm.submit(function(e) {
	e.preventDefault();
    var input = textIn.val();
    textIn.val("");
    var output = process(input);
	console.log(shape);
    textOut.html(output + "\n");
});


/*
while(gameOver === false){
	switch(user){
		case 'triangle':
			$('#output').html("Your complex shape simplifies and you display proudly your three sides." + "<br>");
			var size = prompt("Do you prefer to spread outward or to compress into a tinier shape? spread/compress").toLowerCase();
			var opacity = prompt("Do you condense your matter to be more opaque or become slowly transparent? opaque/transparent").toLowerCase();
			if(size === "compress" && opacity === "opaque"){
				$('#output').append("You condense and compress your matter until you form at supermassive triangle hole." + "<br>");
				gameOver = true;
			} else {
				$('#output').append("This mix of actions dissolves your matter into thin air." + "<br>");
				gameOver = true;
			}
			break;
		case 'square':
			$('#output').html("You simplify into a 4-sided boring thing known as a square." + "<br>");
			var square = prompt("Do you want to become more square? Y/N").toLowerCase();
			var shape = prompt("You could also adopt a more interesting shape, why not go for a triangle? Y/N").toLowerCase();
			if(square === "n" || shape === "y"){
				$('#output').append("That's better, you slowly lose your fourth side to become a utterly more interesting triangle" + "<br>"); 
				gameOver = true;
			} else {
				$('#output').append("The uber boringness of your squarity crushes you to a fine dust." + "<br>");
				gameOver = true;
			}
			break;
		case 'circle':
			$('#output').html("Your complex body dissolves all it's sharp edges to form a perfect circle." + "<br>");
			gameOver = true;
			break;
		default:
			$('#output').html("This is a pretty complex shape, your body slowly disintegrates into pure matter" + "<br>");
			gameOver = true;
	} 
}
*/
