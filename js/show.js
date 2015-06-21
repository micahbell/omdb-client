var h1 = document.createElement('h1');
h1.innerHTML = "Pizza Movie IDs";
document.body.appendChild(h1);

var query = document.location.search;

var newObject = {};
query = query.replace(/^\?/, "").split("=");
var k = query[0];
var v = query[1];
newObject[k] = v;
console.log(newObject);

var xhr = new XMLHttpRequest;
xhr.open("GET", 'http://www.omdbapi.com/?i=' + v);
xhr.addEventListener('load', function() {
  var response = xhr.response;
  var responseData = JSON.parse(response);

  for(var key in responseData) {
    var p = document.createElement('p');
    p.innerHTML = responseData[key];
    document.body.appendChild(p);
  }
});
xhr.send();
