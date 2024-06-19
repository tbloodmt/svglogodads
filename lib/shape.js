class Shape{
    constructor(){
        this.color=""
    }
    setColor(color){
        this.color=color
    }
}

class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="100" r="80" stroke="black" stroke-width="3" fill="${this.color}" />`
    }
}
class Square extends Shape {
    render(){
        return `<rect  x="100" y="60" width="100" height="100" stroke="black" stroke-width="3" fill="${this.color}" />`
    }
}
class Triangle extends Shape {
    render(){
        return `<polygon points="150,10 290,190 10,190" stroke="black" stroke-width="3" fill="${this.color}" />`
    }
}
module.exports={Circle, Square, Triangle}