import React from 'react'
import { Todo } from './Interface/todoInterface';
import SingleData from './SingleData';



interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div>
            <div className="pt-1 text-center">
                {todos.map((todoData) =>
                    <SingleData todo={todoData} key={todoData.id} todos={todos} setTodos={setTodos} />
                )}

            </div>
        </div>
    )
}

export default TodoList