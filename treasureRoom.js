class treasureRoom{
    constructor(){
        this.message='You enter a large room. Upon a pedestal against the furthest wall, an ornate chest glints.'
    }

    openChest(playerPoints,playerKills){
        return 'Congratulations, you found the treasure and beat the game!!! You earned '+playerPoints+' points and defeated '+playerKills+' monters.';
    }
}
