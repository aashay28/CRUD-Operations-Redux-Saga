import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Userinfo = () => {
  const { users } = useSelector((state) => state.data);
  const { id } = useParams();
  const navigate = useNavigate();
  const singleUser = users.find((item) => item.id === +id);

  return (
    <div style={{ marginTop: "100px" }}>
      <div
        className='row'
        style={{ margin: "auto", padding: "15px", maxWidth: "450px" }}
      >
        <p className='col-md-12 fs-3'>User Details</p>
        <br />
        <p className='col-md-6 fw-bold'>id:</p>
        <p className='col-md-6 fw-bold'>{singleUser.id}</p>

        <p className='col-md-6 fw-bold'>Name:</p>
        <p className='col-md-6 fw-bold'>{singleUser.name}</p>

        <p className='col-md-6 fw-bold'>Email:</p>
        <p className='col-md-6 fw-bold'>{singleUser.email}</p>

        <p className='col-md-6 fw-bold'>Phone:</p>
        <p className='col-md-6 fw-bold'>{singleUser.phone}</p>

        <p className='col-md-6 fw-bold'>Address:</p>
        <p className='col-md-6 fw-bold'>{singleUser.address}</p>
      </div>
      <MDBBtn
        style={{ marginRight: "10px" }}
        color='danger'
        onClick={() => navigate("/")}
      >
        Back
      </MDBBtn>
    </div>
  );
};

export default Userinfo;
