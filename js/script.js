
let audio = new Audio('rain-01.mp3')
let audio2 = new Audio('food-court-1.mp3')

$('#rain-stop-btn').hide()
$('#chatter-stop-btn').hide()

const makeSound = function (e) {
    console.log(e)
    let rain = document.getElementById('rain-btn')
    audio.play()
    $('#rain-btn').hide()
    $('#rain-stop-btn').show()
}

const stopSound = function () {
    audio.pause()
    audio.currentTime = 0
    $('#rain-btn').show()
    $('#rain-stop-btn').hide()
}

const makeSound2 = function (e) {
    console.log(e)
    let rain = document.getElementById('chatter-btn')
    audio2.play()
    $('#chatter-btn').hide()
    $('#chatter-stop-btn').show()
}

const stopSound2 = function () {
    audio2.pause()
    audio2.currentTime = 0
    $('#chatter-btn').show()
    $('#chatter-stop-btn').hide()
}
