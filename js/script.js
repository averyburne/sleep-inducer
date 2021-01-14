
let audio = new Audio('rain-01.mp3')
let audio2 = new Audio('food-court-1.mp3')
let rainBool = true
let chatterBool = true

const makeSound = function () {
    if (rainBool) {
        audio.play()
        rainBool = false
        document.getElementById('rain-btn').innerHTML = "Stop Sound"
    } else {
        audio.pause()
        audio.currentTime = 0
        rainBool = true
        document.getElementById('rain-btn').innerHTML = "Rain Sound"
    }
}

const makeSound2 = function (e) {
    if (chatterBool) {
        audio2.play()
        chatterBool = false
        document.getElementById('chatter-btn').innerHTML = "Stop Sound"
    } else {
        audio2.pause()
        audio2.currentTime = 0
        chatterBool = true
        document.getElementById('chatter-btn').innerHTML = "Food Court"
    }
}
