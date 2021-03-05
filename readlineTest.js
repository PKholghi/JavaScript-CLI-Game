import { read } from "fs";

import { createInterface } from "readline";
const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Introduces user to the Game //
console.log(`Welcome to the Maze of Monsters! The deadliest of Mazes where you will have to defeat a number of monsters, avoid obstacles and ultimately win the final treasure!`)

// Asks User to input their character name //
var name;
readline.question(`Please Enter your Character Name:`, (name) => {
    console.log(`Welcome to the Maze of Monsters ${name}!`)
    readline.close()
})
console.log(name);