const { Rooms } = require("./room");
const rl = require("readline");
const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const start = new Rooms("Welcome to the maze, you are in room B where to go? west/north/east/exit", "roomE", null, "roomC", "roomA", () => {console.log("Bye then!"); readline.close();}, null, null);
const end = new Rooms("Do you want to play again? Yes/Exit", null, null, null, null, () => {console.log("Bye then!"); readline.close();}, "start", null);
const roomA = new Rooms("This is room A north/east/exit", "roomD", null, "start", null, () => {console.log("Bye then!"); readline.close();}, null, null);
const roomC = new Rooms("You have entered room C: North/West/Exit", "roomF", null, null, "start", () => {console.log("Bye then!"); readline.close();}, null, null);
const roomD = new Rooms("This is room D north/east/south/exit", "roomG", "roomA", "roomE", null, () => {console.log("Bye then!"); readline.close();}, null, null);
const roomE = new Rooms("You have entered room E: West/East/South/Exit", null, "start", "roomF", "roomD", () => {console.log("Bye then!"); readline.close();}, null, null);
const roomF = new Rooms("You have entered room F: South/West/Exit", null, "roomC", null, "roomE", () => {console.log("Bye then!"); readline.close();}, null, null);
const roomG = new Rooms("You have entered room G: North/South/Exit", "roomH", "roomD", null, null, () => {console.log("Bye then!"); readline.close();}, null, null);
const roomH = new Rooms("You have entered room H: South/East/Exit", null, "roomG", "roomI", null, () => {console.log("Bye then!"); readline.close();}, null, null);
const roomI = new Rooms("You have entered room I: West/East/Exit", null, null, "roomJ", "roomH", () => {console.log("Bye then!"); readline.close();}, null, null);
const roomJ = new Rooms("You have entered room J: West/East/Exit", null, null, "roomK", "roomI", () => {console.log("Bye then!"); readline.close();}, null, null);
const roomK = new Rooms("You have entered room K: Leave", null, null, null, null, null, null, null, "leave")



function startGame() {
    const steps = {
      start,
      end,
      roomE,
      roomC,
      roomA, 
      roomF,
      roomD,
      roomG,
      roomH,
      roomI,
      roomJ,
      roomK
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