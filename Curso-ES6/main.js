//Estrutura de classe, nova feature
/*class TodoList{
    constructor(){
        this.todos = [];
    }

    static addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

TodoList.addTodo();
*/

/*
//Variável de escopo
let a ;
//Variável que não pode ser reatribuida(Redefinir sua estrutura) mas tem mutabilidade
const a = 1;
*/

const arr = [1, 3 ,4 , 5, 8, 9];

// Percorre o array e realiza alguma operação e retorna o array pós operação
//formato de arrow function com um parametro e uma linha de execução
const newArr = arr.map(item  => item * 2);

console.log(newArr);

// atribui os valores do array no parametro total de um por um e soma com o proximo valor que é atribuido no next
const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

//exibe somente os itens de array que atendam a condição definida
const filter = arr.filter(function(item){
    return item % 2 === 0;

});

console.log(filter);

// retorna um item específico do array
const find = arr.find(function(item){
    return item === 4;
});

console.log(find);

const teste = () => ({ nome : 'Diego'});

console.log(teste());