fetch('https://dog-api.kinduff.com/api/facts?number=1')
  .then(response => response.json())
  .then(data => {
    const factElement = document.createElement('p');
    factElement.textContent = data["facts"]
    document.body.appendChild(factElement);
  });

  fetch('https://pixabay.com/api/?key=26114851-dca9c69ca52910081b2dabdc2&q=dogs&image_type=photo')
  .then(response => response.json())
  .then(data => {
    picUrl = data["hits"][0]["previewURL"];
    console.log(picUrl);
    const elem = document.getElementById("dog-image");
    console.log(elem);
    elem.src = picUrl;
  });
