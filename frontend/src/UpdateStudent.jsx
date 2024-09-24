import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateStudent(){
    
    const [NAME, setName] = useState('')
    const [EMAIL, setEmail] = useState('')
    const [USERNAME, setUsername] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8000/update/'+id, {NAME, EMAIL, USERNAME})
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
                <h2>Update student</h2>
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
                <button className="btn btn-success">Update</button>
            </form>
        </div>

      </div>
    )
}

export default UpdateStudent