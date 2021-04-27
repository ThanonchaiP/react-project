import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserStoreContext } from "../../context/UserContext";
import { useToasts } from "react-toast-notifications";
import "./LoginPage.css";

const schema = yup.object().shape({
  username: yup.string().required("กรุณากรอกชื่อผู้ใช้"),
  password: yup.string().required("กรุณากรอกรหัสผ่าน"),
});

const LoginPage = () => {
  const history = useHistory();
  const userStore = React.useContext(UserStoreContext);

  const { addToast } = useToasts();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const urlLogin = `http://localhost:3200/login/${data.role}`;
      const resp = await axios.post(urlLogin, {
        username: data.username,
        password: data.password,
        role: data.role,
      });

      //set token on localStorage
      localStorage.setItem("token", JSON.stringify(resp.data.access_token));

      //get profile
      const urlProfile = "http://localhost:3200/login/profile";
      const respProfile = await axios.get(urlProfile, {
        headers: {
          Authorization: "Bearer " + resp.data.access_token,
        },
      });

      localStorage.setItem("profile", JSON.stringify(respProfile.data.user));

      //update userContext
      const profileValue = JSON.parse(localStorage.getItem("profile")); // get profile from localStorage
      userStore.updateProfile(profileValue);
      history.replace("/");

      addToast("เข้าสู่ระบบสำเร็จ", {
        appearance: "success",
        autoDismissTimeout: 2000,
      });
    } catch (error) {
      addToast(error.response.data.error.message, { appearance: "error" });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="login-container">
        <div className="login">
          <i className="fas fa-star-of-david" />
          <h1>Login</h1>
          <div className="group">
            <input
              type="text"
              placeholder="Username"
              {...register("username")}
            />
            <i className="fa fa-user" />
            {errors.username && (
              <p className="err-msg">{errors.username.message}</p>
            )}
          </div>
          <div className="group">
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <i className="fa fa-lock" />
            {errors.password && (
              <p className="err-msg">{errors.password.message}</p>
            )}
          </div>

          <div className="role-btn mt-4">
            <input
              className="checkbox-tools"
              type="radio"
              name="tools"
              id="tool1"
              {...register("role")}
              value="admin"
            />
            <label htmlFor="tool1">
              <i className="fas fa-users-cog" />
              Admin
            </label>
            <input
              className="checkbox-tools"
              type="radio"
              name="tools"
              id="tool2"
              value="teacher"
              {...register("role")}
              defaultChecked
            />
            <label htmlFor="tool2">
              <i className="fas fa-user-friends" />
              Teacher
            </label>
          </div>

          <button type="submit" className="login">
            <i className="fab fa-servicestack" /> Login
          </button>
          <p className="fs">
            Forgot <a href="#">Username</a> / <a href="#">Password</a> ?
          </p>
          <p>
            Don't have an account ? <a href="#">Sign up</a>
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
