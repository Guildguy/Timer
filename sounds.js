export default function Sounds() {
    const btnPressSound = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const timesOverSound = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgSound = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true") 

    function btnPress() {
        btnPressSound.play()
    }

    function timesOver() {
        timesOverSound.play()
    }

    bgSound.loop

    return {
        btnPress,
        timesOver,
        bgSound
    }
}
