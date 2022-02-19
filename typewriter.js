
// Exercise: Take a sentence and display it as an animation

const sentence = "hello there from lighthouse labs";

let time = 0;

// Loop through character to print them one at a time
for(const char of sentence) {   
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 50;  
};

// Prints newline character after finishing
setTimeout( () => {
  console.log();
}, time+50);