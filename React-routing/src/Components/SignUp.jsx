import { useState } from 'react';

const initialForm = { name: "", age: 0, batch: "B26", agree: false };

const SignUp = () => {
    const [form, setForm] = useState(initialForm);
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Submitted:", form);
        setForm(initialForm);
        // console.log(e);
        // console.log(e.target.value);
    }

    function handleChange(e)
    {
        const {name, value, type, checked} = e.target;
        setForm((prev) => ({...prev, [name]: type === 'checkbox' ? checked : value}));
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col w-md'>
                <label htmlFor="name">Name:</label>
                <input name='name' className='border-2 rounded-md p-2 m-2' type="text" id='name' placeholder='Enter your name' onChange={handleChange} value={form.name}/>

                <label htmlFor="age">Age:</label>
                <input name='age' className='border-2 rounded-md p-2 m-2' onChange={handleChange} type="number" id="age" placeholder='Enter your age' value={form.age}/>

                <select name="batch" id="" className='border-2 rounded-md p-2 m-2' value={form.batch} onChange={handleChange}>
                    <option value="">Select your batch</option>
                    <option value="B26">B26</option>
                    <option value="A26">A26</option>
                </select>

                <div>
                    <input name='agree' onChange={handleChange} className='border-2 rounded-md p-2 m-2' type="checkbox" id="agree" checked={form.agree}/>
                    <label htmlFor="agree">Agree to the terms and conditions</label>
                </div>

                <button className='border-2 bg-blue-400 rounded-md w-1/2'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp