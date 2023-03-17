var img = document.getElementById("bear-image");
var quoteElement = document.getElementById("quote");
var authorElement = document.getElementById("author")

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

document.getElementById("new-image-button").addEventListener("click",getRandomImage);

function getInspiration(){
    fetch('https://api.goprogram.ai/inspiration')
        .then(Response => Response.json())
        .then(data => {
            quoteElement.innerHTML = '"${data.inspiration}"';
            authorElement.innerHTML = '- ${data.author}';
            console.log(data)
        })
        .catch(error => {
            console.error(error);
        })
}

getInspiration();

document.getElementById("new-insoiration-button").addEventListener("click",getInspiration)
