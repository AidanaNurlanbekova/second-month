
class Dom{
    constructor(type, floors, wallcolor, roofcolor, windows, staircolor, outdoors, doors, rooms, bathrooms, tv ) {
        this.type = type;
        this.floors = floors;
        this.wallcolor = wallcolor;
        this.roofcolor = roofcolor;
        this.windows = windows;
        this.staircolor = staircolor;
        this.outdoors = outdoors;
        this.doors = doors;
        this.rooms = rooms;
        this.bathrooms = bathrooms;
    }
}
class Home extends Dom{
    constructor(type, floors, wallcolor, roofcolor, windows, staircolor, outdoors, doors, rooms, bathrooms) {
        super(type, floors, wallcolor, roofcolor, windows, staircolor, outdoors, doors, rooms, bathrooms);
    }
}

const MoiDom = new Home(
    'Flat',
    2,
    'white',
    'burgundy',
    3,
    'grey',
    1,
    4,
    3,
    1,
)

console.log(MoiDom)


class VnutriDoma{
    constructor(bed, tv, cupboard, bathroom, kitchen, sofa, carpet, chandelier, table ) {
        this.bed = bed;
        this.tv = tv;
        this.cupboard = cupboard;
        this.bathroom = bathroom;
        this.kitchen = kitchen;
        this.sofa = sofa;
        this.carpet = carpet;
        this.chandelier = chandelier;
        this.table = table;
    }
}
class Vnutri extends VnutriDoma{
    constructor(bed, tv, cupboard, bathroom, kitchen, sofa, carpet, chandelier, table) {
        super(bed, tv, cupboard, bathroom, kitchen, sofa, carpet, chandelier, table);
    }
}

const domvnutri= new Vnutri(
    1,
    1,
    1,
    1,
    1,
    2,
    3,
    1,
    1,
)

console.log(domvnutri)