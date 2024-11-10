const jokeContainer = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const url = "https://v2.jokeapi.dev/joke/Any";

let getJoke = () => {
    fetch(url)
        .then(data => data.json())
        .then(item => {
            if (item.type === "single") {
                jokeText = item.joke;
            } else if (item.type === "twopart") {
              jokeText = `${item.setup}-${item.delivery}`
            }
            jokeContainer.textContent = jokeText
            let speech = new SpeechSynthesisUtterance(jokeText)
            speech.lang = "en-US"
            speech.rate =1;
            speech.pitch=1;
            window.speechSynthesis.speak(speech)
        })
        .catch(error => console.error("Error fetching joke:", error));
};

btn.addEventListener("click", getJoke);

