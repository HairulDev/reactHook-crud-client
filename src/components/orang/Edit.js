import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

const EditProduct = () => {

  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    firstName: "",
    hobi: "",
    dob: ""
  });

  const { firstName, hobi, dob } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/peoples/${id}`, user);
    // await axios.put(`http://localhost/nyobeAppCI4/public/orang/update/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:5000/peoples/${id}`);
    // const result = await axios.get(`http://localhost/nyobeAppCI4/public/orang/show/${id}`);
    setUser(result.data);
  };
  return (
    <div className="body">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <form onSubmit={e => onSubmit(e)} className="animated fadeInUp">
                  <div className="row">
                    <div className="form-group col-md-12 mb-2">
                      <h5 className="modal-title">Update Data</h5>
                    </div>
                    <input type="hidden" name="" value={id} onChange={e => onInputChange(e)} className="form-control" autocomplete="off" />
                    <div className="form-group col-md-6 mb-2">
                      <input type="text" value={firstName} onChange={e => onInputChange(e)} name="firstName" className="form-control" autocomplete="off" />
                    </div>
                    <div className="form-group col-md-6 mb-2">
                      <select name="hobi" value={hobi} onChange={e => onInputChange(e)} className="form-control" required>
                        <option value="" disabled >--Select Hobby--</option>
                        <option value="Ngoding">Ngoding</option>
                        <option value="Adventure">Adventure</option>
                      </select>
                      {/* <input type="text" value={hobi} onChange={e => onInputChange(e)} name="hobi" className="form-control" autocomplete="off" /> */}
                    </div>
                    <div className="form-group col-md-12 mb-2">
                      <input type="date" value={dob} onChange={e => onInputChange(e)} name="dob" className="form-control" autocomplete="off" />
                    </div>
                    <div className="form-group col-md-6 mb-2">
                      <NavLink exact to="/"> <button className="btn btn-warning">Back</button> </NavLink>
                    </div>
                    <div className="form-group col-md-6 text-right">
                      <button className="btn btn-primary">Update </button>
                    </div>
                  </div>
                </form>
              </div >
              <svg className="decoration-frame" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 192.275">
                <defs>
                </defs>
                <path className="cls-1" d="M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z" transform="translate(0 -158.755)" />
              </svg>
            </div >
          </div >
        </div >
      </div >
    </div >
  );
};

export default EditProduct;
