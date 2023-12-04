

const saveButton = document.querySelector('button#save');
const colorInput = document.querySelector('input#color');
console.log(colorInput);
const rectButton = document.querySelector('button#rect');
const slider = document.querySelector('input#slider');
const triangleButton = document.querySelector('button#triangle');

let paintColor = '#ff6347';
colorInput.value = paintColor;

let sliderValue = 10;
//slider.value = sliderValue;
let size = 10;
const step = 5;
slider.value = size;

// these are some names for your different drawing styles
const drawType = ['rectangle', 'circle'];
// this is for selecting one of your drawing styles
let drawSelectedIndex = 0;

const drawTypeII = ['triangle', 'ellipse'];

let drawSelectedIndexII = 0;


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
    
    //if(slider.value > min){
    size = size + step; 
    //size = sliderValue;
    console.log(slider.value);
    //sliderValue = slider.value;
    //}
    //else{
        //size = size - step;
    //}

    //Gibt es einen Befehl bei dem man sagen kann, dass wenn man den Slider nach rechts bewegt,
    //der Strich immer größer wird (d.h. + step) und wenn man ihn nach links bewegt, der Strich 
    //wieder kleiner wird (d.h. -step)???

  })
    
  triangleButton.addEventListener('cklick', ()=> {
    console.log('clicked');
    drawSelectedIndexII++;
    drawSelectedIndexII = drawSelectedIndexII % drawTypeII.length
    triangleButton.innerText = drawTypeII[drawSelectedIndexII]
  })
}

function draw() {}

function mouseDragged() {
   fill(paintColor);
   noStroke();
   circle(mouseX, mouseY, size);
   line(pmouseX, pmouseY, mouseX, mouseY);

  // stroke(paintColor);
  // strokeWeight(sliderValue);
  // line(pmouseX, pmouseY, mouseX, mouseY);
  // for (let i = 0; i < 100; i++) {}
  //fill(paintColor);

  // this is a switch statement
  // it is better suited for your case here then
  // writing a lot of if statements
  // but it does actually the same thing
  // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
    
}


function mouseClicked() {
    //if(rectButton('clicked')){
    
    fill(paintColor);
    noStroke();
    switch (drawType[drawSelectedIndex]) {
        case 'rectangle':
          rect(mouseX, mouseY, size, size);
          break;
        case 'circle':
          circle(mouseX, mouseY, size);
          break;
        default:
          console.log('not defined state for drawing')
          break;
      }
      
      //}
    //else if(triangleButton('clicked')){
        //fill(paintColor);

    switch (drawtypeII[drawSelectedIndexII]){
        case 'triangle':
        triangle(mouseX, mouseY, mouseX - size, mouseY + size, mouseX + size, mouseY +size);
        break;
        case 'ellipse':
        ellipse(mouseX, mouseY, size, size);
        break;
        default:
            console.log('not defined state for drawing')
        break;
    }

    //}
    //else {
        //fill(paintColor);
        //noStroke();
        //circle(mouseX, mouseY, size);
        //line(pmouseX, pmouseY, mouseX, mouseY);
    //}
}

function keyPressed() {
  if (key === 's') {
    save('image.png');
  }
}
