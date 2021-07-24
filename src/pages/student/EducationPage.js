import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { useParams, useHistory } from "react-router-dom";
import { Header, TextHeader, Tables, Container } from "./EducationPage.element";
import axios from "axios";

const EducationPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [education, setEducation] = React.useState([]);
  const [fullname, setFullname] = React.useState(null);

  const getEducation = async () => {
    const resp = await axios.get(
      `http://localhost:3200/student/education/${id}`
    );
    setEducation(resp.data.data);
    setFullname(
      `${resp.data.student.name_title}${resp.data.student.firstname} ${resp.data.student.lastname}`
    );
  };

  React.useEffect(() => {
    getEducation();
  }, []);

  return (
    <MainLayout>
      <Header img="https://images.unsplash.com/photo-1620608964186-18a8cfc2ad44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
        <TextHeader>ประวัติการศึกษา</TextHeader>
        {fullname && <p>ชื่อ-นามสกุล : {fullname}</p>}
      </Header>
      <Container>
        <Tables striped bordered hover>
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ระดับชั้น</th>
              <th>เทอม</th>
              <th>ปีการศึกษา</th>
            </tr>
          </thead>
          <tbody>
            {education.length > 0 &&
              education.map((e, index) => {
                return (
                  <tr
                    key={e.Advisor._id}
                    onClick={() => history.push(`/classroom/${e.Advisor._id}`)}
                  >
                    <td className="bg-danger text-light">{index + 1}</td>
                    <td>
                      {e.Classroom.class}/{e.Classroom.room}
                    </td>
                    <td>{e.Advisor.term}</td>
                    <td>{e.Advisor.academic_year}</td>
                  </tr>
                );
              })}
          </tbody>
        </Tables>
      </Container>
    </MainLayout>
  );
};

export default EducationPage;
