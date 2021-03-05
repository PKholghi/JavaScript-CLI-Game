import { read } from "fs";

import { createInterface } from "readline";
const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

  
  const question1 = () => {
    return new Promise((resolve, reject) => {
      readline.question(`Welcome to the Maze of Monsters! The deadliest of Mazes where you will have to defeat a number of monsters, avoid obstacles and ultimately win the final treasure!
      Would you like to enter? `, function(answer) {
        if (answer === 'yes') {
            console.log('Wonderful!')
            } else if (answer === 'no') {
                console.log('GoodBye!');
                readline.close()
            } 
        resolve()
      })
    })
  }
  
  const question2 = () => {
    return new Promise((resolve, reject) => {
      readline.question('Please Enter your Character Name: ', (answer) => {
        console.log(`Welcome to the Maze of Monsters ${answer}`)
        resolve()
      })
    })
  }
  
  const main = async () => {
    await question1()
    await question2()
    readline.close()
  }
  
  main()