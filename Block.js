class Block{
    constructor(x, y, width, height,) {
        var options = {
          restitution :0.4,
          friction :1.2,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visiblity=255

      }
      displayshape(){
        if (this.body.speed<3)
        {
   
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("pink");
        strokeWeight(4);
        stroke("black");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        }else{
            World.remove(world,this.body);
            push();
            this.Visiblity=this.Visiblity-5;
            tint(255,this.Visiblity);
            pop();

        }
      
      }
      
      score(){

        if(this.Visiblity<0 && this.Visiblity>-105){
        s++ ;
        }
      }
    }
  
    

    
      
        
  
    
    
      