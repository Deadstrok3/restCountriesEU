function myFunc() {
    var searchingName=document.getElementById("project-filter").value;
    var apiURL="https://restcountries.eu/rest/v2/name/";
    var apiTarget=apiURL.concat(searchingName);
    var apiRequest = new XMLHttpRequest();
        fetch(apiTarget)
        .then(function(response) {
                return response.json();
          })
        .then(function(myJson) {
            myJson.forEach(country => {
                console.log(country.name)
                var countryCard=document.createElement("p");
                countryCard.id="card";
                var node=document.createTextNode(country.name);
                node.id="countryName";
                countryCard.appendChild(node);
                var element=document.getElementById("div1");
                element.appendChild(countryCard);
                })
            })
          .catch(function() {
                var errorHandling = document.createElement("p");
                var node=document.createTextNode("No countries found");
                errorHandling.append(node);
            });
    
            console.clear();
            var parent=document.getElementById("div1");
            while(parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
}