var pacman;
var pacmanImg;
var pacbackground;

var ghost1;
var ghost1Img;
var ghost2;
var ghost2Img;
var ghost3;
var ghost3Img;
var ghost4;
var ghost4Img;

var ghostwall1;
var ghostwall2;
var ghostwall3;
var ghostwall4;
var ghostwall5;

var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var wall7;
var wall8;
var wall9;
var wall10;
var wall11;
var wall12;
var wall13;
var wall14;
var wall15;
var wall16;
var wall17;
var wall18;
var wall19;
var wall20;
var wall21;
var wall22;
var wall23;
var wall24;
var wall25;
var wall26;
var wall27;
var wall28;
var wall29;
var wall30;
var wall31

var borderwall1;
var borderwall2;
var borderwall3;
var borderwall4;
var borderwall5;
var borderwall6;
var borderwall7;
var borderwall8;
var borderwall9;
var borderwall10;
var borderwall11;
var borderwall12;
var borderwall13;
var borderwall14;
var borderwall15;
var borderwall16;
var borderwall17;
var borderwall18;

function preload(){

  pacbackground=loadImage("Pacman_background.png");
  pacmanImg=loadAnimation("Pacman_mouth_open1.png","Pacman_mouth_closed1.png");
  
  ghost1Img=loadImage("Pacman_ghost1-removebg-preview.png");
  ghost2Img=loadImage("Pacman_ghost2-removebg-preview.png");
  ghost3Img=loadImage("Pacman_ghost3-removebg-preview.png");
  ghost4Img=loadImage("Pacman_ghost4-removebg-preview.png");

}

