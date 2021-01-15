
let audio = new Audio('rain-01.mp3')
let audio2 = new Audio('food-court-1.mp3')
let rainBool = true
let chatterBool = true

const makeSound = function () {
    if (rainBool) {
        audio.play()
        rainBool = false
        document.getElementById('rain-btn').innerHTML = "Stop Sound"
        document.body.style.backgroundImage = "url('https://media1.giphy.com/media/PbOaO2fedzQLm/giphy.gif')"
    } else {
        audio.pause()
        audio.currentTime = 0
        rainBool = true
        document.getElementById('rain-btn').innerHTML = "Rain Sound"
        document.body.style.backgroundImage = ''

    }
}

const makeSound2 = function (e) {
    if (chatterBool) {
        audio2.play()
        chatterBool = false
        document.getElementById('chatter-btn').innerHTML = "Stop Sound"
        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/6a/93/ce/6a93ce18781a65188b97a2074c66eade.gif')"
    } else {
        audio2.pause()
        audio2.currentTime = 0
        chatterBool = true
        document.getElementById('chatter-btn').innerHTML = "Food Court"
        document.body.style.backgroundImage = ''
    }
}
