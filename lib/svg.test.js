const Svg=require("./svg")
const {Circle}=require("./shape")


describe("svg",()=>{
    it ("should create a red circle with blue text",()=>{
        const shape=new Circle()
        shape.setColor("red")
        const logo=new Svg()
        logo.setText("ABC","blue")
        logo.setShape(shape)
        const expectedLogo=`<svg width="300" height="200"><circle cx="150" cy="100" r="80" stroke="black" stroke-width="3" fill="red" /><text fill="blue" text-anchor="middle" x="150" y="125" font-size="50">ABC</text></svg>`
        expect(logo.render()).toEqual(expectedLogo)
    })
})