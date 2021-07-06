class bin{
    constuctor(x,y,width,height){
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.leftBody=Bodies.rectangle(this.x=350,this.y=100,this.width=20,this.height=100)
       this.rightBody=Bodies.rectangle(this.x=400,this.y=100,this.width=20,this.height=100)
this.bottomBody=Bodies.rectangle(this.x=100,this.y=100,this.width=200,this.height=20)
World.add(world.this.bottomBody)
World.add(world.this.rightBody)
World.add(world.this.leftBody)
    }
    display()
    {
     var posright=this.rightBody.position
     var posleft=this.leftBody.position
     var posbottom=this.bottomBody.position
     Push()
         translate(posbottom.x,posbottom.y,posbottom.width,posbottom.height)
         rectMode(CENTRE)
         Fill(255)
         rect(posbottom.x,posbottom.y,this.width,this.height)
         pop()

        
    }


}
