class Rope{
    constructor(bodyA, pointB){
  
            var options = {
                bodyA : bodyA,
                pointB : pointB,
                stiffness : 0.4,
                length:100
            }

            this.object = Matter.Constraint.create(options);
            World.add(world, this.object)
    }


    fly(){
      this.object.bodyA = null;
    }
    display(){
      if(this.object.bodyA ){
        var A = this.object.bodyA.position
        var B = this.object.pointB
        line(A.x, A.y, B.x, B.y )
      }
    }
  }