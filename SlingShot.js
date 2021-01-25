class SlingShot{
    constructor(body1,point2){

var options={
    
    bodyA :body1,
    pointB :point2,
    stiffness:0.03,
    length:10
        
    }

this.sling=Constraint.create (options)
World.add(world,this.sling)
}

display(){
    if(this.sling.bodyA){
line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);
    }
}

fly(){
    this.sling.bodyA=null
}
attach(bodyx){
    this.sling.bodyA=bodyx
}
}