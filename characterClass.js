import {characterName} from "./inputName.js"
 export class Character {
    constructor(name,health) {

        this.name = characterName;
        this.health = health;
        this.kick = []
        this.punch = []
        this.reward = []

    }
    characterDamage(damage){
        this.health -= damage //Damage on Character//
    }

    characterDefend(damage = 10) {
        this.health +=damage  //Character able to defend themselves//
    }

    characterKick(harm=50) {
        this.kick.push(`${this.name} kicks Monster and causes ${harm} damage!`) //Character kicks Monster//
    }

    characterPunch(harm=20) {
        this.punch.push(`${this.name} punches Monster and causes ${harm} damage!`) //Character punches Monster//
    }

    characterReward(reward=100) {
        this.reward.push(`Well done, you've defeated the monster - You've recieved 100 gold!`) //Character recieves a reward if they defeat the monster//
    }
}

 /* Character Example
let Jaishal = new Character('Jaishal', 100)
Jaishal.characterDamage(30)
Jaishal.characterDefend()
Jaishal.characterKick()
Jaishal.characterPunch()
Jaishal.characterReward()
console.log(Jaishal)
*/


let character = new Character('characterName', 100)

console.log(character)