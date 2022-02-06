input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showIcon(IconNames.Angry)
    music.playMelody("D G F B D G C A ", 120)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    music.playMelody("C5 B A G F E D C ", 120)
})
basic.forever(function () {
	
})
