scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    game.over(true)
})
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c c . . . . 
    . . . c c b b b b b b c c . . . 
    . . c c b c c c c c c b c c . . 
    . c c b c c c c c c c c b c c . 
    . c b c f f 1 c c f f 1 c b c . 
    . c b c f f f c c f f f c b c . 
    . c b c f f f c c f f f c b c . 
    . c b c c c c c c c c c c b c . 
    . c b c c c c c c c c c c b c . 
    . c b c c f c c c c f c c b c . 
    . c c b c c f f f f c c b c c . 
    . . c c b c c c c c c b c c . . 
    . . . c c b b b b b b c c . . . 
    . . . . c c c c c c c c . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
