import react from "react"
import { useState } from "react"

const TodoApp = () => {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState("")

    function handleAdd(e) {
        e.preventDefault()
        setTodos((prev) => [...prev, { id: Date.now(), text, done: false }])
        setText("")
        console.log(todos);
    }

    function toggleTodo(id) {
        setTodos((prev) => prev.map((t) => t.id === id ? { ...t, done: !t.done } : t))
    }

    function deleteTodo(id) {
        setTodos((prev) => prev.filter((t) => t.id !== id))
    }

    return (
        <div className="flex flex-col items-center-safe mt-10">
            <form onSubmit={handleAdd}>
                <label htmlFor="todo" className="mr-1">Todo:</label>
                <input  className="border-2 mr-1.5"onChange={(e) => setText(e.target.value)} type="text" id="todo" placeholder="Enter your task" />
                <button className="rounded-full px-3 py-1 bg-pink-700 font-medium text-[15px] text-white">Add</button>
            </form>
            <ul>
                {todos.map((t) => (
                    <li key={t.id}>
                        <p>{t.text}</p>
                        <span>{t.done ? <p>Task complete</p> : <p>Task incomlete</p>}</span>
                        <button className="rounded-full p-2"onClick={() => toggleTodo(t.id)}>Done</button>
                        <button onClick={() => deleteTodo(t.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp