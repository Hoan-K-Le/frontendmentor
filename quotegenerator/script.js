const btn = document.getElementById('btn')
const jokeDisplayEl = document.getElementById('jokeQuestion')
const jokeAnswer = document.getElementById('jokeAnswer')

const url = 'https://v2.jokeapi.dev/joke/Any'

const fetchData=() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(!data.delivery) {
            jokeDisplayEl.textContent = 'Error finding Joke, Try Again'
            jokeAnswer.textContent = ''
            
        } else {

            jokeDisplayEl.textContent ='Q: ' + data.setup
            jokeAnswer.textContent = 'A: ' + data.delivery
        }
    })
}

fetchData()

btn.addEventListener('click',fetchData)