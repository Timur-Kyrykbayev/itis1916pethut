var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var ship = new Image();
var bg = new Image();
var fg = new Image();
var metTop = new Image();
var metBottom = new Image();
var metMid = new Image();


metBottom.width=128;
metBottom.height=90;

metTop.width=128;
metTop.height=90;

metMid.width=128;
metMid.height=90;


ship.src = "img/spaceSh.png";
bg.src = "img/bgwp.jpg";
fg.src = "img/fg1.png";
metTop.src = "img/me1.png";
metBottom.src = "img/me1.png";
metMid.src="img/me1.png";



document.addEventListener("keydown", move);

function move(){
	if(event.keyCode==38){
		yPos-=20;
		
	}
	else if(event.keyCode==40){
		yPos+=20;
	}
	else if(event.keyCode==37){
		xPos-=20;
	}
	else if(event.keyCode==39){
		xPos+=20;
	}
}


var x=150;

var pos = [];

 pos[0]={
	x:1050,
	y:0
}


var score = 0;

var xPos = 510;
var yPos = 350;
var gravity=1;


//var y1Pos= ;
//var y2Pos= ;


function draw() {
 ctx.drawImage(bg, 0, 0);
for (var i=0;i< pos.length; i++){
	ctx.drawImage(metTop,pos[i].x,pos[i].y);
	ctx.drawImage(metBottom,pos[i].x,pos[i].y+metTop.height+x);
	ctx.drawImage(metMid,pos[i].x,pos[i].y+ metTop.height+x+metBottom.height+x);
	
		pos[i].x--;
	
	
	if(score < 10){
		if(pos[i].x==1000){
		
			if(pos[i].y<100){
				pos.push({
					x:pos[i].x+50,
					y:pos[i].y+20
				});
			}
			else if(pos[i].y==100 || pos[i].y>200){
			
					pos.push({
						x:pos[i].x+250,
						y:pos[i].y-250
				
					});
			}
		}
	
	}
	else if(score >10  && score <12){
			if(pos[i].x==400){
				pos.push({
					x:pos[i].x+500,
					y:Math.floor(Math.random() * metTop.height) - metTop.height
				
				});
			}
			
			
	}
	else if(score >=12 && score<30){
		 if(pos[i].x==850 ){
				pos.push({
					x:pos[i].x+240,
					y:Math.floor(Math.random() * metTop.height) - metTop.height
				
				});
		}
	}
		else if(score >30 && score <35){
		 if(pos[i].x==700 ){
				pos.push({
					x:pos[i].x+50,
					y:pos[i].y+20
				});
		}
	}
	else if(score >35){
		 if(pos[i].x==500 ){
				pos.push({
					x:pos[i].x+340,
					y:Math.floor(Math.random() * metTop.height) - metTop.height
				});
		}
	}
	
	
		
	
	
	
	
	if (xPos+ship.width >= pos[i].x 
	&& xPos<=pos[i].x+metTop.width
	&& (yPos <= pos[i].y+metTop.height-40 )){
		
		location.reload();
	}
	
	else if(xPos+ship.width >= pos[i].x 
	&& xPos<=pos[i].x+metBottom.width 
	&& (yPos + ship.height < pos[i].y+metTop.height+x+metBottom.height+20)&& (yPos > pos[i].y+metTop.height+x-20 )){ 
		
		location.reload();
	}
	
	else if(xPos+ship.width >= pos[i].x 
	&& xPos<=pos[i].x+metMid.width 
	&& (yPos + ship.height > pos[i].y+metTop.height+430)&& (yPos < pos[i].y+metTop.height+480)){ 
		
		location.reload();
	}
	
	else if( yPos+ ship.height >= cvs.height-fg.height-5){
		
			location.reload();
	}
	if (pos[i].x==250){
		
		score++;
	}
}
 ctx.drawImage(fg, 0, cvs.height - fg.height,cvs.width,150);
 ctx.drawImage(ship, xPos, yPos);

 

 ctx.fillStyle = "#000";
 ctx.font = "24px Verdana";
 ctx.fillText("Счет: " + score, 10, cvs.height - 20);
yPos+=gravity;
 requestAnimationFrame(draw);
}

metBottom.onload = draw;