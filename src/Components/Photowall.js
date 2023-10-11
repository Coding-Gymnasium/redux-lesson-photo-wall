import React from "react";
import Photo from "./Photo.js";

function PhotoWall(props) {
  return (
    <div className="photoGrid">
      {props.posts.map((post, index) => {
        return <Photo key={index} post={post} />;
      })}
    </div>
  );
}

export default PhotoWall;
