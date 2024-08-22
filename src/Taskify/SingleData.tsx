import React, { useState, useRef, useEffect } from 'react'
import { Todo } from "./Interface/todoInterface"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

const SingleData: React.FC<Props> = ({ todo, todos, setTodos }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

    const handleDelete = (id: number) => {
        setTodos(todos.filter((item) => item.id !== id))
    }

    const handleEdit = () => {
        setEdit(true);
    }

    const handleSave = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map((item) => (item.id === id ? { ...item, todo: editTodo } : item)))
        setEdit(false);
    }
    return (
        <div>
            <div className='container w-50 d-flex border border-1 rounded p-1 mt-1'>
                {edit ? (<input ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />)
                    :
                    (<div className='col-8'>
                        {todo.todo}</div>
                    )
                }
                <div className='col-4'>
                    <span className='p-1' onClick={handleEdit}>
                        <FaEdit />
                    </span>
                    <span className='p-1' onClick={() => handleDelete(todo.id)}>
                        <MdDelete />
                    </span>
                    {edit &&
                        <span onClick={(e) => handleSave(e, todo.id)}>
                            <MdDone />
                        </span>}
                </div>
            </div>
        </div>
    )
}

export default SingleData