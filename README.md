# svglogodads

# SVG Elements Creator

Welcome to the SVG Elements Creator repository! This application allows you to create various SVG elements using JavaScript classes. It also includes a comprehensive test suite written in Jest to ensure the correctness of these classes.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Create various SVG elements (circle, rectangle, line, etc.) using JavaScript classes.
- Modify properties of SVG elements (e.g., position, color, size).
- Comprehensive unit tests for all classes using Jest.
- Easy integration and extensibility for additional SVG elements.

## Technologies

- **JavaScript**: For creating SVG elements.
- **Jest**: For writing and running tests.

## Installation

### Prerequisites

- Node.js (v14 or above)
- npm or yarn

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/svg-elements-creator.git
   cd svg-elements-creator
Install dependencies:

npm install
Usage
Creating SVG Elements
To create an SVG element, instantiate the corresponding class and use its methods to set properties. Here’s an example of how to create a circle:

javascript
const { Circle } = require('./src/elements');

const circle = new Circle();
circle.setRadius(50);
circle.setPosition(100, 100);
circle.setColor('red');

console.log(circle.toString()); // Outputs the SVG string for the circle
Available Elements
Circle
Rectangle
Line
Ellipse
Polygon
Polyline
Path
Each element has methods to set its properties, such as position, size, and color.

Testing
Running Tests
The application includes a comprehensive test suite written with Jest. To run the tests, use the following command:

npm test
This will run all tests and display the results in the terminal.

Example Test
Here’s an example of a test for the Circle class:

javascript
const { Circle } = require('../src/elements');

test('Circle should have correct default values', () => {
  const circle = new Circle();
  expect(circle.radius).toBe(0);
  expect(circle.cx).toBe(0);
  expect(circle.cy).toBe(0);
  expect(circle.color).toBe('black');
});

test('Circle should set radius correctly', () => {
  const circle = new Circle();
  circle.setRadius(50);
  expect(circle.radius).toBe(50);
});
Folder Structure
.
├── __tests__
│   ├── circle.test.js
│   ├── rectangle.test.js
│   └── ...
├── src
│   ├── elements
│   │   ├── Circle.js
│   │   ├── Rectangle.js
│   │   └── ...
│   └── index.js
├── .gitignore
├── jest.config.js
├── package.json
├── README.md
└── ...
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure to follow the existing code style and include tests for any new features or bug fixes.

Fork the project
Create your feature branch (git checkout -b feature/my-feature)
Commit your changes (git commit -m 'Add my feature')
Push to the branch (git push origin feature/my-feature)
Open a pull request
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
Project Maintainer: Matt Thomas
GitHub: https://github.com/tbloodmt/svglogodads




