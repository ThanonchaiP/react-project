import React from "react";
import { Header, TextHeader } from "../../style/header/Header";
import {
  ContentTitle,
  Text,
  ContentContainer,
  CardContainer,
  Card,
  CardHeader,
  CardContent,
  DropdownYear,
} from "./StudentPage.elements";

import { TermButton } from "../../style/button/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

const StudentPage = () => {
  //state && hook
  const [year, setYear] = React.useState([]);
  const [classroom, setClassroom] = React.useState([]);
  const [thisYear, setThisYear] = React.useState(null);
  const cancelToken = React.useRef(null);
  const history = useHistory();

  //function
  const getAllYear = async () => {
    const resp = await axios.get("http://localhost:3200/advisor/year", {
      cancelToken: cancelToken.current.token,
    });
    setYear(resp.data.data);
    getClassroomWithYear(resp.data.data[0]? resp.data.data[0]._id : null);
  };

  const getClassroomWithYear = async (year) => {
    const resp = await axios.get(`http://localhost:3200/advisor/year/${year}`, {
      cancelToken: cancelToken.current.token,
    });
    setThisYear(year);
    setClassroom(resp.data.data);
  };

  const selectYear = (year) => {
    getClassroomWithYear(year);
  };

  const getAdvisorByTerm = async (dataObject) => {
    const resp = await axios.post("http://localhost:3200/advisor/term", {
      year: thisYear,
      term: dataObject.term,
      classroom_id: dataObject.classroomId,
    });
    history.push(`/classroom/${resp.data.data[0]._id}`);
  };

  React.useEffect(() => {
    //เก็บค่า TokenAxios
    cancelToken.current = axios.CancelToken.source();
    getAllYear();

    //cancel request
    return () => {
      cancelToken.current.cancel();
    };
  }, []);

  return (
    <MainLayout>
      <Header img="https://images.unsplash.com/photo-1551029506-0807df4e2031?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80">
        <TextHeader>ข้อมูลนักเรียน</TextHeader>
      </Header>
      <ContentContainer>
        <ContentTitle>
          <Text>ปีการศึกษา : </Text>
          <DropdownYear className="ml-2">
            <DropdownYear.Toggle variant="success" id="dropdown-basic">
              {thisYear}
            </DropdownYear.Toggle>
            <DropdownYear.Menu>
              {year.length > 0 &&
                year.map((year, index) => {
                  return (
                    <DropdownYear.Item
                      id="menu"
                      key={index}
                      onClick={() => selectYear(year._id)}
                    >
                      {year._id}
                    </DropdownYear.Item>
                  );
                })}
            </DropdownYear.Menu>
          </DropdownYear>
        </ContentTitle>
        <Text className="text-left mt-2 mb-2 ml-2">
          ปีการศึกษา : {thisYear}
        </Text>
        <CardContainer>
          {classroom.length > 0 &&
            classroom.map((c, index) => {
              return (
                <Card key={c._id}>
                  <CardHeader>
                    <h3>
                      {c.Classroom[0].class}/{c.Classroom[0].room}
                    </h3>
                    <p>
                      ครูประจำชั้น : {c.Teacher[0].firstname}{" "}
                      {c.Teacher[0].lastname}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <TermButton
                      onClick={() => {
                        // history.push(`/classroom/${c._id}`);
                        history.push({
                          pathname: `/classroom/${c._id}`,
                          state: [{ id: 1, name: "Ford", color: "red" }],
                        });
                      }}
                    >
                      เทอม 1
                    </TermButton>
                    <TermButton
                      onClick={() => {
                        getAdvisorByTerm({
                          classroomId: c.Classroom[0]._id,
                          term: 2,
                        });
                      }}
                    >
                      เทอม 2
                    </TermButton>
                  </CardContent>
                </Card>
              );
            })}
        </CardContainer>
      </ContentContainer>
    </MainLayout>
  );
};

export default StudentPage;
