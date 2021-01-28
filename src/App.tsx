import React from 'react';
import { TodoListItem } from "./TodoListItem";


type Todo = {
  text: string,
  complete: boolean
}


const todos = [
  { text: "Walk the dog", complete: true }, 
  { text: "Write app", complete: false } 
];


const App: React.FC = () => {
  return <TodoListItem />;
};

export default App;
