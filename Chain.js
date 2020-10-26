class Chain{
    constructor(bodyA,pointB){
        var options={
           bodyA:bodyA,
           pointB:pointB,
           stiffnes:1.2,
           length:250
           }
        this.body=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.body);

    }
    display(){
        
       var pointA=this.body.bodyA.position;
       var pointB=this.pointB;
       line(pointA.x,pointA.y,pointB.x,pointB.y);


    }
}
