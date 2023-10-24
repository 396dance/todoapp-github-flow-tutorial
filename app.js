$("#addTodo").click(function () {
    const inputTodo = $("input").val();
    $("#TodoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    $("input").val("");
});