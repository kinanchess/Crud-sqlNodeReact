import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function CreateStudent(){
    
    const [NAME, setName] = useState('')
    const [EMAIL, setEmail] = useState('')
    const [USERNAME, setUsername] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8000/CreateStudent', {NAME, EMAIL, USERNAME})
        .then(res => {
            console.log(res)
            navigate('/')
        }).catch(err => {
            console.log(err)
        })
    }

    return (
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={handleSubmit}>
                <h2>Add student</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="enter name" className="form-control" onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="enter name" className="form-control" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="enter name" className="form-control" onChange={e => setUsername(e.target.value)} />
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        </div>

      </div>
    )
}

export default CreateStudent