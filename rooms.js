
export class Rooms {
    constructor(message = null, north, south, east, west, exit, yes, leave, fight_skele = null) {
        this.message = message;
        this.north = north;
        this.south = south;
        this.east = east;
        this.west = west;
        this.exit = exit;
        this.yes = yes;
        this.leave = leave;
        this.fight_skele = fight_skele;
    }
};

export default {Rooms};
