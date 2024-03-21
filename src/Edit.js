import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [student_name, setStudentName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [validation, setValidation] = useState(false);
    useEffect(() => {
        const fetchData = async (id) => {
            try {
                console.log('Fetching data for id:', id);
                const response = await axios.get(`http://localhost:8080/student/${id}`);
                console.log('Response:', response.data); // Log the response data
                if (response.status === 200) {
                    setUser(response.data[0]);
                    setStudentName(response.data[0].student_name);
                    setBirthdate(response.data[0].birthdate);
                    setGender(response.data[0].gender);
                } else {
                    console.error(response.statusText);
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchData(id);
    }, [id]);
    
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = {
            student_name,
            birthdate,
            gender
        };

        axios.patch(`http://localhost:8080/update/${id}`, updatedUser)
            .then(() => {
                alert('Saved successfully.');
                navigate('/');
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div>
            <div className="row">
                {student_name}
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Update</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input 
    value={student_name} 
    onChange={(e) => setStudentName(e.target.value)} 
    className="form-control" 
/>                                            {/* {student_name.length === 0 && validation && <span className="text-danger">Enter the name</span>} */}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Birthdate</label>
                                            <input value={birthdate} onMouseDown={() => setValidation(true)} onChange={(e) => setBirthdate(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <input value={gender} onMouseDown={() => setValidation(true)} onChange={(e) => setGender(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <Link to="/" className="btn btn-dark">Back</Link>
                                            <button className="btn btn-success" type="submit">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Edit;
