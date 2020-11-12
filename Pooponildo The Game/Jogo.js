var x, y;
var xi=[],yi=[],i,t=5, colisao=[];
var xb=200,yb=200;
var temp=0, pdv, vidas,re
var fase,fim,pontos=0
var poop=[],j,a= true,agua,soap=[],k,papel=[],l,titulo,hist=0,historia,tutorial
var coin,cenario=[],c,cenario3,finalmau,resul,happy
var som,music=false
const po="images/poop"
function preload(){
for(j=1;j<=8;j++){
	poop[j]=loadImage(po+j+'.png');
}
coin=loadImage("images/coin.png")
for(c=1;c<=2;c++){
cenario[c]=loadImage("images/background"+c+".png")
}
cenario3=loadImage("images/background3.jpg")
titulo=loadImage("images/title.jpeg");
historia=loadImage("images/historinha.jpg");
tutorial=loadImage("images/tutorial.jpg");
finalmau=loadImage("images/gameover.jpg");
resul=loadImage("images/resultados.jpeg");
happy=loadImage("images/gamewin.jpg");
agua=loadImage("images/agua.png");
for(k=1;k<=2;k++){
	soap[k]=loadImage("images/soap"+k+".png");
}
for(l=1;l<=3;l++){
	papel[l]=loadImage("images/papel"+l+".png")
}
 som= loadSound('sons/undertale.mp3');
}	
function setup() {
  createCanvas(1200, 620);
  //variaveis do jogador
  x = 640;
  y = 240;
  //variaveis dos inimigos
  for(i=0;i<t;i++){
	 xi[i]=random(-100,0);
	 yi[i]=random(50,height-60);
	 colisao[i]=false 
  }
  vidas=20
  fase=false
  fim= false
  relod=false
  vj=9;
  vi=7
}
function movimento(){
 if(keyIsDown(LEFT_ARROW)){
    x-=vj;
    j=1
    a=false
    if(keyIsDown(UP_ARROW)){
		j=6
	}
}
  if(keyIsDown(RIGHT_ARROW)){
    x+=vj;
    j=3
    a=false
    if(keyIsDown(DOWN_ARROW)){
		j=8
	}
}
  if(keyIsDown(UP_ARROW)){
    y-=vj;
    j=2
    a=false
    if(keyIsDown(RIGHT_ARROW)){
		j=5
	}
}
  if(keyIsDown(DOWN_ARROW)){
    y+=vj;
    j=4
    a=false
    if(keyIsDown(LEFT_ARROW)){
		j=7
	}
}
  if(x<= 5){
	  x+= vj;
  }
  if(x>= width-50){
	  x-= vj;
	 }
  if(y<= 30){
	  y+= vj;
  }
  if(y>= height-50){
	  y-= vj;
	 }	
}	
function fase1(){
	background(cenario[1]);
     textSize(30);
  fill(334); 
  text(" Jogo do pooponildo (fase 1)   score: "+pontos+" tempo: "+int(temp)+" s vidas: "+vidas, 240, 25);
movimento()
  for(i=0;i<t;i++){
  if(xi[i]<=width){
	xi[i]+=vi
  }
	else{
	  xi[i]=random(-100,0)
	  yi[i]=random(50,height-60)
  }
  }
	for(i=0;i<t;i++){
		if(dist(xi[i]+35,yi[i]+35,x+25,y+25)<=55){
			if(colisao[i]==false){
				vidas-=pdv
				colisao[i]=true
			}
		}else{
			colisao[i]=false
			 }
}
	if(dist(xb+25,yb+25,x+25,y+25)<=40){
		pontos+=5
		xb=random(width-30)
		yb=random(50,height-60)
	}
	if(relod==true){
		x = 640;
		y = 240;
		xb=200;
		yb=200;
		relod=false
		for(i=0;i<t;i++){
	  xi[i]=random(-100,0)
	  yi[i]=random(50,height-60)
  }
	}
	if(a==true){
		j=1
	}
  image(poop[j],x, y, 50, 50);
  for(i=0;i<t;i++){
  image(agua,xi[i],yi[i],70,70)
  }
  fill(255,45,74)
  image(coin,xb,yb,50,50)
  pdv=2
  t=3

}
function fase2(){
	background(cenario[2]);
     textSize(30);
  fill(334); 
  text(" Jogo do pooponildo (fase 2)   score: "+pontos+" tempo: "+int(temp)+" s vidas: "+vidas, 240, 25);
	if(relod==false){
		relod=true
		for(i=0;i<t;i++){
	  xi[i]=random(-100,0)
	  yi[i]=random(50,height-60)
		}
	}
 movimento()
  for(i=0;i<t;i++){
  if(xi[i]<=width){
	xi[i]+=vi
  }
	else{
	  xi[i]=random(-100,0)
	  yi[i]=random(50,height-60)
  }
  }
	for(i=0;i<t;i++){
		if(dist(xi[i]+30,yi[i]+30,x+25,y+25)<=50){
			if(colisao[i]==false){
				vidas-=pdv
				colisao[i]=true
			}
		}else{
			colisao[i]=false
			 }
}
	if(dist(xb+25,yb+25,x+25,y+25)<=40){
		pontos+=5
		xb=random(width-30)
		yb=random(50,height-65)
	}

  image(poop[j],x, y, 50, 50);
for(i=0;i<t;i++){
	for(k=1;k<=2;k++){
	image(soap[k],xi[i],yi[i],60,60)
    }
}
  fill(255,45,74)
  image(coin,xb,yb,50,50)
  t=4
  pdv=3	
}
function fase3(){
	background(cenario3);
     textSize(30);
  fill(334); 
  text(" Jogo do pooponildo (fase 3)   score: "+pontos+" tempo: "+int(temp)+" s vidas: "+vidas, 240, 25);
 	if(relod==true){
		relod=false
		for(i=0;i<t;i++){
	  xi[i]=random(-100,0)
	  yi[i]=random(50,height-60)
		}
	}
 movimento()
  for(i=0;i<t;i++){
  if(xi[i]<=width){
	xi[i]+=vi
  }
	else{
	  xi[i]=random(-100,0)
	  yi[i]=random(50,height-60)
  }
  }
	for(i=0;i<t;i++){
		if(dist(xi[i]+35,yi[i]+35,x+25,y+25)<=45){
			if(colisao[i]==false){
				vidas-=pdv
				colisao[i]=true
			}
		}else{
			colisao[i]=false
			 }
}
	if(dist(xb+25,yb+25,x+25,y+25)<=40){
		pontos+=5
		xb=random(width-30)
		yb=random(50,height-60)
	}

  image(poop[j],x, y, 50, 50);
  for(i=0;i<t;i++){
		for(l=1;l<=3;l++){
			image(papel[l],xi[i],yi[i],70,70)
	}
  }
  fill(255,45,74)
  image(coin,xb,yb,50,50)
  pdv=4
  t=5
}
function inicio(){
	if(hist==0){
		background(titulo);
		textSize(30)
		fill(random(220),248,68)
		text("Pressione enter",450,520)
		if(keyIsDown(13)){
			hist=1
		}
}else{
	if(hist==1){
		background(historia)
		textSize(24)
		fill(random(220),248,68)
		text("Pressione 1",650,580)
		if(keyIsDown(49)){
		hist=2
	}
	}
	else{
		background(tutorial)
		textSize(24)
		fill(random(220),248,68)
		text("Pressione enter",650,580)
		textSize(32)
		fill(254)
		text("Para ganhar consiga 500 pontos.",570,290)
		if(keyIsDown(13)){
		fase=true
	}
	}
}

}
function gameover(){
	background(finalmau);
	if(keyIsDown(13)){
		fim=true
	}
	temp=0
	som.setVolume(0.02)
}
function resultados(){
		background(resul);
	textSize(48)
	fill(456)
	text("Sua pontuação foi: "+pontos,221,255)
	if(keyIsDown(49)){
		fim=false
		vidas=20
		pontos=0
		relod=true
		a=true
		music=false
}
som.stop()
}
function finalfeliz(){
	background(happy)
		if(keyIsDown(13)){
			fim=false
			vidas=20
			pontos=0
			relod=true
			a=true
			music=false
			som.stop()
		}
	temp=0
	som.setVolume(0.02)
}
function draw() {
if(fim==false){
if(vidas>0){

	if(fase==false){
		inicio()
}
else{
if(music==false){
  	som.setVolume(0.1);
	 som.play();
	 music=true	
}
	if(temp<50){
	fase1()
	temp+=0.02
}
else{
	if(temp<=100){
		fase2()
		temp+=0.02
}
else{
	if(temp>100){
		fase3()
		temp+=0.02
}
}
}
}
	if(pontos>=500){
		finalfeliz()
	}
}
else{
	gameover()
}
}
else{
	resultados()
}
	
}
