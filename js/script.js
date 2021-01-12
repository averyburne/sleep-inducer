
let audio = new Audio('rain-01.mp3')

const makeSound = function () {
    let counter = 1
    console.log('hello')
    audio.play()
    console.log(audio)
}

const stopSound = function () {
    audio.pause()
}
