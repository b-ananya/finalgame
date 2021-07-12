// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002010103030303030301030103010303030301010101010301010301030103030103010301030303030303010301010101030303010101010101010103010301010301030103010301030103030303010103010301030303010101030101010101030103010301030303030301030303010301010103010101010101010301010103010303030301030103030103010101010103030101010301010101030101030301010101030103010303030303030103030303010301010101010101010101010101010103030103030303010303010303030303030101010101010101010103030303030301030303030303030101010101010101010301010101010104`, img`
. . . 2 2 2 2 2 2 . 2 . 2 . 2 2 
2 2 . . . . . 2 . . 2 . 2 . 2 2 
. 2 . 2 . 2 2 2 2 2 2 . 2 . . . 
. 2 2 2 . . . . . . . . 2 . 2 . 
. 2 . 2 . 2 . 2 . 2 . 2 2 2 2 . 
. 2 . 2 . 2 2 2 . . . 2 . . . . 
. 2 . 2 . 2 . 2 2 2 2 2 . 2 2 2 
. 2 . . . 2 . . . . . . . 2 . . 
. 2 . 2 2 2 2 . 2 . 2 2 . 2 . . 
. . . 2 2 . . . 2 . . . . 2 . . 
2 2 . . . . 2 . 2 . 2 2 2 2 2 2 
. 2 2 2 2 . 2 . . . . . . . . . 
. . . . . . 2 2 . 2 2 2 2 . 2 2 
. 2 2 2 2 2 2 . . . . . . . . . 
. 2 2 2 2 2 2 . 2 2 2 2 2 2 2 . 
. . . . . . . . 2 . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorLight2,sprites.dungeon.chestOpen,myTiles.tile1,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
