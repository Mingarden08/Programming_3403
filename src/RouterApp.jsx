import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import TodoListApp from './TodoListApp.jsx';
import CounterApp from './CounterApp.jsx';

function LinkButtonPageApp() {

    const navigate = useNavigate();


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
                <li>
                    <button onClick={() => navigate('/counterapp')}>Counter App</button>
                </li>
                <li>
                    <button onClick={() => navigate('/todolistapp')}>TodoList App</button>
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