input.onButtonPressed(Button.A, function () {
    led.plot(sonar.ping(
    DigitalPin.P4,
    DigitalPin.P10,
    PingUnit.Inches
    ) + 0, 4)
    led.toggle(4, 4)
    record.playAudio(record.BlockingState.Blocking)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("D G D G B G F C ", 120), music.PlaybackMode.UntilDone)
    record.startRecording(record.BlockingState.Blocking)
    led.plot(2, 0)
})
music.play(music.stringPlayable("D G D G B G F C ", 120), music.PlaybackMode.InBackground)
basic.forever(function () {
	
})