function setup() {

  createCanvas(700, 610);

  pacman=createSprite(30,580,20,20);
  pacman.depth=100;
  pacman.addAnimation("pacman moving",pacmanImg);
  pacman.scale=1.5;
  pacman.debug=false;
  pacman.setCollider("rectangle",0,0,pacman.width-80,pacman.height-78)

  ghostwall1=createSprite(350.3,320,174.2,8.5);
  ghostwall2=createSprite(268.5,281.5,11,70);
  ghostwall3=createSprite(432,281.5,11,70);
  ghostwall4=createSprite(298.5,250.5,50,8.4);
  ghostwall5=createSprite(403,250.5,52,8.4);

  wall1=createSprite(350,137.7,169,18);
  wall2=createSprite(350,175,22.5,60);

  wall3=createSprite(200,197,22,135);
  wall4=createSprite(239,196.8,90,18);

  wall5=createSprite(500,197,22,135);
  wall6=createSprite(459,196.8,90,18);

  wall7=createSprite(100,69,70,37);
  wall8=createSprite(237.5,69,97,37);
  wall9=createSprite(100,137.5,70,18);

  wall10=createSprite(462.6,69,97,37);
  wall11=createSprite(600,69,70,37);
  wall12=createSprite(600,137.5,70,18);

  wall13=createSprite(500,344,22,73);
  wall14=createSprite(200,344,22,73);

  wall15=createSprite(350,374,169,18);
  wall16=createSprite(350,405,22.5,70);
  wall17=createSprite(350,492,169,18); 
  wall18=createSprite(350,523,22.5,70);

  wall19=createSprite(237.5,432.9,94,18);
  wall20=createSprite(463,432.9,94,18);

  wall21=createSprite(200,520,23,73);
  wall22=createSprite(175,551,217,18);

  wall23=createSprite(500,520,23,73);
  wall24=createSprite(525,551,217,18);

  wall25=createSprite(100,433,70,18);
  wall26=createSprite(124.8,462,22,74);

  wall27=createSprite(600,433,70,18);
  wall28=createSprite(575,462,22,74);

  wall29=createSprite(350,37,22,100);
  wall30=createSprite(10,492,100,18);
  wall31=createSprite(690,492,100,18);

  borderwall1=createSprite(350,4,700,10);
  borderwall2=createSprite(350,606,700,10);
  borderwall3=createSprite(694,95.5,10,200);
  borderwall4=createSprite(6,95.5,10,200);
  borderwall5=createSprite(694,490,11,230);
  borderwall6=createSprite(6,490,10,230);

  borderwall7=createSprite(633,191.5,140,8);
  borderwall8=createSprite(67,191.5,140,8);
  borderwall9=createSprite(633,261,140,8);
  borderwall10=createSprite(67,261,140,8);
  borderwall11=createSprite(131.8,230,10,70);
  borderwall12=createSprite(568.3,230,10,70);

  borderwall13=createSprite(633,379,140,8);
  borderwall14=createSprite(633,309.78,140,8);
  borderwall15=createSprite(67,379,140,8);
  borderwall16=createSprite(67,309.78,140,8);
  borderwall17=createSprite(131.8,341,10,70);
  borderwall18=createSprite(568.3,341,10,70);

  ghostwall1.debug=false;
  ghostwall2.debug=false;
  ghostwall3.debug=false;
  ghostwall4.debug=false;
  ghostwall5.debug=false;
  ghostwall1.setCollider("rectangle",0,0,ghostwall1.width,ghostwall1.height);
  ghostwall2.setCollider("rectangle",0,0,ghostwall2.width,ghostwall2.height);
  ghostwall3.setCollider("rectangle",0,0,ghostwall3.width,ghostwall3.height);
  ghostwall4.setCollider("rectangle",0,0,ghostwall4.width,ghostwall4.height);
  ghostwall5.setCollider("rectangle",0,0,ghostwall5.width,ghostwall5.height); 

  ghostwall1.visible=false;
  ghostwall2.visible=false;
  ghostwall3.visible=false;
  ghostwall4.visible=false;
  ghostwall5.visible=false;

  wall1.visible=false;
  wall2.visible=false;
  wall3.visible=false;
  wall4.visible=false;
  wall5.visible=false;
  wall6.visible=false;
  wall7.visible=false;
  wall8.visible=false;
  wall9.visible=false;
  wall10.visible=false;
  wall11.visible=false;
  wall11.visible=false;
  wall12.visible=false;
  wall13.visible=false;
  wall14.visible=false;
  wall15.visible=false;
  wall16.visible=false;
  wall17.visible=false;
  wall18.visible=false;
  wall19.visible=false;
  wall20.visible=false;
  wall21.visible=false;
  wall22.visible=false;
  wall23.visible=false;
  wall24.visible=false;
  wall25.visible=false;
  wall26.visible=false;
  wall27.visible=false;
  wall28.visible=false;
  wall29.visible=false;
  wall30.visible=false;
  wall31.visible=false;

  borderwall1.visible=false;
  borderwall2.visible=false;
  borderwall3.visible=false;
  borderwall4.visible=false;
  borderwall5.visible=false;
  borderwall6.visible=false;
  borderwall7.visible=false;
  borderwall8.visible=false;
  borderwall9.visible=false;
  borderwall10.visible=false;
  borderwall11.visible=false;
  borderwall12.visible=false;
  borderwall13.visible=false;
  borderwall14.visible=false;
  borderwall15.visible=false;
  borderwall16.visible=false;
  borderwall17.visible=false;
  borderwall18.visible=false;

  ghost1=createSprite(350,270,20,20);
  ghost1.addImage(ghost1Img)
  ghost1.scale=0.3
  ghost2=createSprite(350,300,20,20);
  ghost2.addImage(ghost2Img)
  ghost2.scale=0.3
  ghost3=createSprite(380,300,20,20);
  ghost3.addImage(ghost3Img)
  ghost3.scale=0.3
  ghost4=createSprite(325,300,20,20);
  ghost4.addImage(ghost4Img)
  ghost4.scale=0.3

  ghost1.velocityX=Math.round(random(-3,3));
  ghost1.velocityY=Math.round(random(-3,3));

  ghost2.velocityX=Math.round(random(-3,3));
  ghost2.velocityY=Math.round(random(-3,3));

  ghost3.velocityX=Math.round(random(-3,3));
  ghost3.velocityY=Math.round(random(-3,3));

  ghost4.velocityX=Math.round(random(-3,3));
  ghost4.velocityY=Math.round(random(-3,3));
        
}

