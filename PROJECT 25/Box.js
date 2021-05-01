class Boxes {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }

      this.image1 = loadImage("images/Trash can.png")

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      image(this.image1, 930,310)
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255,0,128);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
