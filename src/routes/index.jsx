import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import HomePage from "views/HomePage/HomePage.jsx";
import TestPage from "views/TestPage/TestPage.jsx";

var indexRoutes = [
  { path: "/", name: "Login", component: LoginPage },
  { path: "/landing", name: "LandingPage", component: LandingPage },
  { path: "/home", name: "HomePage", component: HomePage },
  { path: "/profile", name: "ProfilePage", component: ProfilePage },
  // { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/test", name: "TestPage", component: TestPage }
];

export default indexRoutes;
