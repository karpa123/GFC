let body = document.getElementById("main")
let backButton = document.getElementById("backButton")
let input = []
let elements = []
let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

// Wordy Variables
let Qs = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet asperiores quod dicta enim, totam alias vero sapiente! Quisquam ad iusto non fugiat voluptates voluptate animi sit optio illum perferendis!", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet asperiores quod dicta enim, totam alias vero sapiente! Quisquam ad iusto non fugiat voluptates voluptate animi sit optio illum perferendis!", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet asperiores quod dicta enim, totam alias vero sapiente! Quisquam ad iusto non fugiat voluptates voluptate animi sit optio illum perferendis!"]
let posAs = ["Yep", "Yep", "Yep"]
let negAs = ["Nop", "Nop", "Nop"]
let positiveResult = "Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem"
let negativeResult = "Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem Lorem Ipsum Dolorem"

let lastClass = () => Array.from(body.classList).pop()
let gameRender = (number) => {
    backButton.innerText = "Back"
        let q = document.createElement("p")
        let neg = document.createElement("div")
        let pos = document.createElement("div")
        elements = [q, neg, pos]
        q.classList.add("question")
        q.innerText = Qs[number - 1]
        pos.classList.add("answer", "pos")
        pos.innerText = posAs[number - 1]
        neg.classList.add("answer", "neg")
        neg.innerText = negAs[number - 1]
        body.append(q, pos, neg)
        if(Math.random() > .5) {
            pos.style.left = 0
            neg.style.right = 0
        } else {
            pos.style.right = 0
            neg.style.left = 0
        }
        neg.onclick = (event) => {
            body.classList.remove("game" + number)
            if(number === "3") {
                body.classList.add("results")
            } else {
                body.classList.add("game" + (Number(number) + 1))
            }
            input.push(0)
            elements.forEach((element) => {
                element.remove()
            })
            render()
        }
        pos.onclick = (event) => {
            body.classList.remove("game" + number)
            if(number === "3") {
                body.classList.add("results")
            } else {
                body.classList.add("game" + (Number(number) + 1))
            }
            input.push(1)
            render()
        }
}

let cloudCreate = (x, y) => { 
        ctx.fillStyle = "white"
        ctx.beginPath()
        ctx.arc(x, y, 5, 0, Math.PI, counterclockwise = false)
        ctx.stroke()
        ctx.arc(x-8, y, 5, Math.PI/4, Math.PI, counterclockwise = false)
        ctx.stroke()
        ctx.arc(x-16, y, 5, Math.PI/4, Math.PI, counterclockwise = false)
        ctx.stroke()
        ctx.arc(x-24, y, 5, Math.PI/4, Math.PI, counterclockwise = false)
        ctx.stroke()
        ctx.arc(x-26, y-2, 5, Math.PI/1.4, 3*Math.PI/2.2, counterclockwise = false)
        ctx.stroke()
        ctx.arc(x-27, y-12, 5, Math.PI/1.8, 3*Math.PI/2.25, counterclockwise = false)
        ctx.stroke()
        ctx.arc(x-24, y-15, 5, Math.PI, 0, counterclockwise = false)
        ctx.stroke()
        ctx.arc(x-16, y-15, 5, -3*Math.PI/4, 0, counterclockwise = false)
        ctx.stroke()
        ctx.arc(x-8, y-15, 5, -3*Math.PI/4, 0, counterclockwise = false)
        ctx.stroke()
        ctx.arc(x, y-15, 5, -3*Math.PI/4, 0, counterclockwise = false)
        ctx.stroke()
        ctx.arc(x+1, y-12, 5, 3*Math.PI/1.8, Math.PI/2.5, counterclockwise = false)
        ctx.stroke()
        ctx.arc(x+1, y-2, 5, 3*Math.PI/1.9, Math.PI/3.4, counterclockwise = false)
        ctx.stroke()
        ctx.fill()
}

let pageCreate = (x, y) => {
    ctx.fillStyle = "white"
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x-20, y+20)
    ctx.lineTo(x+25, y+35)
    ctx.lineTo(x+45, y+15)
    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.fill()
    let hyp = Math.sqrt((20*20 + 20*20))
    let angle = Math.asin(20/hyp)
    ctx.beginPath()
    ctx.moveTo(x-10, y+20)
    ctx.lineTo((x-10) + Math.cos(angle)*.7*hyp, (y+20) - Math.sin(angle)*.7*hyp)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x-5, y+22)
    ctx.lineTo((x-5) + Math.cos(angle)*.7*hyp, (y+22) - Math.sin(angle)*.7*hyp)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x, y+24)
    ctx.lineTo(x + Math.cos(angle)*.7*hyp, (y+24) - Math.sin(angle)*.7*hyp)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x+5, y+26)
    ctx.lineTo((x+5) + Math.cos(angle)*.7*hyp, (y+26) - Math.sin(angle)*.7*hyp)
    ctx.stroke()
}


