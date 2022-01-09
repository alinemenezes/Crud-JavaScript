var alunos = document.getElementById('nome')
var nota = document.getElementById('nota')
var data = document.getElementById('data')
var tel = document.getElementById('telefone')
var res = document.getElementById('res')
alunos[alunos.length] 

function cadastrar() {
    if (nome.value == 0 || nota.value ==0 || telefone.value ==0 || data.value == 0) {
        alert ('[ERRO] Faltam dados')
    } else {
        if (nota.value >= 7) {
            alert ('Cadastrado com sucesso')
        } else {
            alert ('Você foi reprovado')
        }
    }
}

function salvar() {
    if (nota.value.length == 0 || nota.value.length == 0) {
        alert('[ERRO] Faltam dados')
    } else {
        var a = alunos.value
        var n = nota.value
        var d = data.value
        var t = tel.value        
        res.innerHTML = `Aluno ${a} cadastrado.`
        
    }
    }


    

    