# react-stars-particles

**react-stars-particles** is a captivating React component that brings a dynamic and interactive galaxy background to your web pages. With stars that are attracted to the mouse pointer and smooth animations, it offers a unique and engaging user experience.

Attract stars with your mouse as you move closer to them, and watch them gracefully return to their original positions when you move away to maintain a balanced cosmic display.

## Table of Contents
- [Installation](#install)
- [Usage](#usage)
- [Props](#props)
- [Examples](#examples)
- [License](#license)
- [Showcase](#showcase)
- [GitHub](#github)

## Install

Install **react-stars-particles** using npm:

```bash
npm install react-stars-particles
```

## Usage

Integrate **react-stars-particles** into your React app with ease:

```jsx
import { Galaxy } from 'react-stars-particles';

function App() {
  return (
    <div>
      <h1>Welcome to My Galaxy</h1>
      <Galaxy />
    </div>
  );
}

export default App;
```

## Props

Customize your galaxy with these adjustable properties:

| Name      | Description                                | Type   | Default |
|-----------|--------------------------------------------|--------|---------|
| `quantity`| Set the number of stars in the galaxy      | int    | 400     |
| `attract` | Adjust the attraction speed of stars       | int    | 0.5     |
| `repulse` | Modify the speed stars return to default   | int    | 0.2     |
| `color`   | Define the color of the stars              | string | "white" |

## Examples

### Basic Usage

```jsx
import { Galaxy } from 'react-stars-particles';

function App() {
  return (
    <div>
      <h1>Welcome to My Galaxy</h1>
      <Galaxy />
    </div>
  );
}

export default App;
```

### Customization

```jsx
import { Galaxy } from 'react-stars-particles';

function App() {
  return (
    <div>
      <h1>Custom Galaxy</h1>
      <Galaxy 
        quantity={200}
        attract={0.8}
        repulse={0.3}
        color="blue"
      />
    </div>
  );
}

export default App;
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## NPM Package

Here's the NPM page associated with this package:

[NPM](https://www.npmjs.com/package/react-stars-particles)

## Showcase

Check out the **react-stars-particles** showcase:

[Showcase](https://galaxysimulator.netlify.app)

## GitHub

Explore the **react-stars-particles** and **showcase** GitHub repositories:

[GitHub - react-stars-particles](https://github.com/hugofolloni/react-stars-particles)

[GitHub - Galaxy Simulator](https://github.com/hugofolloni/galaxy-simulator)
