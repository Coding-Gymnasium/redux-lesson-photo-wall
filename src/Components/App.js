import Main from "./Main.js";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    posts: state,
  };
}

const App = connect(mapStateToProps)(Main);

export default App;
