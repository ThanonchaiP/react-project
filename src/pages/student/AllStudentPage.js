import React from "react";
import axios from "axios";
import MainLayout from "../../layouts/MainLayout";
import { Header, TextHeader } from "../../style/header/Header";
import { SearchBtn } from "../../style/button/Button";
import { InputSearch } from "../../style/input/Input";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import {
  Container,
  SearchForm,
  SearchLabel,
  Content,
  Card,
  ImgProfile,
  Title,
  Detail,
  Status,
  Paging,
} from "./AllStudentPage.element";

//pagination
const pageSize = 15;
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const AllStudentPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const classes = useStyles();
  
  //state
  const [student, setStudent] = React.useState([]);
  const cancelToken = React.useRef(null);
  const history = useHistory();

  //pagination
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState();

  //function
  const getStudent = async (page) => {
    const resp = await axios.get(
      `http://localhost:3200/student?page=${page}&page_size=${pageSize}`,
      {
        cancelToken: cancelToken.current.token,
      }
    );
    setStudent(resp.data.data.students);
    setPage(resp.data.data.page);
    setTotalPage(resp.data.data.totalPages);
  };

  const checkColorStatus = (status) => {
    let color;
    if (status === "กำลังศึกษา") color = "green";
    else if (status === "พักการเรียน") color = "#2B65EC";
    else color = "deeppink";

    return color;
  };

  const getDate = (date) => {
    //format date string เป็น date ของ javascript
    const newDate = new Date(date);

    return `${format(newDate, "dd MMMM", {
      locale: th,
    })} ${parseInt(newDate.getFullYear()) + 543}`;
  };

  const handleSearch = async (data) => {
    if (data.id === "" && data.firstname === "" && data.lastname === "") {
      getStudent();
    } else {
      const resp = await axios.post("http://localhost:3200/student/search", {
        id: data.id !== "" ? data.id : undefined,
        firstname: data.firstname !== "" ? data.firstname : undefined,
        lastname: data.lastname !== "" ? data.lastname : undefined,
      });
      setStudent(resp.data.data);
    }
  };

  const handlePageChange = (event,page) => {
    setPage(page)
  };

  React.useEffect(() => {
    //เก็บค่า TokenAxios
    cancelToken.current = axios.CancelToken.source();

    getStudent(page);

    //cancel request
    return () => {
      cancelToken.current.cancel();
    };
  }, [page]);

  return (
    <MainLayout>
      <Header img="https://images.unsplash.com/photo-1616802099190-5a4485319df6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80">
        <TextHeader>ข้อมูลนักเรียนรายบุคคล</TextHeader>
      </Header>
      <Container>
        <SearchForm className="mt-2" onSubmit={handleSubmit(handleSearch)}>
          <SearchLabel>รหัสประจำตัว</SearchLabel>
          <InputSearch
            type="text"
            placeholder="กรอกรหัสประจำตัว"
            {...register("id")}
          />
          <SearchLabel>ชื่อ</SearchLabel>
          <InputSearch
            type="text"
            placeholder="กรอกชื่อ"
            {...register("firstname")}
          />
          <SearchLabel>นามสกุล</SearchLabel>
          <InputSearch
            type="text"
            placeholder="กรอกนามสกุล"
            {...register("lastname")}
          />
          <SearchBtn type="submit">ค้นหา</SearchBtn>
        </SearchForm>

        <Content>
          {student.length > 0 ? (
            student.map((s, index) => {
              return (
                <Card
                  key={s._id}
                  onClick={() => history.push(`/student/profile/${s._id}`)}
                >
                  <ImgProfile src={s.photo} />
                  <Title>{s.sid}</Title>
                  <Title>{`${s.name_title}${s.firstname} ${s.lastname}`}</Title>
                  <Detail>วัน/เดือน/ปีเกิด : {getDate(s.brithday)}</Detail>
                  <Detail>ระดับชั้น : {s.level_of_education}</Detail>
                  <Detail>เพศ : {s.gender}</Detail>
                  <Status colorStatus={checkColorStatus(s.education_status)}>
                    {s.education_status}
                  </Status>
                </Card>
              );
            })
          ) : (
            <>
              <h1 className="mx-auto">ไม่พบข้อมูลนักเรียน</h1>
            </>
          )}
        </Content>
        <Paging>
          <Pagination
            className={classes.root}
            defaultValue={page}
            count={totalPage}
            color="secondary"
            onChange={handlePageChange}
          />
        </Paging>
      </Container>
    </MainLayout>
  );
};

export default AllStudentPage;
