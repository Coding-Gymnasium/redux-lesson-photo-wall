import "./styles/stylesheet.css";
import ReactDOM from "react-dom/client";
import App from "./Components/App.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducer.js";
import AddPhoto from "./Components/AddPhoto.js";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add-photo" element={<AddPhoto />} />
      </Routes>
    </Router>
  </Provider>,
);
