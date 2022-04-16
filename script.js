const quizDane = [
    {
        pytanie: "Który język działa w przeglądarce internetowej?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        pytanie: "Co oznacza skrót CSS?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        pytanie: "Co oznacza skrót HTML?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        pytanie: "W którym roku został wprowadzony JavaScript?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "żadne z powyższych",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const odpowiedzi = document.querySelectorAll('.odpowiedz')
const pytanieEl = document.getElementById('pytanie')
const a_tekst = document.getElementById('a_tekst')
const b_tekst = document.getElementById('b_tekst')
const c_tekst = document.getElementById('c_tekst')
const d_tekst = document.getElementById('d_tekst')
const wyslijPrzycisk = document.getElementById('wyslij')

let aktualnyQuiz = 0
let wynik = 0

zaladujQuiz()

function zaladujQuiz() {
    odznaczycOdpowiedzi()

    const biezaceDaneQuizu = quizDane[aktualnyQuiz]

    pytanieEl.innerText = biezaceDaneQuizu.pytanie
    a_tekst.innerText = biezaceDaneQuizu.a
    b_tekst.innerText = biezaceDaneQuizu.b
    c_tekst.innerText = biezaceDaneQuizu.c
    d_tekst.innerText = biezaceDaneQuizu.d
}

function odznaczycOdpowiedzi() {
    odpowiedzi.forEach(odpowiedzi => odpowiedzi.checked = false)
}

function uzyskacWybrane() {
    let odpowiedz

    odpowiedzi.forEach(odpowiedzi => {
        if(odpowiedzi.checked) {
            odpowiedz = odpowiedzi.id
        }
    })

    return odpowiedz
}

wyslijPrzycisk.addEventListener('click', () => {
    const odpowiedz = uzyskacWybrane()
    
    if(odpowiedz) {
        if(odpowiedz === quizDane[aktualnyQuiz].correct) {
            wynik++
        }

        aktualnyQuiz++

        if(aktualnyQuiz < quizDane.length) {
            zaladujQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Proporcja poprawnych odpowiedzi ${wynik}/${quizDane.length}.</h2>
                <button onclick="location.reload()">Przeładuj</button>
            `
        }
    }
})