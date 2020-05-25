namespace SpriteKind {
    export const helper = SpriteKind.create()
    export const toy = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
4 4 4 4 4 
4 4 4 4 4 
4 4 4 4 4 
4 4 4 4 4 
4 4 4 4 4 
`, SpriteKind.toy)
    mySprite2.ay = 200
    mySprite2.setFlag(SpriteFlag.StayInScreen, true)
    mySprite2.setPosition(mySprite3.x, mySprite3.y)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
. . . . . . . . . . . 
. . d . d . d . d . . 
. . e e e e e e e . . 
. e e e e e e e e e . 
e e e e e e e e e e e 
`, SpriteKind.Food)
    mySprite2.ay = 200
    mySprite2.setFlag(SpriteFlag.StayInScreen, true)
    mySprite2.setPosition(mySprite3.x, mySprite3.y)
    mySprite.follow(mySprite2, 20)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.toy, function (sprite, otherSprite) {
    otherSprite.vy = -160
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
let choice = 0
let wait = 0
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . 4 4 4 . . . . 4 4 4 . . . . 
. 4 5 5 5 e . . e 5 5 5 4 . . . 
4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
. e e 5 5 5 5 5 5 5 5 e e . . . 
. . e 5 f 5 5 5 5 f 5 e . . . . 
. . f 5 5 5 4 4 5 5 5 f . . f f 
. . f 4 5 5 f f 5 5 6 f . f 5 f 
. . . f 6 6 6 6 6 6 4 4 f 5 5 f 
. . . f 4 5 5 5 5 5 5 4 4 5 f . 
. . . f 5 5 5 5 5 4 5 5 f f . . 
. . . f 5 f f f 5 f f 5 f . . . 
. . . f f . . f f . . f f . . . 
`, SpriteKind.Player)
mySprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f . . . f . . . f . . 
. . . . f 1 f . f 1 f . f f f . 
. . . . f 1 f . f 1 f . f 1 f . 
. . . . f 1 f . f 1 f . f 1 f . 
. . . . f 1 f . f 1 f . f 1 f . 
. . . . f 1 f f f 1 f f f 1 f . 
. f f f f 1 1 1 1 1 1 1 1 1 f . 
. f 1 1 1 1 1 f 1 f 1 f 1 1 f . 
. f 1 1 1 1 1 f 1 f 1 f 1 1 f . 
. f f f f 1 1 1 1 1 1 1 1 1 f . 
. . . . f 1 1 1 1 1 1 1 1 1 f . 
. . . . f f f f f f f f f f f . 
`, SpriteKind.helper)
scene.setBackgroundColor(2)
controller.moveSprite(mySprite3, 100, 0)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
mySprite3.setFlag(SpriteFlag.StayInScreen, true)
mySprite.ay = 90000000000
forever(function () {
    wait = randint(1000, 2000)
    pause(wait)
    choice = randint(1, 4)
})
forever(function () {
    pause(wait)
    if (choice == 1) {
        for (let index = 0; index < 30; index++) {
            pause(100)
            mySprite.x += 1
        }
    } else if (choice == 2) {
        for (let index = 0; index < 30; index++) {
            pause(100)
            mySprite.x += -1
        }
    } else if (choice == 3) {
        mySprite.say("grrrr")
    } else if (choice == 4) {
        mySprite.say("ruff")
    }
})
