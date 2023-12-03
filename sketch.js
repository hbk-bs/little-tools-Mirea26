const saveButton = document.querySelector ('button#save');
const colorInput = document.querySelector ('input#color');
console.log(colorInput);

let paintColor = "#ff6347";
colorInput.value = paintColor;

let sliderValue = 1;

function setup() {
    const canvas = createCanvas(200,200);
    canvas.parent = ('sketch');
    background(255);
    saveButton.addEventListener("click", ()=>{
        console.log('clicked');
        save('image.png');
    })
    colorInput.addEventListener("input",()=>{
      console.log(colorInput.value);
      paintColor = colorInput.value;
    })
   slider = createSlider(0, 255, sliderValue);
   slider.position (860,100);
   slider.size(400);

   slider.input(function(){
    sliderValue = this.value();
   });
}

function draw() {
    
}

function mouseDragged() {
    fill(paintColor);
    noStroke();
    circle(mouseX, mouseY, 20)
    line(pmouseX, pmouseY, mouseX, mouseY);
}

function mouseDragged() {
    stroke(paintColor);
    strokeWeight(sliderValue);
    line (pmouseX, pmouseY, mouseX, mouseY);
    for (let i = 0; i<100; i++){
        
    }
}

function keyPressed(){
    if(key === 's'){
        save('image.png');
    }
}