import React from "react";
import { Header, TextHeader } from "../../style/header/Header";
import { ContentTitle, Text, ContentContainer,Table } from "./StudentPage.elements";
import { Dropdown } from "react-bootstrap";

const StudentPage = () => {
  return (
    <>
      <Header img="red">
        <TextHeader>ข้อมูลนักเรียน</TextHeader>
      </Header>
      <ContentContainer>
        <ContentTitle>
          <Text>ปีการศึกษา : </Text>
          <Dropdown className="ml-2">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              ปีการศึกษา
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ContentTitle>
        <Text className="text-left mt-2 mb-2">ปีการศึกษา : </Text>
        <Table className="table table-striped hover">
          <thead>
            <tr className="bg-dark text-light border-0">
              <th>ระดับชั้น</th>
              <th>Last Name</th>
              <th>เทอม</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </ContentContainer>
    </>
  );
};

export default StudentPage;
