# react-stars-particles

A React component to create a background simulating stars on a galaxy.
Attract stars when your mouse are close to them, and leave them when not. 
When you leave a star, it will get back to original position, to not overpopulate an area.

## Install
Using
`npm install react-stars-particles`

## Usage
In a React app, use:

`import { Galaxy } from 'react-stars-particles'`

## Props
These are the values that you can change:
| Name     | Description | Type | Default 
| ----     | ----------- | ---- | -------
| quantity | Set the amount of stars | int | 400
| attract  | Set the attract speed when near to stars | int | 0.5
| repulse  | Set the speed that stars are going back to default position | int | 0.2
| color | Set the color of the stars | string | "white"
