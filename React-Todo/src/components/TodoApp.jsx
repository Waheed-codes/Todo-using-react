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
        
        <div className="flex flex-col items-center-safe text-blue-50 bg-slate-800 min-h-screen text-sm">
            <form onSubmit={handleAdd} className="mt-10">
                <label htmlFor="todo" className="mr-1">Todo:</label>
                <input  className="border-2 mr-3 focus:outline-none px-2 py-1"onChange={(e) => setText(e.target.value)} type="text" value={text}id="todo" placeholder=" Enter your task" />
                <button className="rounded-full px-3 py-1 border-2 cursor-pointer border-slate-700 font-mono hover:bg-slate-700">Add</button>
            </form>
            <ul className="list-disc mt-4">
                {todos.map((t) => (
                    <li key={t.id} className="mt-2">
                        <p className={t.done? "line-through text-gray-500":""}>{t.text}</p>
                        <span className="mb-4">{t.done ? <p>Task complete</p> : <p>Task incomlete</p>}</span>
                        <button className="rounded-full px-3 py-0.5 cursor-pointer border-2 border-blue-500 hover:bg-blue-500 mr-10 mt-2"onClick={() => toggleTodo(t.id)}>Done</button>
                        <button className="rounded-full px-3 py-0.5 cursor-pointer border-2 border-red-500 hover:bg-red-600 "onClick={() => deleteTodo(t.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp