window.addEventListener('message', function (event) {
    if (event.data.action === "open") {
        Trigger()
    }
})

function Trigger() {
    const image = document.getElementById("image")
    const sound = document.getElementById("sound")

    document.body.style.display = "block"

    setTimeout(() => {
        image.style.display = "block"
        sound.duration = 0
        sound.volume = 0.5
        sound.play()

        setTimeout(() => {
            document.body.style.display = "none"
            image.style.display = "none"
            sound.pause()
        }, 3000)
    }, 3000)
}