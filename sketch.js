

const saveButton = document.querySelector('button#save');
const colorInput = document.querySelector('input#color');
console.log(colorInput);
const rectButton = document.querySelector('button#rect');
// I added the slider by selecting the element in the DOM
// that you added.
const slider = document.querySelector('input#slider');

let paintColor = '#ff6347';
colorInput.value = paintColor;

let sliderValue = 1;

// these are some names for your different drawing styles
const drawType = ['rectangle', 'circle'];
// this is for selecting one of your drawing styles
let drawSelectedIndex = 0;
function setup() {
  const canvas = createCanvas(200, 200);
  canvas.parent('sketch');
  background(255);
  saveButton.addEventListener('click', () => {
    console.log('clicked');
    save('image.png');
  });
  colorInput.addEventListener('input', () => {
    console.log(colorInput.value);
    paintColor = colorInput.value;
  });
  rectButton.addEventListener('click', () => {
    console.log('clicked');
    // when the button is clicked we increase the index
    drawSelectedIndex++;
    // to make sure we don't run out of drawTypes
    // we constrain the index to the length of the array
    drawSelectedIndex = drawSelectedIndex % drawType.length
    // to make visible what type we are currently using
    // we change the text on tje button
    rectButton.innerText = drawType[drawSelectedIndex]
  });

  // I gave the slider a event listener like we did
  // with all the other input elements
  slider.addEventListener('change', () => {
    // here you can do things with the value coming from
    // the slider apply it to your strokeWeight or something else
    // you need to do the same as for the paintColor
    // you have to create a global variable that you can overwrite
    console.log(slider.value);
  })

}

function draw() {}

function mouseDragged() {
  // fill(paintColor);
  // noStroke();
  // circle(mouseX, mouseY, 20);
  // line(pmouseX, pmouseY, mouseX, mouseY);

  // stroke(paintColor);
  // strokeWeight(sliderValue);
  // line(pmouseX, pmouseY, mouseX, mouseY);
  // for (let i = 0; i < 100; i++) {}
  fill(paintColor);

  // this is a switch statement
  // it is better suited for your case here then
  // writing a lot of if statements
  // but it does actually the same thing
  // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
  switch (drawType[drawSelectedIndex]) {
    case 'rectangle':
      rect(mouseX, mouseY, 10, 10);
      break;
    case 'circle':
      circle(mouseX, mouseY, 10);
      break;
    default:
      console.log('not defined state for drawing')
      break;
  }
}

function mouseClicked() {

}

function keyPressed() {
  if (key === 's') {
    save('image.png');
  }
}
