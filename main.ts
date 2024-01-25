info.onCountdownEnd(function () {
    if (info.score() > 10) {
        game.gameOver(true)
        game.setGameOverMessage(true, "You Win!")
        game.setGameOverEffect(true, effects.confetti)
    } else if (info.score() < 10) {
        game.gameOver(false)
        game.setGameOverMessage(false, "You Lost!")
        game.setGameOverEffect(false, effects.dissolve)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(2)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite, effects.ashes, 500)
    game.splash("You Lost!")
})
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ........................
    ......ffff..............
    ....fff22fff............
    ...fff2222fff...........
    ..fffeeeeeefff..........
    ..ffe222222eef..........
    ..fe2ffffff2ef..........
    ..ffffeeeeffff..........
    .ffefbf44fbfeff.........
    .fee41fddf14eef.........
    fdfeeddddd4eff..........
    fbffee444edd4e..........
    fbf4f2222edde...........
    fcf.f22cccee............
    .ff.f44cdc4f............
    ....fffddcff............
    .....fddcff.............
    ....cddc................
    ....cdc.................
    ....cc..................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite)
info.startCountdown(30)
game.onUpdateInterval(7000, function () {
    mySprite3 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111ffff.....
        ......fffcdb1bc111cf....
        ....fc111cbfbf1b1b1f....
        ....f1b1b1ffffbfbfbf....
        ....fbfbfffffff.........
        .........fffff..........
        ..........fff...........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    mySprite3.follow(mySprite, 45)
    mySprite.setPosition(7, 5)
})
game.onUpdateInterval(500, function () {
    mySprite2 = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.Player)
    mySprite2.x = scene.screenHeight()
    mySprite2.y = randint(10, scene.screenWidth() - 10)
})
