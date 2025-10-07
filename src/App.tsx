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
import Contactus from "./pages/Contactus";
import Upcoming from "./pages/Upcoming";

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
            element={<Aboutus title="About Us" onNavigate={handleNavigate} />}
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
          <Route
            path="/contact"
            element={<Contactus title="Contact Us" onNavigate={handleNavigate} />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
