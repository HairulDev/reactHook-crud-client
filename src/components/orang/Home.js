import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    // const result = await axios.get("http://localhost:5000/peoples");
    const result = await axios.get("http://www.omdbapi.com/?apikey=494c2e87&s=avengers");
    // setUser(result.data);
    setUser(result.data.Search);
    console.log(users);
  };

  // const deleteUser = (id) => {
  //   axios.delete('http://localhost:5000/peoples/' + id)
  //     .then((result) => {
  //       loadUsers();
  //     })
  //     .catch(() => {
  //       alert('Error in the Code');
  //     });
  //   };

  return (
    <div className="container">
      <div className="row">
      { users.map(e => (
        <div className="col-md-3 my-3" key={e.imdbID}>
            <div className="card">
              <div className="card-body">
                <img src={e.Poster} className="card-img-top mb-3" alt='img'/>
                <h5 className="card-title">{e.Title}</h5>
                <p className="card-subtitle mb-2 text-muted">{e.Year}</p>
              </div>
            </div>
        </div>
       )) }
      </div>
    </div>

    // <div className="body">
    // <div className="container mt-5">
    //   <div className="row justify-content-center">
    //     <div className="col-md-12">
    //       <div className="card ">
    //         <div className="card-body animated fadeIn">
    //           <h3 className="text-center">
    //             {/* <img src={logo1} width="60px" /> <img src={logo3} width="60px" /> Backend Nodejs Express + Frontend React <img src={logo2} width="60px" /> */}
    //           </h3>
    //           <div className="card shadow animated fadeIn p-2">
    //             <div className="float-left">
    //               <Link to="/orang/add"> <button className="float-left btn btn-outline-success btn-sm"> <i className="fa fa-plus"></i> Add </button></Link>
    //               <div className="float-right">
    //                 <h6 className="text-right m-2 ">Data <i className="fa fa-align-left"></i></h6>
    //               </div>
    //             </div>
    //             <table className="table border shadow text-center">
    //               <thead className="thead-primary">
    //                 <tr>
    //                   <th width="10%"></th>
    //                   <th width="auto">First Name</th>
    //                   <th width="auto">Hobby</th>
    //                   <th >Date of Birth</th>
    //                   <th width="5%"></th>
    //                 </tr>
    //               </thead>
    //               <tbody>
    //                 { users.map((user) => (
    //                   <tr key={user.id}>
    //                     <td> <button className="btn btn-outline-danger btn-sm" onClick={() => deleteUser(user.id)}><i className="fa fa-trash"></i></button></td>
    //                     <td>{user.firstName}</td>
    //                     <td>{user.hobi}</td>
    //                     <td>{user.dob}</td>
    //                     <td> <Link className=" mr-2" to={`/orang/edit/${user.id}`}><button className="btn btn-outline-info btn-sm"><i className="fa fa-edit"></i></button></Link></td>
    //                   </tr>
    //                 ))}
    //               </tbody>
    //             </table>
    //           </div>
    //         </div>
    //         <svg className="decoration-frame" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 192.275">
    //           <defs>
    //           </defs>
    //           <path className="cls-1" d="M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z" transform="translate(0 -158.755)" />
    //         </svg>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
  );
};

export default Home;
