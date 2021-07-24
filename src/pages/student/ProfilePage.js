import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Header, TextHeader } from "../../style/header/Header";
import {
  Container,
  Img,
  Content,
  ImgContainer,
  ButtonContent,
} from "./ProfilePage.element";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import { th } from "date-fns/locale";

const ProfilePage = () => {
  //state && hook
  const { id } = useParams();
  const [profile, setProfile] = React.useState([]);
  const history = useHistory();

  //function
  const getProfile = async () => {
    const resp = await axios.get(`http://localhost:3200/student/${id}`);
    setProfile(resp.data.data);
  };

  const getDate = (date) => {
    //format date string เป็น date ของ javascript
    const newDate = new Date(date);

    return `${format(newDate, "dd MMMM", {
      locale: th,
    })} ${parseInt(newDate.getFullYear()) + 543}`;
  };

  React.useEffect(() => {
    getProfile();
  }, []);

  return (
    <MainLayout>
      <Header img="https://images.unsplash.com/photo-1620608964186-18a8cfc2ad44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
        <TextHeader>ข้อมูลนักเรียน</TextHeader>
      </Header>
      <Container>
        <ImgContainer>
          <Img
            src={
              profile.photo
                ? profile.photo
                : "https://www.w3schools.com/howto/img_avatar.png"
            }
          />
        </ImgContainer>
        <Content>
          <p>รหัสประจำตัว : {profile.sid}</p>
          <p>
            ชื่อ-นามสกุล :
            {` ${profile.name_title}${profile.firstname} ${profile.lastname}`}
          </p>
          <p>เพศ : {profile.gender}</p>
          <p>
            วัน/เดือน/ปีเกิด : {profile.brithday && getDate(profile.brithday)}
          </p>
          <p>ระดับชั้นที่เข้าศึกษา : {profile.level_of_admission}</p>
          <p>ระดับชั้นที่กำลังศึกษา : {profile.level_of_education}</p>
          <p>ปีการศึกษา : {profile.academic_year}</p>
          <p>กลุ่มอาหารที่เเพ้ : </p>
          <p>สถานะทางการศึกษา : {profile.education_status}</p>
          <ButtonContent
            onClick={() => history.push(`/student/education/${profile._id}`)}
          >
            ประวัติการศึกษา
          </ButtonContent>
          <ButtonContent>แก้ไขข้อมูลนักเรียน</ButtonContent>
        </Content>
      </Container>
    </MainLayout>
  );
};

export default ProfilePage;
