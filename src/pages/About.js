import { MDBTypography } from "mdb-react-ui-kit";
import React from "react";

const About = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <MDBTypography note noteColor='primary'>
        Hey Guys, this is Full CRUD Application with the help of React 15. We
        have use Redux-Saga to perform all CRUD operation in this application.
        In this application we have also routing facility as well. We have use
        MDBBootstrap 5 to build the component like Table, Form, Navbar, Button
        etc in this React Application.
      </MDBTypography>
    </div>
  );
};

export default About;
