import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TodoListApp from './TodoListApp.jsx';
import CounterApp from './CounterApp.jsx';

function LinkButtonPageApp() {
    return (
        <div>
            <h1>App 목록</h1>
            <ul>
                <li>
                    <Link to="/counterapp">Counter App</Link>
                </li>
                <li>
                    <Link to="/todolistapp">TodoList App</Link>
                </li>
            </ul>
        </div>
    )
}

export default function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LinkButtonPageApp />} />
                <Route path="/counterapp" element={<CounterApp/>} />
                <Route path="/todolistapp" element={<TodoListApp/>} />
            </Routes>
        </BrowserRouter>
    )
}