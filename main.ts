let y = 0
let yold = 0
let x = 0
let xold = 0
xold = custom.tiltx()
yold = custom.tilty()
basic.forever(function () {
    x = custom.tiltx()
    y = custom.tilty()
    led.plot(x, y)
    if (xold != x || yold != y) {
        led.unplot(xold, yold)
    }
    xold = x
    yold = y
})
