import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Home() {
  const [users, setUsers] = useState([]);

  const alluserData = () => {
    axios.get('http://localhost:8000/api/all-users').then(response => {
      setUsers(response.data.data);
    })
  }

  useEffect(() => {
    alluserData()
  }, [])

  const deleteUser = (event) => {

    axios.get('http://localhost:8000/api/delete-user/' + event.target.value).then(response => {
      alluserData();
    })

  }


  return (
    <div>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h3>Hello React</h3>
            <Link to="/create" className='btn btn-primary'>Creae user</Link>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">Sr</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link to={'edit/'+user.id} className='btn btn-sm btn-warning  m-1'>Edit</Link>
                      <button value={ user.id } onClick={deleteUser} className='btn btn-sm btn-danger'>Delete</button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>

  )
}
