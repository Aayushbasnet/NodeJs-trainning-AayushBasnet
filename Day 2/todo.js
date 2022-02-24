console.log("running");
var command = process.argv[2];
var argument = process.argv[3];
console.log(command, argument);

var todo_list =[];

// todo help function
function todo_help(){
    console.log('help...');
}

//todo add function
function todo_add(argument){
    todo_list.push(argument);
    console.log("adding",command, argument, todo_list);
}

function displayTodo(){
    if(!todo_list){
        console.log("No todo list");
    }else{
        console.log("Displaying todo");
    }
}

switch (command) {
    case 'help':
        todo_help();
        break;
    case 'add':
        todo_add(argument);
        break;
    case 'delete':
        break;
    case 'list':
    case undefined:
        displayTodo();
        break;
    default:
        break;
    
}