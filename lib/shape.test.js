const {Circle, Square, Triangle} = require("./shape")


describe ("shape",()=>{
    it ("should render a red circle", ()=>{
        const shape=new Circle()
        const shapeColor="red"
        shape.setColor(shapeColor)
        const expectedShape='<circle cx="150" cy="100" r="80" stroke="black" stroke-width="3" fill="red" />'
        expect(shape.render()).toEqual(expectedShape)
    })
    it ("should render a red square", ()=>{
        const shape=new Square()
        const shapeColor="red"
        shape.setColor(shapeColor)
        const expectedShape='<rect  x="100" y="60" width="100" height="100" stroke="black" stroke-width="3" fill="red" />'
        expect(shape.render()).toEqual(expectedShape)
    })
    it ("should render a red triangle", ()=>{
        const shape=new Triangle()
        const shapeColor="red"
        shape.setColor(shapeColor)
        const expectedShape='<polygon points="150,10 290,190 10,190" stroke="black" stroke-width="3" fill="red" />'
        expect(shape.render()).toEqual(expectedShape)
    })
})