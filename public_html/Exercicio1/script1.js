/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function localizacao() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (location) {
            console.log(location.coords.latitude);
            console.log(location.coords.longitude);
            document.getElementById("localizacao").innerHTML = "Latitude: " + location.coords.latitude + " Longitude: " + location.coords.longitude;
        });
    } else {
        document.getElementById("localizacao").innerHTML = "API de Geolocalização não suportada";
    }
}

