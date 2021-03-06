
export class Rooms {
    constructor(message = null, north = null, south = null, east = null, west = null, exit = null, yes = null, leave = null, fight_skele = null, fight_guard = null, fight_necro = null, fight_king = null) {
        this.message = message;
        this.north = north;
        this.south = south;
        this.east = east;
        this.west = west;
        this.exit = exit;
        this.yes = yes;
        this.leave = leave;
        this.fight_skele = fight_skele;
        this.fight_necro = fight_necro;
        this.fight_guard = fight_guard;
        this.fight_king = fight_king;
    }
};

export default {Rooms};
