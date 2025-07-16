import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Routes, Route, Navigate } from 'react-router-dom';
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

function App() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const [darkMode, setDarkMode] = useState(true);
  // Pages that should NOT show header/footer
  const noHeaderFooter = ["/login", "/signup", "/forgot-password"];
  const currentPath = window.location.pathname;
  const showHeaderFooter = !noHeaderFooter.includes(currentPath);
  return (
    <div className={darkMode ? "dark" : ""}>
      {showHeaderFooter && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />
          }
        />
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
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cloud-integration" element={<CloudIntegration />} />
        <Route path="/specialized-industry-apps" element={<SpecializedIndustryApps />} />
        <Route path="/enhanced-hci" element={<EnhancedHci />} />
        <Route path="/personalized-experiences" element={<PersonalizedExperiences />} />
        <Route path="/automation-efficiency" element={<AutomationEfficiency />} />
        <Route path="/data-analysis-insights" element={<DataAnalysisInsights />} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
