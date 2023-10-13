import React, { Component } from "react";
import Photowall from "./Photowall.js";
import Title from "./Title";
import { removePost } from "../redux/actions.js";

class Main extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.removePost(1);
  }

  render() {
    return (
      <div>
        <Title title={"Photowall"} />
        <Photowall {...this.props} />
      </div>
    );
  }
}
export default Main;
