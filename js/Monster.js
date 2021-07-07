class Monster {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          density : 1,
          // frictionAir : 0.1
      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;

      this.image = loadImage("img/Monster-01.png", "img/Monster-02.png");
      // this.image = loadAnimation("img/Monster-01.png", "img/Monster-02.png");
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("cyan");
      // rect(pos.x, pos.y, this.width, this.height);
      push();
      imageMode(CENTER);
      image(this.image, pos.x, pos.y-10, this.width+50, this.height+50);
      pop();
    }
  };
