import React, { useState } from 'react'
import axios from 'axios'

export default function Create() {
     const [user, setUser] = useState({});

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser(values => ({ ...values, [name]: value }))
        
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        createUser();
        setUser({});
    }

    const createUser = () => {
        axios.post('http://localhost:8000/api/create-user', user).then(response => {
            setUser({});
        })
    }

    return (
        <div>

            <div className='container'>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input onChange={handleInput} name="name" value={user.name || ""} type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                    <input onChange={handleInput} name="email" value={user.email || ""} type="email" className="form-control" id="email" placeholder="email" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input onChange={handleInput} name="password" value={user.password || ""} type="password" className="form-control" id="Password" placeholder="Password" />
                    </div>

                <button onClick={handleSubmit} type="submit" className="btn btn-primary mt-1">Submit</button>
                
            </div>



        </div>
    )
}
