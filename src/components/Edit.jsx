import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
    const [oldUser, setoldUser] = useState({});
    const {id}  = useParams();
    const navigate = useNavigate();

    const userShow = () => {
        axios.get('http://localhost:8000/api/show-user/' + id).then(response => {
            setoldUser(response.data)
        })
    }

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setoldUser(values => ({ ...values, [name]: value }))

    }

    useEffect(() => {
        userShow()
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault();
        updateUser();
    }
    const updateUser = () => {
        axios.post('http://localhost:8000/api/update-user', oldUser).then(response => {
            navigate("/")
        })
    }

  return (
      <div>

          <div className='container'>
              <h3>Edit User</h3>

              <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input onChange={handleInput}  name="name" type="text" value={oldUser.name || ""} className="form-control" id="name" placeholder="Enter Name" />
              </div>
              <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input onChange={handleInput} name="email" type="email"  value={oldUser.email || ""} className="form-control" id="email" placeholder="email" />
              </div>
              <div className="form-group">
                  <label htmlFor="Password">Password</label>
                  <input onChange={handleInput}  name="password" type="password"  className="form-control" id="Password" placeholder="Password" />
              </div>

              <button onClick={handleSubmit}  type="submit" className="btn btn-primary mt-1">Submit</button>

          </div>



      </div>
  )
}
