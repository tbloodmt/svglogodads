class Svg{
    constructor(){
        this.textEl=""
        this.shapeEl=""
    }
    render(){
        return `<svg width="300" height="200">${this.shapeEl}${this.textEl}</svg>`
    }
    setText(text,color){
        this.textEl=`<text fill="${color}" text-anchor="middle" x="150" y="125" font-size="50">${text}</text>`
    }
    setShape(shape){
        this.shapeEl=shape.render()
    }
}
module.exports=Svg