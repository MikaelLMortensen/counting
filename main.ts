input.onButtonPressed(Button.A, function () {
    Vandret = false
})
input.onButtonPressed(Button.B, function () {
    Vandret = true
})
let Vandret = false
Vandret = true
basic.forever(function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            if (Vandret) {
                led.toggle(X, Y)
                basic.pause(200)
                led.toggle(X, Y)
                basic.pause(100)
            } else {
                led.toggle(Y, X)
                basic.pause(200)
                led.toggle(Y, X)
                basic.pause(100)
            }
        }
    }
})
