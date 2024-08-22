import React, { useRef } from 'react'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {

    const Ref = useRef<HTMLInputElement>(null);

    return (
        <div>
            <form onSubmit={(e) => {
                handleAdd(e);
                Ref.current?.blur();
            }
            }>
                <div className="form-group d-flex justify-content-center mt-4">
                    <input type="input" ref={Ref} className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a task" value={todo} onChange={(e) => setTodo(e.target.value)} />
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        </div >
    )
}

export default InputField