class monster{
    constructor(name,health,reward) {
        this.name=name;
        this.health=health;
        this.reward=reward;
        this.attacks=[];
    }

    takesDamage(damage){
        this.health-=damage;
    }

    addAttack(description,damage){
        this.attacks.push([description+' and does '+damage+' damage!',damage]);
    }   

    defeat(){
      return 'You have defeated the '+this.name+'. Well done!'
    }

    attack(){
      return _.sample(this.attacks);
    }
}


//Goblin example
var Goblin=new monster('Goblin',30,'100 gold');
console.log(Goblin);

Goblin.addAttack('The goblin punches you',20);
Goblin.addAttack('The goblin kicks you',30)
Goblin.addAttack('The goblin bites you',25)
console.log(Goblin);


