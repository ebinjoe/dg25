import "./App.css";
import Landing from "./pages/landingPage/Landing";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/loginPage/Login";
import Navbar from "./pages/landingPage/components/navbar";
import AdminLogin from "./pages/loginPage/components/adminLogin";
import StudentLogin from "./pages/loginPage/components/StudentLogin";
import UserLogin from "./pages/loginPage/components/userLogin";
import LogoutNavbar from "./pages/loginPage/components/LogoutNavbar";
import UserLoginPage from "./pages/loginPage/LoginTabs/userLoginPage";
import UserSignUpPage from "./pages/loginPage/LoginTabs/userSignUpPage";
import ReviewLoginPage from "./pages/loginPage/LoginTabs/StudentLoginPage";
import AdminLoginPage from "./pages/loginPage/LoginTabs/AdminLoginPage";
import About from "./pages/about/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/author/login" element={<UserLoginPage />} />
            <Route exact path="/author/register" element={<UserSignUpPage />} />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/committee/login"
              element={<ReviewLoginPage />}
            />
            <Route exact path="/admin/login" element={<AdminLoginPage />} />
          </Route>
          <Route element={<LogoutNavbar />}>
            <Route exact path="/adminLogin" element={<AdminLogin />} />
            <Route exact path="/StudentLogin" element={<StudentLogin />} />
            <Route exact path="/UserLogin" element={<UserLogin />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
