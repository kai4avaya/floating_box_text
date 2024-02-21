let letters = [];
let myFont; // Variable for the font

function preload() {
    // Load a .ttf or .otf font file instead of .woff2
    myFont = loadFont('/misc/jp.ttf');
  }

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    textFont(myFont); // Set the loaded font
    textSize(30);
    textAlign(CENTER, CENTER);
    // Create letters
    for (let i = 0; i < 100; i++) {
      letters.push(new Letter());
    }
  }

function draw() {
  background(255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  lights(); // Add basic lighting
  
  // Display all letters
  for (let i = 0; i < letters.length; i++) {
    letters[i].move();
    letters[i].display();
  }
}
let words = [
    "the", "Dutchmen", "too", "kneel", "before", "His", "Lordship", "spring", "under", "His", "reign",
    "by", "my", "new", "banana", "plant", "the", "first", "sign", "of", "something", "I", "loathe",
    "a", "miscanthus", "bud", "another", "year",  "暮ぬ笠きて", "草鞋はきながら",
    "古池や", "蛙飛びこむ", "水の音",
    "いざさらば", "雪見にころぶ", "所迄", "is", "gone", "a", "traveler's", "shade", "on", "my", "head",
    "straw", "sandals", "at", "my", "feet", "an", "ancient", "pond", "a", "frog", "jumps", "in", "the", "splash",
    "of", "water", "now", "then", "let's", "go", "out", "to", "enjoy", "the", "snow", "until", "I", "slip", "and",
    "fall", "the", "rough", "sea", "stretching", "out", "towards", "Sado", "the", "Milky", "Way", "falling", "sick",
    "on", "a", "journey", "my", "dream", "goes", "wandering", "on", "a", "withered", "field", "甲比丹も", "つくばはせけり", "君が春",
    "ばしょう植ゑて", "まづ憎む荻の", "二葉哉",
    "暮ぬ笠きて", "草鞋はきながら",
    "古池や", "蛙飛びこむ", "水の音",
    "いざさらば", "雪見にころぶ", "所迄",
    "荒海や", "佐渡によこたふ", "天の川",
    "旅に病んで", "夢は枯野を", "かけ廻る"
  ];

class Letter {
  constructor() {
    this.position = createVector(random(-width / 2, width / 2), random(-height / 2, height / 2), random(-width / 2, width / 2));
    this.speed = p5.Vector.random3D();
    this.speed.mult(random(0.5, 1.5));
    this.char = random(words); // You can choose a different character or make it random
  }
  
  move() {
    this.position.add(this.speed);
    // Reflect off walls
    if (this.position.x < -width / 2 || this.position.x > width / 2) {
      this.speed.x *= -1;
    }
    if (this.position.y < -height / 2 || this.position.y > height / 2) {
      this.speed.y *= -1;
    }
    if (this.position.z < -width / 2 || this.position.z > width / 2) {
      this.speed.z *= -1;
    }
  }
  
  display() {
    push();
    translate(this.position.x, this.position.y, this.position.z);
    fill(0);
    stroke(255); // Add stroke to text for visibility
    strokeWeight(2); // Stroke weight
    text(this.char, 0, 0);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
