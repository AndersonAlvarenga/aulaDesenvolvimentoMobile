/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 window.onload = function(){
 	if(localStorage.length === 0){

 		document.getElementById("frase").innerHTML="Você deve preencher as configurações"
 		
 	}else{
 		document.getElementById("nome").value=localStorage.getItem("nome");
 		document.getElementById("cor").value=localStorage.getItem("cor");
 		document.getElementsByTagName('body')[0].style.background =localStorage.getItem("cor");
 		document.getElementById("idade").value=localStorage.getItem("idade");
 		document.getElementById("cidade").value=localStorage.getItem("cidade");
 		if(localStorage.getItem("nome")!=""){
 			document.getElementById("nomeV").innerHTML="Nome: "+localStorage.getItem("nome");
 		}
 		if(localStorage.getItem("idade")!=""){
 			document.getElementById("idadeV").innerHTML="Idade: "+localStorage.getItem("idade");
 		}
 		if(localStorage.getItem("cidade")!=""){
 			document.getElementById("cidadeV").innerHTML="Cidade: "+localStorage.getItem("cidade");
 		}
 	}
 };
 function limpar(){
 	localStorage.clear();
 }

 function salvar(){

 	localStorage.setItem("nome",document.getElementById("nome").value);
 	localStorage.setItem("cor",document.getElementById("cor").value);
 	localStorage.setItem("idade",document.getElementById("idade").value);
 	localStorage.setItem("cidade",document.getElementById("cidade").value);
 };
