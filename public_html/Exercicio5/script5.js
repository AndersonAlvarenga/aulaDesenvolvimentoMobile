/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 
 */
window.onload = function(){
    if (localStorage.length > 0) {
        var universidade = {
            "nomeObj": localStorage.getItem("nome"),
            "dataFundaObj": localStorage.getItem("dataFund"),
            "quantCamposObj":localStorage.getItem("quantCampos"),
            "quantAlunosObj":localStorage.getItem("quantAlunos"),
            "quantProfObj":localStorage.getItem("quantProf"),
            "quantCursoObj":localStorage.getItem("quantCurso"),
            "melhorCursoObj":localStorage.getItem("melhorMex"),
        }
        var res = JSON.stringify(universidade);
        document.getElementById("string").innerHTML=res;
    }
}


document.getElementById('botaoSalvar').addEventListener("click", function () {
    localStorage.setItem("nome",document.getElementById("inputNome").value);
    localStorage.setItem("dataFund", document.getElementById("inputDataFundacao").value);
    localStorage.setItem("quantCampos", document.getElementById("inputQuantCampus").value);
    localStorage.setItem("quantAlunos", document.getElementById("inputQuantAlunos").value);
    localStorage.setItem("quantProf", document.getElementById("inputQuantProf").value);
    localStorage.setItem("quantCurso", document.getElementById("inputQuantCurso").value);
    localStorage.setItem("melhorMec", document.getElementById("inputMelhorCursoMec").value);
});
document.getElementById('botaoLimpar').addEventListener("click", function () {
    localStorage.clear();
});