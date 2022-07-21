import React, { useEffect, useState } from "react";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUsersStart, updateUsersStart } from "../redux/actions";
import { toast } from "react-toastify";

const initialstate = {
  name: "",
  email: "",
  phone: "",
  address: "",
};
const AddEditUser = () => {
  const [formValue, setFormValue] = useState(initialstate);
  const [editMode, setEditMode] = useState(false);
  const { name, email, phone, address } = formValue;
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { id } = useParams();

  const { users } = useSelector((state) => state.data);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone && address) {
      if (!editMode) {
        dispatch(createUsersStart(formValue));
        toast("User Added SuccessFully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => navigate("/"), 500);
      } else {
        dispatch(updateUsersStart({ id, formValue }));
        setEditMode(false);
        toast("User Updated SuccessFully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => navigate("/"), 500);
      }
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleUser = users.find((item) => item.id === +id);
      setFormValue({ ...singleUser });
    } else {
      setEditMode(false);
      setFormValue({ ...initialstate });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [+id]);

  return (
    <MDBValidation
      className='row g-3'
      style={{ marginTop: "50px" }}
      noValidate
      onSubmit={handleSubmit}
    >
      <p className='fs-2 fw-bold text-center'>
        {!editMode ? "Add" : "Update"} User Detail
      </p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBInput
          value={name || ""}
          name='name'
          type='text'
          onChange={onInputChange}
          required
          label='name'
          validation='Please Provide Name'
          invalid='true'
        />
        <br />
        <MDBInput
          value={email || ""}
          name='email'
          type='email'
          onChange={onInputChange}
          required
          label='email'
          validation='Please Provide Email'
          invalid='true'
        />
        <br />
        <MDBInput
          value={phone || ""}
          name='phone'
          type='number'
          onChange={onInputChange}
          required
          label='phone'
          validation='Please Provide phone'
          invalid='true'
        />
        <br />
        <MDBInput
          value={address || ""}
          name='address'
          type='text'
          onChange={onInputChange}
          required
          label='address'
          validation='Please Provide address'
          invalid='true'
        />
        <br />
        <div className='col-12'>
          <MDBBtn style={{ marginRight: "10px" }} type='submit'>
            {!editMode ? "Add" : "Update"}
          </MDBBtn>
          <MDBBtn
            style={{ marginRight: "10px" }}
            color='danger'
            onClick={() => navigate("/")}
          >
            Back
          </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  );
};

export default AddEditUser;
