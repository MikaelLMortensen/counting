basic.forever(function () {
    for (let pause=100; pause > 0; pause -= 10)
    {
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                led.toggle(x, y)
                basic.pause(pause)
                led.toggle(x, y)
            }
        }
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                led.toggle(y, x)
                basic.pause(pause)
                led.toggle(y, x)
            }
        }
    }   
})
