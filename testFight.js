const prompt=require('prompt-sync')({sigint: true});

var goblinDamage=5;
var goblinHealth=50;
var heroDamage=20;
var heroHealth=100;

const name=prompt('what is your name? ');
console.log(`Hey there ${name}`);
action=prompt('A goblin attacks you! What will you do? (fight/run away) ')
while (true){
    if (action=='fight'){
        goblinHealth-=heroDamage;
        console.log(`You hit the goblin and deal ${heroDamage} damage. The goblin how has ${goblinHealth} health.`);
    }
    if (action=='run away'){
        console.log('You can\'t run away!');
    }
    
    heroHealth-=goblinDamage;
    console.log(`The goblin hits you and deals ${goblinDamage} damage. You now have ${heroHealth} health.`);
    
    if (heroHealth<=0){
        console.log('You have been defeated. Game over.');
        break;
    }
    if (goblinHealth<=0){
        console.log('You defeated the goblin!');
        break
    }
    action=prompt('What will you do? (fight/run away) ')
}