class drop {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50,50);
            
      World.add(world, this.body);
    
      if (this.body.position.x=767) {
        this.body = Bodies.rectangle(options);
    }
    
    }
    display(){
      var pos =this.body.position;
      fill("brown");
      drop(pos.x, pos.y, this.width, this.height);
      
    }
  }