const saveButton = document.querySelector ('button#save');
const colorInput = document.querySelector ('input#color');
console.log(colorInput);
const rectButton = document.querySelector ('button#rect');

let paintColor = "#ff6347";
colorInput.value = paintColor;

let sliderValue = 1;
const rect = rect(random(width), random(height), 10, 10);

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
    rectButton.addEventListener("click",()=>{
        console.log('clicked');
        rect('rect');
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

    stroke(paintColor);
    strokeWeight(sliderValue);
    line (pmouseX, pmouseY, mouseX, mouseY);
    for (let i = 0; i<100; i++){
        
    }
}

function mouseClicked(rectButton) {
    fill(paintColor);
    rect(mouseX, mouseY, 10, 10);
}

function keyPressed(){
    if(key === 's'){
        save('image.png');
    }
}