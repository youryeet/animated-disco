
var canvas = new fabric.Canvas("myCanvas");

//Set initial positions for ball and hole images.
ball_x = 0;
ball_y = 0;

hole_x = 200;
hole_y = 200;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			left: hole_x,
			top: hole_y
		});
		canvas.add(hole_obj);
	});
	
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			left: ball_x,
			top: ball_y
		});
		canvas.add(ball_obj);
	});
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if ((ball_x==hole_x)&&(ball_y == hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("h3").innerHTML = "GAME OVER!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball_y>=0){
			ball_y = ball_y - block_image_height;
			console.log(block_image_height);
			console.log("X =" + ball_x + "Y =" + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
		

	}

	function down()
	{
		if (ball_y<=500){
			ball_y = ball_y + block_image_height;
			console.log(block_image_height);
			console.log("X =" + ball_x + "Y =" + ball_y);
			canvas.remove(ball_obj);
			new_image();	}
		}

	function left()
	{
		if(ball_x >5)
		{
			
				ball_x = ball_x - block_image_width;
				console.log(block_image_width);
				console.log("X =" + ball_x + "Y =" + ball_y);
				canvas.remove(ball_obj);
				new_image();		
	}
}

	function right()
	{
		if(ball_x <=1100)
		{
			ball_x = ball_x + block_image_width;
			console.log(block_image_width);
			console.log("X =" + ball_x + "Y =" + ball_y);
			canvas.remove(ball_obj);
			new_image();			
	}
	
}
}