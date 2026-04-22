import CheckBox from "./CheckBox";
import Button from "./Button";

export default function TodoItem({ todo }) {
    return (
        
        <li className={`todo__item ${todo.isCompleted ? "todo__item--complete" : ""}`}>
            <CheckBox id={todo.id}>{todo.text}</CheckBox>
            <Button className="todo__button todo__button--edit">✏️</Button>
            <Button className="todo__button todo__button--delete">❌</Button>
        </li>
    );
}