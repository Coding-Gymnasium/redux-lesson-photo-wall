import React, { Component } from "react";
import Photowall from "./Photowall.js";
import Title from "./Title";

class Main extends Component {
  render() {
    return (
      <div>
        <Title title={"Photowall"} />
         <Photowall posts={this.props.posts} />
      </div>
    );
  }
}
export default Main;
