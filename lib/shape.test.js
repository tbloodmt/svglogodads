const {Circle, Square, Triangle} = require("./shape")


describe ("shape",()=>{
    it ("should render a red circle", ()=>{
        const shape=new Circle()
        const shapeColor="red"
        shape.setColor(shapeColor)
        const expectedShape='<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />'
        expect(shape.render()).toEqual(expectedShape)
    })
    it ("should render a red square", ()=>{
        const shape=new Square()
        const shapeColor="red"
        shape.setColor(shapeColor)
        const expectedShape='<rect x="10" y="10" width="80" height="80" stroke="black" stroke-width="3" fill="red" />'
        expect(shape.render()).toEqual(expectedShape)
    })
    it ("should render a red triangle", ()=>{
        const shape=new Triangle()
        const shapeColor="red"
        shape.setColor(shapeColor)
        const expectedShape='<polygon points="50,10 90,90 10,90" stroke="black" stroke-width="3" fill="red" />'
        expect(shape.render()).toEqual(expectedShape)
    })
})