function draw() {

  background(pacbackground);

  if(keyDown("UP_ARROW")){
    pacman.velocityY=-3
    pacman.velocityX=0
    pacman.rotation=270
  }
  if(keyDown("DOWN_ARROW")){
    pacman.velocityY=3
    pacman.velocityX=0
    pacman.rotation=90
  }
  if(keyDown("LEFT_ARROW")){
   pacman.velocityX=-3
   pacman.velocityY=0
   pacman.rotation=180
  }
  if(keyDown("RIGHT_ARROW")){
    pacman.velocityX=3
    pacman.velocityY=0
    pacman.rotation=0
   }   

   pacman.collide(ghostwall1);
   pacman.collide(ghostwall2);
   pacman.collide(ghostwall3);
   pacman.collide(ghostwall4);
   pacman.collide(ghostwall5);

   pacman.collide(wall1);
   pacman.collide(wall2);
   pacman.collide(wall3);
   pacman.collide(wall4);
   pacman.collide(wall5);
   pacman.collide(wall6);
   pacman.collide(wall7);
   pacman.collide(wall8);
   pacman.collide(wall9);
   pacman.collide(wall10);
   pacman.collide(wall11);
   pacman.collide(wall12);
   pacman.collide(wall13);
   pacman.collide(wall14);
   pacman.collide(wall15);
   pacman.collide(wall16);
   pacman.collide(wall17);
   pacman.collide(wall18);
   pacman.collide(wall19);
   pacman.collide(wall20);
   pacman.collide(wall21);
   pacman.collide(wall22);
   pacman.collide(wall23);
   pacman.collide(wall24);
   pacman.collide(wall25);
   pacman.collide(wall26);
   pacman.collide(wall27);
   pacman.collide(wall28);
   pacman.collide(wall29);
   pacman.collide(wall30);
   pacman.collide(wall31);

   pacman.collide(borderwall1);
   pacman.collide(borderwall2);
   pacman.collide(borderwall3);
   pacman.collide(borderwall4);
   pacman.collide(borderwall5);
   pacman.collide(borderwall6);
   pacman.collide(borderwall7);
   pacman.collide(borderwall8);
   pacman.collide(borderwall9);
   pacman.collide(borderwall10);
   pacman.collide(borderwall11);
   pacman.collide(borderwall12);
   pacman.collide(borderwall13);
   pacman.collide(borderwall14);
   pacman.collide(borderwall15);
   pacman.collide(borderwall16);
   pacman.collide(borderwall17);
   pacman.collide(borderwall18);

   ghost1.bounceOff(ghostwall1);
   ghost1.bounceOff(ghostwall2);
   ghost1.bounceOff(ghostwall3);
   ghost1.bounceOff(ghostwall4);
   ghost1.bounceOff(ghostwall5);
   ghost1.bounceOff(wall1);
   ghost1.bounceOff(wall2);
   ghost1.bounceOff(wall3);
   ghost1.bounceOff(wall4);
   ghost1.bounceOff(wall5);
   ghost1.bounceOff(wall6);
   ghost1.bounceOff(wall7);
   ghost1.bounceOff(wall8);
   ghost1.bounceOff(wall9);
   ghost1.bounceOff(wall10);
   ghost1.bounceOff(wall11);
   ghost1.bounceOff(wall12);
   ghost1.bounceOff(wall13);
   ghost1.bounceOff(wall14);
   ghost1.bounceOff(wall15);
   ghost1.bounceOff(wall16);
   ghost1.bounceOff(wall17);
   ghost1.bounceOff(wall18);
   ghost1.bounceOff(wall19);
   ghost1.bounceOff(wall20);
   ghost1.bounceOff(wall21);
   ghost1.bounceOff(wall22);
   ghost1.bounceOff(wall23);
   ghost1.bounceOff(wall24);
   ghost1.bounceOff(wall25);
   ghost1.bounceOff(wall26);
   ghost1.bounceOff(wall27);
   ghost1.bounceOff(wall28);
   ghost1.bounceOff(wall29);
   ghost1.bounceOff(wall30);
   ghost1.bounceOff(wall31);
   ghost1.bounceOff(borderwall1);
   ghost1.bounceOff(borderwall2);
   ghost1.bounceOff(borderwall3);
   ghost1.bounceOff(borderwall4);
   ghost1.bounceOff(borderwall5);
   ghost1.bounceOff(borderwall6);
   ghost1.bounceOff(borderwall7);
   ghost1.bounceOff(borderwall8);
   ghost1.bounceOff(borderwall9);
   ghost1.bounceOff(borderwall10);
   ghost1.bounceOff(borderwall11);
   ghost1.bounceOff(borderwall12);
   ghost1.bounceOff(borderwall13);
   ghost1.bounceOff(borderwall14);
   ghost1.bounceOff(borderwall15);
   ghost1.bounceOff(borderwall16);
   ghost1.bounceOff(borderwall17);
   ghost1.bounceOff(borderwall18);

   ghost2.bounceOff(ghostwall1);
   ghost2.bounceOff(ghostwall2);
   ghost2.bounceOff(ghostwall3);
   ghost2.bounceOff(ghostwall4);
   ghost2.bounceOff(ghostwall5);
   ghost2.bounceOff(wall1);
   ghost2.bounceOff(wall2);
   ghost2.bounceOff(wall3);
   ghost2.bounceOff(wall4);
   ghost2.bounceOff(wall5);
   ghost2.bounceOff(wall6);
   ghost2.bounceOff(wall7);
   ghost2.bounceOff(wall8);
   ghost2.bounceOff(wall9);
   ghost2.bounceOff(wall10);
   ghost2.bounceOff(wall11);
   ghost2.bounceOff(wall12);
   ghost2.bounceOff(wall13);
   ghost2.bounceOff(wall14);
   ghost2.bounceOff(wall15);
   ghost2.bounceOff(wall16);
   ghost2.bounceOff(wall17);
   ghost2.bounceOff(wall18);
   ghost2.bounceOff(wall19);
   ghost2.bounceOff(wall20);
   ghost2.bounceOff(wall21);
   ghost2.bounceOff(wall22);
   ghost2.bounceOff(wall23);
   ghost2.bounceOff(wall24);
   ghost2.bounceOff(wall25);
   ghost2.bounceOff(wall26);
   ghost2.bounceOff(wall27);
   ghost2.bounceOff(wall28);
   ghost2.bounceOff(wall29);
   ghost2.bounceOff(wall30);
   ghost2.bounceOff(wall31);
   ghost2.bounceOff(borderwall1);
   ghost2.bounceOff(borderwall2);
   ghost2.bounceOff(borderwall3);
   ghost2.bounceOff(borderwall4);
   ghost2.bounceOff(borderwall5);
   ghost2.bounceOff(borderwall6);
   ghost2.bounceOff(borderwall7);
   ghost2.bounceOff(borderwall8);
   ghost2.bounceOff(borderwall9);
   ghost2.bounceOff(borderwall10);
   ghost2.bounceOff(borderwall11);
   ghost2.bounceOff(borderwall12);
   ghost2.bounceOff(borderwall13);
   ghost2.bounceOff(borderwall14);
   ghost2.bounceOff(borderwall15);
   ghost2.bounceOff(borderwall16);
   ghost2.bounceOff(borderwall17);
   ghost2.bounceOff(borderwall18);

   ghost3.bounceOff(ghostwall1);
   ghost3.bounceOff(ghostwall2);
   ghost3.bounceOff(ghostwall3);
   ghost3.bounceOff(ghostwall4);
   ghost3.bounceOff(ghostwall5);
   ghost3.bounceOff(wall1);
   ghost3.bounceOff(wall2);
   ghost3.bounceOff(wall3);
   ghost3.bounceOff(wall4);
   ghost3.bounceOff(wall5);
   ghost3.bounceOff(wall6);
   ghost3.bounceOff(wall7);
   ghost3.bounceOff(wall8);
   ghost3.bounceOff(wall9);
   ghost3.bounceOff(wall10);
   ghost3.bounceOff(wall11);
   ghost3.bounceOff(wall12);
   ghost3.bounceOff(wall13);
   ghost3.bounceOff(wall14);
   ghost3.bounceOff(wall15);
   ghost3.bounceOff(wall16);
   ghost3.bounceOff(wall17);
   ghost3.bounceOff(wall18);
   ghost3.bounceOff(wall19);
   ghost3.bounceOff(wall20);
   ghost3.bounceOff(wall21);
   ghost3.bounceOff(wall22);
   ghost3.bounceOff(wall23);
   ghost3.bounceOff(wall24);
   ghost3.bounceOff(wall25);
   ghost3.bounceOff(wall26);
   ghost3.bounceOff(wall27);
   ghost3.bounceOff(wall28);
   ghost3.bounceOff(wall29);
   ghost3.bounceOff(wall30);
   ghost3.bounceOff(wall31);
   ghost3.bounceOff(borderwall1);
   ghost3.bounceOff(borderwall2);
   ghost3.bounceOff(borderwall3);
   ghost3.bounceOff(borderwall4);
   ghost3.bounceOff(borderwall5);
   ghost3.bounceOff(borderwall6);
   ghost3.bounceOff(borderwall7);
   ghost3.bounceOff(borderwall8);
   ghost3.bounceOff(borderwall9);
   ghost3.bounceOff(borderwall10);
   ghost3.bounceOff(borderwall11);
   ghost3.bounceOff(borderwall12);
   ghost3.bounceOff(borderwall13);
   ghost3.bounceOff(borderwall14);
   ghost3.bounceOff(borderwall15);
   ghost3.bounceOff(borderwall16);
   ghost3.bounceOff(borderwall17);
   ghost3.bounceOff(borderwall18);

   ghost4.bounceOff(ghostwall1);
   ghost4.bounceOff(ghostwall2);
   ghost4.bounceOff(ghostwall3);
   ghost4.bounceOff(ghostwall4);
   ghost4.bounceOff(ghostwall5)
   ghost4.bounceOff(wall1);
   ghost4.bounceOff(wall2);
   ghost4.bounceOff(wall3);
   ghost4.bounceOff(wall4);
   ghost4.bounceOff(wall5);
   ghost4.bounceOff(wall6);
   ghost4.bounceOff(wall7);
   ghost4.bounceOff(wall8);
   ghost4.bounceOff(wall9);
   ghost4.bounceOff(wall10);
   ghost4.bounceOff(wall11);
   ghost4.bounceOff(wall12);
   ghost4.bounceOff(wall13);
   ghost4.bounceOff(wall14);
   ghost4.bounceOff(wall15);
   ghost4.bounceOff(wall16);
   ghost4.bounceOff(wall17);
   ghost4.bounceOff(wall18);
   ghost4.bounceOff(wall19);
   ghost4.bounceOff(wall20);
   ghost4.bounceOff(wall21);
   ghost4.bounceOff(wall22);
   ghost4.bounceOff(wall23);
   ghost4.bounceOff(wall24);
   ghost4.bounceOff(wall25);
   ghost4.bounceOff(wall26);
   ghost4.bounceOff(wall27);
   ghost4.bounceOff(wall28);
   ghost4.bounceOff(wall29);
   ghost4.bounceOff(wall30);
   ghost4.bounceOff(wall31);
   ghost4.bounceOff(borderwall1);
   ghost4.bounceOff(borderwall2);
   ghost4.bounceOff(borderwall3);
   ghost4.bounceOff(borderwall4);
   ghost4.bounceOff(borderwall5);
   ghost4.bounceOff(borderwall6);
   ghost4.bounceOff(borderwall7);
   ghost4.bounceOff(borderwall8);
   ghost4.bounceOff(borderwall9);
   ghost4.bounceOff(borderwall10);
   ghost4.bounceOff(borderwall11);
   ghost4.bounceOff(borderwall12);
   ghost4.bounceOff(borderwall13);
   ghost4.bounceOff(borderwall14);
   ghost4.bounceOff(borderwall15);
   ghost4.bounceOff(borderwall16);
   ghost4.bounceOff(borderwall17);
   ghost4.bounceOff(borderwall18);        
        
  drawSprites()

}