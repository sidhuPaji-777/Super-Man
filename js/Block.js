class Blocks
{
constructor(x, y, width, height) {
    var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0,
        isStatic : false
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

    
  }
  
  display(){
    
    var pos=this.body.position;
    fill("orange");
    
    stroke("blue");
    strokeWeight(0.5);
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    // push();
    
    // pop();

  }

  

}
