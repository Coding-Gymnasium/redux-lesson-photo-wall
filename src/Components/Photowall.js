import PropTypes from "prop-types";
import React from "react";
import Photo from "./Photo.js";

function PhotoWall(props) {
  return (
    <>
      <a onClick={props.onNavigate} href="#AddPhoto">
        <div className="addIcon">
          <div className="cross-vertical">
            <div className="cross-horizontal"></div>
          </div>
        </div>
      </a>

      <div className="photoGrid">
        {props.posts.map((post, index) => {
          return (
            <Photo
              key={index}
              post={post}
              onRemovePhoto={props.onRemovePhoto}
            />
          );
        })}
      </div>
    </>
  );
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default PhotoWall;
