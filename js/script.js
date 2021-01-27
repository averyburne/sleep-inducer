
let audio = new Audio('rain-01.mp3')
let audio2 = new Audio('food-court-1.mp3')
let audio3 = new Audio('white-noise.mp3')
let audio4 = new Audio('fire-1.mp3')
let rainBool = true
let chatterBool = true
let whiteNoiseBool = true
let fireBool = true
let rainSlider = document.getElementById("rain-slider")
let chatterSlider = document.getElementById("chatter-slider")
let whiteNoiseSlider = document.getElementById("white-noise-slider")
let fireSlider = document.getElementById("fire-slider")


const makeSound = function () {
    if (rainBool) {
        audio.play()
        rainBool = false
        document.getElementById('rain-btn').innerHTML = "Stop Sound"
        document.body.style.backgroundImage = "url('https://media1.giphy.com/media/PbOaO2fedzQLm/giphy.gif')"
        document.body.style.color = "white"
        audio.loop = true
    } else {
        audio.pause()
        audio.currentTime = 0
        rainBool = true
        document.getElementById('rain-btn').innerHTML = "Rain Sound"
        document.body.style.backgroundImage = ''
        document.body.style.color = "black"
    }
}

rainSlider.oninput = function () {
    document.getElementById("rain-percent").innerHTML = rainSlider.value + "%"
    audio.volume = rainSlider.value * 0.01
}

chatterSlider.oninput = function () {
    document.getElementById("chatter-percent").innerHTML = chatterSlider.value + "%"
    audio2.volume = chatterSlider.value * 0.01
}

whiteNoiseSlider.oninput = function () {
    document.getElementById("white-noise-percent").innerHTML = whiteNoiseSlider.value + "%"
    audio3.volume = whiteNoiseSlider.value * 0.01
}

fireSlider.oninput = function () {
    document.getElementById("fire-percent").innerHTML = fireSlider.value + "%"
    audio4.volume = fireSlider.value * 0.01
}

const lowerVolume = function () {
    if (audio.volume === 1) {
        audio.volume = 0.8
        document.getElementById("volume-percent").innerHTML = "80%"
    } else if (audio.volume === 0.8) {
        audio.volume = 0.6
        document.getElementById("volume-percent").innerHTML = "60%"
    } else if (audio.volume === 0.6) {
        audio.volume = 0.4
        document.getElementById("volume-percent").innerHTML = "40%"
    } else if (audio.volume = 0.4) {
        audio.volume = 0.2
        document.getElementById("volume-percent").innerHTML = "20%"
    }
    console.log(audio.volume)
}

const raiseVolume = function () {
    if (audio.volume === 0.2) {
        audio.volume = 0.4
        document.getElementById("volume-percent").innerHTML = "40%"
    } else if (audio.volume === 0.4) {
        audio.volume = 0.6
        document.getElementById("volume-percent").innerHTML = "60%"
    } else if (audio.volume === 0.6) {
        audio.volume = 0.8
        document.getElementById("volume-percent").innerHTML = "80%"
    } else if (audio.volume = 0.8) {
        audio.volume = 1
        document.getElementById("volume-percent").innerHTML = "100%"
    }
    console.log(audio.volume)
}

const makeSound2 = function () {
    if (chatterBool) {
        audio2.play()
        chatterBool = false
        document.getElementById('chatter-btn').innerHTML = "Stop Sound"
        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/6a/93/ce/6a93ce18781a65188b97a2074c66eade.gif')"
        document.body.style.color = "white"
        audio2.loop = true
    } else {
        audio2.pause()
        audio2.currentTime = 0
        chatterBool = true
        document.getElementById('chatter-btn').innerHTML = "Food Court"
        document.body.style.backgroundImage = ''
        document.body.style.color = "black"
    }
}

const makeSound3 = function () {
    if (whiteNoiseBool) {
        audio3.play()
        whiteNoiseBool = false
        document.body.style.backgroundImage = "url('https://media1.giphy.com/media/3o85xuOopcjqT2AgzC/source.gif')"
        document.body.style.color = "white"
        audio3.loop = true
    } else {
        audio3.pause()
        audio3.currentTime = 0
        whiteNoiseBool = true
        document.body.style.backgroundImage = ''
        document.body.style.color = "black"
    }
}

const makeSound4 = function () {
    if (fireBool) {
        audio4.play()
        fireBool = false
        document.body.style.backgroundImage = "url('https://i.gifer.com/OBiK.gif')"
        document.body.style.color = "white"
        audio4.loop = true
    } else {
        audio4.pause()
        audio4.currentTime = 0
        fireBool = true
        document.body.style.backgroundImage = ''
        document.body.style.color = "black"
    }
}
