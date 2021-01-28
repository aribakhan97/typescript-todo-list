import React from "react";

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;

}
export const TodoList: React.FC<> = ({ todos, toggleTodo }) => {
return <ul>
    {todos.map(todo => {
        return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />;
    })}
</ul>

} 