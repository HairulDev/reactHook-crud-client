import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

const AddProduct = () => {
  let history = useHistory(); // Use for Navigate on Previous
  const [user, setUser] = useState({
    firstName: "",
    hobi: "",
    dob: ""
  });

  const { firstName, hobi, dob } = user;

  const onInputChange = e => {
    setUser ({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/peoples`, user);
    // await axios.post(`http://localhost/nyobeAppCI4/public/orang/create`, user);
    history.push("/");
  };

  return (
    <div className="body">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <form onSubmit={ e => onSubmit(e) } className="animated fadeInUp">
                  <div className="row">
                    <div className="form-group col-md-12 mb-2">
                      <h5 className="modal-title">Create Data</h5>
                    </div>
                    <div className="form-group col-md-6 mb-2">
                      <input type="text" name="firstName" value={firstName} onChange={e => onInputChange(e)} className="form-control" placeholder="firstName" autoComplete="off" />
                    </div>
                    <div className="form-group col-md-6 mb-2">
                      <select name="hobi" value={hobi} onChange={e => onInputChange(e)} className="form-control" required>
                        <option value="" disabled >--Select Hobby--</option>
                        <option value="Ngoding">Ngoding</option>
                        <option value="Adventure">Adventure</option>
                      </select>
                    </div>
                    <div className="form-group col-md-12 mb-2">
                      <input type="date" name="dob" value={dob} onChange={e => onInputChange(e)} className="form-control" placeholder="dob" autoComplete="off" />
                    </div>
                    <div className="form-group col-md-6 mb-2">
                      <NavLink exact to="/"> <button className="btn btn-warning">Back</button> </NavLink>
                    </div>
                    <div className="form-group col-md-6 text-right">
                      <button className="btn btn-primary ">Save </button>
                    </div>
                  </div>
                </form>
              </div>
              <svg className="decoration-frame" data-name="Layer 2" preserveAspectRatio="none" viewBox="0 0 1920 192.275">
                <defs>
                </defs>
                <path className="cls-1" d="M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z" transform="translate(0 -158.755)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
