const questions = ['Who was first World Champion ?', 'Who is top goal scorer ih the world Cup history?', 'What footbaler has never won World Cup?', 'Who will be World Cup host in 2022?',
    'Who is recent World Champion?', 'Which of these countries hes never been host?', 'What goalkeeper is the only who win MVP award?'
]
const answers = [
    ['Uruguay', 'Spain', 'Brazil', 'Argentina'],
    ['Ronaldo', 'Gerd Mueller', 'Miroslav Klose', 'Fernando Torres'],
    ['Eusebio', 'Rivaldo', 'Gabriel Batistuta', 'Sokrates'],
    ['USA', 'United Arab Emirates', 'Mexico', 'Quatar'],
    ['Germany', 'Spain', 'Itay', 'France'],
    ['Sweden', 'Chile', 'Switzerland', 'China'],
    ['Oliver Kahn', 'Lew Yashin', 'Iker Casillas', 'Dino Zoff']
]
const correctAnswers = ['Uruguay', 'Miroslav Klose', 'Eusebio', 'Quatar', 'France', 'China', 'Oliver Kahn']

const question = document.querySelector('.question')
const button1 = document.querySelector('.answer1')
const button2 = document.querySelector('.answer2')
const button3 = document.querySelector('.answer3')
const button4 = document.querySelector('.answer4')
const nextButton = document.querySelector('.next_question')
let i = 0
let score = 0


question.innerText = `${i + 1}.${questions[0]}`
button1.innerText = answers[0][0]
button2.innerText = answers[0][1]
button3.innerText = answers[0][2]
button4.innerText = answers[0][3]

let markedAnswer = []

const buttons = document.querySelectorAll('.answer')
buttons.forEach(element => {
    element.addEventListener('click', function () {
        console.log(typeof element)
        $(this).addClass('marked_answer').siblings().removeClass('marked_answer')
        markedAnswer = this
        console.log(markedAnswer.innerText)
        return markedAnswer
    })
})

nextButton.addEventListener('click', function () {
    const checkAnswer = function () {
        let correctAnswer = correctAnswers[i]
        if (markedAnswer.innerText == correctAnswer) {
            score++
        } else {
            console.log(markedAnswer.innerText)
        }
    }
    checkAnswer()
    i++
    console.log(i)
    buttons.forEach(element => {
        element.classList.remove('marked_answer')
    })

    if (i == questions.length) {
        question.innerText = `THE END!!! Your result is ${score}/${questions.length} points.`
        buttons.forEach(element => {
            element.style.display = 'none'
        })
        this.style.display = 'none'
    } else {
        question.innerText = `${i+1}.${questions[i]}`
        button1.innerText = answers[i][0]
        button2.innerText = answers[i][1]
        button3.innerText = answers[i][2]
        button4.innerText = answers[i][3]
    }


})