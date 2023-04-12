const btn = document.getElementById('btn')
const container = document.getElementById('container')

const fetchApi = url => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log()
      console.log(data[0])
      container.innerHTML = `
        <div class="top-word">
          <span>${data[0].word}</span>
          <span>${data[0].phonetics[0].text}</span>
          <audio src=${data[0].phonetics[0].audio} controls>
          <i class="fa-solid fa-headphones-simple"></i>
          </audio>
        </div>
        <div class="definition">
          <p>Definition: ${data[0].meanings[0].definitions[0].definition}</p>
          <p>Synonyms: ${data[0].meanings[0].synonyms[0]}</p>
          <p>${data[0].meanings[0].partOfSpeech}</p>
        </div>
      
      `
    })
    .catch(err => console.log(err.message))
}

btn.addEventListener('click', () => {
  const input = document.getElementById('input').value
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
  fetchApi(url)
})
