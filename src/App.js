import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserStoreProvider from "./context/UserContext";
import PrivateRoute from "./guard/auth";
import { ToastProvider } from "react-toast-notifications";

import LoginPage from "./pages/login/LoginPage";
import StudentPage from "./pages/student/StudentPage";
import ClassroomPage from "./pages/classroom/ClassroomPage";
import AllStudentPage from "./pages/student/AllStudentPage";
import ProfilePage from "./pages/student/ProfilePage";
import TeacherProfilePage from "./pages/teacher/ProfilePage";
import EducationPage from "./pages/student/EducationPage";
import EditProfilePage from "./pages/teacher/EditProfilePage";

function App() {
  return (
    <ToastProvider autoDismiss autoDismissTimeout={3000} placement="top-center">
      <UserStoreProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/" exact>
              <StudentPage />
            </PrivateRoute>
            <Route
              path="/classroom"
              render={({ match: { url } }) => (
                <>
                  <PrivateRoute path={`${url}/`} exact>
                    <StudentPage />
                  </PrivateRoute>
                  <PrivateRoute path={`${url}/:id`}>
                    <ClassroomPage />
                  </PrivateRoute>
                </>
              )}
            ></Route>
            <Route
              path="/student"
              render={({ match: { url } }) => (
                <>
                  <PrivateRoute path={`${url}/`} exact>
                    <AllStudentPage />
                  </PrivateRoute>
                  <PrivateRoute path={`${url}/profile/:id`}>
                    <ProfilePage />
                  </PrivateRoute>
                  <PrivateRoute path={`${url}/education/:id`}>
                    <EducationPage />
                  </PrivateRoute>
                </>
              )}
            ></Route>
            <Route
              path="/profile"
              render={({ match: { url } }) => (
                <>
                  <PrivateRoute path={`${url}/`} exact>
                    <TeacherProfilePage />
                  </PrivateRoute>
                  <PrivateRoute path={`${url}/edit`}>
                    <EditProfilePage />
                  </PrivateRoute>
                </>
              )}
            ></Route>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </Router>
      </UserStoreProvider>
    </ToastProvider>
  );
}

export default App;
