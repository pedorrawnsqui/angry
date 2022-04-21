class Resortera{
    constructor(bodyA, bodyB){
        var option ={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness:0.4,
            length:10   
           }
        
       this.resortera = Constraint.create(option);
       World.add(world,this.resortera); 
    }
display(){
    var puntoA=this.resortera.bodyA.position;
    var puntoB=this.resortera.bodyB.position;
    strokeWeight(5);
    line(puntoA.x,puntoA.y,puntoB.x,puntoB.y);
}
}