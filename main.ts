radio.setTransmitPower(1)
radio.setGroup(136)
basic.forever(function () {
    radio.sendString("hola")
})
