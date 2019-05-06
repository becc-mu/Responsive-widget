var request = new XMLHttpRequest();

const newRequest = `https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init`;

var articleList = document.querySelector('div')
var myList = document.querySelector('div');

//get http request
request.open('GET', newRequest, true);
request.onload = () => {

  var myObj = JSON.parse(request.responseText);
   list = myObj.list

   for(var i=0; i < list.length; i++){
     var itemTitle = document.createElement('h3');
     itemTitle.innerHTML = list[i].name;

     var image = document.createElement('img');
     image.src = list[i].thumbnail[0].url;
     image.setAttribute('src', list[i].thumbnail[0].url)
     image.setAttribute("width", list[i].thumbnail[0].width)
     image.setAttribute("height", list[i].thumbnail[0].height)

     var branding = document.createElement('p');
     branding.innerHTML = list[i].branding

     var disclosure = document.createElement('p')
     disclosure.innerHTML = list[i].origin

     myList.appendChild(itemTitle);
     myList.appendChild(image);
     myList.appendChild(branding);
     myList.appendChild(disclosure);

   }

}
// Send request
request.send();
