const form = document.getElementById("form");

form.addEventListener("submit"),
  function (event) {
    event.preventDefault();
    console.log(event);
    let query = event.target.input.value;
    search(query);
  };

async function search(queryParam) {
  let response = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${queryParam}&client_id=dH2KbCGU-8KV7Zhuk1pCpBcmAhc07h2yXjNFtQDvoPw`
  );
  console.log(response);
  let data = await response.json;
  console.log(data.results);

  let img = document.createElement("img");
  img.src = data.results;
}
