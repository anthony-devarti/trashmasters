# SVG Icon Package

The svg package standardizes and locally hosts these svgs to make them editable.

## Props
Currently, the only prop taken in is the style props so a new implementation of the svg component can be easily styled inline.

## Usage
Usage is very simple.  Just import the component and use it like any other React component.  For example, to use the Google Icon, you would simply import GoogleIcon from "path", then include it in your return as a component like this: <GoogleIcon />

### Styling
Styling is notably affecting the render of the svg directly, and does not need to go through the css/sass to do this.  You are styling the svg, so use svg styling.