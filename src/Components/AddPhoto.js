import React, { Component } from "react";
import { Link } from "react-router-dom";
const linkStyle = {
  "text-decoration": "none",
}
class AddPhoto extends Component {
  render() {
    return (
      <>
        <Link to="/" style={linkStyle}>
          <h1>Photowall</h1>
        </Link>
        <div className="form">
          <form>
            <input type="text" placeholder="Link" />
            <input type="text" placeholder="Description" />
            <button>Post</button>
          </form>
        </div>
      </>
    );
  }
}

export default AddPhoto;
