var result = new XMLHttpRequest();

const newRequest = `https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init`;

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', newRequest, true)

request.onload = () => {
  // Begin accessing JSON data here
  let data = JSON.parse(request.response)
  if (request.status >= 200 && request.status < 400) {
    //console.log("sucess you are connected to api")
    //console.log(request.responseText);
    let myObj = JSON.parse(request.responseText);
  } else {
    console.log("Oops no connection!")
  }

  }


// Send request
request.send()
