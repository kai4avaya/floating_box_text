// JavaScript using p5.js goes here

let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // Create particles
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  
  // Display all particles
  for (let i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].display();
  }
}

class Particle {
  constructor() {
    this.position = createVector(random(-width/2, width/2), random(-height/2, height/2), random(-width/2, width/2));
    this.speed = p5.Vector.random3D();
    this.speed.mult(random(0.5, 1.5));
  }
  
  move() {
    this.position.add(this.speed);
    // Reflect off walls
    if (this.position.x < -width/2 || this.position.x > width/2) {
      this.speed.x *= -1;
    }
    if (this.position.y < -height/2 || this.position.y > height/2) {
      this.speed.y *= -1;
    }
    if (this.position.z < -width/2 || this.position.z > width/2) {
      this.speed.z *= -1;
    }
  }
  
  display() {
    push();
    translate(this.position.x, this.position.y, this.position.z);
    noStroke();
    fill(0);
    sphere(5); // size of particle
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
