function Rooms(message, north, south, east, west, exit, yes, leave) {
        this.message = message;
        this.north = north;
        this.south = south;
        this.east = east;
        this.west = west;
        this.exit = exit;
        this.yes = yes;
        this.leave = leave;
    };

module.exports = {Rooms,};


