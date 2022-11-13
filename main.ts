input.onButtonPressed(Button.A, function () {
    paddle.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.B, function () {
    paddle.change(LedSpriteProperty.X, -1)
})
let paddle: game.LedSprite = null
game.setScore(0)
game.setLife(3)
paddle = game.createSprite(3, 4)
let sprite = game.createSprite(1, 1)
let test = 1
while (true) {
    if (test == 1) {
        test = 0
        if (sprite.isTouchingEdge()) {
            sprite.turn(Direction.Left, 90 + randint(0, 5))
        }
        if (sprite.get(LedSpriteProperty.Y) == 4 && !(sprite.isTouching(paddle))) {
            game.gameOver()
        }
        if (sprite.get(LedSpriteProperty.Y) == 4 && sprite.isTouching(paddle)) {
            game.addScore(1)
            sprite.turn(Direction.Left, 90 + 0)
        }
        if (game.isGameOver()) {
            sprite.delete()
            paddle.delete()
            break;
        }
        sprite.move(1)
        basic.pause(200)
        test = 1
    }
}
basic.forever(function () {
	
})
