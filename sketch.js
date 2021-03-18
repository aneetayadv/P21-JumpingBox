var canvas;
var music;

function preload(){
    music = loadSound("assets/music.mp3");
    bg = loadImage("assets/bg.png");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = rgb(0,0,255);

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = rgb(255,128,0);

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = rgb(153,0,76);

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = rgb(0,100,0);


    //create box sprite and give velocity
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;
}

function draw() {
    background(bg);
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(block1.isTouching(ball)){
        ball.shapeColor = rgb(0,0,255);
        ball.bounceOff(block1)
        if(!music.isPlaying()){
            music.play();
        }     
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = rgb(255,128,0);
        ball.velocityX = 0;
        ball.velocityY = 0;
        if(music.isPlaying()){
            music.stop();
        }  
    }

    if(block3.isTouching(ball)){
        ball.shapeColor = rgb(153,0,76);
        ball.bounceOff(block3);
        if(!music.isPlaying()){
            music.play();
        }  
    }

    if(block4.isTouching(ball)){
        ball.shapeColor = rgb(0,100,0);
        ball.bounceOff(block4);
        if(!music.isPlaying()){
            music.play();
        }  
    }

    drawSprites();
}
