import React from "react";
import PropTypes from "prop-types";
import AvatarImg from "../assets/img_avatar2.png";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = ({ registerAction }) => {
  return (
    <div className={styles.container}>
      <h2>Login Form</h2>

      <form>
        <div className={styles.imgcontainer}>
          <img src={AvatarImg} alt="Avatar" className={styles.avatar} />
        </div>

        <div className={styles.container}>
          <label for="uname">
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

          <button type="submit" className={styles.loginbtn}>
            Login
          </button>
        </div>

        <div className={styles.bottomCont}>
          <button type="button" className={styles.cancelbtn}>
            Cancel
          </button>
          <span className={styles.psw}>
            New Registration{" "}
            {/** Parent's state manipulation using callback func  */}
            {/* <span
              style={{
                textDecoration: "underline",
                color: "#0000ff",
                cursor: "pointer",
              }}
              onClick={() => registerAction()}
            >
              Click Here
            </span> */}
            {/** Link to "/register" */}
            <Link to="/register">Click Here</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  registerAction: PropTypes.func,
};

Login.defaultProps = {
  registerAction: () => {},
};

export default Login;