backButton.addEventListener("click", (event) => {
    if(lastClass() != "menu") {
        body.classList.remove(body.classList[body.classList.length - 1])
    } else {
        opacityBackground = document.createElement("div")
        opacityBackground.classList.add("opacityBackground")
        confirmSquare = document.createElement("div")
        confirmSquare.classList.add("confirmSquare")
        confirmSquare.innerText = "Are you sure you want to quit?"
        confirmButton = document.createElement("div")
        confirmButton.classList.add("confirmButton")
        confirmButton.innerText = "Yes"
        body.append(opacityBackground)
        opacityBackground.append(confirmSquare)
        confirmSquare.append(confirmButton)
        confirmButton.onclick = () => {
            window.open("", "_self");
            window.close();
        }
        opacityBackground.onclick = () => {
            opacityBackground.remove()
            confirmSquare.remove()
            confirmButton.remove()
        }
    }
    render()
})

let render = () => {
    canvas.hidden = false
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    elements.forEach((element) => {
        element.remove()
    })
    elements = []
    if(lastClass() == "menu") {
        canvas.globalCompositeOperation = "copy"
        cloudCreate(65, 55)
        cloudCreate(100, 90)
        cloudCreate(150, 105)
        cloudCreate(280, 30)
        cloudCreate(255, 65)
        input = []
        backButton.innerText = "Exit"
        let start = document.createElement("div")
        start.classList.add("startButton")
        start.innerText = "Start"
        body.append(start)
        start.onclick = () => {
            body.classList.add("game1")
            start.remove()
            render()
        }
    } else if(lastClass() == "game1") {
        gameRender("1")
        ctx.lineWidth = 1
        ctx.fillStyle = "brown"
        ctx.beginPath()
        ctx.moveTo(-50, 150)
        ctx.lineTo(200, 100)
        ctx.lineTo(300, 150)
        ctx.fill()
        ctx.stroke()
        pageCreate(180, 110)
        pageCreate(179, 108)
        ctx.fillStyle = "lightskyblue"
        ctx.beginPath()
        ctx.moveTo(50, 25)
        ctx.lineTo(100, 15)
        ctx.lineTo(100, 65)
        ctx.lineTo(50, 75)
        ctx.lineTo(50, 25)
        ctx.stroke()
        ctx.fill()
        ctx.fillStyle = "green"
        ctx.beginPath()
        ctx.moveTo(50, 60)
        ctx.lineTo(100, 52)
        ctx.lineTo(100, 65)
        ctx.lineTo(50, 75)
        ctx.stroke() 
        ctx.fill()
        ctx.fillStyle = "brown"
        ctx.beginPath()
        ctx.moveTo(80, 18)
        ctx.lineTo(80, 69)
        ctx.lineTo(95, 66)
        ctx.lineTo(95, 16)
        ctx.lineTo(80, 18)
        ctx.stroke()
        ctx.fill()
        ctx.lineWidth = .2
        ctx.beginPath()
        ctx.moveTo(85, 25)
        ctx.lineTo(85, 35)
        ctx.moveTo(90, 55)
        ctx.lineTo(90, 65)  
        ctx.moveTo(89, 28)
        ctx.lineTo(89, 38)
        ctx.moveTo(82, 63)
        ctx.lineTo(82, 69)
        ctx.moveTo(84, 43)
        ctx.lineTo(84, 53)
        ctx.moveTo(93, 16)
        ctx.lineTo(93, 22)
        ctx.stroke()
        ctx.moveTo(50, 70)
        ctx.bezierCurveTo(55, 65, 58, 75, 65, 65)
        ctx.bezierCurveTo(70, 55, 72, 70, 80, 65)
        ctx.stroke()
    } else if(lastClass() == "game2") {
        gameRender("2")
        ctx.lineWidth = 1
        ctx.fillStyle = "brown"
        ctx.beginPath()
        ctx.moveTo(-50, 150)
        ctx.lineTo(200, 100)
        ctx.lineTo(300, 150)
        ctx.fill()
        ctx.stroke()
        pageCreate(180, 110)
        pageCreate(179, 108)
        ctx.fillStyle = "lightskyblue"
        ctx.beginPath()
        ctx.moveTo(50, 25)
        ctx.lineTo(100, 15)
        ctx.lineTo(100, 65)
        ctx.lineTo(50, 75)
        ctx.lineTo(50, 25)
        ctx.stroke()
        ctx.fill()
        ctx.fillStyle = "green"
        ctx.beginPath()
        ctx.moveTo(50, 60)
        ctx.lineTo(100, 52)
        ctx.lineTo(100, 65)
        ctx.lineTo(50, 75)
        ctx.stroke() 
        ctx.fill()
        ctx.fillStyle = "brown"
        ctx.beginPath()
        ctx.moveTo(80, 18)
        ctx.lineTo(80, 69)
        ctx.lineTo(95, 66)
        ctx.lineTo(95, 16)
        ctx.lineTo(80, 18)
        ctx.stroke()
        ctx.fill()
        ctx.lineWidth = .2
        ctx.beginPath()
        ctx.moveTo(85, 25)
        ctx.lineTo(85, 35)
        ctx.moveTo(90, 55)
        ctx.lineTo(90, 65)  
        ctx.moveTo(89, 28)
        ctx.lineTo(89, 38)
        ctx.moveTo(82, 63)
        ctx.lineTo(82, 69)
        ctx.moveTo(84, 43)
        ctx.lineTo(84, 53)
        ctx.moveTo(93, 16)
        ctx.lineTo(93, 22)
        ctx.stroke()
        ctx.moveTo(50, 70)
        ctx.bezierCurveTo(55, 65, 58, 75, 65, 65)
        ctx.bezierCurveTo(70, 55, 72, 70, 80, 65)
        ctx.stroke()
    } else if(lastClass() == "game3") {
        gameRender("3")
        ctx.lineWidth = 1
        ctx.fillStyle = "brown"
        ctx.beginPath()
        ctx.moveTo(-50, 150)
        ctx.lineTo(200, 100)
        ctx.lineTo(300, 150)
        ctx.fill()
        ctx.stroke()
        pageCreate(180, 110)
        pageCreate(179, 108)
        ctx.fillStyle = "lightskyblue"
        ctx.beginPath()
        ctx.moveTo(50, 25)
        ctx.lineTo(100, 15)
        ctx.lineTo(100, 65)
        ctx.lineTo(50, 75)
        ctx.lineTo(50, 25)
        ctx.stroke()
        ctx.fill()
        ctx.fillStyle = "green"
        ctx.beginPath()
        ctx.moveTo(50, 60)
        ctx.lineTo(100, 52)
        ctx.lineTo(100, 65)
        ctx.lineTo(50, 75)
        ctx.stroke() 
        ctx.fill()
        ctx.fillStyle = "brown"
        ctx.beginPath()
        ctx.moveTo(80, 18)
        ctx.lineTo(80, 69)
        ctx.lineTo(95, 66)
        ctx.lineTo(95, 16)
        ctx.lineTo(80, 18)
        ctx.stroke()
        ctx.fill()
        ctx.lineWidth = .2
        ctx.beginPath()
        ctx.moveTo(85, 25)
        ctx.lineTo(85, 35)
        ctx.moveTo(90, 55)
        ctx.lineTo(90, 65)  
        ctx.moveTo(89, 28)
        ctx.lineTo(89, 38)
        ctx.moveTo(82, 63)
        ctx.lineTo(82, 69)
        ctx.moveTo(84, 43)
        ctx.lineTo(84, 53)
        ctx.moveTo(93, 16)
        ctx.lineTo(93, 22)
        ctx.stroke()
        ctx.moveTo(50, 70)
        ctx.bezierCurveTo(55, 65, 58, 75, 65, 65)
        ctx.bezierCurveTo(70, 55, 72, 70, 80, 65)
        ctx.stroke()
    } else if(lastClass() == "results") {
        canvas.hidden = true
        score = input.reduce((curr, acc) => {
            acc = curr + acc
            return acc
        })
        let scoreContainerContainer = document.createElement("div")
        let scoreContainer = document.createElement("div")
        let displayScore = document.createElement("div")
        let preScore = document.createElement("div")
        elements = [preScore, displayScore, scoreContainer, scoreContainerContainer]
        body.append(scoreContainerContainer)
        scoreContainerContainer.append(scoreContainer)
        scoreContainer.append(preScore)
        scoreContainer.append(displayScore)
        scoreContainerContainer.classList.add("scoreContainerContainer")
        scoreContainer.classList.add("scoreContainer")
        displayScore.classList.add("displayScore")
        displayScore.innerText = score
        preScore.classList.add("preScore")
        preScore.innerText = "Your Score:"

        setTimeout(() => {
            elements.forEach((element) => {
                if(element != imageExplanation && element != image) {
                    element.remove()
                }
            })
        }, 3000)
        let image = document.createElement("img")
        body.append(image)
        let imageExplanation = document.createElement("div")
        if(score >= 2) {
            imageExplanation.innerText = positiveResult
            image.classList.add("finalImage")
            image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hopetoun_falls.jpg/1200px-Hopetoun_falls.jpg"
        } else {
            imageExplanation.innerText = negativeResult
            image.classList.add("finalImage")
            image.src = "https://images.theconversation.com/files/109822/original/image-20160201-32240-8oqf5e.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
        }
        imageExplanation.classList.add("imageExplanation")
        body.append(imageExplanation)
        let explanationContinueButton = document.createElement("button")
        explanationContinueButton.innerText = "Continue..."
        imageExplanation.append(explanationContinueButton)
        elements.push(image, imageExplanation)
        imageExplanation.onclick = () => {
            imageExplanation.remove()
            elements.pop()
        }
    }
}

render()