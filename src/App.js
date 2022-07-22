import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AddBooking from "./components/AddBooking";
import Layout from "./components/Layout";
import Home from "./components/Home";
import CheckRoom from "./components/CheckRoom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-booking" element={<AddBooking />} />
          <Route path="/check-room" element={<CheckRoom />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
