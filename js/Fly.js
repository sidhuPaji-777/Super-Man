class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 170
        }

        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    // attach(body)
    // {
    //     this.rope.bodyA=body;

    // }

    fly(){
        this.rope.bodyA = null;
    }

    display(){
        if(this.rope.bodyA){
            fill("Black");
            strokeWeight(0);
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
            
        }
    }
    
}