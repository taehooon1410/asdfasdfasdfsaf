radio.onReceivedNumber(function (receivedNumber) {
    수신결과 = receivedNumber
})
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    선택_결과 = 2
    music.play(music.createSoundExpression(WaveShape.Square, 3090, 1, 173, 0, 369, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
let 수신결과 = 0
let 선택_결과 = 0
radio.setGroup(10)
선택_결과 = 0
수신결과 = 0
basic.forever(function () {
    basic.showNumber(수신결과)
})
basic.forever(function () {
    radio.sendNumber(14)
    선택_결과 = 14
    music.play(music.createSoundExpression(WaveShape))
})
