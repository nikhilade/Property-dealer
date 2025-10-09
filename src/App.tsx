import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import Propertylistings from "./pages/Propertypage";
import BookingForm from "./components/section/PropertySection/BookProperty";
import Contactus from "./pages/ContactPage";
import Upcoming from "./pages/Upcoming";
import PropertyDetail from "./components/section/PropertySection/PropertyDetail";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const [activePage, setActivePage] = useState("home");
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    setActivePage(page);
    navigate(page === "home" ? "/" : `/${page}`);
  };

  return (
    <>
      <Navbar onNavigate={handleNavigate} activePage={activePage} />
      <div>
        <Routes>
          <Route
            path="/"
            element={<Homepage title="Home" onNavigate={handleNavigate} />}
          />
          <Route
            path="/about"
            element={<Aboutus />}
          />
          <Route
            path="/upcoming"
            element={<Upcoming/>}
          />
          <Route
            path="/properties"
            element={
              <Propertylistings/>
            }
          />
          <Route
            path="/book-property/:id"
            element={<BookingForm />}
          />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route
            path="/contact"
            element={<Contactus/>}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
