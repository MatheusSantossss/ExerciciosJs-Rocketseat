var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/ZeusProg');
xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
        //console.log(JSON.parse(xhr.responseText));
        var perfGit = JSON.parse(xhr.responseText);
        console.log(perfGit);
        var nome = document.createElement('h1');
        var corpo = document.querySelector('body');
        nome.textContent = 'Bem vindo ' + perfGit.login;
        corpo.appendChild(nome);

    }
}