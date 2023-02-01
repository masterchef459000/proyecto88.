
var canvas=new fabric.canvas("myCanvas");
ball_y=0;
ball_x=0;
hole_y=400
hole_x=800

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h1.png, function(img)"){
		hole_obj=Img;
		hole_obj.sacaleToWidth(50);
		hole_obj.sacaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	};
	new_image();
};

function new_image()
{
	fabric.Image.fromURL("ball.png, function(img)"){
		ball_obj=Img;
		ball_obj.sacaleToWidth(50);
		ball_obj.sacaleToHeight(50);
		ball_obj.set({
		top:ball_y
		left:ball_x
     });
	 canvas.add(ball_obj);
	};
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove
	}
	document.getElementById("hd3").innerHTML="LO LOGRASTE";
	document.getElementById("myCanvas").style.borderColor="red";
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
		if(ball_y <=450)
		{
			ball_y=ball_y_image_height;
			console.log("altura de la imagen -"+ block_image_height)
			console.log("cuando se precsiona flecha hacia arriba, x = " +ball_x+",y="+ball_y);
			new_image();
		}
	}

	function down()
	{
		if(ball_y <=450)
		{
			ball_y=ball_y_image_height;
			console.log("altura de la imagen +"- block_image_height)
			console.log("cuando se precsiona flecha hacia abajo, x = " -ball_x-",y="-ball_y);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x=ball_x_image_width;
			console.log("altura de la imagen -"+ block_image_width)
			console.log("cuando se precsiona flecha hacia la izquierda, x = " +ball_y+",y="+ball_x);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_y=ball_y_image_width;
			console.log("altura de la imagen +"- block_image_width)
			console.log("cuando se precsiona flecha hacia la derecha, x = " -ball_y+",y="-ball_x);
			new_image();.
		}
	}
	
}

