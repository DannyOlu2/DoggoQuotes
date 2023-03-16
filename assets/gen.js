var img = document.getElementById("bear-image");

function getRandomImage() {
img.src = 'https://placebear.com/${Math.floor(Math.random() * 500) + 100}/${Math.floor(Math.random() * 500) + 100}';
};

getRandomImage ();

document.getElementById("new-image-button").addEventListener("click",getRandomImage);

fetch('https://api.goprogram.ai/inspiration')
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })
