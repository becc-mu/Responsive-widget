const widgetHeader = document.createElement('div');
widgetHeader.innerHTML = 'YOU MAY LIKE';
widgetHeader.setAttribute('class', 'header');

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(widgetHeader)
app.appendChild(container);

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

var request = new XMLHttpRequest();

const newRequest = `https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init`

request.open('GET', newRequest, true);
request.onload = () => {

  var myObj = JSON.parse(request.responseText);
  list = myObj.list

   for(var i=0; i < 6; i++){
     var card = document.createElement('a');
     var itemTitle = document.createElement('a');
     var image = document.createElement('img');
     var category = document.createElement('p')
     var branding = document.createElement('p');

     itemTitle.innerHTML = list[i].name;
     branding.innerHTML = list[i].branding
     category.innerHTML = list[i].categories

     setAttributes(card, {'href': list[i].url, 'class': 'card'});
     setAttributes(image, {'src': list[i].thumbnail[0].url, 'class': 'image'})
     setAttributes(branding, { 'class': 'branding'});
     setAttributes(category, {'class': 'category'});
     setAttributes(widgetHeader, {'class': 'widgeitHeader'});

     container.appendChild(card);
     card.appendChild(category);
     card.appendChild(image);
     card.appendChild(itemTitle);
     card.appendChild(branding);

   }
}
// Send request
request.send();
