import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Student() {
  const [students, setStudents] = useState([]);

  // Use effect with dependency array to avoid infinite loop
  useEffect(() => {
    axios
      .get("http://localhost:8000")
      .then((res) => setStudents(res.data)) // Assuming API response is an array of students
      .catch((err) => console.log(err));
  }, []); // The empty array ensures this runs only on component mount

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8000/student/'+id)
      window.location.reload()
    }catch(err) {
      console.log(err)
    }
  }
  return (
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
      <div className="card shadow-lg w-75">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h3 className="mb-0">Student List</h3>
          <Link to = "/CreateStudent" className="btn btn-success btn-sm ">ADD +</Link>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered">
              <thead className="table-primary">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((data, i) => (
                  <tr key={i}>
                    <td>{data.NAME}</td>
                    <td>{data.EMAIL}</td>
                    <td>{data.USERNAME}</td>

                    <td>
                        <Link to={`/update/${data.ID}`}  className="btn btn-primary m-2">Update</Link>
                     
                        <button className="btn btn-danger " onClick={e => handleDelete(data.ID)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
