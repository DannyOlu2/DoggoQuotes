var img = document.getElementById("dog-image");
var quoteElement = document.getElementById("quote");
var authorElement = document.getElementById("author");

function getRandomImage() {
    fetch('https://random.dog/woof.json')
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
        img.src = data.url;
    })
    .catch(error => {
        console.error(error);
    })

};

getRandomImage ();

document.getElementById("new-inspiration-button").addEventListener("click",getRandomImage);

function getInspiration(){
    fetch('https://api.adviceslip.com/advice')
        .then(Response => Response.json())
        .then(data => {
            quoteElement.innerHTML = data.slip.advice;
            console.log(data)
            localStorage.setItem('advice',data.slip.advice)
        })
        .catch(error => {
            console.error(error);
        })
}

getInspiration();

document.getElementById("new-inspiration-button").addEventListener("click",getInspiration)

function saveData(){
    var allSaved = JSON.parse(localStorage.getItem("allSaved", allSaved))||[]
    var imageUrl = localStorage.getItem('imageUrl');
    var advice = localStorage.getItem('advice');
    var newSaved = {
        imageUrl: img.innerHTML,
        advice: quoteElement.innerHTML
    }
    allSaved.push(newSaved)
    console.log(imageUrl, advice);
    localStorage.setItem("allSaved",JSON.stringify(allSaved));
}

document.getElementById("save-data-button").addEventListener("click", saveData);
