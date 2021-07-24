import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Header, TextHeader } from "../../style/header/Header";
import {
  Container,
  Content,
  Img,
  ImgContainer,
  BtnEdit,
} from "./ProfilePage.element";
import { UserStoreContext } from "../../context/UserContext";
import { useHistory } from "react-router-dom";

const ProfilePage = () => {
  const userStore = React.useContext(UserStoreContext);
  const history = useHistory();

  return (
    <MainLayout>
      <Header img="https://images.unsplash.com/flagged/photo-1563248101-a975e9a18cc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
        <TextHeader>ข้อมูลส่วนตัว</TextHeader>
      </Header>
      {userStore.profile && (
        <Container>
          <ImgContainer>
            <Img
              src={
                userStore.profile.photo
                  ? userStore.profile.photo
                  : "https://www.w3schools.com/howto/img_avatar.png"
              }
            />
          </ImgContainer>
          <Content>
            <p>ชื่อผู้ใช้ระบบ : {userStore.profile.username}</p>
            <p>
              ชื่อ-นามสกุล :
              {` ${userStore.profile.name_title}${userStore.profile.firstname} ${userStore.profile.lastname}`}
            </p>
            <p>เพศ : {userStore.profile.gender}</p>
            <p>เบอร์โทร : {userStore.profile.tel}</p>
            <p>อีเมล : {userStore.profile.email}</p>
            <p>ระดับชั้นที่ปรึกษา : {userStore.profile.gender}</p>
            <p>ปีการศึกษา : {userStore.profile.gender}</p>
            <BtnEdit onClick={() => history.push("/profile/edit")}>
              แก้ไขข้อมูลส่วนตัว
            </BtnEdit>
          </Content>
        </Container>
      )}
    </MainLayout>
  );
};

export default ProfilePage;
