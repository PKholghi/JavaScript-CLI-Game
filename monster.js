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
      return 'You have defeated the '+this.name+'. Well done!';
    }

    attack(){
        return this.attacks[Math.floor(Math.random()*this.attacks.length)]; 
    }
}


// Goblin example
var Goblin=new monster('Goblin',30,'100 gold');
Goblin.addAttack('The goblin punches you',20);
Goblin.addAttack('The goblin kicks you',30)
Goblin.addAttack('The goblin bites you',25) 


// console.log(Goblin.attacks)


