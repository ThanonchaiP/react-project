import React from "react";
import axios from "axios";
import { Header, TextHeader } from "../../style/header/Header";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { useParams,useHistory } from "react-router-dom";


import {
  Container,
  Content,
  Card,
  ImgProfile,
  Detail,
  Title,
  TitleHeader,
} from "./ClassroomPage.element";
import MainLayout from "../../layouts/MainLayout";

const ClassroomPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const cancelToken = React.useRef(null);
  const [student, setStudent] = React.useState([]);
  const [teacher, setTeacher] = React.useState();
  const [classroom, setClassroom] = React.useState();

  const getStudent = async () => {
    const resp = await axios.get(`http://localhost:3200/classroom/${id}`, {
      cancelToken: cancelToken.current.token,
    });

    let detail = resp.data.detail;
    setStudent(resp.data.data);
    setTeacher(
      `${detail.teacher.name_title} ${detail.teacher.firstname} ${detail.teacher.lastname}`
    );
    setClassroom(detail.classroom.class);
  };

  const getDate = (date) => {
    //format date string เป็น date ของ javascript
    const newDate = new Date(date);

    return `${format(newDate, "dd MMMM", {
      locale: th,
    })} ${parseInt(newDate.getFullYear()) + 543}`;
  };

  React.useEffect(() => {
    //เก็บค่า TokenAxios
    cancelToken.current = axios.CancelToken.source();

    getStudent();

    //cancel request
    return () => {
      cancelToken.current.cancel();
    };
  }, []);

  return (
    <MainLayout>
      <Header img="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80">
        <TextHeader>ข้อมูลนักเรียน</TextHeader>
      </Header>
      <Container>
        <TitleHeader>
          <p>ระดับชั้น: ประถมศึกษาปีที่ 1/1 เทอม: 1 ปีการศึกษา: 2564</p>
          <p>ครูประจำชั้น : {teacher}</p>
        </TitleHeader>
        <Content>
          <Content>
            {student.length > 0 &&
              student.map((s, index) => {
                return (
                  <Card key={s.Student._id} onClick={()=>history.push(`/student/profile/${s.Student._id}`)}>
                    <ImgProfile src={s.Student.photo} />
                    <Title>{s.Student.sid}</Title>
                    <Title>{`${s.Student.name_title}${s.Student.firstname} ${s.Student.lastname}`}</Title>
                    <Detail>เพศ : {s.Student.gender}</Detail>
                    <Detail>
                      วัน/เดือน/ปีเกิด : {getDate(s.Student.brithday)}
                    </Detail>
                    <Detail>ระดับชั้นที่กำลังศึกษา : {s.Student.level_of_education}</Detail>
                    <Detail>กลุ่มอาหารที่แพ้ : ไม่มี</Detail>
                  </Card>
                );
              })}
          </Content>
        </Content>
      </Container>
    </MainLayout>
  );
};

export default ClassroomPage;
