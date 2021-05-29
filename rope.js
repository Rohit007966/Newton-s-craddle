class Rope {
    constructor(body1,body2,offsetX,offsetY) {
  this.offsetX=offsetX
  this.offsetX=offsetX
  var options = {
      bodyA:body1,
      bodyB:body2,
      pointB:{x:this.offsetX,y:this.offsetY}
  
  
    }
      
  //console.log(options);
  this.rope=constraint.create(options)
  World.add(world,this.rope)
   
  rope1= new rope(bobObject1.body,roofObject.body,-bobDiameter*2,8)


  
}
     display(){
        
     }
    };