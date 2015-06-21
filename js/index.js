var h1 = document.createElement('h1');
h1.innerHTML = "OMDB Movies About Pizza";
document.body.appendChild(h1);

var searchResults = document.getElementById('search');
var submit = document.getElementsByName('submitButton');
console.log(searchResults);


var xhr = new XMLHttpRequest();
xhr.open("GET", 'http://www.omdbapi.com/?s=pizza');
xhr.addEventListener('load', function() {
  var response = xhr.response;
  var responseData = JSON.parse(response);

  for (var i = 0; i < responseData.Search.length; i++) {

    var a = document.createElement('a');
    a.innerHTML = responseData.Search[i].Title;
    var ids = '/show.html?i=' + responseData.Search[i].imdbID;
    // + '&year=' + responseData.Search[i].Year + '&types=' + responseData.Search[i].Type;
    a.href = ids;

    var p = document.createElement('p');
    p.appendChild(a);
    document.body.appendChild(p);
  }
});
xhr.send();
