function TodoListApp() {
    return (
        <div>
            <h1>HyeonDo List</h1>
            <form action="" method="post">
                <input type="text" placeholder="할 일을 입력하세요" />
                <button type="submit">Add</button>
            </form>
            <ul>
                <li>
                    <input type="checkbox" id="chk-1"/>
                    <label htmlFor="chk-1">지각하기</label>
                    <button>✏️</button>
                    <button>❌</button>
                </li>
                <li>
                    <input type="checkbox" id="chk-2"/>
                    <label htmlFor="chk-2">롤체하기</label>
                    <button>✏️</button>
                    <button>❌</button>
                </li>
            </ul>
        </div>
    )
}

export default TodoListApp;