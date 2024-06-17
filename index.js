const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle}=require("./lib/shape")
const Svg=require("./lib/svg")


function svgCriteria(){
inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "Please enter text for logo. (Text should be up to be 3 characters)",
    },
    {
        type: "input",
        name: "textcolor",
        message: "Please enter a text color (Enter keyword or a hexadecimal number):",
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter shape color (Enter keyword (or a hexadecimal number):",
    },
    {
        type: "list",
        name: "shape",
        message: "Please choose which shape you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
]).then((shapeAnswers)=>{
    let myLogo;
    switch (shapeAnswers.shape){
        case "Circle": 
                 myLogo = new Circle()
                 break;
                 case "Square": 
                 myLogo = new Square()
                 break;
                 
                 case "Triangle": 
                 myLogo = new Triangle()
                 break;
    }
    myLogo.setColor(shapeAnswers.shapeColor)
    const mainLogo=new Svg()
    mainLogo.setShape(myLogo)
    mainLogo.setText(shapeAnswers.text,shapeAnswers.textcolor)
    if (shapeAnswers.text.length>3){
        console.log("must be 3 charaters")
        return
    }
    else {
        fs.writeFile("coollogo.svg", mainLogo.render(),(err)=>{
            err? console.log(err): console.log("your cool logo has been generated!")
        })
    }
})
}
svgCriteria()