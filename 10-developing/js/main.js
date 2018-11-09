
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
$(document).ready(function () {
    var todoItems = new TodoItems([
        new TodoItem({ id: 1, description: "TodoItem 1" }),
        new TodoItem({ id: 2, description: "TodoItem 2" })
    ]);

    var todoItemsView = new TodoItemsView({ model: todoItems });
    $("body").append(todoItemsView.render().$el);
});