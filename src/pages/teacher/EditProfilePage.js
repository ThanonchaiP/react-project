import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Header, TextHeader } from "../../style/header/Header";
import {
  Container,
  ContentLeft,
  ContentRight,
  BtnSubmit,
} from "./EditProfilePage.element";

import { Form } from "react-bootstrap";
// import Select from "react-select";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

import { UserStoreContext } from "../../context/UserContext";
import axios from "axios";

let imageBase64;

//validate
const schema = yup.object().shape({
  firstname: yup
    .string()
    .required("กรุณากรอกชื่อ")
    .matches(/^[^<>*!+-@#  \t\r\n\v\f]+$/, "กรอกเฉพาะตัวอักษรเท่านั้น"),
  lastname: yup
    .string()
    .required("กรุณากรอกชื่อ")
    .matches(/^[^<>*!+-@#  \t\r\n\v\f]+$/, "กรอกเฉพาะตัวอักษรเท่านั้น"),
  title: yup.string().required("กรุณากรอกคำนำหน้า"),
  gender: yup.string().required("กรุณาเลือกเพศ"),
  email: yup.string().email("อีเมลไม่ถูกต้อง"),
  tel: yup.string().matches(/^[0-9]+$|^$/, "กรุณาตรวจสอบเบอร์โทร"),
});

const EditProfilePage = () => {
  //hook
  const { addToast } = useToasts();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const userStore = React.useContext(UserStoreContext);
  const teacherProfile = JSON.parse(localStorage.getItem("profile"));

  //state
  const [img, setImg] = React.useState(teacherProfile.photo);
  const [invalidPassword, setInvalidPassword] = React.useState();

  //function
  const handlePicture = (event) => {
    //convert to base64
    if (event.target.files && event.target.files[0]) {
      let fileUpload = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(fileUpload);

      //Create URL
      setImg(URL.createObjectURL(fileUpload));

      reader.onload = (e) => {
        imageBase64 = e.target.result;
      };
    }
  };

  const onSubmit = async (data) => {
    try {
      const apiUrl = "http://localhost:3200/teacher/";
      const resp = await axios.put(
        "http://localhost:3200/teacher/" + userStore.profile._id,
        {
          title: data.title,
          firstname: data.firstname,
          lastname: data.lastname,
          gender: data.gender,
          email: data.email,
          tel: data.tel,
          photo: imageBase64 ? imageBase64 : null,
          oldPhoto: userStore.profile.photo ? userStore.profile.photo : null,
          password: data.password ? data.password : null,
          new_password: data.new_password ? data.new_password : undefined,
        }
      );

      //update localStorage and global state
      localStorage.setItem("profile", JSON.stringify(resp.data.data));
      userStore.updateProfile(resp.data.data);

      addToast("แก้ไขข้อมูลสำเร็จ", {
        appearance: "success",
        autoDismissTimeout: 3000,
      });
      history.push("/profile");
    } catch (error) {
      setInvalidPassword(error.response.data.error.message);
      // passwordError = error.response.data.error.message
      // console.log(error.response.data.error.message)
    }
  };

  return (
    <MainLayout>
      <Header img="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
        <TextHeader>แก้ไขข้อมูลส่วนตัว</TextHeader>
      </Header>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContentLeft>
            <img
              src={img ? img : "https://www.w3schools.com/howto/img_avatar.png"}
              alt=""
            />
            <input
              type="file"
              onChange={handlePicture}
              accept="image/*"
              id="file"
            />
            <label htmlFor="file">เลือกรูปภาพ</label>
          </ContentLeft>
          {userStore.profile && (
            <ContentRight>
              <div className="d-flex flex-row">
                <Form.Group>
                  <Form.Label>ชื่อ</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="กรอกชื่อ"
                    {...register("firstname")}
                    className={`form-control ${
                      errors.firstname ? "is-invalid" : ""
                    }`}
                    defaultValue={userStore.profile.firstname}
                  />
                  {errors.firstname && (
                    <Form.Control.Feedback type="invalid">
                      <h5>{errors.firstname.message}</h5>
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                <Form.Group className="ml-4">
                  <Form.Label>นามสกุล</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="กรอกนามสกุล"
                    {...register("lastname")}
                    className={`form-control ${
                      errors.lastname ? "is-invalid" : ""
                    }`}
                    defaultValue={userStore.profile.lastname}
                  />
                  {errors.lastname && (
                    <Form.Control.Feedback type="invalid">
                      <h5>{errors.lastname.message}</h5>
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </div>
              <div className="d-flex flex-row">
                <Form.Group>
                  <Form.Label>คำนำหน้า</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="กรอกคำนำหน้า"
                    {...register("title")}
                    className={`form-control ${
                      errors.title ? "is-invalid" : ""
                    }`}
                    defaultValue={userStore.profile.name_title}
                  />
                  {errors.title && (
                    <Form.Control.Feedback type="invalid">
                      <h5>{errors.title.message}</h5>
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                <Form.Group className="ml-4 d-flex flex-column">
                  <Form.Label>เพศ</Form.Label>
                  <select
                    defaultValue={userStore.profile.gender}
                    placeholder="เลือกเพศ"
                    {...register("gender")}
                    className={`selecter custom-select form-control ${
                      errors.gender ? "is-invalid" : "border-gray"
                    }`}
                  >
                    <option value="ชาย">ชาย</option>
                    <option value="หญิง">หญิง</option>
                  </select>
                  {errors.gender && (
                    <Form.Control.Feedback type="invalid">
                      <h5>{errors.gender.message}</h5>
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                {/* <Form.Group className="ml-4">
                  <Form.Label>เพศ</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="เลือกเพศ"
                    {...register("gender")}
                    className={`form-control ${
                      errors.gender ? "is-invalid" : ""
                    }`}
                    defaultValue={userStore.profile.gender}
                  />
                  {errors.gender && (
                    <Form.Control.Feedback type="invalid">
                      <h5>{errors.gender.message}</h5>
                    </Form.Control.Feedback>
                  )}
                </Form.Group> */}
              </div>
              <div className="d-flex flex-row">
                <Form.Group>
                  <Form.Label>อีเมล</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Firstname"
                    {...register("email")}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    defaultValue={userStore.profile.email}
                  />
                  {errors.email && (
                    <Form.Control.Feedback type="invalid">
                      <h5>{errors.email.message}</h5>
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                <Form.Group className="ml-4">
                  <Form.Label>เบอร์โทร</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter lastname"
                    {...register("tel")}
                    className={`form-control ${
                      errors.tel ? "is-invalid" : "was-validated"
                    }`}
                    defaultValue={userStore.profile.tel}
                  />
                  {errors.tel && (
                    <Form.Control.Feedback type="invalid">
                      <h5>{errors.tel.message}</h5>
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </div>
              <div className="d-flex flex-row">
                <Form.Group>
                  <Form.Label>รหัสผ่านเดิม</Form.Label>
                  <Form.Control
                    type="password"
                    {...register("password")}
                    placeholder="กรอกรหัสผ่านเดิม"
                    className={`form-control ${
                      invalidPassword ? "is-invalid" : ""
                    }`}
                  />
                  {invalidPassword && (
                    <Form.Control.Feedback type="invalid">
                      <h5>{invalidPassword}</h5>
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                <Form.Group className="ml-4">
                  <Form.Label>รหัสผ่านใหม่</Form.Label>
                  <Form.Control
                    type="password"
                    {...register("new_password")}
                    placeholder="กรอกรหัสผ่านใหม่"
                  />
                </Form.Group>
              </div>

              <BtnSubmit type="submit">แก้ไขข้อมูลส่วนตัว</BtnSubmit>
            </ContentRight>
          )}
        </form>
      </Container>
    </MainLayout>
  );
};

export default EditProfilePage;
