import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1> } />
        <Route path="/add" element={<h1>AddProduct</h1>} />
        <Route path="/update" element={<h1>UpdateProduct</h1> } />
        <Route path="/logout" element={<h1>Logout</h1> } />
        <Route path="/profile" element={<h1>Profile</h1> } />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
