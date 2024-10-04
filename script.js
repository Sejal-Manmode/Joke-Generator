const jokeText  = document.querySelector("#jokeText");
const jokeText2 = document.querySelector("#jokeText2");

function fetchJoke(){
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then((data)=>{
        jokeText.innerText = data.setup;
        jokeText2.innerText = data.punchline;
    })
    .catch(()=>{
        jokeText.innerText = "Error Occured";
    })
}

fetchJoke();