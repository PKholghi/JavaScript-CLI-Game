import promptSync from 'prompt-sync';
let prompt = promptSync({sigint: true});

class monster{
    constructor(name,health,points) {
        this.name=name;
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
<<<<<<< HEAD
                console.log(`\nYou hit the ${this.name} and deal ${heroDamage} damage! The ${this.name} now has ${this.health} health.`); //need to link to character 
=======
                console.log(`\nYou hit the ${this.name} and deal ${heroDamage} damage. The ${this.name} now has ${this.health} health.`); //need to link to character 
>>>>>>> b1b065393a28e63ad20237eba5ef492fa2e3d98f
            } else if (action=='run away'){
                console.log('\nYou can\'t run away!'); //Go back to previous room??
            } else {
                console.log('\nYou can\'t do that!');
            }
            if (this.health<=0){
                console.log(`\nYou defeated the ${this.name}!`);
                break
            }
            let monsterAttack=this.attack();
            heroHealth-=monsterAttack[1]; //need to link to character
<<<<<<< HEAD
            console.log('\n'+monsterAttack[0]+` You now have ${heroHealth} health.\n`); //need to link to character
=======
            console.log(monsterAttack[0]+` You now have ${heroHealth} health.`); //need to link to character
>>>>>>> b1b065393a28e63ad20237eba5ef492fa2e3d98f
            
            if (heroHealth<=0){ //need to link to character
                console.log('\nYou have been defeated. Game over.');
                break;
            }

            action=prompt('What will you do? (fight/run away) ')
        }
    }
}


<<<<<<< HEAD
//Goblin Example
=======
/*Goblin Example
>>>>>>> b1b065393a28e63ad20237eba5ef492fa2e3d98f
var Goblin=new monster('Goblin',30,100);
Goblin.addAttack('The goblin punches you',20);
Goblin.addAttack('The goblin kicks you',30)
Goblin.addAttack('The goblin bites you',25) 
<<<<<<< HEAD

var heroDamage=2;
var heroHealth=100;

Goblin.fight();


/*
var Skeleton=new monster('Skeleton',50,50);
Skeleton.addAttack('The skeleton bops you with a bone',5);
Skeleton.addAttack('The skeleton punches you',5);
Skeleton.addAttack('The skeleton misses',0);

var UndeadKing=new monster('Undead King',150,500);
UndeadKing.addAttack('The undead king throws a fireball',15);
UndeadKing.addAttack('The undead king throws a fireball... ...and misses',0);
UndeadKing.addAttack('The undead king slashes at you with a sword',10);
UndeadKing.addAttack('The undead king throws you across the room',10);
*/



=======
var heroDamage=2;
var heroHealth=100;
Goblin.fight();
*/
>>>>>>> b1b065393a28e63ad20237eba5ef492fa2e3d98f
