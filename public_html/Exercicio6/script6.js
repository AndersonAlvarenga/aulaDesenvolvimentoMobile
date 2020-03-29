/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function informacao(){
    document.getElementById("memoria").innerHTML="Memoria: "+navigator.deviceMemory+" GB";
    document.getElementById("agent").innerHTML="User Agente: "+window.navigator.userAgent;
    document.getElementById("lingua").innerHTML="Linguagem: "+navigator.languages;
    if(navigator.onLine ? document.getElementById("conection").innerHTML="Conexão: Você está conectado":document.getElementById("conection").innerHTML="Conexão: Você está desconectado");

}
