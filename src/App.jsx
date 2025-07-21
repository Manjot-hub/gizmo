import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import HomePage from './HomePage.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import SecondHome from './pages/SecondHome.jsx';
import AboutUs from "./pages/AboutUs.jsx";
import CloudIntegration from "./services/CloudIntegration.jsx";
import SpecializedIndustryApps from "./services/SpecializedIndustryApps.jsx";
import EnhancedHci from "./services/EnhancedHci.jsx";
import PersonalizedExperiences from "./services/PersonalizedExperiences.jsx";
import AutomationEfficiency from "./services/AutomationEfficiency.jsx";
import DataAnalysisInsights from "./services/DataAnalysisInsights.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

function App() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  // Paths where Header and Footer should NOT be shown
  const noHeaderFooter = ["/login", "/signup", "/forgot-password", "/", "/home"];
  const showHeaderFooter = !noHeaderFooter.includes(location.pathname);

  return (
    <div>
      {showHeaderFooter && <Header darkMode={darkMode} setDarkMode={setDarkMode} />}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route
          path="/second-home"
          element={
            isLoggedIn ? <SecondHome darkMode={darkMode} setDarkMode={setDarkMode} /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/contact" element={<ContactPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/blog" element={<BlogPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/about-us" element={<AboutUs darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/cloud-integration" element={<CloudIntegration darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/specialized-industry-apps" element={<SpecializedIndustryApps darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/enhanced-hci" element={<EnhancedHci darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/personalized-experiences" element={<PersonalizedExperiences darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/automation-efficiency" element={<AutomationEfficiency darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/data-analysis-insights" element={<DataAnalysisInsights darkMode={darkMode} setDarkMode={setDarkMode} />} />
      </Routes>
      <Footer />
      {/* {showHeaderFooter && } */}
    </div>
  );
}

export default App;
