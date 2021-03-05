import promptSync from 'prompt-sync';
let prompt = promptSync({sigint: true});

import {characterName} from "./inputName.js"

export class monster{
    constructor(name,heroname,health,points) {
        this.name=name;
        this.heroname = characterName
        this.health=health;
        this.points=points;
        this.attacks=[];
    }

    addAttack(description,damage){
        this.attacks.push([description+' and does '+damage+' damage!',damage]);
    }   

    defeat(){
      return 'You have defeated the '+this.name+'. Well done!';
    }

    attack(){
        return this.attacks[Math.floor(Math.random()*this.attacks.length)]; 
    }

    fight(){
        let action=prompt(`A ${this.name} attacks you! What will you do? (fight/run away) `);
        while (true){
            if (action=='fight'){
                this.health-=heroDamage;
                console.log(`\n${this.heroname} hit the ${this.name} and deal ${heroDamage} damage! The ${this.name} now has ${this.health} health.`); //need to link to character 
            } else if (action=='run away'){
                console.log(`\n ${this.heroname} can\'t run away!`); //Go back to previous room??
            } else {
                console.log(`\n${this.heroname}can\'t do that!`);
            }
            if (this.health<=0){
                console.log(`\n${this.heroname} defeated the ${this.name}!`);
                break
            }
            let monsterAttack=this.attack();
            heroHealth-=monsterAttack[1]; //need to link to character
            console.log('\n'+monsterAttack[0]+` You now have ${heroHealth} health.\n`); //need to link to character
            
            if (heroHealth<=0){ //need to link to character
                console.log(`\n${this.heroname} have been defeated. Game over.`);
                break;
            }

            action=prompt('What will you do? (fight/run away) ')
        }
    }
}

export default {monster};

//Goblin Example
// const Goblin=new monster('Goblin',30,100);
// Goblin.addAttack('The goblin punches you',20);
// Goblin.addAttack('The goblin kicks you',30)
// Goblin.addAttack('The goblin bites you',25) 

var heroDamage=50;
var heroHealth=100;

// Goblin.fight();



// const Skeleton=new monster('Skeleton',50,50);
// Skeleton.addAttack('The skeleton bops you with a bone',5);
// Skeleton.addAttack('The skeleton punches you',5);
// Skeleton.addAttack('The skeleton misses',0);
// // Skeleton.fight()

// const UndeadKing=new monster('Undead King',150,500);
// UndeadKing.addAttack('The undead king throws a fireball',15);
// UndeadKing.addAttack('The undead king throws a fireball... It misses',0);
// UndeadKing.addAttack('The undead king slashes at you with a sword',10);
// UndeadKing.addAttack('The undead king throws you across the room',10);




