//Exercício 01 Módulo 4
/*
function checaIdade(idade){
    return new Promise(function(resolve, reject){
        if(idade > 18){ 
            setTimeout(function(){ resolve('Requisição bem sucedida');}, 2000)
        }else {
            setTimeout(function(){ reject('Falha na requisição');}, 2000)
        }
    });
}

checaIdade(17)
    .then(function() {
        console.log("Maior que 18");
       
    })
    .catch(function() {
        console.warn("Menos que 18");
    });
    */

//Exercício 02 e 03 Módulo 4

function adiciona(){
    var usuario = document.querySelector('input').value;
    var list = document.querySelector('ul');
    var load = document.createElement('li');
    list.innerHTML = '';
    load.textContent = 'Carregando....';
    list.appendChild(load);
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(function(response){
        //Pega foto do usuário no github
        /*
        alert('Bem vindo ' + response.data.name);
        var imagem = document.createElement('img');
        var corpo = document.querySelector('body');
        imagem.setAttribute('src', response.data.avatar_url);
        corpo.appendChild(imagem);
        console.log(response);
       */
      
        list.removeChild(load); 
       for(data of response.data){
            var item = document.createElement('li');
            var repositorio = data.name;
            item.textContent = repositorio;
            list.appendChild(item);
       }
        
    })
    .catch(function(error){
        console.warn(error);
       
           alert('Usuário não encontrado');
           list.removeChild(load); 
    });
}