function setupLevel () {
    clearLevel()
    game.splash("Level " + level)
    createMaze()
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
    if (level == 1) {
        info.startCountdown(45)
    } else if (level == 2) {
        info.startCountdown(60)
    } else {
        info.startCountdown(75)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . 2 2 . . . . . . 
        . . . . . . . . . 2 2 . . . . . 
        . . . . . . . . . . 2 2 . . . . 
        . . . . . . . . . . . 2 2 . . . 
        . . . . . . . . . . . . 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . 2 2 2 . 
        . . . . . . . . . . . 2 2 . . . 
        . . . . . . . . . . 2 2 . . . . 
        . . . . . . . . . 2 2 . . . . . 
        . . . . . . . . 2 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        `, mySprite, 100, 0)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 2 . . . . . . . . 
        . . . . . 2 2 . . . . . . . . . 
        . . . . 2 2 . . . . . . . . . . 
        . . . 2 2 . . . . . . . . . . . 
        . 2 2 2 . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . 2 2 2 . . . . . . . . . . . . 
        . . . 2 2 . . . . . . . . . . . 
        . . . . 2 2 . . . . . . . . . . 
        . . . . . 2 2 . . . . . . . . . 
        . . . . . . 2 2 . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        `, mySprite, -100, 0)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 . 2 2 . 2 2 . . . . 
        . . . 2 2 . . 2 2 . . 2 2 . . . 
        . . 2 2 . . . 2 2 . . . 2 2 . . 
        . 2 2 . . . . 2 2 . . . . 2 2 . 
        2 2 . . . . . 2 2 . . . . . 2 2 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        `, mySprite, 0, -100)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        2 2 . . . . . 2 2 . . . . . 2 2 
        . 2 2 . . . . 2 2 . . . . 2 2 . 
        . . 2 2 . . . 2 2 . . . 2 2 . . 
        . . . 2 2 . . 2 2 . . 2 2 . . . 
        . . . . 2 2 . 2 2 . 2 2 . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        `, mySprite, 0, 100)
})
function createMaze () {
    if (level == 1) {
        tiles.setTilemap(tilemap`level1`)
    } else if (level == 2) {
        tiles.setTilemap(tilemap`level3`)
    } else {
        tiles.setTilemap(tilemap`level8`)
    }
}
function clearLevel () {
    for (let value of enemies) {
        value.destroy()
    }
    info.setLife(3)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    if (level == 1) {
        level += 1
        setupLevel()
    } else if (level == 2) {
        level += 1
        setupLevel()
    } else {
        game.over(true)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.setFlag(SpriteFlag.Ghost, true)
    pause(1000)
    otherSprite.setFlag(SpriteFlag.Ghost, false)
})
let enemies: Sprite[] = []
let projectile: Sprite = null
let mySprite: Sprite = null
let level = 0
game.splash("Use the arrow keys to move ", "to the treasure.")
game.splash("Press A to shoot", "at the enemies.")
game.splash("Finish the maze", "before time runs out.")
level = 1
mySprite = sprites.create(img`
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
setupLevel()
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
info.setLife(3)
game.onUpdateInterval(8000, function () {
    enemies = [sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 f f 6 6 6 6 f f 6 . . . 
        . . . 6 6 6 f 6 6 f 6 6 6 . . . 
        . . . 6 6 2 6 6 6 6 2 6 6 . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 6 f f f f f f 6 6 . . . 
        . . . 6 6 f 6 6 6 6 f 6 6 . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy), sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 f f 6 6 6 6 f f 6 . . . 
        . . . 6 6 6 f 6 6 f 6 6 6 . . . 
        . . . 6 6 2 6 6 6 6 2 6 6 . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 6 f f f f f f 6 6 . . . 
        . . . 6 6 f 6 6 6 6 f 6 6 . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy), sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 f f 6 6 6 6 f f 6 . . . 
        . . . 6 6 6 f 6 6 f 6 6 6 . . . 
        . . . 6 6 2 6 6 6 6 2 6 6 . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 6 f f f f f f 6 6 . . . 
        . . . 6 6 f 6 6 6 6 f 6 6 . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)]
    for (let i = 0; i <= enemies.length - 1; i++) {
        enemies[i].x = randint(0, 160)
        enemies[i].y = randint(0, screen.height)
    }
})
