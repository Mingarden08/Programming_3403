import './todolist.css';
import TodoHeader from './components/TodoHeader.jsx';
import TodoAdder from './components/TodoAdder.jsx';
import TodoList from './components/TodoList.jsx';
import { useState } from 'react';

class Todo {
    constructor(text) {
        this.id = Date.now();       // PK
        this.text = text;           // 내용
        this.isCompleted = false;   // 완료 여부
    }
}

function TodoListApp() {
    const [todos, setTodos] = useState([]); // 할일 목록 저장 state
    function addTodo(text) {
        setTodos((todos) => [
            ...todos,
            new Todo(text)
        ]);
    }
    return (
        <div className="todo">
            <TodoHeader/>
            <TodoAdder addTodo={ addTodo } />
            <TodoList todos={todos} />
        </div>
    )
}

export default TodoListApp;