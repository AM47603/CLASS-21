class Platform{
    constructor(posX){
        this.rx=posX;
        this.ry=600;
        this.rh=random(100,500);
        this.rl=random(160,280,330);
        this.spt=createSprite(this.rx,this.ry,this.rh,this.rl)
        this.spt.shapeColor="green"
        this.spt.debug=true;
    }
}