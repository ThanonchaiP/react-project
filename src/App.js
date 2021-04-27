import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserStoreProvider from "./context/UserContext";
import { ToastProvider } from "react-toast-notifications";

import LoginPage from "./pages/login/LoginPage";
import Navbar from "./components/navbar/Navbar";
import StudentPage from "./pages/student/StudentPage";

function App() {
  return (
    <ToastProvider autoDismiss autoDismissTimeout={3000} placement="top-center">
      <UserStoreProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <StudentPage />
            </Route>
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
