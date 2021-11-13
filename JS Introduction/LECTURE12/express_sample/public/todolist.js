$(function(){
    let newTodoBox=$('#newtodo')
    let addtodoBtn=$('#addtodo')
    let todoList=$('#todolist')

    addtodoBtn.click(function(){
        //console.log('Button was clicked')
        let newTodo= newTodoBox.val()
        //For AJAX Request $.post(path,body,callback function)
        $.post(
            '/todos/',
            {task:newTodo},
            //once the response function is received then the call back function is executed
            function(data){
                todoList.empty();
                for (todo of data){
                    todoList.append("<li>"+todo.task+"</li>")
                }
            }
        )
    })
})