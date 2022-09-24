//document.getElementById('pic-button').addEventListener("click", getPicture);

// function getPicture() {



//     // document.getElementsByClassName('nasa-img').source = data.hdurl
// }

fetch('https://api.nasa.gov/planetary/apod?api_key=SkaBAkfRcBrstYk0upNqvyf9vbF6Yr324SHazddO')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.url
        document.querySelector('span').innerText = data.date
        document.querySelector('h2').innerText = data.title
        document.querySelector('p').innerText = data.explanation
    })



console.log('This is actually working')