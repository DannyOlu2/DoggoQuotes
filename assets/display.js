var savedInspirationList = document.getElementById("saved-inspiration-list");
      var savedData = JSON.parse(localStorage.getItem("allSaved")) || [];
      for (var i = 0; i < savedData.length; i++) {
        var imageUrl = savedData[i].imageUrl;
        var advice = savedData[i].advice;
        var listItem = document.createElement("li");
        var image = document.createElement("img");
        image.src = imageUrl;
        var adviceText = document.createElement("p");
        adviceText.textContent = advice;
        listItem.appendChild(image);
        listItem.appendChild(adviceText);
        savedInspirationList.appendChild(listItem);
      }