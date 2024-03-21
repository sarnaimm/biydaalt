import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Newstudent = () => {

    const [StudentId, setStudentId] = useState("");
    const [student_name, setStudentName] = useState("");
    const [surname, setSurname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [Class, setClass] = useState("");
    const [point, setPoint] = useState("");
    const navigate = useNavigate();

    const handleAdd = async () => {
        try {
            const response = await axios.post("http://localhost:8080/post", {
                StudentId, student_name, surname, birthdate, gender, Class, point 
            });

            if (response.status === 200) {
                console.log('success');
                navigate('/'); // Redirect to home page after successful addition
            }
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                console.log('Error response:', error.response.data);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd();
    };

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>student Create</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input required value={StudentId} onChange={e => setStudentId(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>studentname</label>
                                            <input required value={student_name} onChange={e => setStudentName(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>surname</label>
                                            <input required value={surname} onChange={e => setSurname(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>birthdate</label>
                                            <input required value={birthdate}onChange={e => setBirthdate(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>gender</label>
                                            <input required value={gender} onChange={e => setGender(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>class</label>
                                            <input required value={Class} onChange={e => setClass(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>point</label>
                                            <input required value={point} onChange={e => setPoint(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <Link to="/" className="btn btn-dark">Back</Link>
                                            <button className="btn btn-success" type="submit" >Save</button>
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

export default Newstudent;
