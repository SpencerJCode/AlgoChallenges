class Cog{
    constructor() {
        this.spokes = [
            [0,1,0],
            [0,8,0],
            [0,0,0],
        ];
        this.left = null;
        this.right = null;
    }
}

class Machine{
    constructor(){
        this.start = null;

    }

    rotateRight(){
        let rotatedCog = new Cog
        rotatedCog.spokes[0][0] = this.start.spokes[2][0]
        rotatedCog.spokes[0][1] = this.start.spokes[1][0]
        rotatedCog.spokes[0][2] = this.start.spokes[0][0]
        rotatedCog.spokes[1][0] = this.start.spokes[2][1]
        rotatedCog.spokes[1][2] = this.start.spokes[0][1]
        rotatedCog.spokes[2][0] = this.start.spokes[2][2]
        rotatedCog.spokes[2][1] = this.start.spokes[1][2]
        rotatedCog.spokes[2][2] = this.start.spokes[0][2]
        rotatedCog.right = this.start.right
        this.start = rotatedCog
    }

    rotateLeft(){
        let rotatedCog = new Cog
        rotatedCog.spokes[0][0] = this.start.spokes[0][2]
        rotatedCog.spokes[0][1] = this.start.spokes[1][2]
        rotatedCog.spokes[0][2] = this.start.spokes[2][2]
        rotatedCog.spokes[1][0] = this.start.spokes[0][1]
        rotatedCog.spokes[1][2] = this.start.spokes[2][1]
        rotatedCog.spokes[2][0] = this.start.spokes[0][0]
        rotatedCog.spokes[2][1] = this.start.spokes[1][0]
        rotatedCog.spokes[2][2] = this.start.spokes[2][0]
        rotatedCog.right = this.start.right
        this.start = rotatedCog
    }

    showCogs(){
        let thisCog = this.start;
        let moveOn = true;
        while (moveOn){
            for ( let i=0; i<thisCog.spokes.length; i++){
                console.log(thisCog.spokes[i])
                if (thisCog.right != null) {
                    thisCog = thisCog.right
                } else {
                    moveOn = false
                }
            }

        }
    }
}

let gearLine = new Machine
gearLine.start = new Cog
gearLine.showCogs()
console.log("Rotating Right")
gearLine.rotateRight()
gearLine.showCogs()
console.log("Rotating Left")
gearLine.rotateLeft()
gearLine.showCogs()
console.log("Rotating Left")
gearLine.rotateLeft()
gearLine.showCogs()
console.log("Rotating Left")
gearLine.rotateLeft()
gearLine.showCogs()