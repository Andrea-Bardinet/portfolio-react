


class Scroll {

    constructor(down,up){
        this._up = up
        this._down = down
    }

    get up(){
        return this._up
    }

    set up(up){
        this._up = up
    }

    get down(){
        return this._down
    }

    set down(down){
        this._down = down
    }

}

export default Scroll;