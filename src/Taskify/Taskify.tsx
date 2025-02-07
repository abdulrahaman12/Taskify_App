import React, { useState } from "react"
import InputField from "./InputField";
import { Todo } from "./Interface/todoInterface";
import TodoList from "./TodoList";




const Taskify = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: false }],)
            setTodo("")
        }
    }
    console.log(todos);
    return (
        <>
            <div className='fs-2 text-center' style={{ fontFamily: "Helvetica Neue" }}>Taskify</div>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} />
        </>
    )
}

export default Taskify