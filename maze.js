const rl = require("readline");
const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function startGame() {
    const steps = {
        start: {
            message: "Welcome to the maze, you are in room B where to go? west/north/east/exit",
            north: "roomE",
            east: "roomC",
            west: "roomA",
            exit: () => {
                console.log("Bye then!");
                readline.close();
                },
        },
        end: {
            message: "Do you want to play again? yes/exit",
            yes: "start",
            exit: () => {
                console.log("Bye then!");
                readline.close();
                },
        },
        roomE: {
            message: "You have entered room E: west/east/south/exit",
            west: "roomD",
            east: "roomF",
            south: "start",
            exit: () => {
                console.log("Bye then!");
                readline.close();
                },
        },
        roomC: {
            message: "You have entered room C: north/west/exit",
            north: "roomF",
            west: "start",
            exit: () => {
                console.log("Bye then!");
                readline.close();
                },
        },
        roomA: {
            message: "YOu have entered room A: east/north/exit",
            north: "roomD",
            east: "start",
            exit: () => {
                console.log("Bye then!");
                readline.close();
                },
        },
        roomF: {
            message: "You have entered room F: south/west/exit",
            south: "roomC",
            west: "roomE",
            exit: () => {
                console.log("Bye then!");
                readline.close();
                },
        },
        roomD: {
            message: "You have entered room D: north/south/east/exit",
            north: "roomG",
            east: "roomE",
            south: "roomA",
            exit: () => {
                console.log("Bye then!");
                readline.close();
                },
        },
        roomG: {
            message: "You have entered room G: north/south/exit",
            north: "roomH",
            south: "roomD",
            exit: () => {
                console.log("Bye then!");
                readline.close();
                },
        },
        roomH: {
            message: "You have entered room H: south/east/exit",
            east: "roomI",
            south: "roomG",
            exit: () => {
                console.log("Bye then!");
                readline.close();
                },
        },
        roomI: {
            message: "You have entered room I: west/east/exit",
            west: "roomH",
            east: "roomJ",
            exit: () => {
                console.log("Bye then!");
                readline.close();
                },
        },
        roomJ: {
            message: "You have entered room J: west/east/exit",
            west: "roomI",
            east: "roomK",
            exit: () => {
                console.log("Bye then!");
                readline.close();
                },
        },
        roomK: {
            message: "You have entered room K: leave",
            exit: () => {
                console.log("Bye then!");
                readline.close();
                },
        }
  };

  let currentStep = "start";

  function logStep() {
    const step = steps[currentStep];

    if (step) {
      readline.question(`${step.message || ""} `, (input) => {
        handleAnswer(input);
      });
    }
  }

  function handleAnswer(answer) {
    let step;

    if (answer === "north") {
      step = steps[currentStep].north;
    } else if (answer === "south") {
        step = steps[currentStep].south;
    } else if (answer === "east") {
        step = steps[currentStep].east;
    } else if (answer === "west") {
        step = steps[currentStep].west;
    } else if (answer === "leave") {
        console.log("you won!")
    } else {
        step = steps[currentStep].exit;
    }

    if (typeof step === "function") {
      step();
      return;
    }

    if (typeof step === "string") {
      currentStep = step;
    } else {
      currentStep = "end";
    }
    logStep();
  }

  function isNumber(num) {
    const value = parseInt(num);
    return !isNaN(value);
  }

  console.clear();
  logStep();
}

startGame();