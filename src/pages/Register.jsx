import React from "react";
import "./Register.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
const initialValues={
  FirstName:"",
  LastName:"",
  Email:"",
  Password:"",



}
const Register = () => {
  return (
    <div className="container-fluid">
      <div className="card mx-auto">
        <p>Register</p>
        <Formik >
<form>
<div class="form-group">
  <label htmlfor=" Firstname ">FirstName:</label>
  <input type="text" name="FirstName" id="FirstName" className="" placeholder="enter you Firstname" aria-describedby="helpId" />
</div>
<div class="form-group">
  <label htmlfor=" name ">LastName:</label>
  <input type="text" name="" id="LastName" className="LastName" placeholder="enter you Lastname" aria-describedby="helpId" />
</div>
<div class="form-group">
  <label htmlfor="Email">Email:</label>
  <input type="text" name="Email" id="Email" className="" placeholder="enter you Email" aria-describedby="helpId" />
</div>
</form>
         </Formik>
      </div>
    </div>
  );
};

export default Register;
