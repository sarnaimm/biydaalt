import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Students = () => {
    const [user, userchange] = useState(null);
    const navigate = useNavigate();


    const LoadEdit = (studentId) => {
        navigate("/edit/" + studentId);
    }
    
    const handleDelete = async (StudentId) => {
        try {
          const response = await axios.delete(`http://localhost:8080/delete/${StudentId}`  );
          if (response.status === 200) {
            fetchData();
          }
        } catch (error) {
          console.error('Error:', error);
          if (error.response) {
          }
        }
      };

      useEffect(()=>{
        fetchData();
      },[]);
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/students');
          if (response.status === 200) {
            userchange(response.data);
          } else {
            console.error(response.statusText);
          }
        } catch (error) {
          console.error('Fetch error:', error);
        } 
      };


    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>library students</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead >
                            <tr>
                                <td>studentID</td>
                                <td>Name</td>
                                <td>birthdate</td>
                                <td>huis</td>
                            </tr>
                        </thead>
                        <tbody>

                            {user &&
                                user.map(item => (
                                    <tr key={item.studentId}>
                                        <td>{item.studentId}</td>
                                        <td>{item.student_name}</td>
                                        <td>{item.birthdate}</td>
                                        <td>{item.gender}</td>
                                        <td><a onClick={() => { LoadEdit(item.studentId) }} className="btn btn-secondary">update</a>
                                            <a onClick={() => { handleDelete(item.studentId) }} className="btn btn-danger">delete</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div> 
            </div>
        </div>
    );
}

export default Students;