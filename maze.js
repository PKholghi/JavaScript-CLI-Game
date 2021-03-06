import { Rooms } from "./rooms.js";
import { monster } from "./monsterClass.js";
import promptSync from 'prompt-sync';
let prompt = promptSync({sigint: true});
import { Character } from "./characterClass.js"
import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Skeleton=new monster('Skeleton',50,50);
Skeleton.addAttack('The skeleton bops you with a bone',10);
Skeleton.addAttack('The skeleton punches you',10);
Skeleton.addAttack('The skeleton misses',0);
Skeleton.addAttack("The skeleton headbutts you", 20)

const TempleGuard=new monster('Temple Guard',100,100);
TempleGuard.addAttack('The temple guard swings a rusty sword at you',10);
TempleGuard.addAttack('The temple guard uses Mayan spells on you',10);
TempleGuard.addAttack('The temple guard swings too hard and misses',0);
TempleGuard.addAttack("You have been cut by the temple guards morgul blade", 15)

const Necromage=new monster('Necromage',100,100);
Necromage.addAttack('The necromage uses the dark arts to summon a demon to fight you', 20);
Necromage.addAttack('The necromage uses black magic on you', 15);
Necromage.addAttack('The necromage swings his staff at you, but misses',0);
Necromage.addAttack("The necromage hits you with his staff", 10);

const UndeadKing=new monster('Undead King',150,500);
UndeadKing.addAttack('The undead king throws a fireball',15);
UndeadKing.addAttack('The undead king throws a fireball... It misses',0);
UndeadKing.addAttack('The undead king slashes at you with a sword',10);
UndeadKing.addAttack('The undead king throws you across the room',10);


const start = new Rooms(`\nYou are a famed treasure hunter in search of the lost treasure of the first Aztec tribe, after many years of searching 
you find yourself at the entrance of the maze-like tomb of their King, there is a path to the west, east and north but beware the challenges of the maze,
not all make it out alive. 
Which way do you go? West/North/East/Exit`, "templeE", null, "skeleC", "necroA", () => {console.log("You have chosen the easy way out."); readline.close();}, null, null);
const end = new Rooms("\nDo you dare enter the maze again? Yes/Exit", null, null, null, null, () => {console.log("You have chosen the easy way out."); readline.close();}, "start", null);
const roomA = new Rooms(`\nYou head down a dimly lit path and find yourself in what looks like a sacrificial chamber to the Aztec Gods,
now is no time to pray or sacrifice. 
Which way do you go? North/East/Exit`, "roomD", null, "start", null, () => {console.log("You have chosen the easy way out."); readline.close();}, null, null);
const skeleC = new Rooms(`\nThe path is long and winding but you enter a room, a skeleton stands before you.
What do you do? Fight Skeleton/Exit`, null, null, null, null,  () => {console.log("You have chosen the easy way out."); readline.close();}, null, null, "fight skeleton", null)
const roomC = new Rooms(`\nOn closer inspection after defeating the skeleton you see a room that resembles the crypt of the fallen soldiers, 
ghouls that forever guard the treasure of this tomb, any sudden noise and you risk death. 
Which way do you (quietly) go? North/West/Exit`, "roomF", null, null, "start", () => {console.log("You have chosen the easy way out."); readline.close();}, null, null);
const roomD = new Rooms(`\nYou take the path that descends down into the dungeons of the tomb, an eerie noise lingers in the shadows and you can 
barely make out the path ahead of you. 
Which way do you go? North/East/South/Exit`, "roomG", "necroA", "templeE", null, () => {console.log("You have chosen the easy way out."); readline.close();}, null, null);
const roomE = new Rooms(`\nYou have entered the main hall of the tomb, it is dark and cave paintings surround the walls to your sides showing the great war victories of this fallen tribe.
ahead of you stands a tall statue of the Aztec King, you notice something skulking in the shadows behind this statue but it quickly scuttles away.
Which way do you go? West/East/South/Exit`, null, "start", "roomF", "roomD", () => {console.log("You have chosen the easy way out."); readline.close();}, null, null);
const roomF = new Rooms(`\nThere is nothing in this room, just a cauldron where witches often come to make their incantations and elixirs
and several torches on the walls. 
Which way do you go? West/South/Exit`, null, "skeleC", null, "templeE", () => {console.log("You have chosen the easy way out."); readline.close();}, null, null);
const roomG = new Rooms(`\nAhead of you stands an old broken bridge, the path seems toilsome and there is a steep drop beneath you but you are sure this leads
to the centre of the tomb, do you dare head north across the bridge?
Which way do you go? North/South/Exit`, "roomH", "roomD", null, null, () => {console.log("You have chosen the easy way out."); readline.close();}, null, null);
const roomH = new Rooms(`\nA great hallway stands ahead of you with the fallen soldiers of the tomb lined on each side, you are sure this leads to the throne room
(Also theres a sign that says "Throne Room Eastwards" in Ancient Mayan, good thing you bought a Rosetta Stone).
Which way do you go? South/East/Exit`, null, "roomG", "roomI", null, () => {console.log("You have chosen the easy way out."); readline.close();}, null, null);
const roomI = new Rooms(`\nAhead of you stands a door to the throne room, the skeletons of all those that failed to get past cover the floor of the room.
Which way do you go? West/East/Exit`, null, null, "kingJ", "roomH", () => {console.log("You have chosen the easy way out."); readline.close();}, null, null);
const roomJ = new Rooms(`\nYou have entered the Throne room, a dusty stone throne with the skeleton of the dead Aztec King sits in the centre with great statues
of those that led the tribe before lining both sides of the room, the treasure chamber which lies eastwards is just within your grasp.
Which way do you go? West/East/Exit`, null, null, "roomK", "roomI", () => {console.log("You have chosen the easy way out."); readline.close();}, null, null, null, "fight king");
const roomK = new Rooms(`\nYou step into the treasure room and find yourself surrounded by mountains of gold and jewels, it is clear you are the
first person to step foot in here for centuries.
You have beaten the maze: Leave`, null, null, null, null, null, null, null, "leave")
const templeE = new Rooms(`\nYou walk towards the main hall of the tomb but a Temple Guard stands ahead of you.
What do you do? Fight Guard/Exit`, null, null, null, null, () => {console.log("You have chosen the easy way out."); readline.close();}, null, null, null, "fight guard", null, null);
const necroA = new Rooms(`\nYou walk towards the sacrifical chamber but a Necromage stands before you.
What do you do? Fight Mage/Exit`, null, null, null, null, () => {console.log("You have chosen the easy way out."); readline.close();}, null, null, null, null, "fight mage", null);
const kingJ = new Rooms(`\nAs you walk towards the thone room you see the remains of the Aztec King stand ahead of you with his blade in hand.
What do you do? Fight King/Exit`, null, null, null, null, () => {console.log("You have chosen the easy way out."); readline.close();}, null, null, null, null, null, "fight king")

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
      roomK,
      skeleC,
      templeE,
      necroA,
      kingJ
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
    } else if (answer === "fight skeleton") {
        Skeleton.fight();
        step = "roomC";
    } else if (answer === "fight king") {
        UndeadKing.fight();
        step = "roomJ";
    } else if (answer === "fight guard") {
        TempleGuard.fight();
        step = "roomE";
    } else if (answer === "fight mage") {
        Necromage.fight();
        step = "roomA"
    } else if (answer === "exit") {
        step = steps[currentStep].exit;
    } else if (answer === "yes") {
        step = steps[currentStep].yes;
    } else {
        console.log(`\nPlease type a valid response`);
        step = currentStep;
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