
function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 30;
  }
  this.moveDown = function (){
    this.top += 30;
  }
  this.moveLeft  = function (){
    this.left -= 30;
  }
  this.moveUp = function (){
    this.top -= 30;
  }

}

var hero = new Hero('pikachu.png', 20, 30, 200);

function start(){
  if(hero.left < window.innerWidth - hero.size && hero.top <=30){
    hero.moveRight();
  } else if (hero.top + hero.size < window.innerHeight && hero.left + hero.size >= window.innerWidth){
    hero.moveDown();
  } else if (hero.top + hero.size >= window.innerHeight && hero.left > 0){
    hero.moveLeft();
  } else if (hero.top >= 30 && hero.left <=0){
    hero.moveUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 100)
}

start();