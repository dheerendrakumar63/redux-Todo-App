import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();
    console.log(todos);

    const clickHandler = (id) => {
        console.log( "delete", id);
        dispatch(deleteTodo(id));
    };

    const markDoneHandler = (id) => {
        console.log("done", id);
        dispatch(markAsDone(id));
    };
    
    return (
        <div>
            <AddForm />
            <h3>Todos List App</h3>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
                            {todo.task}
                        </span>
                        <button
                            type="button"
                            style={{ marginLeft: "10px" }}
                            onClick={() => markDoneHandler(todo.id)}
                            disabled={todo.isDone}
                        >
                            Done
                        </button>
                        <button
                            type="button"
                            style={{ marginLeft: "10px" }}
                            onClick={() => clickHandler(todo.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
