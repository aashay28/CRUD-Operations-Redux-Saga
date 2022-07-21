import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsersStart, loadUsersStart } from "../redux/actions";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Home = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadUsersStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    toast.error(error);
  }, [error]);
  if (loading) {
    return (
      <MDBSpinner style={{ marginTop: "150px" }} role='status'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
    );
  }
  const handleDelete = (id) => {
    dispatch(deleteUsersStart(id));
    toast("User Deleted Successfully");
    dispatch(loadUsersStart());
  };
  return (
    <div className='container' style={{ marginTop: "150px" }}>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope='col'>No.</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Countries</th>
            <th scope='col'>Actions</th>
          </tr>
        </MDBTableHead>
        {users &&
          users.map((item, index) => (
            <MDBTableBody key={index}>
              <tr>
                <th scope='row'>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>

                <td className='d-flex gap-2'>
                  <MDBBtn
                    className='-1'
                    tag='a'
                    color='none'
                    onClick={() => handleDelete(item.id)}
                  >
                    <MDBTooltip title='Delete' tag='p'>
                      <MDBIcon
                        icon='trash'
                        style={{ color: "#dd4b39" }}
                        size='lg'
                      />
                    </MDBTooltip>
                  </MDBBtn>

                  <Link to={`/editUser/${item.id}`}>
                    <MDBTooltip title='Edit' tag='p'>
                      <MDBIcon
                        icon='pen'
                        style={{ color: "#55acee", marginBottom: "10px" }}
                        size='lg'
                      />
                    </MDBTooltip>
                  </Link>
                  <Link to={`/userInfo/${item.id}`}>
                    <MDBTooltip title='View' tag='p'>
                      <MDBIcon
                        icon='eye'
                        style={{ color: "#3f51b5", marginBottom: "10px" }}
                        size='lg'
                      />
                    </MDBTooltip>
                  </Link>
                </td>
              </tr>
            </MDBTableBody>
          ))}
      </MDBTable>
    </div>
  );
};

export default Home;
