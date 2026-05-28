import Checkbox from './Checkbox.jsx';
import Button from './Button.jsx';
import { useState } from 'react';

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
    // isEditing: 수정중인지 아닌지
    const [isEditing, setIsEditing] = useState(false);
    // editText: 수정중인 text
    const [editText, setEditText] = useState(todo.text);
    function handleEditClick() {
        if (!isEditing) {
            // 수정중이 아니면 -> 수정중, <input />
            setIsEditing(true);
            setEditText(todo.text);
        } else {
            // 수정중이면 -> 수정중이 아님, <Checkbox />
            const trimmedText = editText.trim();
            if (trimmedText !== "" && trimmedText !== todo.text) { // 빈칸이 아니고, 이전 텍스트와 다르면 새로 저장
                editTodo(todo.id, trimmedText);
            }
            setIsEditing(false);
        }
    }
    return (
        // todo.isCompleted가 참이면 " todo__item--complete" 아니면 ""
        <li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>
            {/* 수정중이 아니면 */}
            {!isEditing &&
                <Checkbox
                    id={todo.id}
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(todo.id)}
                >{todo.text}</Checkbox>
            }
            {/* 수정중이면 */}
            {isEditing &&
                <input
                    type="text"
                    className="todo__input--edit"
                    value={editText}
                    onChange={(event) => setEditText(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") handleEditClick()
                    }}
                    autoFocus
                />
            }
            <Button
                    className="todo__button todo__button--edit"
                    onClick={handleEditClick}
                >{isEditing ? "💾" : "✏️" }</Button>
                
            <Button
                className="todo__button todo__button--delete"
                onClick={() => deleteTodo(todo.id)}
            >❌</Button>
        </li>
    )
}