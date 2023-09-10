import "./App.css";
import Landing from "./pages/landingPage/Landing";

import Login from "./pages/loginPage/Login";
import Navbar from "./pages/landingPage/components/navbar";
import UserLoginPage from "./pages/loginPage/LoginTabs/userLoginPage";
import UserSignUpPage from "./pages/loginPage/LoginTabs/userSignUpPage";
import ReviewLoginPage from "./pages/loginPage/LoginTabs/ReviewLoginPage";
import ReviewerSignUpPage from "./pages/loginPage/LoginTabs/ReviewerSignUpPage";
import AdminLoginPage from "./pages/loginPage/LoginTabs/AdminLoginPage";
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
            <Route
              exact
              path="/committee/login"
              element={<ReviewLoginPage />}
            />
            <Route
              exact
              path="/committee/register"
              element={<ReviewerSignUpPage />}
            />
            <Route exact path="/admin/login" element={<AdminLoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
