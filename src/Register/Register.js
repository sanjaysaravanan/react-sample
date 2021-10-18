import React from "react";
import PropTypes from "prop-types";
import Styles from "./Register.module.css";
import { Link } from "react-router-dom";

const Register = ({ loginAction }) => {
  return (
    <div className={Styles.container}>
      <form method="post">
        <div className={Styles.container}>
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label for="name">
            <b>Name</b>
          </label>
          <input type="text" placeholder="Enter Name" name="name" required />

          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label for="num">
            <b>Mobile Number</b>
          </label>
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            name="num"
            required
          />

          <label for="email">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <hr />

          <button type="submit" className={Styles.registerbtn}>
            Register
          </button>
        </div>

        <div className={Styles.signin}>
          <p>
            Already have an account?{" "}
            {/** Parent's state manipulation using callback func  */}
            <span
              style={{
                textDecoration: "underline",
                color: "#0000ff",
                cursor: "pointer",
              }}
              onClick={() => loginAction()}
            >
              Click Here
            </span>
            .{/** Link to "/"  */}
            {/* <Link to="/">Click Here</Link> */}
          </p>
        </div>
      </form>
    </div>
  );
};

Register.propTypes = {
  loginAction: PropTypes.func,
};

Register.defaultProps = {
  loginAction: () => {},
};

export default Register;
