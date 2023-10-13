import ReactDOM from "react-dom/client";
import "./styles/stylesheet.css";
import Main from "./Components/Main";
import AddPhoto from "./Components/AddPhoto.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./redux/reducer.js";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/add-photo" element={<AddPhoto />} />
    </Routes>
  </Router>,
);
