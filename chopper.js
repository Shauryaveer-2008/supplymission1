class chopper {
    constructor(x, y) {
     
      this.body = Bodies.rectangle(x, y, 200, 100);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("brown");
      chopper(pos.x, pos.y, this.width, this.height);
      
    }
  }