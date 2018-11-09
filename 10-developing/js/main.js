
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
$(document).ready(function () {
    var todoItems = new TodoItems([
        new TodoItem({ description: "TodoItem 1" }),
        new TodoItem({ description: "TodoItem 2" })
    ]);

    var todoItemsView = new TodoItemsView({ model: todoItems });
    $("body").append(todoItemsView.render().$el);
});